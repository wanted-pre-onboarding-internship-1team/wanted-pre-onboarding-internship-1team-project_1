# 원티드 프리온보딩 1주차 첫 번째 과제

<br />

## ✏️ 과제 설명

동료학습을 통해서 팀에서 생각한 원티드 프리온보딩 프론트엔드 인턴십 선발 과제의 Best Pratice를 만들어주세요.

🚀 이번 과제의 목적은 동료학습, 팀으로 일하는 법에 익숙해지는 것, 과제를 대하는 태도를 연습하는 것 입니다.

<br />

## 💡 프로젝트 실행 방법

```
git clone https://github.com/wanted-pre-onboarding-internship-1team/wanted-pre-onboarding-internship-1team-project_1.git
cd wanted-pre-onboarding-internship-1team-project_1/
echo "REACT_APP_BASE_URL = {api 호출 주소}" > .env
npm install
npm start
```

<br />

## 📌 배포 링크

[https://preonboarding-internship-9th-1.netlify.app/](https://preonboarding-internship-9th-1.netlify.app/)

<br />

## 🛠 기술 스택

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/styled-component-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white">

<br />

## 🎄 폴더 구조

```
📄 src
├── App.js
├── apis
│   ├── auth.js
│   ├── index.js
│   ├── instance.js
│   └── todo.js
├── components
│   ├── common
│   │   ├── HeadButton.jsx
│   │   ├── TodoInput.jsx
│   │   ├── button
│   │   │   └── FormButton.jsx
│   │   └── input
│   │       └── FormInput.jsx
│   └── todo
│       ├── AddTodo.jsx
│       ├── FilterContext.jsx
│       ├── Todo.jsx
│       ├── TodoContext.jsx
│       ├── TodoHeader.jsx
│       └── TodoList.jsx
├── const
│   └── filter.js
├── hooks
│   ├── useApi.js
│   ├── useFilter.js
│   └── useTodo.js
├── index.js
├── pages
│   ├── signIn
│   │   └── SignIn.jsx
│   ├── signUp
│   │   └── SignUp.jsx
│   └── todo
│       └── TodoPage.jsx
├── routers
│   ├── AuthRoute.jsx
│   ├── NonAuthRoute.jsx
│   └── Router.jsx
├── style
│   └── Global.js
├── tree.txt
└── utils
    └── utilOnChange.js

```

## Best Practice 산정

 - todo
    - todoList state CRUD 관리에 useState 대신 useReduce를 사용했습니다.
        - reduce 는 type 데이터와 switch 의 조합으로 todoLsit state CRUD 코드의 가독성을 높여줍니다. (CRUD 비즈니스 로직을 hook 내에서 관리)
    - Filter 기능을 추가했습니다. (todoList View)
        - all, active, completed 세 가지 필터가 있으며 버튼을 클릭해 필터링 된 결과를 볼 수 있습니다.
            - all 은 모든 todo
            - active 는 완료 안 된 todo
            - completed 는 완료 된 (체크박스 표시) 만을 보여주도록 합니다.

<br />

## 👏 협업 방법

주된 커뮤니케이션 툴로 [**팀 노션**](https://www.notion.so/1-48d83304b94c42ad8352fcf6e7973b9f?pvs=4) 페이지와 **디스코드**, **ZEP**을 사용했습니다.

### **노션 페이지**

1. 팀원들의 코드를 분석하고, 그 중에서 Best Practice를 정리하였습니다.
2. commit 컨벤션, git flow 전략, 네이밍을 정의하였습니다.
3. 팀원들의 역할 분담, 일정 조율을 위해 활용되었습니다.

### **디스코드 & ZEP**

1. 팀원들의 의사소통 및 화면 공유를 통한 협업을 위해 활용되었습니다.

<br />

## ⭐️ 과제 구현

### 1. 로그인 / 회원가입

#### ✅ Assignment 1

- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요

  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요 (e.g. 비밀번호 유효성 검사에 특수문자 포함 등의 새로운 조건을 추가하는 행위를 지양해주세요)

- 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요
- 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

![](https://user-images.githubusercontent.com/21123166/221085711-99a2f130-f874-452c-858d-3fd134736eb6.gif)

#### ✅ Assignment 2

- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요

![](https://user-images.githubusercontent.com/21123166/221085707-3e9615a6-90dd-4d9b-98e1-5376cc1d91d3.gif)

#### ✅ Assignment 3

- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요

  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - 응답받은 JWT는 로컬 스토리지에 저장해주세요

![](https://user-images.githubusercontent.com/21123166/221085702-ecaea5f3-f9aa-4fd0-8bd0-45b125eb1620.gif)

#### ✅ Assignment 4

- 로그인 여부에 따른 리다이렉트 처리를 구현해주세요

  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

## ![](https://user-images.githubusercontent.com/21123166/221085685-85a28050-704f-4565-a0c9-9234598b5f9f.gif)

### 2. TODO LIST

#### ✅ Assignment 5

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요
- TODO는 `<li>` tag를 이용해 감싸주세요

![](https://user-images.githubusercontent.com/21123166/221085625-67ff4bd2-df91-4319-997c-920befa0444a.gif)

> 모든 todolist, 완료, 미완료 카테고리를 나누어 사용자 측면에서 좀 더 관리하기 쉬운 UX로 하기로 결정하였습니다.

<br />

#### ✅ Assignment 6

- 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요

  - TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여해주세요
  - TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여해주세요

- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요

![](https://user-images.githubusercontent.com/21123166/221085634-ae11e3e3-1157-4b9f-8316-495249305e76.gif)

#### ✅ Assignment 7

- TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

![](https://user-images.githubusercontent.com/66045666/221088046-a82b3bfc-7d0b-407b-b7d6-d21490d87ab7.gif)

#### ✅ Assignment 8

- TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요

  - 수정 버튼에는 `data-testid="modify-button"` 속성을 부여해주세요
  - 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여해주세요


#### ✅ Assignment 9

- 투두 리스트의 삭제 기능을 구현해주세요

  - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

![](https://user-images.githubusercontent.com/66045666/221088054-5ac0be65-4e98-4dfd-81f2-f1eab5ab9b4a.gif)

#### ✅ Assignment 10

- 투두 리스트의 수정 기능을 구현해주세요

  - TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
  - 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
  - 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
    - 수정 input창에는 `data-testid="modify-input"` 속성을 부여해주세요
  - 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
    - 제출버튼에는 `data-testid="submit-button"` 속성을 부여해주세요
    - 취소버튼에는 `data-testid="cancel-button"` 속성을 부여해주세요
  - 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
  - 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

![](https://user-images.githubusercontent.com/66045666/221089070-acfbffb9-f68e-40b0-ba1c-b5b21fea6628.gif)

<br />

## ✨ 컨벤션

### 1. 커밋 컨벤션

```
feat : 새로운 기능 추가
fix : 버그 수정
docs : 문서 수정
style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
refactor : 코드 리팩토링
test : 테스트 코드, 리팩토링 테스트 코드 추가
chore : 빌드 업무 수정, 패키지 매니저 수정
```

### 2. 네이밍 컨벤션

Components : **Pascal case** (ex. H3.js, Button.js) <br />
Non-component: **Camel case** (ex. fetchApi.js)

[참조](https://phrygia.github.io/react/2022-04-05-react/)

### 3. 브랜치 컨벤션

```
├─ main // 최종, 배포 branch
│  └─ dev // 개발계 merge branch
│     ├─ feat/auth // 각 기능별 개발 branch
│     ├─ feat/todo // 각 기능별 개발 branch
└─    └─ feat/api // 각 기능별 개발 branch
각자 브랜치는 로컬에서 작업 후 각 기능별 개발 branch로 pull Request
```

[참조](https://techblog.woowahan.com/2553/)

<br />

### 4. Eslint

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

### 5. Prettier

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

<br />

## 💗 팀원 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/merrybmc"><img src="https://avatars.githubusercontent.com/u/65064563?v=4" width="100px;" alt=""/><br /><sub><b>조병민(팀장)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sujeong-dev"><img src="https://avatars.githubusercontent.com/u/112826154?v=4" width="100px;" alt=""/><br /><sub><b>구수정</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/rladygks329"><img src="https://avatars.githubusercontent.com/u/64533351?v=4" width="100px;" alt=""/><br /><sub><b>김요한</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sduu"><img src="https://avatars.githubusercontent.com/u/46313348?v=4" width="100px;" alt=""/><br /><sub><b>손혜수</b></sub></a><br /></td>
     <tr/>
     <td align="center"><a href="https://github.com/SeungYn"><img src="https://avatars.githubusercontent.com/u/66045666?v=4" width="100px;" alt=""/><br /><sub><b>이승윤</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/lzns960"><img src="https://avatars.githubusercontent.com/u/78632299?v=4" width="100px;" alt=""/><br /><sub><b>박수지</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/gong25"><img src="https://avatars.githubusercontent.com/u/60168937?v=4" width="100px;" alt=""/><br /><sub><b>신공섭</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/dhsimpson"><img src="https://avatars.githubusercontent.com/u/12489026?v=4" width="100px;" alt=""/><br /><sub><b>윤동희</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/dobidugi"><img src="https://avatars.githubusercontent.com/u/21123166?v=4" width="100px;" alt=""/><br /><sub><b>이유태</b></sub></a><br /></td>
     <tr/>
     
  </tbody>
</table>

<br />

## 🙆‍♀️ 역할 분담

auto / todo / API & Router 3가지로 분류

**auth** (로그인/회원가입, 유효성 검사, 예외 처리, 리다이렉트) : 조병민, 구수정, 손혜수

**todo** (header, list, add, context) : 김요한, 신공섭, 윤동희

**API & Router** (instance, intercepter, router) : 유승윤, 이유태, 박수지

<br />
