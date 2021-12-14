const twitterHandle = 'ilesjs'

const site = {
  title: 'îles',
  description: 'The Joyful Site Generator',
  year: new Date().getFullYear(),

  url: 'https://iles-docs.netlify.app',
  canonical: 'iles-docs.netlify.app',

  tags: ['îles', 'iles', 'vuejs', 'vitejs', 'ssg', 'open source', 'partial hydration', 'islands of interactivity'],

  author: 'Máximo Mussini',
  github: 'https://github.com/ElMassimo/iles',
  twitterHandle,
  twitter: `https://twitter.com/${twitterHandle}`,

  nav: [
    { text: 'Guide', link: '/guide' },
    { text: 'Config', link: '/config' },
    { text: 'FAQs', link: '/faqs' },
  ],

  sidebar: {
    '/': [
      {
        text: 'Guide',
        children: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide' },
          { text: 'Development', link: '/guide/development' },
          { text: 'Markdown', link: '/guide/markdown' },
          { text: 'Meta Tags', link: '/guide/meta-tags' },
          { text: 'Hydration', link: '/guide/hydration' },
          { text: 'Frameworks', link: '/guide/frameworks' },
          { text: 'Client Scripts', link: '/guide/client-scripts' },
          { text: 'Routing', link: '/guide/routing' },
          { text: 'RSS Feeds', link: '/guide/rss' },
          { text: 'Plugins', link: '/guide/plugins' },
          { text: 'Deployment', link: '/guide/deployment' },
        ],
      },
      {
        text: 'FAQs',
        children: [
          { text: 'FAQs', link: '/faqs' },
          { text: 'Troubleshooting', link: '/faqs/troubleshooting' },
        ],
      },
    ],
  },
}

export default site
