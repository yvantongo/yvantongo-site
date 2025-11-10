import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yvantongo.com";

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/manifeste`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/articles`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projets`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/a-propos`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
