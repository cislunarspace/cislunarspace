/**
 * Raw content plugin — exposes page markdown content via frontmatter.__rawContent.
 * Used by the AI chat feature to access raw page content at runtime.
 */
export const rawContentPlugin = {
  name: 'vuepress-plugin-raw-content',
  extendsPage: (page: any) => {
    if (page.content) {
      page.frontmatter.__rawContent = page.content;
    }
  },
};
