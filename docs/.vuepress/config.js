module.exports = {
	locales: {
		'/': {
			lang: 'en-US',
			title: 'builderall-vue-ui',
			description: 'Documentation builderall-vue-ui plugin'
		}
	},

	themeConfig: {
		repoLabel: 'Contribute Jovem!',
		repo: '',
		docsDir: 'docs',
		editLinks: true,
		docsBranch: 'dev',
		editLinkText: 'Ajude ou reporte essa pagina!',
		search: false,
		locales: {
			'/': {
				label: 'English',
				selectText: 'Languages',
				lastUpdated: 'Last Updated',
				// service worker is configured but will only register in production
				serviceWorker: {
					updatePopup: {
						message: 'New content is available.',
						buttonText: 'Refresh'
					}
				},
				nav: [
					{ text: 'Getting Started', link: '/guide' },
					{ text: 'Components', link: '/components/' },
					{ text: 'GitHub', link: '' }
				],
				sidebar: {
					'/components/': [
						{
							title: 'Components',
							collapsable: false,
							children: [
								'bui-container',
								'bui-page',
								'bui-sidebar',
								'bui-navbar',
								'bui-alert',
								'bui-icon',
							]
						}
					]
				}
			}
		}
	},

}