module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Builderall Vue UI',
      description: 'Vue UI Library for Builderall Apps'
    }
  },

  themeConfig: {
    repoLabel: 'Github',
    repo: 'https://github.com/mauricio-testa/builderall-vue-ui',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'develop',
    editLinkText: 'Edit this page',
    search: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        /* service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        */
        nav: [
          { text: 'Getting Started', link: '/guide' },
          { text: 'Components', link: '/components/bui-navbar' },
        ],
        sidebar: [
          {
            title: 'Docs',
            collapsable: false,
            children: [
              ['/guide', 'Getting Started'],
              ['/layout', 'Layout'],
              ['/rtl', 'RTL Support'],
              ['/about', 'About']
            ]
          },
          {
            title: 'Components',
            collapsable: false,
            children: [
              ['/components/bui-navbar', 'Navbar'],
              ['/components/bui-sidebar', 'Sidebar'],
              ['/components/bui-container', 'Container'],
              ['/components/bui-page', 'Page'],
              ['/components/bui-alert', 'Alert'],
              ['/components/bui-icon', 'Icon'],
              ['/components/bui-form-group', 'Form group'],
              ['/components/bui-language-selector', 'Language Selector'],
              ['/components/bui-modal-confirm', 'Confirmation modal'],
            ]
          },
          {
            title: 'Bootstrap components',
            collapsable: false,
            children: [
              ['/bootstrap/b-alert', 'Alert'],
              ['/bootstrap/b-card', 'Card'],
              ['/bootstrap/b-dropdown', 'Dropdown'],
              ['/bootstrap/b-inputs', 'Inputs'],
              ['/bootstrap/b-modal', 'Modal'],
              ['/bootstrap/b-tabs', 'Tabs'],
              ['/bootstrap/b-toast', 'Toast'],
            ]
          }
        ]
      }
    }
  },

}