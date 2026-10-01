import { MetadataRoute } from "next"
import { SITE_URL as BASE } from "@/ui/business"


export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${BASE}/sitemap.xml`,
  }
}
