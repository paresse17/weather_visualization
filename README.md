# Interactive World Weather Globe 🌍

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Globe.gl](https://img.shields.io/badge/Globe.gl-FF6B6B?style=flat)](https://github.com/vasturiano/globe.gl)

## 🚀 Live Demo
- Production: `https://[your-username].github.io/weather-globe`
- Development: `https://weather-globe.netlify.app`

## 📅 Development Period
- Started: 2024년 11월
- Duration: 3 weeks
- Developer: [Your Name]

## 프로젝트 개요
마우스로 회전하고 확대/축소가 가능한 3D 인터랙티브 지구본 웹사이트입니다. 각 국가를 클릭하면 해당 지역의 날씨 정보와 함께 날씨 영상과 백색소음을 즐길 수 있습니다.

## 🎯 프로젝트 목표
- 직관적인 3D 지구본 인터페이스 제공
- 실시간 날씨 정보 시각화
- 몰입감 있는 사용자 경험 (날씨 영상 + 백색소음)
- 반응형 웹 디자인 구현

## ✨ 주요 기능

### 현재 구현된 기능
1. **3D 인터랙티브 지구본**
   - Globe.gl 라이브러리를 활용한 실감나는 3D 지구본
   - 마우스 드래그로 회전
   - 스크롤로 확대/축소
   - 자동 회전 애니메이션

2. **국가별 날씨 정보**
   - 50개 주요 국가 데이터
   - 수도의 날씨 정보 표시
   - 온도, 습도, 풍속, 체감온도 표시
   - 날씨 아이콘 및 설명

3. **날씨 영상 재생**
   - 날씨 상태에 따른 영상 자동 재생
   - 루프 재생 지원

4. **백색소음 기능**
   - 4가지 백색소음 옵션 (비, 바다, 바람, 숲)
   - 볼륨 조절 기능
   - 재생/일시정지 컨트롤

5. **반응형 UI/UX**
   - 모바일/태블릿 최적화
   - 부드러운 애니메이션 효과
   - 직관적인 사용자 인터페이스

## 🔗 기능별 엔트리 포인트

### 메인 페이지
- **경로**: `/index.html`
- **설명**: 3D 지구본이 표시되는 메인 화면

### 사용자 인터랙션
- **지구본 회전**: 마우스 드래그
- **확대/축소**: 마우스 스크롤
- **국가 선택**: 국가 마커 클릭
- **정보 패널**: 국가 클릭 시 우측에서 슬라이드 인
- **패널 닫기**: X 버튼 클릭

## 🚧 구현 예정 기능
1. **실제 날씨 API 연동**
   - OpenWeatherMap API 통합
   - 실시간 날씨 데이터 표시

2. **고품질 날씨 영상**
   - 날씨별 실제 영상 소스 연결
   - 다양한 날씨 상태 지원

3. **고품질 백색소음**
   - 실제 백색소음 오디오 파일 연결
   - 더 많은 사운드 옵션 추가

4. **추가 기능**
   - 검색 기능으로 국가 빠르게 찾기
   - 즐겨찾기 국가 저장
   - 날씨 예보 정보
   - 다국어 지원

## 💡 개발 권장사항

### 단기 개선사항
1. **날씨 API 키 발급 및 연동**
   - OpenWeatherMap 무료 API 키 발급
   - `js/main.js`의 API 키 교체

2. **미디어 리소스 업데이트**
   - 실제 날씨 영상 URL 연결
   - 고품질 백색소음 오디오 파일 연결

3. **성능 최적화**
   - 이미지 및 텍스처 최적화
   - 지연 로딩 구현

### 장기 개선사항
1. **데이터 관리**
   - RESTful Table API 활용한 즐겨찾기 저장
   - 사용자 설정 저장

2. **고급 기능**
   - 실시간 날씨 알림
   - 날씨 트렌드 차트
   - 소셜 공유 기능

## 🛠 기술 스택
- **Frontend Framework**: Vanilla JavaScript
- **3D Globe**: Globe.gl, Three.js
- **CSS Framework**: Custom CSS with Flexbox/Grid
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)

## 📁 프로젝트 구조
```
/
├── index.html              # 메인 HTML 파일
├── css/
│   └── style.css          # 스타일 시트
├── js/
│   ├── main.js           # 메인 JavaScript
│   └── countries-data.js # 국가 데이터
└── README.md             # 프로젝트 문서
```

## 🌐 배포
프로젝트를 배포하려면 **Publish 탭**을 사용하세요. 한 번의 클릭으로 웹사이트를 온라인에 게시하고 실시간 URL을 받을 수 있습니다.

## 📝 라이선스
이 프로젝트는 교육 및 개인 사용 목적으로 제작되었습니다.

## 🤝 기여
프로젝트 개선을 위한 제안과 기여를 환영합니다!

---

**Note**: 현재 데모 버전에서는 시뮬레이션된 날씨 데이터를 사용합니다. 실제 서비스 운영 시에는 적절한 API 키와 미디어 리소스를 연결해주세요.