import type {MetadataRoute} from "next";
import {SITE_URL} from "@/app/_util/seo";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/*/admin", "/admin"]
        },
        sitemap: `${SITE_URL}/sitemap.xml`
    };
}
