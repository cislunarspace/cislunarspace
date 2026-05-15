/**
 * Backward-compatible glossary category exports.
 *
 * The source of truth now lives in `taxonomy/data.ts`; this module keeps the
 * existing `glossary-meta.ts` import path stable for consumers while exposing
 * the same `GlossaryCategoryMeta`, `GlossaryCategoryRegistry`,
 * `glossaryCategories`, and `categoryRegistry` API.
 */
export {
  GlossaryCategoryRegistry,
  categoryRegistry,
  glossaryCategories,
  type GlossaryCategoryMeta,
} from './taxonomy/adapters/glossary-categories'
