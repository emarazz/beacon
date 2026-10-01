import { MetadataRoute } from "next"
import { SITE_URL as BASE } from "@/ui/business"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/services`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/fleet`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/find-us`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE}/about-us`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE}/careers`,
      lastModified: new Date("2026-07-06"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/privacy-policy`,
      lastModified: new Date("2026-10-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE}/terms-and-conditions`,
      lastModified: new Date("2026-10-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]
}
