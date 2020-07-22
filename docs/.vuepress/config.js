const moment = require('moment');
moment.locale("zh-cn");
module.exports = {
  base: "/docs/",
  title: '小土神的一天',
  description: '小土神的一天',
  head: [
    ['meta', { name: 'author', content: '小土神的一天' }],
    ['meta', { name: 'keywords', content: 'vuepress 介绍,vuepress 说明,小土神的一天' }],
    ['link', { rel: 'icon', href: 'assets/img/logo.jpg' }]
  ],
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp) => {
        return moment(timestamp).format('LLL')
      }
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    },
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',
      // 其他的 Vssue 配置
      owner: 'whylearn',
      repo: 'docs',
      clientId: '009856e4777a4b1157e9',
      clientSecret: '5243b5d59cff4bb75d988d63022dd9f971c1d7a2',
    },
  },
  themeConfig: {
    logo: '/assets/img/hero.png',
    lastUpdated: '更新时间',
    nav: [
      { text: '主页', link: '/' },
      { text: 'GitHub', link: '/about1' },
      { text: '黑科技', link: '/about2' },
      {
        text: '其他',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    // sidebar: 'auto',  //自动生成侧边栏
    sidebar: {
      '/mysql/': [
        '',     /* /foo/ */
        'mysql-1',  /* /foo/one.html */
        'mysql-2'   /* /foo/two.html */
      ],

      '/about/': [
        '',      /* /bar/ */
        'about-1', /* /bar/three.html */
        'about-2'   /* /bar/four.html */
      ],

    }

  }
}