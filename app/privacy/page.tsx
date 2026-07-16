import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const supportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() ?? "jihoi.kang@vallab.io";

export const metadata: Metadata = {
  title: "개인정보처리방침 | Show Your Fit",
  description:
    "Show Your Fit 앱에서 처리하는 개인정보, 이용 목적, 제3자 처리 위탁, 보관 기간 및 사용자 권리를 안내합니다.",
};

const dataCategories = [
  {
    title: "사용자가 선택하거나 촬영한 사진 및 영상",
    body: "사용자가 와드 분석, 포스터 생성, 저장 또는 공유 기능을 이용하기 위해 직접 선택하거나 촬영한 사진 및 영상이 처리될 수 있습니다. 앱은 사용자의 전체 갤러리를 임의로 수집하지 않으며, 사용자가 기능 이용을 위해 선택한 항목만 처리합니다.",
  },
  {
    title: "와드 텍스트, 운동 기록 및 분석 결과",
    body: "사진에서 인식된 와드 텍스트, 운동 방식, 동작, 라운드, 기록, 메모, 날짜 등 사용자가 입력하거나 AI 분석을 통해 생성된 운동 관련 정보가 처리될 수 있습니다. 사용자가 저장한 운동 기록은 기본적으로 기기 내 로컬 데이터베이스에 저장됩니다.",
  },
  {
    title: "앱 설정 및 로컬 저장 데이터",
    body: "다크 모드 설정, 사용 안내 확인 여부, 저장된 포스터 또는 영상의 로컬 경로처럼 앱 사용을 이어가기 위해 필요한 설정과 저장 정보가 기기 내에 보관될 수 있습니다.",
  },
  {
    title: "기기 정보, 앱 사용 이벤트 및 크래시 로그",
    body: "앱 버전, 운영체제 버전, 기기 모델, 언어/지역 설정, 앱 실행 및 주요 기능 사용 이벤트, 오류 로그, 크래시 발생 시점의 진단 정보가 앱 품질과 안정성 개선을 위해 처리될 수 있습니다.",
  },
  {
    title: "광고 관련 정보",
    body: "광고 노출, 광고 클릭, 광고 식별자, 광고 성과 측정 정보, 광고 개인화 설정 또는 동의 상태와 같은 정보가 광고 제공 및 성과 측정을 위해 처리될 수 있습니다.",
  },
];

const serviceProviders = [
  {
    name: "Google Cloud Functions 및 Google Gemini API",
    purpose: "사용자가 선택한 와드 사진 또는 텍스트를 서버에서 분석하고 구조화된 분석 결과를 생성하기 위해 사용됩니다.",
  },
  {
    name: "Firebase Analytics",
    purpose: "앱 실행, 와드 분석 시작/성공/실패, 포스터 저장 및 공유 같은 사용 이벤트를 측정해 앱 품질과 기능 흐름을 개선하기 위해 사용됩니다.",
  },
  {
    name: "Firebase Crashlytics",
    purpose: "앱 오류, 크래시, 기기 및 운영체제 정보를 분석해 안정성을 개선하기 위해 사용됩니다.",
  },
  {
    name: "Google AdMob",
    purpose: "앱 내 광고 제공, 광고 노출 및 성과 측정, 광고 품질 관리를 위해 사용될 수 있습니다.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Show Your Fit 홈">
          <Image
            src="/app-icon.png"
            width={38}
            height={38}
            alt=""
            className="brand-icon"
            priority
          />
          <span>showyour.fit</span>
        </Link>
      </header>

      <main className="policy-page">
        <section className="policy-hero" aria-labelledby="privacy-title">
          <p className="section-kicker">Privacy Policy</p>
          <h1 id="privacy-title">개인정보처리방침</h1>
          <p>
            Show Your Fit은 사용자가 선택한 운동 사진과 와드 정보를 바탕으로
            분석, 기록, 포스터 생성 및 공유 기능을 제공하는 앱입니다. 본 방침은
            앱이 어떤 데이터를 어떤 목적으로 처리하고, 어떤 외부 서비스가 처리에
            관여할 수 있으며, 사용자가 어떤 권리를 행사할 수 있는지 설명합니다.
          </p>
          <span>시행일: 2026년 7월 16일</span>
        </section>

        <article className="policy-card">
          <section>
            <h2>1. 개인정보 처리방침의 적용 범위</h2>
            <p>
              본 개인정보처리방침은 Show Your Fit 모바일 앱 및 앱과 연결된 웹
              페이지에 적용됩니다. 앱에서 제공하는 와드 분석, 운동 기록, 포스터
              생성, 갤러리 저장, 공유 및 광고 기능을 이용하는 과정에서 아래와
              같은 데이터가 처리될 수 있습니다.
            </p>
            <p>
              Show Your Fit은 사용자가 직접 선택하거나 기능 이용 과정에서 필요한
              데이터만 처리하며, 사용자의 전체 사진첩, 전체 파일 목록, 연락처,
              위치 정보 등을 임의로 수집하지 않습니다.
            </p>
            <p>
              운영자 및 개인정보 관련 문의처는{" "}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>입니다.
            </p>
          </section>

          <section>
            <h2>2. 수집 및 처리하는 데이터</h2>
            <div className="policy-detail-list">
              {dataCategories.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>3. 데이터 사용 목적</h2>
            <p>
              Show Your Fit은 수집 또는 생성된 데이터를 다음 목적 범위 내에서
              사용합니다.
            </p>
            <ul>
              <li>
                <strong>와드 분석:</strong> 사용자가 선택한 사진 또는 입력한
                텍스트에서 운동 방식, 동작, 라운드, 기록 등 와드 정보를 분석하고
                정리합니다.
              </li>
              <li>
                <strong>포스터 생성:</strong> 분석 결과와 사용자가 선택한 사진
                또는 영상을 조합하여 저장하거나 공유할 수 있는 운동 인증 이미지를
                생성합니다.
              </li>
              <li>
                <strong>앱 안정성 개선:</strong> 오류, 크래시, 성능 저하 원인을
                파악하고 앱 품질을 개선합니다.
              </li>
              <li>
                <strong>광고 제공:</strong> 앱 내 광고를 표시하고 광고 노출,
                클릭, 성과를 측정합니다. 광고 개인화 여부는 사용자의 기기 설정
                또는 관련 동의 상태에 따라 달라질 수 있습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2>4. 제3자 제공 및 처리 위탁</h2>
            <p>
              Show Your Fit은 앱 기능 제공, 와드 분석, 광고, 앱 사용 분석 및
              안정성 개선을 위해 아래 외부 서비스 또는 SDK를 사용할 수 있습니다.
              이러한 서비스는 각 기능 제공에 필요한 범위에서 데이터를 처리할 수
              있으며, 처리되는 데이터의 종류는 사용자가 실제로 이용하는 기능과
              기기 설정에 따라 달라질 수 있습니다.
            </p>
            <div className="policy-detail-list">
              {serviceProviders.map((provider) => (
                <div key={provider.name}>
                  <h3>{provider.name}</h3>
                  <p>{provider.purpose}</p>
                </div>
              ))}
            </div>
            <p>
              Show Your Fit은 사용자의 개인정보를 금전적 대가를 받고 판매하지
              않습니다. 다만 법령상 의무 준수, 유효한 정부기관 요청, 보안 사고
              대응, 서비스 제공을 위한 처리 위탁 등 필요한 경우에는 관련 법령과
              정책이 허용하는 범위에서 데이터가 처리될 수 있습니다.
            </p>
          </section>

          <section>
            <h2>5. 데이터 보관 및 삭제</h2>
            <ul>
              <li>
                와드 분석을 위해 사용자가 선택한 이미지는 분석 요청을 처리하기
                위해 Google Cloud Functions로 일시적으로 전송 또는 처리될 수
                있으나, 운영자가 분석용 이미지를 별도 서버에 장기 보관하지
                않습니다.
              </li>
              <li>
                사용자가 입력하거나 저장한 와드 기록, 앱 설정, 생성한 포스터 또는
                영상 정보는 사용자의 기기 또는 휴대폰 갤러리에 저장됩니다.
              </li>
              <li>
                앱 삭제 시 기기에 저장된 앱의 로컬 데이터는 함께 삭제될 수
                있습니다. 단, 사용자가 별도로 갤러리에 저장한 사진 또는 영상은
                기기 정책에 따라 앱 삭제 후에도 남아 있을 수 있으며 사용자가 직접
                삭제할 수 있습니다.
              </li>
              <li>
                광고, 크래시 분석, 앱 사용 분석과 관련하여 외부 서비스가 처리하는
                로그 또는 진단 정보는 각 서비스의 정책 및 법령상 보관 의무에 따라
                일정 기간 보관될 수 있습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2>6. 데이터의 안전한 처리</h2>
            <p>
              Show Your Fit은 필요한 범위의 데이터만 처리하고, 서버와 통신이
              필요한 경우 안전한 통신 방식을 사용하기 위해 노력합니다. 외부
              서비스와 SDK를 사용하는 경우 해당 제공자의 보안 및 개인정보 보호
              정책에 따라 데이터가 처리될 수 있습니다.
            </p>
            <p>
              사용자는 민감한 개인정보가 포함된 사진이나 영상을 선택하지 않도록
              주의해야 하며, 포스터 또는 스토리 공유 기능을 사용할 때 공유되는
              내용과 공개 범위를 직접 확인해야 합니다.
            </p>
          </section>

          <section>
            <h2>7. 사용자 권리 및 선택</h2>
            <ul>
              <li>
                사용자는 앱을 삭제하여 기기에 저장된 앱 로컬 데이터를 삭제할 수
                있습니다.
              </li>
              <li>
                현재 Show Your Fit은 계정 생성 또는 로그인 기능을 제공하지
                않으므로, 계정 기반의 조회, 수정, 탈퇴 기능은 제공하지 않습니다.
              </li>
              <li>
                광고 개인화, 광고 식별자 재설정, 앱 추적 허용 여부 등은 사용자의
                기기 운영체제 설정 또는 광고 설정에서 변경할 수 있습니다.
              </li>
              <li>
                개인정보 처리와 관련하여 문의, 정정, 삭제 요청 또는 기타 의견이
                있는 경우 아래 문의 이메일로 연락할 수 있습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2>8. 아동의 개인정보</h2>
            <p>
              Show Your Fit은 아동을 주 대상으로 설계된 서비스가 아니며, 법정
              대리인의 동의가 필요한 아동의 개인정보를 고의로 수집하지 않습니다.
              관련 문의가 있는 경우 아래 이메일로 연락해 주세요.
            </p>
          </section>

          <section>
            <h2>9. 개인정보처리방침의 변경</h2>
            <p>
              본 방침은 앱 기능, 사용 중인 외부 서비스, 법령 또는 스토어 정책의
              변경에 따라 업데이트될 수 있습니다. 중요한 변경이 있는 경우 앱,
              웹사이트 또는 스토어 페이지를 통해 변경 내용을 안내할 수 있습니다.
            </p>
          </section>

          <section>
            <h2>10. 문의</h2>
            <p>
              개인정보 처리와 관련한 문의는{" "}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>로 보내주세요.
              문의 시 요청 내용을 확인하기 위해 필요한 최소한의 정보만 처리하며,
              문의 대응 목적 외로 사용하지 않습니다.
            </p>
          </section>
        </article>
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
