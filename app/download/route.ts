import { NextResponse, type NextRequest } from "next/server";

const FALLBACK_ANDROID_URL =
  "https://play.google.com/store/apps/details?id=io.vallab.showyourfit";
const FALLBACK_IOS_URL = "https://apps.apple.com/app/show-your-fit/id6790261756";

function validUrl(value: string | undefined, fallback: string) {
  if (!value) {
    return fallback;
  }

  try {
    return new URL(value).toString();
  } catch {
    return fallback;
  }
}

export function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";
  const universalUrl = process.env.NEXT_PUBLIC_DOWNLOAD_URL;
  const androidUrl = validUrl(
    process.env.NEXT_PUBLIC_ANDROID_APP_URL ?? universalUrl,
    FALLBACK_ANDROID_URL,
  );
  const iosUrl = validUrl(
    process.env.NEXT_PUBLIC_IOS_APP_URL ?? universalUrl,
    FALLBACK_IOS_URL,
  );
  const isIos = /iPhone|iPad|iPod/i.test(userAgent);
  const targetUrl = isIos ? iosUrl : androidUrl;

  return NextResponse.redirect(targetUrl, 307);
}
