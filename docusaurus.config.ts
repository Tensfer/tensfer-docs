import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "Tensfer",
    tagline: "The safer way for your users to pay with crypto",
    favicon: "img/icon.webp",

    themes: ['@docusaurus/theme-mermaid'],
    markdown: {
      mermaid: true,
    },

    // Set the production url of your site here
    url: "https://docs.tensfer.co",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "tensfer", // Usually your GitHub org/user name.
    projectName: "tensfer-website", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en", "fr"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    routeBasePath: "/",
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/Tensfer/tensfer-docs/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://medium.com/@tensferHQ/tensfer-connecting-crypto-b2023fc15eff",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // docs: {
        //   sidebar: {
        //     hideable: true,
        //   },
        // },
        navbar: {
            logo: {
                alt: "Tensfer logo",
                src: "img/logo_colored.webp",
            },
            items: [
                {
                    type: "doc",
                    docId: "getting-started/overview",
                    position: "left",
                    label: "Introduction",
                },
                {
                    type: "doc",
                    docId: "getting-started/products",
                    position: "left",
                    label: "Products",
                },
                {
                    type: 'doc',
                    docId: 'getting-started/use-cases',
                    position: 'left',
                    label: 'Use cases',
                },
                {
                    type: 'doc',
                    docId: 'developer-tools/intro',
                    position: 'left',
                    label: 'Go live',
                },
            ],
        },
        footer: {
            style: "light",
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
