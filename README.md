# 원티드 프리온보딩 1주차 첫 번째 과제



## 과제 설명

동료학습을 통해서 팀에서 생각한 원티드 프리온보딩 프론트엔드 인턴십 선발 과제의
 Best Pratice를 만들고 제출해주세요

🚀 이번 과제의 목적은 동료학습, 팀으로 일하는 법에 익숙해지는 것, 과제를 대하는 태도를 연습하는 것 입니다.



## 팀원 소개

| 팀원 이름 | github                         |
| --------- | ------------------------------ |
| 조병민    | https://github.com/merrybmc    |
| 구수정    | https://github.com/sujeong-dev |
| 김요한    | https://github.com/rladygks329 |
| 손혜수    | https://github.com/sduu        |
| 유승윤    | https://github.com/SeungYn     |
| 박수지    | https://github.com/lzns960     |
| 신공섭    | https://github.com/gong25      |
| 윤동희    | https://github.com/dhsimpson   |
| 이유태    | https://github.com/dobidugi    |



## 프로젝트 실행 방법

```
git clone
npm install
npm start
```

배포 링크 : 

## 폴더 구조

```
📄 src
├─ apis
│  └─ auth.ts
│  └─ index.ts
│  └─ instance.ts
│  └─ todo.ts
├─ components
│  └─ common
│     └─ button
│        └─ FormButton.jsx
│     └─ input
│        ├─ HeadButton.jsx
│        └─ TodoInput.jsx
│     └─ todo
│        ├─ AddTodo.jsx
│        ├─ FilterContext.jsx
│        ├─ Todo.jsx
│        ├─ TodoContext.jsx
│        ├─ TodoHeader.jsx
│        └─ TodoList.jsx
├─ const
│  └─ filter.js
├─ hooks
│  ├─ useApi.js
│  ├─ useFilter.js
│  └─ useTodo.js
├─ pages
│  └─ signIn
│        └─ SignIn.jsx
│  └─ signUp
│        └─ SignUp.jsx
│  └─ todo
│        └─ todoPage.jsx
├─ routers
│  ├─ AuthRoute.jsx
│  ├─ NonAuthRoute.jsx
│  └─ Router.js
├─ style
│  └─ Global.js
├─ utils
│  └─ utilOnChange.js
├─ App.js
└─ index.js
```



### 협업 도구

주된 커뮤니케이션 툴로 [**팀 노션**](https://www.notion.so/1-48d83304b94c42ad8352fcf6e7973b9f?pvs=4) 페이지와 **디스코드**, **ZEP**을 사용했습니다.

**노션 페이지**

1. 팀원들의 코드를 분석하고, 그 중에서 Best Practice를 정리하였습니다.
2. commit 컨벤션, git flow 전략, 네이밍을 정의하였습니다.
3. 팀원들의 역할 분담, 일정 조율을 위해 활용되었습니다.

**디스코드 & ZEP**

1. 팀원들의 의사소통 및 화면 공유를 통한 협업을 위해 활용되었습니다.



### 커밋 컨벤션

```
feat : 새로운 기능 추가
fix : 버그 수정
docs : 문서 수정
style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
refactor : 코드 리팩토링
test : 테스트 코드, 리팩토링 테스트 코드 추가
chore : 빌드 업무 수정, 패키지 매니저 수정
```



### 네이밍 컨벤션

Components : **Pascal case** (ex. H3.js, Button.js)
Non-component: **Camel case** (ex. fetchApi.js)

Reference : https://phrygia.github.io/react/2022-04-05-react/



## 브랜치 컨벤션

```
├─ main // 최종, 배포 branch
│  └─ dev // 개발계 merge branch
│     ├─ feat/auth // 각 기능별 개발 branch
│     ├─ feat/todo // 각 기능별 개발 branch
└─    └─ feat/api // 각 기능별 개발 branch
각자 브랜치는 로컬에서 작업 후 각 기능별 개발 branch로 pull Request
```

Reference : https://techblog.woowahan.com/2553/



## 역할 분담

auto / todo / API & Router 3가지로 분류

**auth **(로그인/회원가입, 유효성 검사, 예외 처리, 리다이렉트) : 조병민, 구수정, 손혜수

**todo** (header, list, add, context) : 김요한, 신공섭, 윤동희

**API & Router** (instance, intercepter, router) : 유승윤, 이유태, 박수지



## Eslint

```
  "extends": ["react-app", "plugin:prettier/recommended"],
  "rules": {
    "no-var": "error", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-console": ["warn", { "allow": ["warn", "error"] }], // console.log() 금지
    "eqeqeq": "warn", // 일치 연산자 사용 필수
    "dot-notation": "warn", // 가능하다면 dot notation 사용
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
    "react/jsx-pascal-case": "error", // 컴포넌트 이름은 PascalCase로
    "react/no-direct-mutation-state": "error", // state 직접 수정 금지
    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
    "react/no-unused-state": "warn", // 사용되지 않는 state
    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
    "react/jsx-curly-brace-presence": "warn", // jsx 내 불필요한 중괄호 금지
    "linebreak-style": 0, // 윈도우는 꼭 설정 LF, CRLF 문제 해결위함
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
```



## Prettier

```
{
  "tabWidth": 2,
  "printWidth": 80,
  "endOfLine": "lf",
  "arrowParens": "avoid",
  "singleQuote": true,
  "jsxSingleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "bracketSameLine": true
}
```



## 기술 스택

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/styled-component-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white">

