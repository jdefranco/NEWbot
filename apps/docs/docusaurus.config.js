/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Chatworth docs',
  tagline: 'Get moving with Chatworth and its documentation',
  url: 'https://docs.chatworth.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Chatworth', // Usually your GitHub org/user name.
  themeConfig: {
    navbar: {
      title: 'Chatworth',
      logo: {
        alt: 'Chatworth Logo',
        src: 'img/chatworth-icon.png',
      },
      items: [
        {
          href: '/',
          label: 'Docs',
          position: 'left',
        },
        {
          href: '/api',
          label: 'API Reference',
          position: 'left',
        },
        {
          href: 'https://github.com/josephdefranco/typebot.io/',
          label: 'Contribute',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: '978429d40094dc0fd2dd02db741b3dbe',
      indexName: 'typebot',
      appId: '6GBQ91COKA',
      contextualSearch: false,
    },
    footer: {
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Homepage',
              to: 'https://www.chatworth.io',
            },
            { label: 'Status', to: 'https://status.chatworth.io' },
            {
              label: 'Roadmap',
              to: 'https://app.chatworth.io/feedback',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook Group',
              href: 'https://www.facebook.com/groups/chatworth',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/chatworth',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Terms of Service',
              href: 'https://www.chatworth.io/terms-of-service',
            },
            {
              label: 'Privacy Policy',
              href: 'https://www.chatworth.io/privacy-policies',
            },
          ],
        },
      ],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      '@typebot.io/docusaurus-preset-openapi',
      /** @type {import('@typebot.io/docusaurus-preset-openapi').Options} */
      {
        api: {
          path: 'openapi',
          routeBasePath: '/api',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
