import fs from 'fs'
import path from 'path'
import Cite from 'citation-js'
import '@citation-js/plugin-bibtex'
import type { MarkdownFile } from '../utils/markdown-walker.ts'

export interface BibliographyEntry {
  number: number
  formatted: string
}

export interface BibliographyData {
  entries: Record<string, BibliographyEntry>
  citedBy: Record<string, string[]>
}

const CITE_REGEX = /\\cite\{([a-zA-Z0-9-,]+)\}/g

function extractCitedKeys(files: MarkdownFile[]): Set<string> {
  const keys = new Set<string>()
  for (const file of files) {
    for (const match of file.content.matchAll(CITE_REGEX)) {
      for (const key of match[1].split(',')) {
        keys.add(key.trim())
      }
    }
  }
  return keys
}

function getAuthorSurname(entry: any): string {
  const authors = entry.author || []
  if (authors.length === 0) return ''
  return (authors[0].family || authors[0].literal || '').toLowerCase()
}

function formatAuthor(author: any): string {
  const family = author.family || ''
  const given = author.given || ''
  // Extract initials from given name: "David A." → "DA"
  const initials = given
    .split(/[\s.]+/)
    .filter((s: string) => s.length > 0)
    .map((s: string) => s[0].toUpperCase())
    .join('')
  return initials ? `${family} ${initials}` : family
}

function getDocTypeCode(type: string): string {
  const map: Record<string, string> = {
    book: 'M',
    'article-journal': 'J',
    'article-magazine': 'J',
    'paper-conference': 'C',
    thesis: 'D',
    report: 'R',
    webpage: 'EB',
    patent: 'P',
  }
  return map[type] || 'M'
}

function formatEntryGb7714(entry: any): string {
  const authors = (entry.author || [])
    .map(formatAuthor)
    .join(', ')

  const title = entry.title || ''
  const typeCode = getDocTypeCode(entry.type)
  const year = entry.issued?.['date-parts']?.[0]?.[0] || entry.year || ''
  const publisher = entry.publisher || ''
  const journal = entry['container-title'] || ''
  const volume = entry.volume || ''
  const issue = entry.issue || ''
  let page = entry.page || ''
  // Normalize page range: "1-11" or "1--11" → "1-11"
  if (page) {
    page = page.replace(/--/g, '-')
  }

  let result = `${authors}. ${title}[${typeCode}]`

  if (journal) {
    result += `. ${journal}`
    if (volume) result += `, ${volume}`
    if (issue) result += `(${issue})`
    if (page) result += `: ${page}`
  }

  if (publisher) {
    result += `. ${publisher}`
  }

  if (year) {
    result += `, ${year}`
  }

  result += '.'
  return result
}

function parseBibEntries(bibContent: string): any[] {
  // Split into individual entries by @ delimiter, keeping the delimiter
  const rawEntries = bibContent.split(/(?=^@)/m).filter(s => s.trim().startsWith('@'))

  const parsed: any[] = []
  for (const raw of rawEntries) {
    try {
      const cite = new Cite(raw)
      parsed.push(...cite.data)
    } catch (e: any) {
      // Extract key from @type{key, ...} for logging
      const keyMatch = raw.match(/^@\w+\{([^,]+)/)
      const key = keyMatch ? keyMatch[1].trim() : 'unknown'
      console.warn(`[bibliography] Skipping entry "${key}": ${e.message?.substring(0, 80)}`)
    }
  }
  return parsed
}

export function generateBibliographyArtifacts(
  files: MarkdownFile[],
  webRoot: string,
  outDir: string,
): BibliographyData {
  const bibPath = path.join(webRoot, 'ref.bib')
  if (!fs.existsSync(bibPath)) {
    throw new Error(`BibTeX file not found: ${bibPath}`)
  }

  const bibContent = fs.readFileSync(bibPath, 'utf-8')
  const allEntries = parseBibEntries(bibContent)
  const citedKeys = extractCitedKeys(files)

  // Filter to only cited entries
  const citedEntries = allEntries.filter((item: any) => citedKeys.has(item.id))

  // Sort by author surname alphabetically
  citedEntries.sort((a: any, b: any) => {
    const surnameA = getAuthorSurname(a)
    const surnameB = getAuthorSurname(b)
    return surnameA.localeCompare(surnameB)
  })

  // Build output
  const entries: Record<string, BibliographyEntry> = {}
  const citedBy: Record<string, string[]> = {}

  citedEntries.forEach((item: any, index: number) => {
    entries[item.id] = {
      number: index + 1,
      formatted: formatEntryGb7714(item),
    }
    citedBy[item.id] = []
  })

  // Build citedBy mapping
  for (const file of files) {
    for (const match of file.content.matchAll(CITE_REGEX)) {
      for (const key of match[1].split(',')) {
        const trimmed = key.trim()
        if (entries[trimmed]) {
          citedBy[trimmed].push(file.relPath)
        }
      }
    }
  }

  // Warn about unmatched citations
  for (const key of citedKeys) {
    if (!entries[key]) {
      console.warn(`[bibliography] Unmatched citation key: ${key}`)
    }
  }

  const data: BibliographyData = { entries, citedBy }

  // Write output
  const publicDir = path.join(outDir, 'public')
  fs.mkdirSync(publicDir, { recursive: true })
  fs.writeFileSync(
    path.join(publicDir, 'bibliography.json'),
    JSON.stringify(data, null, 2),
  )
  console.log('Generated bibliography.json')

  return data
}
