export const fallbackSiteUrl = "https://www.showyour.fit";

export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl;

  try {
    return new URL(value).origin;
  } catch {
    return fallbackSiteUrl;
  }
}
