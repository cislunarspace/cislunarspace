import { describe, it, expect } from 'vitest'
import {
  beginStep,
  completeRunningSteps,
  completeStep,
  finalizeSteps,
} from './chat-process-steps'
import type { ProcessStep, ProcessStepKey } from './chat-types'

const labelFor = (key: ProcessStepKey): string => `label:${key}`

describe('chat-process-steps', () => {
  describe('beginStep', () => {
    it('appends a running step with the resolved label and empty detail by default', () => {
      const next = beginStep([], 'stepNav', labelFor)

      expect(next).toEqual([{ label: 'label:stepNav', status: 'running', detail: '' }])
    })

    it('closes out a prior running step before starting a new one', () => {
      const start: ProcessStep[] = [{ label: 'label:stepNav', status: 'running', detail: '' }]

      const next = beginStep(start, 'stepExcerpt', labelFor)

      expect(next).toEqual([
        { label: 'label:stepNav', status: 'done', detail: '' },
        { label: 'label:stepExcerpt', status: 'running', detail: '' },
      ])
    })

    it('preserves already-done steps untouched', () => {
      const start: ProcessStep[] = [{ label: 'label:stepNav', status: 'done', detail: 'paths' }]

      const next = beginStep(start, 'stepExcerpt', labelFor, '5 excerpts')

      expect(next).toEqual([
        { label: 'label:stepNav', status: 'done', detail: 'paths' },
        { label: 'label:stepExcerpt', status: 'running', detail: '5 excerpts' },
      ])
    })

    it('does not mutate the input array', () => {
      const start: ProcessStep[] = [{ label: 'label:stepNav', status: 'running', detail: '' }]
      const snapshot = JSON.parse(JSON.stringify(start))

      beginStep(start, 'stepExcerpt', labelFor)

      expect(start).toEqual(snapshot)
    })
  })

  describe('completeStep', () => {
    it('marks the trailing step as done and updates its detail', () => {
      const start: ProcessStep[] = [
        { label: 'label:stepNav', status: 'running', detail: '' },
      ]

      const next = completeStep(start, 'stepNav', '已选 3 条')

      expect(next).toEqual([{ label: 'label:stepNav', status: 'done', detail: '已选 3 条' }])
    })

    it('keeps existing detail when none is provided', () => {
      const start: ProcessStep[] = [
        { label: 'label:stepNav', status: 'running', detail: 'paths' },
      ]

      const next = completeStep(start, 'stepNav')

      expect(next).toEqual([{ label: 'label:stepNav', status: 'done', detail: 'paths' }])
    })

    it('is a no-op for an empty step list', () => {
      expect(completeStep([], 'stepNav')).toEqual([])
    })
  })

  describe('completeRunningSteps / finalizeSteps', () => {
    it('flips every running step to done, leaving done steps alone', () => {
      const start: ProcessStep[] = [
        { label: 'label:stepNav', status: 'done', detail: 'paths' },
        { label: 'label:stepExcerpt', status: 'running', detail: '' },
      ]

      const next = completeRunningSteps(start)

      expect(next).toEqual([
        { label: 'label:stepNav', status: 'done', detail: 'paths' },
        { label: 'label:stepExcerpt', status: 'done', detail: '' },
      ])
    })

    it('returns an empty array when steps is undefined', () => {
      expect(finalizeSteps(undefined)).toEqual([])
    })
  })
})
