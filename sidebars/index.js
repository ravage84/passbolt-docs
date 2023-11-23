/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  adminGuideSidebar: [{
    type: "category",
    label: "Install",
    collapsed: true,
    link: { type: "generated-index", slug: 'admin' },
    items: [{ type: "autogenerated", dirName: "admin" }],
  }
 ],
  // adminGuideSidebar: require('./admin.sidebar'),
  // userGuideSidebar: require('./user.sidebar'),
};

module.exports = sidebars;
