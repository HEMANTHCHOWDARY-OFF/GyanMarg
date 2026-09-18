import { useEffect } from "react";

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  robots?: "index, follow" | "noindex, nofollow" | "noindex, follow";
  jsonLd?: Record<string, any>;
}

export const DEFAULT_SITE_TITLE = "GyanMarg AI — Personalized Learning & Competency Development";
export const DEFAULT_SITE_DESCRIPTION =
  "GyanMarg AI empowers learners to assess baseline competencies, quantify skill gaps, discover curated courses, and navigate source-cited adaptive learning pathways.";

/**
 * Resolves the absolute canonical base URL safely.
 * Prefers VITE_SITE_URL environment variable; falls back to https://gyanmarg.ai
 * to prevent leaking localhost or temporary staging domains into production metadata.
 */
export function getSiteBaseUrl(): string {
  const envUrl = import.meta.env.VITE_SITE_URL;
  if (envUrl && typeof envUrl === "string" && envUrl.trim() !== "") {
    return envUrl.replace(/\/+$/, "");
  }
  if (typeof window !== "undefined" && window.location.origin) {
    const origin = window.location.origin;
    if (!origin.includes("localhost") && !origin.includes("127.0.0.1") && !origin.includes("0.0.0.0")) {
      return origin;
    }
  }
  return "https://gyanmarg.ai";
}

export default function SEO({
  title,
  description = DEFAULT_SITE_DESCRIPTION,
  canonicalPath = "",
  ogType = "website",
  ogImage = "/gyanmarg_logo.jpg",
  robots = "index, follow",
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    const finalTitle = title ? (title.includes("GyanMarg AI") ? title : `${title} | GyanMarg AI`) : DEFAULT_SITE_TITLE;
    document.title = finalTitle;

    // Helper to get or create a meta tag
    const setMeta = (selector: string, attrName: string, attrVal: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Helper to get or create a link tag
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // 2. Meta description & robots
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", robots);

    // 3. Canonical URL
    const baseUrl = getSiteBaseUrl();
    const cleanPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
    const fullCanonical = `${baseUrl}${cleanPath === "/" ? "" : cleanPath}`;
    setLink("canonical", fullCanonical);

    // 4. Open Graph
    const absoluteImage = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;
    setMeta('meta[property="og:title"]', "property", "og:title", finalTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", fullCanonical);
    setMeta('meta[property="og:type"]', "property", "og:type", ogType);
    setMeta('meta[property="og:image"]', "property", "og:image", absoluteImage);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "GyanMarg AI");

    // 5. Twitter Card
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", finalTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", absoluteImage);

    // 6. JSON-LD structured data if provided
    let scriptTag: HTMLScriptElement | null = null;
    if (jsonLd) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      scriptTag.setAttribute("data-seo-jsonld", "true");
      scriptTag.text = JSON.stringify(jsonLd);
      document.head.appendChild(scriptTag);
    }

    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, description, canonicalPath, ogType, ogImage, robots, jsonLd]);

  return null;
}
