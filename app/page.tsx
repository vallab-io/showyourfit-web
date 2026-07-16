import Image from "next/image";
import Link from "next/link";
import appIcon from "../public/app-icon.png";
import {
  Camera,
  Instagram,
  Mail,
  PenLine,
  Share2,
  Sparkles,
} from "lucide-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=io.vallab.showyourfit";
const APP_STORE_URL = "https://apps.apple.com/app/show-your-fit/id6790261756";
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() ?? "jihoi.kang@vallab.io";

const highlights = [
  {
    icon: Sparkles,
    title: "와드 사진 분석",
    description: "화이트보드·와드 사진을 분석해서 정리해요.",
  },
  {
    icon: PenLine,
    title: "빠른 수정",
    description: "분석된 내용에 필요한 부분만 간단하게 변경할 수 있어요.",
  },
  {
    icon: Camera,
    title: "인증샷 템플릿",
    description: "사진 위에 와드·기록을 자연스럽게 얹어요.",
  },
  {
    icon: Share2,
    title: "스토리 공유",
    description: "완성된 인증샷을 바로 저장하고 공유해요.",
  },
];

const workflow = [
  {
    icon: Sparkles,
    label: "WOD",
    title: "와드 사진 한 장으로 시작하세요.",
    description:
      "매번 직접 입력하지 않아도 AI가 사진을 분석해 운동 방식, 라운드, 동작을 채워줍니다.",
    image: "/template/template_ai_wod.png",
    alt: "와드 사진 분석 후 운동 정보를 확인하는 화면",
  },
  {
    icon: PenLine,
    label: "Edit",
    title: "필요한 부분만 빠르게 수정하세요.",
    description:
      "동작, 반복 수, 단위처럼 기록에 필요한 값만 깔끔하게 확인하고 수정할 수 있어요.",
    image: "/template/template_manual_add_wod.png",
    alt: "와드 동작과 반복 수를 직접 수정하는 화면",
  },
  {
    icon: Camera,
    label: "Poster",
    title: "바로 와드 인증샷이 됩니다.",
    description:
      "기록, 날짜, 동작 정보가 사진 위에 어울리도록 올라가서 인증샷이 더 보기 좋아집니다.",
    image: "/template/template_overlay_variable_template.png",
    alt: "운동 사진 위에 와드 기록이 얹힌 포스터 화면",
  },
  {
    icon: Share2,
    label: "Share",
    title: "스토리까지 한 번에 공유하세요.",
    description:
      "저장과 공유 흐름을 짧게 만들어 운동이 끝난 순간을 바로 남길 수 있습니다.",
    image: "/template/template_share_instagram_story.png",
    alt: "인스타그램 스토리에 와드 인증샷을 공유하는 화면",
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

function StoreButtons({
  androidUrl,
  iosUrl,
}: {
  androidUrl: string;
  iosUrl: string;
}) {
  return (
    <div className="store-actions" id="download" aria-label="앱 다운로드">
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
          <span>showyour.fit</span>
        </a>
        <nav className="site-nav" aria-label="주요 메뉴">
          <a href="#overview">소개</a>
          <a href="#how-it-works">사용 흐름</a>
          <a href="#contact">문의</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <Image
              src={appIcon}
              width={96}
              height={96}
              alt=""
              className="hero-app-icon"
              priority
            />
            <p className="hero-kicker">가장 예쁜 와드 인증샷 앱</p>
            <h1 id="hero-title">Show Your Fit</h1>
            <p className="hero-copy">
              와드를 기록하고, 사진 위에 자연스럽게 얹고,
              <br />
              운동이 끝난 순간 바로 공유하세요.
            </p>
            <StoreButtons androidUrl={androidUrl} iosUrl={iosUrl} />
          </div>
        </section>

        <section
          className="section intro-section"
          id="overview"
          aria-labelledby="intro-title"
        >
          <div className="section-heading">
            <p className="section-kicker">WOD to Story</p>
            <h2 id="intro-title">기록은 짧게, 인증샷은 더 예쁘게.</h2>
            <p>
              Show Your Fit은 와드 입력부터 사진 템플릿, 저장과 공유까지 운동
              후 남기는 순간을 하나의 흐름으로 정리합니다.
            </p>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article className="highlight-item" key={item.title}>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="section workflow-section"
          id="how-it-works"
          aria-labelledby="features-title"
        >
          <div className="section-heading">
            <p className="section-kicker">How it works</p>
            <h2 id="features-title">운동이 끝난 뒤 10초면 충분해요.</h2>
            <p>
              사진을 고르고, 와드를 확인하고, 마음에 드는 템플릿으로 바로
              공유하세요.
            </p>
          </div>
          <div className="workflow-grid">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="workflow-item" key={item.title}>
                  <div className="workflow-copy">
                    <span className="workflow-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="workflow-label">
                      <Icon size={18} aria-hidden="true" />
                      {item.label}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="workflow-media">
                    <Image
                      src={item.image}
                      width={1290}
                      height={1896}
                      alt={item.alt}
                      className="workflow-image"
                      sizes="(max-width: 720px) 92vw, (max-width: 1180px) 44vw, 520px"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-inner">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 id="contact-title">문의사항이 있으신가요?</h2>
              <p>
                크로스핏 박스, 브랜드 협업, 이벤트 제휴는 이메일이나 Instagram
                DM으로 편하게 문의해주세요.
              </p>
            </div>
            <div className="contact-actions">
              <a
                className="contact-link contact-link-primary"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                <Mail size={18} aria-hidden="true" />
                이메일 문의하기
              </a>
              <a
                className="contact-link"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={18} aria-hidden="true" />
                Instagram DM
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Show Your Fit</span>
        <nav aria-label="푸터 메뉴">
          <Link href="/#contact">문의하기</Link>
        </nav>
      </footer>
    </>
  );
}
