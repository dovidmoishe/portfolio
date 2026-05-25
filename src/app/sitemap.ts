import type { MetadataRoute } from "next";
import { getProjectsViewModel } from "@/features/projects/store";
import { sitemapEntry } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const { projects } = getProjectsViewModel();

  return [
    sitemapEntry("/", 1, "weekly"),
    ...projects.map((project) =>
      sitemapEntry(`/projects/${project.slug}`, 0.8, "monthly")
    ),
  ];
}
