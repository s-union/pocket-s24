import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://s-union.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/pocket-s24/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 's-union', // Usually your GitHub org/user name.
  projectName: 'pocket-s24', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  noIndex: true,

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '団体のしおりPocket',
      logo: {
        alt: '新歓',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'リンク（団体向け）',
          items: [
            {
              label: 'ウェブポータル',
              href: 'https://portal2024.tusnoda-su.net/',
            },
            {
              label: '団体向けX（Twitter）',
              href: 'https://twitter.com/shinkan_inner',
            },
          ],
        },
        {
          title: '新歓リンク',
          items: [
            {
              label: '公式サイト',
              href: 'https://welcome-tus.grats.jp/2024',
            },
            {
              label: 'X（Twitter）',
              href: 'https://twitter.com/tusnodashinkan',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/tus_noda_events/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCMhCpxt69y3PNH25RSAec7Q',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 東京理科大学野田地区新歓実行委員会 Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
