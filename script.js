// 폼 링크 추후 연결: Smore 신청 폼 URL로 교체하세요.
const APPLY_FORM_URL = '#apply-form';
// 노션 활동 기록 URL로 교체하세요.
const NOTION_URL = '#notion-link';
const notice = document.getElementById('notice');
function connectLinks(selector, url, title, copy) {
  document.querySelectorAll(selector).forEach(link => {
    link.href = url;
    if (!url.startsWith('#')) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
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
connectLinks('[data-apply]', APPLY_FORM_URL, '신청 폼을 준비 중이에요.', 'Smore 신청 폼은 추후 연결될 예정이에요. 모집 마감은 11월 30일(월), 시작일은 협의 예정이에요.');
connectLinks('[data-notion]', NOTION_URL, '활동 기록 링크 준비 중', '노션 활동 기록 링크는 추후 연결될 예정이에요.');
document.getElementById('close-notice').onclick = () => notice.close();
document.getElementById('notice-ok').onclick = () => notice.close();
notice.addEventListener('click', event => { if (event.target === notice) { const box = notice.getBoundingClientRect(); if(event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) notice.close(); } });
