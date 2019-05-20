module.exports = {
  title: "noobz",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "noobz"
    }
  },
  markdown: {
    lineNumber: true
  },
  themeConfig: {
    repo: "zsz1995",
    docsRepo: "zsz1995/vuepress",
    docsDir: "docs",
    locales: {
      "/": {
        label: '简体中文',
        selectText: "选择语言",
        lastUpdated: "上次更新"
      }
    },
    nav: [
      {
        text: "Element-UI",
        link: "/elem/"
      },
      {
        text: "Vue-Cli",
        link: "/vue-cli/"
      },
      {
        text: "resources",
        items: [
          { text: "vue", link: "/resources/vue/"},
          { text: "ecmascript", link: "/resources/ecmascript/"}
        ]
      }
    ]
  },
  head: [
    ["script", {src: "/assets/js/article.js"}]
  ]
  
};
