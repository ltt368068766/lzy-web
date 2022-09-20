import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  base: '/amazing-sentences/',
  appearance: true,
  title: '腹有诗书气自华',
  description: 'VitePress is a Vite-powered static site generator',
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme: 'one-dark-pro',
    lineNumbers: true,
  },
  themeConfig: {
    siteTitle: '腹有诗书气自华',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2012-present DL',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '人民日报金句摘抄', link: '/daily/' }
    ]
  }
})