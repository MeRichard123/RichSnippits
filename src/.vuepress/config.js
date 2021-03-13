const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "RichSnippits",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "https://github.com/MeRichard123/RichSnippits",
    editLinks: false,
    displayAllHeaders: true,
    docsDir: "",
    logo: "https://i.imgur.com/tKXBsZT.png",
    smoothScroll: true,
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Snippets",
        link: "/snippets/",
      },
      {
        text: "Contributors",
        link: "/contributors/",
      },
    ],
    sidebar: {
      "/snippets/": [
        {
          title: "RichSnippits",
          collapsable: false,
          children: ["", "contributing"],
        },
        {
          title: "Python",
          collapsable: false,
          children: ["python", "django"],
        },
        {
          title: "Javascript",
          collapsable: false,
          children: ["reactjs", "vuejs"],
        },
        {
          title: "Typescript",
          collapsable: false,
          children: ["reactts"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/plugin-nprogress",
    "@vuepress/plugin-search",
    "@vuepress/plugin-active-header-links",
    "@vuepress/plugin-register-components",
    "vuepress-plugin-container",
  ],
};
