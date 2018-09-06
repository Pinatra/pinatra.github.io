module.exports = {
  title: 'Pinatra',
  description: 'A PHP verison of Sinatra: a DSL for quickly creating web applications in PHP with minimal effort.',
  dest: 'docs',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Pinatra',
      description: 'A PHP verison of Sinatra: a DSL for quickly creating web applications in PHP with minimal effort.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Pinatra',
      description: 'PHP 版本的 Sinatra，极其轻量优雅的 web 领域专用语言（框架）'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        lastUpdated: 'Last Updated',
        selectText: 'Languages',
        label: 'English',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Source', link: 'https://github.com/Pinatra/framework' }
        ],
        sidebar: {
          '/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                ['', 'Introduction'],
                'install',
                'routing',
                'controller',
                'kernel'
              ]
            }
          ]
        }
      },
      '/zh/': {
        lastUpdated: '最近更新',
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: '源代码', link: 'https://github.com/Pinatra/framework' }
        ],
        sidebar: {
          '/zh/': [
            {
              title: '指南',
              collapsable: false,
              children: [
                ['', '介绍'],
                'install',
                'routing',
                'controller',
                'kernel'
              ]
            }
          ]
        }
      }
    }
  }
}