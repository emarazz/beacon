import { MetadataRoute } from "next"

const BASE = process.env.NEXT_PUBLIC_URL || "https://beaconauto.net"

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
      url: `${BASE}/privacy-policy`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]
}
