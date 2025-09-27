export default defineEventHandler(async (event) => {
  const baseUrl = 'https://caffio.fr'

  // Pages du site avec leurs priorités SEO
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/features', priority: 0.8, changefreq: 'monthly' },
    { url: '/about', priority: 0.7, changefreq: 'monthly' },
    { url: '/screenshots', priority: 0.6, changefreq: 'weekly' },
    { url: '/contact', priority: 0.5, changefreq: 'monthly' },
    { url: '/press', priority: 0.5, changefreq: 'weekly' },
    { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
    { url: '/terms', priority: 0.3, changefreq: 'yearly' }
  ]

  const currentDate = new Date().toISOString()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.url === '/' ? `<image:image>
      <image:loc>${baseUrl}/images/caffio-mockup.png</image:loc>
      <image:title>Caffio AI Coffee Recipe App on iPhone</image:title>
      <image:caption>Caffio app showing AI-generated coffee recipes and professional brewing guides</image:caption>
    </image:image>` : ''}
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return sitemap
})