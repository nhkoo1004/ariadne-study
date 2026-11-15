// 폼 링크 추후 연결: Smore 신청 폼 URL로 교체하세요.
const APPLY_FORM_URL = 'https://smore.im/form/TpQe4mgxaH';
// 1기 활동 기록 페이지(사이트 안의 activity.html). 노션 등 외부 주소로 바꾸려면 https://... 로 교체하세요.
const NOTION_URL = 'activity.html';
const notice = document.getElementById('notice');
function connectLinks(selector, url, title, copy) {
  document.querySelectorAll(selector).forEach(link => {
    link.href = url;
    if (/^https?:/.test(url)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else if (!url.startsWith('#')) {
      // 사이트 안의 다른 페이지: 같은 탭에서 연다
    } else {
      link.addEventListener('click', event => {
        event.preventDefault();
        document.getElementById('notice-title').textContent = title;
        document.getElementById('notice-copy').textContent = copy;
        notice.showModal();
      });
    }
  });
}
connectLinks('[data-apply]', APPLY_FORM_URL, '신청 폼을 준비 중이에요.', 'Smore 신청 폼은 추후 연결될 예정이에요. 모집 마감은 12월 25일(금), 시작일은 협의 예정이에요.');
connectLinks('[data-notion]', NOTION_URL, '활동 기록 링크 준비 중', '노션 활동 기록 링크는 추후 연결될 예정이에요.');
document.getElementById('close-notice').onclick = () => notice.close();
document.getElementById('notice-ok').onclick = () => notice.close();
notice.addEventListener('click', event => { if (event.target === notice) { const box = notice.getBoundingClientRect(); if(event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) notice.close(); } });
