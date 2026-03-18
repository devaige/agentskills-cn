const path = require('path');
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Agent Skills',
  tagline: 'A simple, open format for giving agents new capabilities and expertise.',
  favicon: 'favicon.svg', // Will be copied to static/favicon.svg

  // Set the production url of your site here
  url: 'https://agentskills.github.io',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'agentskills',
  projectName: 'agentskills',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  // Fix: moved onBrokenMarkdownLinks to markdown.hooks
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Use current docs folder
          path: 'docs',
          // Exclude internal readme and AI memory files from being parsed as routes
          exclude: ['README.md', 'CLAUDE.md', 'context.md', 'memory.md', 'readme/**', 'temp/**'],
        },
        blog: false,
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
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Agent Skills',
        logo: {
          alt: 'Agent Skills Logo',
          src: 'favicon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/agentskills/agentskills',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    function docusaurusPluginResolveDirs() {
      return {
        name: 'docusaurus-plugin-resolve-dirs',
        configureWebpack(config) {
          return {
            resolve: {
              alias: {
                '/snippets': path.resolve(__dirname, 'docs/snippets'),
                '/images': path.resolve(__dirname, 'docs/images'),
              },
            },
          };
        },
      };
    },
  ],
};

module.exports = config;
