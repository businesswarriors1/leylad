import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { TREATMENTS } from "@/lib/treatments";
import { CONCERNS } from "@/lib/concerns";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/treatment-services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/laser-treatments`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/blog`, lastModified, changeFrequency: "weekly", priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms-conditions`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const treatmentRoutes: MetadataRoute.Sitemap = TREATMENTS.filter(
    (t) => !t.inMenuOnly
  ).map((t) => ({
    url: `${base}${t.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const concernRoutes: MetadataRoute.Sitemap = CONCERNS.map((c) => ({
    url: `${base}${c.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...concernRoutes];
}
