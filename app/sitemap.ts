import type { MetadataRoute } from "next";

// Data
import { routes, siteUrl } from "@/app/data";

// Generated at build time, so lastModified always reflects the latest deploy
const sitemap = (): MetadataRoute.Sitemap => {
    return routes.map((route) => ({
        url: `${siteUrl}${route.path === "/" ? "" : route.path}`,
        lastModified: new Date(),
        priority: route.path === "/" ? 1 : 0.8,
    }));
};

export default sitemap;
