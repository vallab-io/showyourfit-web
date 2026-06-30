import Image from "next/image";
import appIcon from "../public/app-icon.png";
import {
  Camera,
  Dumbbell,
  PenLine,
  Share2,
  Sparkles,
} from "lucide-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=io.vallab.showyourfit.demo";
const APP_STORE_URL = "https://apps.apple.com/app/show-your-fit/id0000000000";

const features = [
  {
    icon: Sparkles,
    title: "와드는 자동으로",
    description: "사진 한 장으로 깔끔하게 정리해줘요.",
  },
  {
    icon: PenLine,
    title: "기록은 빠르게",
    description: "오운완 기록을 남겨요.",
  },
  {
    icon: Camera,
    title: "인증샷은 예쁘게",
    description: "와드와 기록을 사진/영상 위에 자연스럽게 얹어요.",
  },
  {
    icon: Share2,
    title: "공유는 바로",
    description: "스토리로 가볍게 공유해요.",
  },
];

function getPublicUrl(value: string | undefined, fallback: string) {
  if (!value) {
    return fallback;
  }

  try {
    return new URL(value).toString();
  } catch {
    return fallback;
  }
}

export default function Home() {
  const androidUrl = getPublicUrl(
    process.env.NEXT_PUBLIC_ANDROID_APP_URL ??
      process.env.NEXT_PUBLIC_DOWNLOAD_URL,
    PLAY_STORE_URL,
  );
  const iosUrl = getPublicUrl(
    process.env.NEXT_PUBLIC_IOS_APP_URL,
    APP_STORE_URL,
  );
  const instagramUrl = getPublicUrl(
    process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    "https://www.instagram.com/showyourfit",
  );
  const supportEmail =
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() ?? "support@showyour.fit";

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Show Your Fit 홈">
          <Image
            src={appIcon}
            width={38}
            height={38}
            alt=""
            className="brand-icon"
            priority
          />
          <span>Show Your Fit</span>
        </a>
        <nav className="site-nav" aria-label="주요 메뉴">
          <a href="#features">기능</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow">
              <Dumbbell size={17} aria-hidden="true" />
              Show Your Fit
            </p>
            <h1 id="hero-title">가장 예쁜 와드<br />인증샷 앱</h1>
            <p className="hero-copy">
              와드 기록을 남기고, 인증샷까지 완성하세요.
              <br />
              운동 순간을 가장 깔끔하게 보여줍니다.
            </p>
            <div className="store-actions hero-store-actions" aria-label="앱 다운로드">
              <a
                className="store-badge-link"
                href={iosUrl}
                aria-label="Download on the App Store"
              >
                <Image
                  src="/store-badges/app-store.svg"
                  width={180}
                  height={60}
                  alt="Download on the App Store"
                  className="store-badge-image app-store-badge"
                  unoptimized
                />
              </a>
              <a
                className="store-badge-link"
                href={androidUrl}
                aria-label="Get it on Google Play"
              >
                <Image
                  src="/store-badges/google-play-badge.png"
                  width={564}
                  height={168}
                  alt="Get it on Google Play"
                  className="store-badge-image google-play-badge"
                />
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="features" aria-labelledby="features-title">
          <div className="section-heading">
            <p className="section-kicker">What it does</p>
            <h2 id="features-title">10초 만에 와드 포스터를 남겨요.</h2>
            <p>
              복잡한 입력은 줄이고, 예쁘고 빠르게
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="feature-card" key={feature.title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Show Your Fit</span>
        <nav aria-label="푸터 메뉴">
          <a href="/privacy">개인정보처리방침</a>
          <a href={`mailto:${supportEmail}`}>문의하기</a>
        </nav>
      </footer>
    </>
  );
}
