/**
 * defineTaxonomy — flattens a mix of flat TaxonomyNodes and nested
 * SidebarSection literals into a single TaxonomyNode[] array, runs the
 * validator, and returns a ready-to-use TaxonomyModule.
 *
 * Two input kinds:
 *   - `flatNodes`  : the navbar / wayfinding / glossary
 *                    subtrees, authored as explicit TaxonomyNode literals.
 *                    Passed through unchanged.
 *   - `sections`   : the section / page / group / index tree, authored as
 *                    nested SidebarSection / SidebarEntry literals. Each
 *                    section's subtree is flattened with the rules below.
 *
 * The merged node array is validated once (uniqueness, parents, cycles,
 * path safety) and wrapped in a TaxonomyModule whose `byKind` /
 * `children` / `get` / `all` views span the whole array.
 *
 * The author-facing flattening rules:
 *   - Top-level entries are `kind: 'section'`. id = section slug.
 *   - Group entries (with `children`) become `kind: 'group'`. id = parent.id + '/' + slug.
 *   - Leaf entries become `kind: 'page'`. id = parent.id + '/' + slug.
 *   - Entries with `slug === ''` become `kind: 'index'` — id = parent.id + '/_index'.
 *   - Entries with `slug === undefined` (display-only group) become
 *     `kind: 'group'`; id MUST be supplied by the author via `entry.id`
 *     (the previous `syntheticCounter` fallback has been retired).
 */
import type { NodeId, TaxonomyModule, TaxonomyNode } from './types';
import { createTaxonomyModule } from './module';
import { validateTaxonomy } from './validate';
import type { SidebarEntry, SidebarSection } from '../sidebar/data.ts';

export interface DefineTaxonomyInput {
  flatNodes: readonly TaxonomyNode[];
  sections: readonly SidebarSection[];
}

export interface DefinedTaxonomy {
  nodes: readonly TaxonomyNode[];
  taxonomy: TaxonomyModule;
}

interface FlattenContext {
  nodes: TaxonomyNode[];
}

function pathFor(parentPath: string | null, slug: string | undefined): string | null {
  if (slug === undefined) return null;
  if (slug === '') return parentPath;
  return parentPath ? `${parentPath}${slug}/` : null;
}

function entryKind(entry: SidebarEntry): TaxonomyNode['kind'] {
  if (entry.slug === '') return 'index';
  if (entry.children && entry.children.length > 0) return 'group';
  if (entry.slug === undefined) return 'group';
  return 'page';
}

function entryId(parentId: NodeId, entry: SidebarEntry): NodeId {
  if (typeof entry.id === 'string' && entry.id.length > 0) return entry.id;
  if (entry.slug !== undefined && entry.slug !== '') return `${parentId}/${entry.slug}`;
  if (entry.slug === '') return `${parentId}/_index`;
  // Unreachable in practice: flattenEntry throws for `slug === undefined`
  // when no explicit id is provided before this id is observed. The throw
  // exists only to satisfy the NodeId return type for that branch.
  throw new Error(
    `defineTaxonomy: SidebarEntry under "${parentId}" has slug === undefined and no explicit "id" field. ` +
      `Display-only groups require an explicit id.`,
  );
}

function flattenEntry(
  entry: SidebarEntry,
  parentId: NodeId,
  parentPath: string | null,
  order: number,
  ctx: FlattenContext,
): void {
  const id = entryId(parentId, entry);
  if (entry.slug === undefined && (typeof entry.id !== 'string' || entry.id.length === 0)) {
    throw new Error(
      `defineTaxonomy: SidebarEntry under "${parentId}" has slug === undefined and no explicit "id" field. ` +
        `Display-only groups require an explicit id (the syntheticCounter fallback has been retired).`,
    );
  }
  const path = pathFor(parentPath, entry.slug);

  ctx.nodes.push({
    id,
    kind: entryKind(entry),
    label: entry.label,
    path,
    order,
    parentId,
    ...(entry.collapsible !== undefined ? { meta: { collapsible: entry.collapsible } } : {}),
  });

  if (entry.children && entry.children.length > 0) {
    // Display-only groups (slug === undefined) do NOT contribute a path
    // segment, so their children inherit the grandparent path.
    const childParentPath = entry.slug === undefined ? parentPath : path;
    let childOrder = 10;
    for (const child of entry.children) {
      flattenEntry(child, id, childParentPath, childOrder, ctx);
      childOrder += 10;
    }
  }
}

function flattenSection(section: SidebarSection, order: number, ctx: FlattenContext): void {
  const id = section.slug;
  const parentPath = `/${section.slug}/`;

  ctx.nodes.push({
    id,
    kind: 'section',
    label: section.label,
    path: parentPath,
    order,
    parentId: null,
  });

  let childOrder = 10;
  for (const child of section.children) {
    flattenEntry(child, id, parentPath, childOrder, ctx);
    childOrder += 10;
  }
}

/**
 * Public entry point. Validates the merged node array and wraps it in a
 * TaxonomyModule. Throws TaxonomyValidationError if the array is invalid.
 *
 * Order is sibling-scoped (per ADR-0001). Different segments (sections,
 * flatNodes such as navbar / wayfinding / glossary) do not
 * need a global offset because the module buckets children by parentId,
 * not by a global sort.
 */
export function defineTaxonomy(input: DefineTaxonomyInput): DefinedTaxonomy {
  const ctx: FlattenContext = { nodes: [] };

  for (const node of input.flatNodes) {
    ctx.nodes.push(node);
  }

  let sectionOrder = 10;
  for (const section of input.sections) {
    flattenSection(section, sectionOrder, ctx);
    sectionOrder += 10;
  }

  const nodes = Object.freeze(ctx.nodes) as readonly TaxonomyNode[];
  validateTaxonomy(nodes);

  const taxonomy = createTaxonomyModule(nodes);
  return { nodes, taxonomy };
}
