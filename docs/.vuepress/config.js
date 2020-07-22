const moment = require('moment');

module.exports = {
  title:'小土神的一天',
  description:'小土神的一天',
  head: [
    ['meta', { name: 'author', content:'小土神的一天'}],
    ['meta', { name: 'keywords', content:'vuepress 介绍,vuepress 说明,小土神的一天'}],
    ['link', { rel: 'icon', href: 'assets/img/logo.jpg' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).format('LLL')
        }
      }
    ]
  ],
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