# ShowYourFit Web

Show Your Fit 앱 소개와 다운로드 연결을 위한 Next.js 랜딩 페이지입니다. Vercel 배포를 기준으로 구성했습니다.

## 실행

```bash
npm install
npm run dev
```

## 배포

Vercel에서 `showyourfit-web` 디렉터리를 프로젝트 루트로 선택하면 됩니다.

## 환경변수

`.env.example`을 기준으로 Vercel Project Settings에 값을 등록하세요.

- `NEXT_PUBLIC_DOWNLOAD_URL`: 기본 다운로드 링크
- `NEXT_PUBLIC_ANDROID_APP_URL`: Android 다운로드 링크
- `NEXT_PUBLIC_IOS_APP_URL`: iOS 다운로드 링크
- `NEXT_PUBLIC_SITE_URL`: 배포된 웹사이트 주소
- `NEXT_PUBLIC_INSTAGRAM_URL`: 인스타그램 링크
- `NEXT_PUBLIC_SUPPORT_EMAIL`: 문의 이메일

`/download` 경로는 iOS 사용자에게 iOS 링크를 우선 적용하고, 그 외에는 Android 링크로 이동합니다.

개인정보처리방침은 `/privacy` 경로에서 확인할 수 있습니다.
