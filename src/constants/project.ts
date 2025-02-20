import {
  profile_dragonPng,
  logo_kjobs, logo_armyjobPng, logo_thefirsteduPng, logo_drlucidPng, logo_gemmyPng, logo_nutritionPng, logo_stackoverflowPng,
  kjobslinkImg, kjobsGlobal, thisPortfolioImg, theFirstEduImg, theFirstEduMImg, portfolioImg, nutritionImg, stackOverflowImg, goldenCityImg, ioImg, armyJobImg, drLucidImg, gemmyImg
} from "../assets/images/projectImage";

const all = [
  {icon: logo_kjobs, name: "케이잡스링크", image: kjobslinkImg, detail: "비자업무 대행 및 기업연계까지 원스톱으로 진행되는 글로벌 인재채용 서비스의 프로젝트 매니저를 맡았습니다.", role: "개발자, 업체(기획), 디자이너 모두의 효율적인 업무처리와 원활한 진행을 유도하여 프로젝트를 완성시켰습니다.", skill: [], linkUrl: "https://kjobslink.co.kr"},
  {icon: logo_kjobs, name: "케이잡스링크(초안)", image: kjobsGlobal, detail: "케이잡스링크의 초기 디자인으로 개발된 페이지입니다.", role: "개발자, 업체(기획), 디자이너 모두의 효율적인 업무처리와 원활한 진행을 유도하여 프로젝트를 완성시켰습니다.", skill: [], linkUrl: "https://www.kjobslink.com"},
  {icon: logo_armyjobPng, name: "아미잡", image: armyJobImg, detail: "국군장병들을 위한 맞춤 정보 제공 서비스, 국방전직교육원 사업의 일환으로 ArmyJob을 개발하였습니다.", role: "", skill: ["React-Native", "AWS", "Encrypt-Storage", "Tab"], linkUrl: "https://play.google.com/store/apps/details?id=com.armyjob&pcampaignid=web_share"},
  {icon: logo_thefirsteduPng, name: "더퍼스트에듀(WEB)", image: theFirstEduImg, detail: "교육을 통해 더 나은 세상을 만드는 기업 '더퍼스트에듀'의 홈페이지 제작을 요청받아 솔로 프로젝트로 제작하였습니다.", role: "", skill: ["React", "AWS", "Styled-Components", "Zustand"], linkUrl: "https://thefirstedu.net"},
  {icon: logo_thefirsteduPng, name: "더퍼스트에듀(APP)", image: theFirstEduMImg, detail: "더 나은 세상을 만드는 더퍼스트에듀. 문화예술, 교육, 브랜딩, 채용공고를 제공합니다.", role: "", skill: ["React-Native", "AWS", "Animated"], linkUrl: "https://play.google.com/store/apps/details?id=com.thefirstedu"},
  {icon: logo_drlucidPng, name: "닥터루시드", image: drLucidImg, detail: "바쁜 현대인들에겐 쉽고 빠른 진료를 제공하며, 의료진과 상담사들에게는 짜투리 경제활동을 제공하는 Win-Win App 닥터루시드를 개발중입니다.", role: "", skill: ["React-Native", "AWS", "Styled-Components", "Tab"], linkUrl: ""},
  {icon: logo_gemmyPng, name: "재미스튜디오", image: gemmyImg, detail: "개발자의 블로그, 개발자를 위한 커뮤니티, 개발자들의 공간 재미스튜디오를 개발중입니다.", role: "", skill: ["React", "AWS", "Styled-Components", "Redux"], linkUrl: ""},
  {icon: profile_dragonPng, name: "포트폴리오", image: thisPortfolioImg, detail: "현재 보고계시는 포트폴리오 입니다.", role: "", skill: ["React", "Github-Acttions", "Styled-Components", "Typescript"], linkUrl: "https://poiuy4004.github.io/portfolio2/"},
  {icon: profile_dragonPng, name: "포트폴리오(초안)", image: portfolioImg, detail: "이전 버전의 포트폴리오 입니다.", role: "", skill: ["React", "Github-Acttions", "Styled-Components", "Zustand"], linkUrl: "https://poiuy4004.github.io/portfolio/"},
  {icon: profile_dragonPng, name: "경주~! 어디가~?", image: goldenCityImg, detail: "가족여행 겸 공공데이터API를 테스트하기 위한 경주 여행정보 요약 사이트를 만들었습니다.", role: "", skill: ["공공데이터API", "React", "Github-Acttions", "Styled-Components"], linkUrl: "https://poiuy4004.github.io/goldencity/"},
  {icon: logo_nutritionPng, name: "뉴트리션코더스", image: nutritionImg, detail: "부트캠프에서 진행한 2차 팀 프로젝트로, 나만을 위한 맞춤 AI 식단 프로그램을 만들었습니다.", role: "", skill: ["React", "AWS", "Styled-Components", "Zustand"], linkUrl: "http://nutrients-coders.com/"},
  {icon: logo_stackoverflowPng, name: "스택오버플로우", image: stackOverflowImg, detail: "부트캠프에서 진행한 1차 팀 프로젝트로, 스택오버플로우를 카피하였습니다.", role: "", skill: ["React", "AWS", "Styled-Components", "Redux"], linkUrl: "http://se-sof.s3-website.ap-northeast-2.amazonaws.com/"},
  {icon: profile_dragonPng, name: "포트폴리오(초안)", image: ioImg, detail: "가장 처음 만들었던 포트폴리오 입니다.", role: "", skill: ["React", "Github-Acttions", "Styled-Components", "Redux"], linkUrl: "https://poiuy4004.github.io/"},
]

const app = [
  {name: "닥터루시드", image: drLucidImg, detail: "바쁜 현대인들에겐 쉽고 빠른 진료를 제공하며, 의료진과 상담사들에게는 짜투리 경제활동을 제공하는 Win-Win App 닥터루시드를 개발중입니다.", skill: ["React-Native", "AWS", "Styled-Components", "Tab"], linkUrl: ""},
  {name: "아미잡", image: armyJobImg, detail: "국군장병들을 위한 맞춤 정보 제공 서비스, 국방전직교육원 사업의 일환으로 ArmyJob을 개발하였습니다.", skill: ["React-Native", "AWS", "Encrypt-Storage", "Tab"], linkUrl: "https://play.google.com/store/apps/details?id=com.armyjob&pcampaignid=web_share"},
  {name: "더퍼스트에듀", image: theFirstEduMImg, detail: "더 나은 세상을 만드는 더퍼스트에듀. 문화예술, 교육, 브랜딩, 채용공고를 제공합니다.", skill: ["React-Native", "AWS", "Animated"], linkUrl: "https://play.google.com/store/apps/details?id=com.thefirstedu"},
  {name: "재미스튜디오", image: gemmyImg, detail: "개발자의 블로그, 개발자를 위한 커뮤니티, 개발자들의 공간 재미스튜디오를 개발중입니다.", skill: ["React", "AWS", "Styled-Components", "Redux"], linkUrl: ""},
]
const web = [
  {name: "더퍼스트에듀", image: theFirstEduImg, detail: "교육을 통해 더 나은 세상을 만드는 기업 '더퍼스트에듀'의 홈페이지 제작을 요청받아 솔로 프로젝트로 제작하였습니다.", skill: ["React", "AWS", "Styled-Components", "Zustand"], linkUrl: "https://thefirstedu.net"},
  {name: "포트폴리오", image: thisPortfolioImg, detail: "현재 보고계시는 포트폴리오 입니다.", skill: ["React", "Github-Acttions", "Styled-Components", "Typescript"], linkUrl: "https://poiuy4004.github.io/portfolio2/"},
  {name: "(구)포트폴리오", image: portfolioImg, detail: "이전 버전의 포트폴리오 입니다.", skill: ["React", "Github-Acttions", "Styled-Components", "Zustand"], linkUrl: "https://poiuy4004.github.io/portfolio/"},
  {name: "뉴트리션코더스", image: nutritionImg, detail: "부트캠프에서 진행한 2차 팀 프로젝트로, 나만을 위한 맞춤 AI 식단 프로그램을 만들었습니다.", skill: ["React", "AWS", "Styled-Components", "Zustand"], linkUrl: "http://nutrients-coders.com/"},
  {name: "스택오버플로우", image: stackOverflowImg, detail: "부트캠프에서 진행한 1차 팀 프로젝트로, 스택오버플로우를 카피하였습니다.", skill: ["React", "AWS", "Styled-Components", "Redux"], linkUrl: "http://se-sof.s3-website.ap-northeast-2.amazonaws.com/"},
  {name: "경주!어디가?", image: goldenCityImg, detail: "가족여행 겸 공공데이터API를 테스트하기 위한 경주 여행정보 요약 사이트를 만들었습니다.", skill: ["공공데이터API", "React", "Github-Acttions", "Styled-Components"], linkUrl: "https://poiuy4004.github.io/goldencity/"},
  {name: "포트폴리오 초안", image: ioImg, detail: "가장 처음 만들었던 포트폴리오 입니다.", skill: ["React", "Github-Acttions", "Styled-Components", "Redux"], linkUrl: "https://poiuy4004.github.io/"},
]
const ing = [
  {name: "재미스튜디오", image: gemmyImg, detail: "개발자의 블로그, 개발자를 위한 커뮤니티, 개발자들의 공간 재미스튜디오를 개발중입니다.", skill: ["React", "AWS", "Styled-Components", "Redux"], linkUrl: ""},
  {name: "닥터루시드", image: drLucidImg, detail: "바쁜 현대인들에겐 쉽고 빠른 진료를 제공하며, 의료진과 상담사들에게는 짜투리 경제활동을 제공하는 Win-Win App 닥터루시드를 개발중입니다.", skill: ["React-Native", "AWS", "Styled-Components", "Tab"], linkUrl: ""},
]

export { all, web, app, ing };