import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

require('dotenv').config();

const config: Config = {
  title: 'GlueX Protocol',
  tagline: '',
  favicon: 'img/favicon.ico',

  url: 'https://docs.gluex.xyz',
  baseUrl: '/',

  organizationName: 'gluexprotocol',
  projectName: 'documentation',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',

  staticDirectories: ['static', 'public'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          editUrl: ({ docPath }) => `https://github.com/gluexprotocol/documentation/edit/main/docs/${docPath}`,
          breadcrumbs: true,
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v1 (current)',
              badge: true,
            },
          },
          routeBasePath: '/',
          sidebarCollapsible: true,
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        googleTagManager: {
          containerId: '<CONTAINER-ID>',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    async function tailwind(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content: 'GlueX, GlueX Docs, GlueX Documentation, DeFi, decentralized finance, blockchain integration, liquidity providers, exchange venues, APIs, DeFi framework, onchain services, offchain services'
      },
      { name: 'og:type', content: 'website' },
      {
        name: 'og:image',
        content: 'https://docs.gluex.xyz/banner.jpg',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://docs.gluex.xyz/banner.jpg',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: 'banner.jpg',
    // Search functionality : Algolia
    algolia: {
      appId: '<>',
      apiKey: '<>',
      indexName: '<>',
    },
    navbar: {
      title: '',
      hideOnScroll: false,
      logo: {
        alt: 'GlueX Logo',
        src: 'img/GlueX_logotipo_dark.svg',
        srcDark: '/img/GlueX_logotipo_light.svg',
        href: '/',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              href: 'https://gluex.xyz/docs/v-older',
              label: 'v0',
            },
          ],
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    prism: {
      darkTheme: prismThemes.duotoneDark,
      additionalLanguages: ['json', 'typescript', 'python', 'rust', 'go', 'bash', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  webpack: {
    jsLoader: 'babel',
  },
};

export default config;
