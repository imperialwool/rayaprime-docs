import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Raya-Prime',
  tagline: 'Простой и многофунциональный бот для разных задач и условий',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rayaprime.iwool.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'imperailwool', // Usually your GitHub org/user name.
  projectName: 'rayaprime-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'], // TODO: en 
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Raya-Prime',
      logo: {
        alt: 'Raya-Prime',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Документация',
        },
        //{to: '/blog', label: 'Блог', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            {
              label: 'Начать изучать',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Разработчики',
          items: [
            {
              label: 'imperialwool',
              href: 'https://iwool.dev',
            },
            {
              label: 'whoeevee',
              href: 'https://github.com/whoeevee',
            },
          ],
        },
        {
          title: 'Ещё',
          items: [
            {
              label: 'Блог',
              to: '/blog',
            },
            {
              label: 'Телеграм канал',
              href: 'https://t.me/podvaljoey',
            },
          ],
        },
      ],
      copyright: `Персонаж принадлежит Storytelling Team. Проект разрабатывается 2020-${new Date().getFullYear()}. Сделано с помощью Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
