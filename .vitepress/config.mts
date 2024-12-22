import footnote from "markdown-it-footnote";

import { defineConfig } from "vitepress";

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(footnote);
    },
  },
  title: "Rizal's Divine Legacy",
  description: "A final project for PI 100",
  lang: "en-US",
  srcDir: "src",
  cleanUrls: true,
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Lavishly+Yours&family=Playwrite+CO+Guides&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  themeConfig: {
    logo: "assets/rizal_hero_image.png",

    search: {
      provider: "local",
    },
    footer: {
      message: "Final Project for P.I. 100",
      copyright: "Brymer Meneses",
    },
    sidebar: [
      {
        items: [
          { text: "Terminologies", link: "/terminologies" },
          { text: "Origins & Motivations", link: "/origins/" },
          {
            text: "Rizalista Movements",
            link: "/movements/",
            items: [
              { text: "Adarnistas", link: "/movements/adarnistas" },
              { text: "Bathalismo", link: "/movements/bathalismo" },
              {
                text: "Iglesia Watawat ng Lahi",
                link: "/movements/iglesia-watawat-ng-lahi",
              },
              { text: "Sambahang Rizal", link: "/movements/sambahang-rizal" },
            ],
          },
          { text: "Modern Impact", link: "/impact/" },
        ],
      },
    ],
  },
});
