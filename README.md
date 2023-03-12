## 띵스플로우 React Native 기업과제

### 실행 방법

```
yarn install

yarn start
```

#### iOS
```
cd ios
pod install

cd ..
yarn ios
```

#### Android
```
yarn android
```

### 실행 화면

https://user-images.githubusercontent.com/124783821/224530158-ae9934b9-bb8d-4efd-980c-aec70db6ab52.mp4

### 기술 스택
- Typescript
- React-Native
- Context API
- emotion

### 폴더 구조
```
📦src
 ┣ 📂app_provider
 ┃
 ┣ 📂components // 페이지별로 사용될 컴포넌트
 ┃ ┣ 📂common // 공통으로 사용될 컴포넌트
 ┃ ┃ ┣ 📂ad
 ┃ ┃ ┃ ┣ 📜Ad.styles.ts
 ┃ ┃ ┃ ┗ 📜Ad.tsx
 ┃ ┃ ┣ 📂error
 ┃ ┃ ┃ ┣ 📜Error.styles.ts
 ┃ ┃ ┃ ┗ 📜Error.tsx
 ┃ ┃ ┗ 📂indicator
 ┃ ┃ ┃ ┣ 📜Indicator.styles.ts
 ┃ ┃ ┃ ┗ 📜Indicator.tsx
 ┃ ┣ 📂detail // detail에서 사용될 컴포넌트
 ┃ ┃ ┣ 📂content
 ┃ ┃ ┃ ┣ 📜Content.styles.ts
 ┃ ┃ ┃ ┗ 📜Content.tsx
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📜DetailHeader.styles.ts
 ┃ ┃ ┃ ┗ 📜DetailHeader.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂home // home에서 사용될 컴포넌트
 ┃ ┃ ┣ 📂card
 ┃ ┃ ┃ ┣ 📜Card.styles.ts
 ┃ ┃ ┃ ┗ 📜Card.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┗ 📜index.ts
 ┣ 📂constants // 상수
 ┃
 ┣ 📂context // Context API
 ┃
 ┣ 📂hooks // 커스텀 훅
 ┃
 ┣ 📂screens // 스크린
 ┃
 ┣ 📂styles // style
 ┃
 ┣ 📂types // 타입
 ┃
 ┣ 📂utils // utils
 ┃
 ┗ 📜App.tsx
```

