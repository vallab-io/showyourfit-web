import Image from "next/image";
import appIcon from "../public/app-icon.png";
import {
  Camera,
  Dumbbell,
  Mail,
  PenLine,
  Share2,
  Sparkles,
} from "lucide-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=io.vallab.showyourfit.demo";
const APP_STORE_URL = "https://apps.apple.com/app/show-your-fit/id0000000000";
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() ?? "jihoi.kang@vallab.io";

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

function GooglePlayMark() {
  return (
    <svg
      aria-hidden="true"
      className="store-button-icon google-play-icon"
      viewBox="0 0 64 64"
    >
      <path d="M13 8.5v47l24-23.5z" fill="#00a0ff" />
      <path d="M13 8.5 44.5 26 37 32z" fill="#00c853" />
      <path d="M37 32 44.5 38 13 55.5z" fill="#ff3d00" />
      <path d="M44.5 26 55 32 44.5 38 37 32z" fill="#ffd600" />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg
      aria-hidden="true"
      className="store-button-icon apple-icon"
      viewBox="0 0 24 24"
    >
      <path
        d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z"
        fill="currentColor"
      />
    </svg>
  );
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
    "https://www.instagram.com/showyour.fit",
  );

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
          <a href="#contact">문의</a>
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
                className="store-button store-button-google"
                href={androidUrl}
                aria-label="Google Play에서 다운로드"
              >
                <GooglePlayMark />
                <span>Google Play</span>
              </a>
              <a
                className="store-button store-button-apple"
                href={iosUrl}
                aria-label="App Store에서 다운로드"
              >
                <AppleMark />
                <span>App Store</span>
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

        <section
          className="section contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="section-heading">
            <p className="section-kicker">Contact</p>
            <h2 id="contact-title">문의사항이 있으신가요?</h2>
            <p>
              크로스핏 박스, 브랜드 협업, 이벤트 제휴를 편하게 남겨주세요.
            </p>
          </div>
          <div className="contact-card">
            <a
              className="contact-link contact-link-primary"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              <Mail size={18} aria-hidden="true" />
              이메일 문의하기
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Show Your Fit</span>
        <nav aria-label="푸터 메뉴">
          <a href="/privacy">개인정보처리방침</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>문의하기</a>
        </nav>
      </footer>
    </>
  );
}
