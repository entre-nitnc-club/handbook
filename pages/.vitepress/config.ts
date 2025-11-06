import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "アントレプレナークラブ ハンドブック",
  description: "部運営のエッセンシャルガイド",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'はじめに', link: '/getting-started' },
      { text: '公式ウェブサイト', link: 'https://entre.nitnc.club' }
    ],

    sidebar: [
      {
        text: 'ホーム',
        link: '/'
      },
      {
        text: 'はじめに',
        link: '/getting-started'
      },
      {
        text: '定例会のはじめ方',
        link: '/weekly-meeting'
      },
      {
        text: 'イベント企画の進め方',
        link: '/event-planning'
      },
      {
        text: '部員管理',
        link: '/member-management'
      },
      {
        text: '資金管理',
        link: '/fund-management'
      },
      {
        text: '広報活動',
        link: '/public-relations'
      }
    ],

    // socialLinks: [
    //   { icon: 'web', link: 'https://entre.nitnc.club' }
    // ]
  }
})
