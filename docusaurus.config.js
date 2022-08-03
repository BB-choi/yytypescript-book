const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const remarkBreaks = require("remark-breaks");
const { pageRef } = require("./src/remark/pageRef");
const { tweetILearned } = require("./src/remark/tweetILearned");
const tsconfigForTwoslash = require(__dirname + "/tsconfig.twoslash.json");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import("@docusaurus/types").DocusaurusConfig} */
(
  module.exports = {
    title: "TypeScript입문『서바이벌TypeScript』한국어판",
    tagline:
      "TypeScript입문『서바이벌TypeScript』한국어판 : 실무에서 사용한다면, 최소한 이 만큼은 알아 두자!",
    url: "https://typescriptbook.jp",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/logo.svg",
    organizationName: "BB-choi", // Usually your GitHub org/user name.
    projectName: "yytypescript-book", // Usually your repo name.
    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import("@docusaurus/preset-classic").Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl: "https://github.com/yytypescript/book/edit/master/",
            routeBasePath: "/",
            numberPrefixParser: false,
            remarkPlugins: [remarkBreaks, pageRef, tweetILearned],
          },
          // blog: {
          //   showReadingTime: true,
          //   // Please change this to your repo.
          //   editUrl:
          //     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
          // },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
          // googleAnalytics: {
          //   trackingID: "UA-43572771-14",
          //   anonymizeIP: true,
          // },
        }),
      ],
      [
        "docusaurus-preset-shiki-twoslash",
        {
          themes: ["min-light", "min-dark"],
          defaultCompilerOptions: tsconfigForTwoslash.compilerOptions,
        },
      ],
    ],

    themeConfig:
      /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
      ({
        navbar: {
          title: "서바이벌TypeScript",
          logo: {
            alt: "서바이벌TypeScript",
            src: "img/logo.svg",
          },
          items: [
            // {
            //   type: "doc",
            //   docId: "intro",
            //   position: "left",
            //   label: "Tutorial",
            // },
            // {to: '/blog', label: 'Blog', position: 'left'},
            {
              href: "https://github.com/BB-choi/yytypescript-book",
              label: "GitHub",
              position: "right",
            },
            {
              href: "https://github.com/yytypescript/book",
              label: "GitHub🇯🇵",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "서바이벌TypeScript",
              items: [
                { label: "제1장 시작하기에 앞서", to: "/" },
                { label: "제2장 TypeScript 개요", to: "/overview" },
                {
                  label: "제3장 만들어보며 배우는 TypeScript",
                  to: "/tutorials",
                },
                { label: "제4장 읽어보며 배우는TypeScript", to: "/reference" },
                { label: "제5장 Tips", to: "/tips" },
              ],
            },
            {
              title: "유틸리티",
              items: [
                { label: "기호와 키워드", to: "/symbols-and-keywords" },
                {
                  label: "TypeScript 해독 어시스턴트",
                  to: "/code-reading-assistant",
                },
              ],
            },
            {
              title: "집필 참가하기",
              items: [
                { label: "개요", to: "/writing" },
                { label: "CONTRIBUTING", to: "/writing/contributing" },
                {
                  label: "처음 집필하기",
                  to: "/writing/getting-started",
                },
                { label: "집필 흐름", to: "/writing/how-to-change" },
                { label: "Markdown", to: "/writing/markdown" },
                { label: "PDR", to: "/writing/pdr" },
              ],
            },
            {
              title: "커뮤니티",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/BB-choi/yytypescript-book",
                },
                {
                  label: "GitHub🇯🇵",
                  href: "https://github.com/yytypescript/book",
                },
                {
                  label: "Connpass",
                  href: "https://yyts.connpass.com/",
                },
                {
                  label: "Discord",
                  href: "https://discord.gg/DTwRgzt",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/yytypescript",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} YYTypeScript. <a href="/license">Licensed under CC BY-SA 4.0 and MIT(partially)</a>`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: [
            "java",
            "php",
            "ruby",
            "shell-session",
            "tsx",
            "jsx",
          ],
        },
        // algolia: {
        //   appId: "5N3JHNPACB",
        //   apiKey: "99655de886960eadb0eca65591529110",
        //   indexName: "typescriptbook",
        //   contextualSearch: true,
        // },
      }),
    i18n: {
      defaultLocale: "ko",
      locales: ["ko"],
    },
    plugins: [
      "./src/components/codeReadingAssistant/docusaurusPlugin.js",
      // [require.resolve("docusaurus-lunr-search"), { languages: ["ja", "ja"] }],
      // [
      //   require.resolve("@cmfcmf/docusaurus-search-local"),
      //   {
      //     // whether to index docs pages
      //     indexDocs: true,
      //
      //     // Whether to also index the titles of the parent categories in the sidebar of a doc page.
      //     // 0 disables this feature.
      //     // 1 indexes the direct parent category in the sidebar of a doc page
      //     // 2 indexes up to two nested parent categories of a doc page
      //     // 3...
      //     //
      //     // Do _not_ use Infinity, the value must be a JSON-serializable integer.
      //     indexDocSidebarParentCategories: 2,
      //     language: "ja",
      //   },
      // ],
    ],
  }
);
