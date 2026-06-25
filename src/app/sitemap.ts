import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bwcvadodara.org";
  
  const routes = [
    "",
    "/about",
    "/trustees",
    "/activities",
    "/success-stories",
    "/gallery",
    "/downloads",
    "/events",
    "/contact",
    "/donate",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/donate" ? 0.9 : 0.8,
  }));
}
