// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Evo.lua',
  tagline: 'This website is under construction!',
  url: 'https://evo-lua.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/caterpillar.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'evo-lua', // Usually your GitHub org/user name.
  projectName: 'evo-lua.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/evo-lua/evo-lua.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true
      },
      navbar: {
        title: 'Evo.lua',
        logo: {
          alt: 'Evo.lua Logo',
          src: 'img/caterpillar.png',
        },
        items: [
			{
				href: '/docs',
				label: 'Documentation',
				position: 'left',
			  },
          {
            href: 'https://github.com/evo-lua',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © 2021-${new Date().getFullYear()} · Evo.lua authors and contributors`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
		additionalLanguages: ['lua', 'c', 'cpp', 'bash', 'cmake'],
      },
    }),
};

module.exports = config;
