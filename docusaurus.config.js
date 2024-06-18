// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Umsteigli Docs",
    tagline: "Your open-source and modular public transport helper!",
    url: "https://docs.umsteigli.ch",
    baseUrl: "/",
    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    organizationName: "umsteigli",
    projectName: "docs",

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/umsteigli/docs/edit/main/",
                    docLayoutComponent: "@theme/DocPage",
                    docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        "https://github.com/umsteigli/docs/edit/main/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            docs: {
                sidebar: {
                    hideable: true,
                },
            },
            navbar: {
                title: "Umsteigli",
                logo: {
                    alt: "Umsteigli Logo",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Tutorial",
                    },
                    {
                        label: "Petstore API",
                        position: "left",
                        to: "/docs/category/petstore-api",
                    },
                    {
                        href: "https://github.com/umsteigli/",
                        position: "right",
                        className: "header-github-link",
                        "aria-label": 'GitHub repository',
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Tutorial",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Stack Overflow",
                                href: "https://stackoverflow.com/questions/tagged/docusaurus",
                            },
                            {
                                label: "Discord",
                                href: "https://discordapp.com/invite/docusaurus",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/docusaurus",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/umsteigli/",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ["ruby", "csharp", "php"],
            },
        }),

    plugins: [
        [
            "docusaurus-plugin-openapi-docs",
            {
                id: "openapi",
                docsPluginId: "classic",
                config: {
                    petstore: {
                        specPath: "examples/petstore.yaml",
                        outputDir: "docs/petstore",
                        downloadUrl:
                            "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                    },
                },
            },
        ],
    ],

    themes: [
        "docusaurus-theme-openapi-docs",
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            ({
                hashed: true,
                language: ["en", "de"],
                indexDocs: true,
                indexPages: false,
                indexBlog: false,
                highlightSearchTermsOnTargetPage: true,
            })
        ]
    ],
};

module.exports = config;
