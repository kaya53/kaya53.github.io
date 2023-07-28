import { cardPjt } from "./cardType";

const pjtData: cardPjt[] = [
    {
        title: 'Prosn',
        imgLs: [['img/pjt/Prosn_Logo.png']],
        shortDesc: [
            '🗓️ 2022.7 ~ 2022.8(7주)',
            '✅ 6인 / Frontend 3인, Backend 3인',
            '개발자 준비생 등 CS 학습이 필요한 사람들을 위한 SNS'],
        longDesc: [
            '막막한 CS 공부를 쉽게 할 수 있었으면 좋겠다는 아이디어에서 시작한 프로젝트입니다',
            '첫 장기 프로젝트였던만큼 기획한 내용을 충실하게 구현하는 것을 목표로 잡았습니다.',
            ''
        ],
        gitLink:'https://github.com/kaya53/PROSN'
    },
    {
        title: 'Sgbg.',
        imgLs: [['img/pjt/Sgbg_Logo.png']],
        shortDesc: ['블록체인 기반 소모임 중개 서비스'],
        longDesc: [''],
        gitLink: 'https://github.com/kaya53/sgbg.',
    },
    {
        title: 'Noon',
        imgLs: [['img/pjt/Noon_Logo.png']],
        shortDesc: ['줄거리, 그림체 유사도를 활용한 네이버 웹툰 추천 서비스'],
        longDesc: [''],
        gitLink: 'https://github.com/hyunju24/NOON',
    },
    {
        title: 'Haru Dashboard',
        imgLs: [['img/pjt/Haru_Logo.png']],
        shortDesc: ['크롬 첫화면에서 만나는 일정 관리 도구'],
        longDesc: [
            'chrome web store에 배포하여 약 20여명의 실 사용자를 대상으로 운영하였습니다.',
            '사용자로부터 피드백을 받아 UX 및 성능 개선을 하였습니다.',
            '자체 prettier 및 ESLint를 적용하고, pull request를 할 때마다 코드 리뷰를 진행하는 등 조직화된 협업을 진행했습니다.'
        ],
        gitLink: 'https://github.com/Haru-Dashboard/Haru-Dashboard',
    }
]

export default pjtData