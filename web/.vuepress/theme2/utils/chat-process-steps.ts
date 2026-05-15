/**
 * Pure reducer over ProcessStep[] driven by RouteCallbacks events.
 *
 * Owned by the session layer so that the view layer only renders steps —
 * it does not own the running→done transition state machine.
 */
import type { ProcessStep, ProcessStepKey } from './chat-types'

export type ProcessStepLabel = (key: ProcessStepKey) => string

/** Mark every prior `running` step as `done`. */
export function completeRunningSteps(steps: readonly ProcessStep[]): ProcessStep[] {
  return steps.map((step) =>
    step.status === 'running' ? { ...step, status: 'done' as const } : step,
  )
}

/**
 * Begin a new step. Any previous `running` step is closed out as `done`
 * (since the session emits stepNav → stepExcerpt → stepAnswer sequentially).
 */
export function beginStep(
  steps: readonly ProcessStep[],
  key: ProcessStepKey,
  labelFor: ProcessStepLabel,
  detail?: string,
): ProcessStep[] {
  return [
    ...completeRunningSteps(steps),
    { label: labelFor(key), status: 'running', detail: detail ?? '' },
  ]
}

/**
 * Complete the most recently begun step. Updates its detail if provided.
 * No-op when there is no trailing step (caller's bug to begin-complete out of order).
 */
export function completeStep(
  steps: readonly ProcessStep[],
  _key: ProcessStepKey,
  detail?: string,
): ProcessStep[] {
  if (!steps.length) return [...steps]
  const next = steps.slice()
  const lastIndex = next.length - 1
  const last = next[lastIndex]
  const updated: ProcessStep = {
    ...last,
    status: 'done',
    ...(detail != null && String(detail).length ? { detail: String(detail) } : {}),
  }
  next[lastIndex] = updated
  return next
}

/** Final flush — used in cleanup paths to guarantee no step is left `running`. */
export function finalizeSteps(steps: readonly ProcessStep[] | undefined): ProcessStep[] {
  if (!steps) return []
  return completeRunningSteps(steps)
}
