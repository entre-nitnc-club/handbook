import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    "title": "アントレプレナークラブ ハンドブック",
    "description": "アントレプレナークラブの部運営に関する公式ハンドブックです。定例会の進め方、イベント企画、部員管理、資金管理、広報活動など、部長や幹部が知っておくべき情報を網羅しています。",
    "lang": "ja",
    "sitemap": {
        "hostname": "https://entre.nitnc.club/handbook/"
    },
    "base": "/handbook/",
    "themeConfig": {
        // https://vitepress.dev/reference/default-theme-config
        "siteTitle": "アントレプレナークラブ ハンドブック",
        "nav": [
            { "text": "ホーム", "link": "/" },
            { "text": "はじめに", "link": "/getting-started" },
            { "text": "公式ウェブサイト", "link": "https://entre.nitnc.club" }
        ],

        "sidebar": [
            {
                "text": "ホーム",
                "link": "/"
            },
            {
                "text": "はじめに",
                "base": "/getting-started",
                "items": [
                    {
                        "text": "アントレプレナークラブとは",
                        "link": "/"
                    },
                    {
                        "text": "ハンドブックの使い方",
                        "link": "/how-to-use"
                    }
                ]
            },
            {
                "text": "定例会のはじめ方",
                "base": "/weekly-meeting",
                "items": [
                    {
                        "text": "はじめに",
                        "link": "/"
                    },
                    {
                        "text": "定例会で部長が行うべきこと",
                        "link": "/things-to-do"
                    },
                    {
                        "text": "講義室予約ガイド",
                        "link": "/room-reservation"
                    }
                ]
            },
            {
                "text": "イベント企画の進め方",
                "base": "/event-planning"
            },
            {
                "text": "部員管理",
                "base": "/member-management"
            },
            {
                "text": "資金管理",
                "base": "/fund-management"
            },
            {
                "text": "広報活動",
                "base": "/public-relations"
            }
        ],
        "search": {
            "provider": "local",
            "options": {
                "translations": {
                    "button": {
                        "buttonAriaLabel": "検索ボックスを開く",
                        "buttonText": "検索"
                    },
                    "modal": {
                        "backButtonTitle": "閉じる",
                        "displayDetails": "詳細リストを表示",
                        "footer": {
                            "closeKeyAriaLabel": "エスケープキー",
                            "closeText": "閉じる",
                            "navigateDownKeyAriaLabel": "下矢印キー",
                            "navigateText": "選択",
                            "navigateUpKeyAriaLabel": "上矢印キー",
                            "selectKeyAriaLabel": "エンターキー",
                            "selectText": "決定"
                        },
                        "noResultsText": "検索結果がありません",
                        "resetButtonTitle": "検索をリセット"
                    }
                }
            }
        },
        "footer": {
            "copyright": `© ${new Date().getFullYear()} アントレプレナークラブ`
        },
        "lastUpdated": {
            "text": "最終更新日"
        },
        "docFooter": {
            "next": "次のページ",
            "prev": "前のページ"
        },
        "langMenuLabel": "言語",
        "notFound": {
            "linkLabel": "ホームに戻る",
            "linkText": "ホームに戻る",
            "quote": "進む方向を変えなければ、目指す場所にたどり着くだろう — 老子",
            "title": "ページが見つかりません"
        },
        "outline": {
            "label": "目次",
            "level": "deep"
        },
        "darkModeSwitchLabel": "外観テーマ",
        "lightModeSwitchTitle": "ライトモード",
        "darkModeSwitchTitle": "ダークモード",
        "sidebarMenuLabel": "メニュー",
        "returnToTopLabel": "トップに戻る"
    },
    "transformHead": ({ pageData }) => {
        const title = pageData.title ? `${pageData.title} | アントレプレナークラブ ハンドブック` : "アントレプレナークラブ ハンドブック";
        const description = pageData.frontmatter.description || "アントレプレナークラブの部運営に関する公式ハンドブックです。定例会の進め方、イベント企画、部員管理、資金管理、広報活動など、部長や幹部が知っておくべき情報を網羅しています。";
        const gtag = process.env.NODE_ENV === "production" ? "" : "";
        return [
            ["meta", { "property": "og:title", "content": title }],
            ["meta", { "property": "og:description", "content": description }],
            [
                "script",
                { "async": "", "src": "https://www.googletagmanager.com/gtag/js?id=" + gtag }
            ],
            [
                "script",
                {},
                `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag}');`
            ]
        ];
    },
    "head": [
        ["link", { "rel": "icon", "href": "/favicon.ico" }],
        ["meta", { "property": "og:image", "content": "https://entre.nitnc.club/handbook/og-image.jpg" }],
        ["meta", { "property": "og:site_name", "content": "アントレプレナークラブ ハンドブック" }],
        ["meta", { "name": "twitter:card", "content": "summary_large_image" }],
        ["meta", { "name": "twitter:image", "content": "https://entre.nitnc.club/handbook/og-image.jpg" }]
    ],
    "markdown": {
        "container": {
            "tipLabel": "ヒント",
            "warningLabel": "注意",
            "dangerLabel": "警告",
            "infoLabel": "情報",
            "detailsLabel": "詳細"
        }
    }
});
