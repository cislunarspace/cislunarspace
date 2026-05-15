/**
 * Public taxonomy module — validated, ready to consume by adapters.
 *
 * Importing this file runs `validateTaxonomy(taxonomyNodes)` once at
 * module load. Authoring errors throw `TaxonomyValidationError`.
 */
import { taxonomyNodes, NAVBAR_ROOT_ID } from './data'
import { createTaxonomyModule } from './module'
import { validateTaxonomy } from './validate'

validateTaxonomy(taxonomyNodes)

export const taxonomy = createTaxonomyModule(taxonomyNodes)

export { NAVBAR_ROOT_ID }
export type { Locale, NodeId, NodeKind, TaxonomyModule, TaxonomyNode } from './types'
export { TaxonomyValidationError } from './validate'
export { createTaxonomyModule } from './module'
export { validateTaxonomy } from './validate'
