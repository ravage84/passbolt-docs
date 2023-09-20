// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarConfig}
 */
const adminSidebar = [
  {
    type: "category",
    label: "Configuration",
    collapsed: true,
    link: { type: "generated-index", slug: 'configuration' },
    items: [{ type: "autogenerated", dirName: "admin/configuration" }],
  },
  {
    type: "category",
    label: "Configure",
    collapsed: true,
    link: { type: "generated-index", slug: 'configure' },
    items: [{ type: "autogenerated", dirName: "admin/configure" }],
  },
  {
    type: "category",
    label: "Migrate",
    collapsed: true,
    link: { type: "generated-index", slug: 'migrate' },
    items: [{ type: "autogenerated", dirName: "admin/migrate" }],
  },
  {
    type: "category",
    label: "Setup",
    collapsed: true,
    link: { type: "generated-index", slug: 'setup' },
    items: [{ type: "autogenerated", dirName: "admin/setup" }],
  },
  {
    type: "category",
    label: "Update",
    collapsed: true,
    link: { type: "generated-index", slug: 'update' },
    items: [{ type: "autogenerated", dirName: "admin/update" }],
  },
];
module.exports = adminSidebar;