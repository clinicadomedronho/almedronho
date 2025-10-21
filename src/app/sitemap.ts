import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://al-medronho-distillery.web.app'; // Replace with your actual domain

  // Static routes
  const staticRoutes = [
    '/', 
    '/medronho-101', 
    '/production', 
    '/products', 
    '/recipes', 
    '/visits', 
    '/research', 
    '/blog', 
    '/store', 
    '/contact', 
    '/where-to-buy', 
    '/faq', 
    '/terms', 
    '/privacy',
    '/partners'
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: route === '/' ? 1.0 : 0.8,
  }));

  // In a real app, you would fetch dynamic routes (e.g., products, blog posts) from your database
  // const products = await fetchFromFirestore('products');
  // const productUrls = products.map(product => ({
  //   url: `${baseUrl}/products/${product.slug}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'weekly',
  //   priority: 0.7
  // }));

  return [
    ...staticUrls,
    // ...productUrls,
  ];
}
