// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarConfig}
 */
const userSidebar = [
  {
    type: "category",
    label: "Discover",
    collapsed: false,
    link: { type: "generated-index", slug: 'discover' },
    items: [{ type: "autogenerated", dirName: "user/discover" }],
  },
  {
    type: "category",
    label: "Start",
    collapsed: false,
    link: { type: "generated-index", slug: 'start' },
    items: [{ type: "autogenerated", dirName: "user/start" }],
  },
  {
    type: "category",
    label: "Security",
    collapsed: false,
    link: { type: "generated-index", slug: 'security' },
    items: [{ type: "autogenerated", dirName: "user/security" }],
  },
  {
    type: "category",
    label: "Contribute",
    collapsed: false,
    link: { type: "generated-index", slug: 'contribute' },
    items: [{ type: "autogenerated", dirName: "user/contribute" }],
  },
  {
    type: "category",
    label: "Legal",
    collapsed: false,
    link: { type: "generated-index", slug: 'legal' },
    items: [{ type: "autogenerated", dirName: "user/legal" }],
  },
];
module.exports = userSidebar;