import { ref } from 'vue'

export interface DialecticReport {
  id: number
  title: string
  date: string
  content: string
  inputs: Array<{
    value: string
    level: string
    note: string
    view1: string
    view2: string
  }>
}

const STORAGE_KEY = 'dialectic_report_history'
const MAX_REPORTS = 50

export function useDialecticHistory() {
  function loadReports(): DialecticReport[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  }

  function saveReports(reports: DialecticReport[]) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reports))
    } catch (e) {
      console.warn('[DialecticHistory] save failed', e)
    }
  }

  function addReport(report: Omit<DialecticReport, 'id' | 'date'>): DialecticReport {
    const reports = loadReports()
    const newReport: DialecticReport = {
      ...report,
      id: Date.now(),
      date: new Date().toLocaleString('zh-CN'),
    }
    reports.unshift(newReport)
    if (reports.length > MAX_REPORTS) {
      reports.length = MAX_REPORTS
    }
    saveReports(reports)
    return newReport
  }

  function findReport(id: string | number): DialecticReport | undefined {
    const reports = loadReports()
    return reports.find(r => String(r.id) === String(id))
  }

  function deleteReport(id: string | number) {
    const reports = loadReports()
    saveReports(reports.filter(r => String(r.id) !== String(id)))
  }

  function clearAllReports() {
    saveReports([])
  }

  return {
    loadReports,
    addReport,
    findReport,
    deleteReport,
    clearAllReports,
  }
}
