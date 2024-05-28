# Tooltip Component

테라인터내셔널 FE 과제 테스트로 Button과 Tooltip을 TypeScript와 React로 구현한 것입니다.

## 구현로직

- Button 컴포넌트: 버튼을 랜더링 하고 마우스 이벤트를 처리합니다.
  - Button.tsx<br/><br/>
- Tooltip 컴포넌트: 툴팁을 랜더링 합니다.
  - Tooltip.tsx
  - AnyTooltip.tsx
  - CustomTooltip.tsx<br/><br/>
- BtnWrap 컴포넌트: 버튼들을 래핑하고 보여줍니다.
  - ButtonWrap.tsx
  - DelayBtnWrap.tsx
  - DirecionBtnWrap.tsx
  - DisableBtnWrap.tsx<br/><br/>
- Layout 컴포넌트: 컴포넌트들을 합쳐서 보여줍니다.
  - Layout.tsx<br/><br/>
- module.scss: SCSS 스타일을 사용하여 디자인 구현합니다.
  - anyTooltip.module.scss
  - button.module.scss
  - buttonWrap.module.scss
  - colorBtnWrap.module.scss
  - coustmTooltip.module.scss
  - delayBtnWrap.module.scss
  - directionBtnWrap.module.scss
  - disableBtn.module.scss
  - layout.module.scss
  - tooltip.module.scss<br/><br/>

## API

### Button.tsx

#### Props

- tooltipInfos: 툴팁에 표시될 정보를 포함하는 객체
- delay?: 툴팁이 나오는 지연 시간
- noticeTooltip?: 툴팁 유무를 나타내는 boolean 값
- color?: 버튼의 배경색
- onClick?: 클릭 이벤트 핸들러<br/><br/>

### Tooltip.tsx

#### Props

- tooltipInfos: 툴팁에 표시될 정보를 포함하는 객체
- detail?: 디테일 정보가 있을시 표시할 툴팁을 나눠주는 값<br/><br/>

### AnyTooltip.tsx

#### Props

- tooltipInfo: 툴팁에 표시될 정보를 포함하는 객체<br/><br/>

### CustomTooltip.tsx

#### Props

- tooltipInfo: 툴팁에 표시될 정보를 포함하는 객체<br/><br/>

## 사용 라이브러리

- SASS: 디자인 용도.
- mui/icons: 아이콘 사용 용도.

## 사용방법

1. 프로젝트를 클론합니다.
2. 필요한 종속성을 설치합니다.
3. 컴포넌트를 원하는 위치에 임포트하여 사용합니다.

## 개발 환경 설정

1. Node.js 설치
2. 프로젝트 디렉토리로 이동하여 종속성 설치: npm install
3. 개발 서버 실행: npm run start
