/**
 * Utility to get the development URL for a given file path
 * Maps file paths to their corresponding Next.js routes
 */

const DEV_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

/**
 * Converts a file path to a Next.js route URL
 * @param filePath - The file path (e.g., "src/app/about/page.tsx")
 * @returns The URL path (e.g., "/about")
 */
export function getPageUrlFromPath(filePath: string): string {
  // Remove workspace path prefix if present
  let path = filePath.replace(/^.*\/src\/app/, "");
  
  // Handle app router pages
  if (path.includes("/page.tsx") || path.includes("/page.ts")) {
    path = path.replace(/\/page\.tsx?$/, "");
  }
  
  // Handle layout files - return root
  if (path.includes("/layout.tsx") || path.includes("/layout.ts")) {
    return "/";
  }
  
  // Handle error pages
  if (path.includes("/error.tsx") || path.includes("/error.ts")) {
    // Error pages don't have a direct URL, return root
    return "/";
  }
  
  // Handle loading pages
  if (path.includes("/loading.tsx") || path.includes("/loading.ts")) {
    // Loading pages don't have a direct URL, return root
    return "/";
  }
  
  // Handle not-found pages
  if (path.includes("/not-found.tsx") || path.includes("/not-found.ts")) {
    return "/404";
  }
  
  // Handle API routes
  if (path.includes("/api/") && path.includes("/route.ts")) {
    path = path.replace(/\/route\.ts$/, "");
    return `${DEV_URL}${path}`;
  }
  
  // Clean up the path
  path = path.replace(/^\//, ""); // Remove leading slash
  path = path || "/"; // Default to root
  
  return path.startsWith("/") ? path : `/${path}`;
}

/**
 * Gets the full development URL for a file path
 * @param filePath - The file path
 * @returns Full URL (e.g., "http://localhost:3000/about")
 */
export function getFullPageUrl(filePath: string): string {
  const path = getPageUrlFromPath(filePath);
  
  // If it's already a full URL (API routes), return as is
  if (path.startsWith("http")) {
    return path;
  }
  
  return `${DEV_URL}${path}`;
}

/**
 * Gets a markdown link for the page
 * @param filePath - The file path
 * @param label - Optional label for the link
 * @returns Markdown link string
 */
export function getPageLink(filePath: string, label?: string): string {
  const url = getFullPageUrl(filePath);
  const path = getPageUrlFromPath(filePath);
  const linkLabel = label || path || "Home";
  
  return `[${linkLabel}](${url})`;
}
