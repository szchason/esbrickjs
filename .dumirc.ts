import { defineConfig } from 'dumi';

const serverBasePath = process.env.NODE_ENV === 'production' ? '/esbrickjs' : '/';
const serverPublicPath = process.env.NODE_ENV === 'production' ? '/esbrickjs/' : '/';

export default defineConfig({
  title: 'esbrickjs',
  base: serverBasePath,
  publicPath: serverPublicPath,
  outputPath: './docs/build',
  favicons: ['https://gitee.com/szchason/pic_bed/raw/site/esbricksjs/favicon.ico'],
  themeConfig: {
    name: 'esbrickjs',
    logo: 'https://gitee.com/szchason/pic_bed/raw/site/esbricksjs/logo.svg',
    nav: [
      {
        title: 'Docs',
        link: '/docs/get-started',
      },
    ],
    footer:
      'Copyright © 2023 | Powered by <a href="https://github.com/szchason/esbrickjs" target="_blank" rel="noreferrer">szchason</a>',
    prefersColor: { default: 'dark', switch: false },
    socialLinks: {
      github: 'https://github.com/szchason/esbrickjs',
    },
  },
  metas: [{ name: 'referrer', content: 'no-referrer' }],
});
