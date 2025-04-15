## 🏆 5th UMC Seoul Hackathon 2위
## 👋 carpe diem! 소개 

다재다능하고 활동적인 ESTP를 위한 맞춤 서비스 'carpe diem!'을 소개합니다 🙌 <br>
carpe diem!에서는 gpt를 이용한 음성녹음 분석 기능 통해 매일 색다른 하루를 경험하도록 도와줍니다 👼

<img src="https://img.shields.io/badge/React-41BADB?style=flat-square&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/spring boot-6db33f?style=flat-square&logo=springboot&logoColor=white" />

---
~24/3/3 까지 라이브 서비스 되었으며, 현재 서버가 폐쇄되었음을 알립니다.

## 서비스 시연 영상(24.1.2)
https://youtu.be/bounRp-UQIc

## 🎯 핵심 기능

### 👁️‍🗨️ 오늘의 알쓸신잡
특별히 엄선한 오늘의 시사 상식을 확인할 수 있습니다.

### 🎙️ 음성녹음 분석
음성녹음 혹은 텍스트로 오늘 하고자하는 활동에 대해 입력합니다.

### 🎡 활동 추천 룰렛
입력된 내용을 gpt가 분석하여 활동을 리스팅해줍니다 -> 룰렛을 통해 오늘의 활동 랜덤 선택!

### 🗺️ 활동 장소 추천
추천된 활동을 바탕으로, 해당 활동을 할 수 있는 장소 정보를 제공합니다.

## Front-End
- 사용자로부터 입력 받은 <b>음성을 텍스트화해 실시간 화면 표시 기능 및 UI 개발</b>
- OpenAI API 활용, 룰렛 키워드 생성 기능 구현(현재 서버로 이전), 프롬프트 개선
- KaKao Map API 활용, 사용자의 <b>현재 위치 기반 장소 탐색 옵션 구현</b>
- html2canvas 라이브러리 활용, 룰렛 결과를 버튼으로 캡쳐, 사용자의 기기에 저장 기능 구현

---
## 🔍 Architecture
<img src="https://github.com/UMC-E-TEAM/.github/blob/main/architecture.png" width="764" height="430" >

---

## 👨‍👩‍👧‍👦 팀원 소개

### PM, Design
| <img src="https://avatars.githubusercontent.com/u/99470706?v=4" width="60" height="60"> | <img src="https://github.com/UMC-E-TEAM/.github/blob/main/%EC%83%88%EB%B2%BD.png" width="48" height="60"> |
|:---:|:---:|
| [앤/최서영](https://github.com/akaseoyoung) | [새벽/조수빈](https://exclusive-sunshine-694.notion.site/af6151a8dcbe49d982b3ac7dde8ebeb7?pvs=4) |
| - 기획 총괄 | - 디자인 총괄 |

### Backend
| <img src="https://avatars.githubusercontent.com/u/102315673?v=4" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/80883709?v=4" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/104496031?v=4" width="60" height="60"> |
|:---:|:---:|:---:|
| [짐니/김지민](https://github.com/zzimnii) | [주이/송주희](https://github.com/jhsong76) | [윤젬/윤제민](https://github.com/Yoon-Jemin) |
| - chatGPT API 연동 | - 서버 배포 | - 음성/텍스트 입력 API |

### Frontend
| <img src="https://avatars.githubusercontent.com/u/79906093?v=4" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/137189866?v=4" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/129590633?v=4" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/49388937?v=4" width="60" height="60"> |
|:---:|:---:|:---:|:---:|
| [히동/김소희](https://github.com/sohee5143) | [제트/노찬영](https://github.com/shroqkf) | [은별/정은지](https://github.com/bianbbc87) | [사비엔/한우준](https://github.com/MrMirror21) |
| - 추천장소 | - 알쓸신잡 | - 룰렛 | - 음성인식 |

