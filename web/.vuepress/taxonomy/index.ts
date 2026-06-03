/**
 * Public taxonomy module — validated, ready to consume by adapters.
 *
 * Importing this file runs `validateTaxonomy(nodes)` once at module load.
 * Authoring errors throw `TaxonomyValidationError`.
 *
 * The taxonomy is unified: navbar / wayfinding / glossary / news-category
 * nodes from `data.ts` and section / page / group / index nodes from
 * `sidebar/data.ts` are flattened together by `defineTaxonomy` into a
 * single `TaxonomyModule` instance. Adapters query it by `kind` or
 * `children(...)` as needed.
 */
import { defineTaxonomy } from './define'
import { flatTaxonomyNodes, NAVBAR_ROOT_ID, WAYFINDING_ROOT_ID, GLOSSARY_ROOT_ID } from './data'
import { sidebarSections } from '../sidebar/data.ts'

const { taxonomy } = defineTaxonomy({
  flatNodes: flatTaxonomyNodes,
  sections: sidebarSections,
})

export { taxonomy, NAVBAR_ROOT_ID, WAYFINDING_ROOT_ID, GLOSSARY_ROOT_ID }

export type { Locale, NodeId, NodeKind, TaxonomyModule, TaxonomyNode } from './types'
export { TaxonomyValidationError } from './validate'
export { createTaxonomyModule } from './module'
export { validateTaxonomy } from './validate'
export { defineTaxonomy } from './define'
