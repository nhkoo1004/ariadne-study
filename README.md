# AI 스터디 아리아드네 2기 모집 사이트

별자리 다크 테마 모집 홈페이지입니다. HTML, CSS, JavaScript로만 만들어서 설치나 빌드가 필요 없습니다.

- 공개 주소: https://ariadne-study.vercel.app
- 호스팅: Vercel(무료)이 이 GitHub 저장소와 연결되어 있습니다. 파일을 고쳐서 GitHub에 올리면 1~2분 뒤 사이트가 자동으로 다시 배포됩니다.

## 파일 구성

```text
index.html                  페이지 본문과 모집 정보
style.css                   레이아웃과 글꼴
night.css                   별자리 테마, 후기 카드, 사진 갤러리 스타일
script.js                   지원 링크와 활동 기록 링크, 안내창
reviews.js                  1기 후기 데이터와 후기 카드를 그리는 코드
journey.js                  스크롤에 따라 실이 그려지고 별이 켜지는 효과
README.md                   이 파일
assets/
  constellation.svg         사이트 아이콘
  ariadne-stars-og.png      공유 미리보기 이미지
  field/activity_01~08.webp 사진 갤러리 (얼굴 블러 처리본)
fonts/
  PretendardVariable.woff2
  OFL.txt                   글꼴 라이선스
```

## 자주 하는 수정

**후기 추가하기**: `reviews.js`의 `REVIEWS` 목록에 항목을 하나 더합니다. 항목은 `part`(대학생 또는 취준생), `who`(익명 표기), `title`, `quote`(한 줄 인용), `body`(본문)로 이루어져 있습니다. 후기는 참가자에게 게시 동의를 받은 원문만 싣습니다.

**지원 링크 바꾸기**: 지원 폼 주소는 `script.js` 맨 위의 `APPLY_FORM_URL`에 들어 있고 이미 연결되어 있습니다. 폼 주소가 바뀌면 이 줄만 고치면 모든 지원 버튼이 바뀝니다.

**활동 기록 링크 연결하기**: `script.js`의 `NOTION_URL`에 노션 활동 기록 주소를 넣습니다. 연결한 뒤 `index.html`의 "활동 기록 링크 준비 중" 문구도 지우세요.

**사진 캡션**: 지금은 사진 아래에 설명(캡션)을 넣지 않았습니다. 넣고 싶으면 `index.html`의 `field-notes` 섹션에서 각 `<figure>` 안에 `<figcaption>설명</figcaption>`을 추가하세요.

**마감일과 일정 고치기**: `index.html`의 "모집 마감"과 `script.js`의 안내창 문구에 마감일이 들어 있습니다. 두 곳을 같이 고치세요.

**공유 미리보기**: `index.html`의 `og:image`, `og:url`, `twitter:image`는 전체 주소(`https://ariadne-study.vercel.app/...`)로 지정되어 있습니다. 주소를 바꾸면 이 세 줄도 같이 바꿉니다.

## GitHub에 올리는 방법

1. 저장소 화면에서 **Add file → Upload files**를 누릅니다.
2. 컴퓨터의 사이트 폴더 **안으로 들어가서** 고친 파일(또는 `assets` 폴더)을 끌어다 놓습니다. 폴더째 올리면 파일이 `폴더이름/` 안으로 들어가므로 주의하세요.
3. 올라간 목록이 `/index.html`처럼 저장소 맨 위 경로로 시작하는지 확인하고 **Commit changes**를 누릅니다.
4. 1~2분 뒤 공개 주소를 새로고침해서 반영됐는지 확인합니다.

바로 고치는 작은 수정은 GitHub에서 파일을 열고 연필 아이콘(Edit)으로 직접 고쳐도 됩니다.

## 주의

- 참가자 얼굴이 가려지지 않은 원본 사진, 후기 원본, 개인정보가 담긴 파일은 이 저장소에 올리지 마세요. 저장소는 공개 상태입니다.
- 사이트 사진은 얼굴을 블러 처리한 것만 올립니다.

## 내 컴퓨터에서 미리보기

사이트 폴더에서 `python -m http.server 8000`을 실행하고 브라우저에서 http://localhost:8000 을 엽니다.
