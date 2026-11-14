  AI 스터디 아리아드네 2기

별자리 다크 테마 모집 홈페이지입니다. HTML, CSS, JavaScript로 구성되어 패키지 설치나 빌드 없이 사용할 수 있습니다.

   다른 사람의 GitHub 저장소에 올리기

1. ZIP을 풀고 대상 저장소의 쓰기 권한이 있는 계정으로 로그인합니다. 권한이 없다면 저장소 소유자에게 ZIP을 전달합니다.
2. 홈페이지용 저장소에서 **Add file → Upload files**를 선택합니다. 압축을 푼 폴더 안의 파일과 하위 폴더를 함께 올립니다. 기존 프로젝트가 있는 저장소라면 먼저 별도 브랜치에서 같은 이름의 파일을 확인하세요.
3. 커밋 후 저장소 첫 화면에 index.html, README.md, assets, fonts가 나란히 있는지 확인합니다.
4. GitHub Pages로 공개하려면 **Settings → Pages → Deploy from a branch**에서 업로드한 브랜치와 **/(root)**를 선택해 저장합니다.

   폴더 구조

```text
index.html                  페이지 본문과 모집 정보
style.css                   레이아웃과 타이포그래피
night.css                   별자리 테마와 사진 그리드
script.js                   지원·활동일지 링크와 안내창
journey.js                  스크롤 실과 별 점등
README.md
assets/
  constellation.svg         사이트 아이콘
  ariadne-stars-og.png      공유 미리보기
  field/
    activity_01.webp
    activity_02.webp
    activity_03.webp
    activity_04.webp        대표 사진
    activity_05.webp
    activity_06.webp
fonts/
  PretendardVariable.woff2
  OFL.txt                   글꼴 라이선스
```

   미리보기와 운영

압축을 푼 폴더에서 `python -m http.server 8000`을 실행한 뒤 브라우저에서 http://localhost:8000 을 엽니다.

- 신청폼과 활동일지 주소는 script.js의 APPLY_FORM_URL과 NOTION_URL에서 지정합니다. 실제 링크 연결 시 index.html의 준비 중 안내 문구도 갱신하세요.
- 사진 캡션은 index.html의 field-notes 섹션에서 각 사진의 figcaption을 수정합니다.
- 공유 이미지는 동봉된 assets/ariadne-stars-og.png를 사용합니다. 배포 주소 확정 후 index.html의 og:image 값을 해당 이미지의 전체 HTTPS 주소로 지정하면 됩니다.
