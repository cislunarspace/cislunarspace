/**
 * Tests for GlossaryCategoryRegistry.
 * Run with: vitest run glossary-categories.test.ts
 */
import { describe, it, expect } from 'vitest'
import { GlossaryCategoryRegistry, categoryRegistry } from './glossary-categories.js'

describe('GlossaryCategoryRegistry', () => {
  describe('getBySlug', () => {
    it('returns category for valid slug', () => {
      const category = categoryRegistry.getBySlug('fundamentals')
      expect(category).toBeDefined()
      expect(category!.slug).toBe('fundamentals')
      expect(category!.label.zh).toBe('基础概念')
      expect(category!.label.en).toBe('Fundamentals')
    })

    it('returns undefined for unknown slug', () => {
      const category = categoryRegistry.getBySlug('nonexistent')
      expect(category).toBeUndefined()
    })
  })

  describe('getByLabel', () => {
    it('returns category for valid Chinese label', () => {
      const category = categoryRegistry.getByLabel('基础概念', 'zh')
      expect(category).toBeDefined()
      expect(category!.slug).toBe('fundamentals')
    })

    it('returns category for valid English label', () => {
      const category = categoryRegistry.getByLabel('Fundamentals', 'en')
      expect(category).toBeDefined()
      expect(category!.slug).toBe('fundamentals')
    })

    it('returns undefined for unknown label', () => {
      const category = categoryRegistry.getByLabel('Unknown Category', 'en')
      expect(category).toBeUndefined()
    })
  })

  describe('data integrity', () => {
    it('contains all original glossaryCategories', () => {
      const slugs = ['fundamentals', 'dynamics', 'orbits', 'navigation', 'observation', 'doctrine', 'organizations', 'other-tech']
      for (const slug of slugs) {
        expect(categoryRegistry.getBySlug(slug)).toBeDefined()
      }
    })

    it('has correct order values', () => {
      const category = categoryRegistry.getBySlug('fundamentals')
      // 20010 is the segment base (glossary 20 000) + sibling offset 10
      expect(category!.order).toBe(20010)
    })
  })
})

describe('GlossaryCategoryRegistry constructor', () => {
  it('can be instantiated with custom data', () => {
    const customData = [
      { slug: 'test', label: { zh: '测试', en: 'Test' }, order: 99 },
    ]
    const customRegistry = new GlossaryCategoryRegistry(customData)
    expect(customRegistry.getBySlug('test')?.label.zh).toBe('测试')
    expect(customRegistry.getBySlug('test')?.label.en).toBe('Test')
  })
})
