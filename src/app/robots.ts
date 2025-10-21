import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://al-medronho-distillery.web.app'; // Replace with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cart', '/checkout'], // Disallow crawling of user-specific pages
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
