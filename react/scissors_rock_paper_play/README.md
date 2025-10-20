# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 프로젝트 안내 (한글)

이 프로젝트는 `React`와 `Vite`를 기반으로 하는 프론트엔드 애플리케이션입니다. 빠른 개발 경험(HMR), 간단한 번들 설정, 그리고 일관된 코드 품질 유지를 위해 Vite와 ESLint 구성을 사용합니다.

### 설치 방법

- 필수 요구사항
  - Node.js: 18 이상 권장 (LTS 버전 권장)
  - 패키지 매니저: npm, yarn 또는 pnpm 중 하나

- 설치 절차
  ```bash
  # 저장소 클론 (예시)
  git clone <repo-url>
  cd scissors_rock_paper_play

  # 의존성 설치
  npm install
  # 또는
  # yarn
  # pnpm install
  ```

### 실행 방법

- 개발 서버 실행
  ```bash
  npm run dev
  ```
  개발 서버가 시작되면 터미널에 표시되는 로컬 주소로 접속하세요.

- 프로덕션 빌드
  ```bash
  npm run build
  ```
  `dist/` 디렉터리에 최적화된 정적 파일이 생성됩니다.

- 빌드 결과 미리보기(로컬 서버)
  ```bash
  npm run preview
  ```
  로컬에서 프로덕션 빌드 결과를 간단히 확인할 수 있습니다.

- 린트 검사
  ```bash
  npm run lint
  ```
  ESLint 규칙에 따라 코드 품질을 점검합니다.

### 왜 이렇게 구성했나요?

- 빠른 개발 경험: `Vite`는 매우 빠른 서버 시작 속도와 HMR을 제공해 UI를 빠르게 반복 개발할 수 있습니다.
- 최신 React 사용: `react@19` 기반으로 최신 기능과 생태계 이점을 활용합니다.
- 간결한 스크립트: `package.json`의 스크립트(`dev`, `build`, `preview`, `lint`)만으로 개발-빌드-미리보기-품질검사를 일관되게 수행할 수 있습니다.
- 코드 품질 보장: `eslint`와 관련 플러그인을 통해 기본적인 코드 품질과 일관성을 유지합니다.

필요 시 TypeScript 템플릿으로 확장하거나 테스트 도구(Vitest/Jest) 등을 추가해 품질을 강화할 수 있습니다.
