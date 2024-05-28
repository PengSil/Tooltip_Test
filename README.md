# Tooltip Component

테라인터내셔널 FE 과제 테스트로 Button과 Tooltip를 TypeScript와 React로 구현한 것입니다.

## 구현로직

- Button 컴포넌트: 버튼을 랜더링 하고 마우스 이벤트를 처리합니다.
  - Button.tsx
- Tooltip 컴포넌트: 툴팁을 랜더링 합니다.
  - Tooltip.tsx
  - AnyTooltip.tsx
  - CustomTooltip.tsx
- BtnWrap 컴포넌트: 버튼들을 래핑하고 보여줍니다.
  - ButtonWrap.tsx
  - DelayBtnWrap.tsx
  - DirecionBtnWrap.tsx
  - DisableBtnWrap.tsx
- Layout 컴포넌트: 컴포넌트들을 합쳐서 보여줍니다.
  - Layout.tsx
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
  - tooltip.module.scss

## API

### Button.tsx

#### Props

- tooltipInfos: 툴팁에 표시될 정보를 포함하는 객체
- noticeTooltip: 툴팁 유무를 나타내는 boolean 값
- color: 버튼의 배경색
- onClick: 클릭 이벤트 핸들러
