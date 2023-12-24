import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://abadifaizal.com",
  integrations: [tailwind(), sitemap({
    filter: page => {
      return !/https:\/\/abadifaizal\.com\/blog\/[0-9]+/.test(page);
    },
    customPages: ['https://abadifaizal.com/twitter', 'https://abadifaizal.com/discord'],
    changefreq: 'weekly',
    lastmod: new Date(),
    priority: 0.85,
    serialize: item => {
      if (item.url.at(-1) === "/") {
        item.url = item.url.slice(0, -1);
      }
      return item;
    },
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-us',
        id: 'id-id',
        jp: 'ja-jp'
      }
    }
  })],
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  }),
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});