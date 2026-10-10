(() => {
  const button = document.getElementById('language');
  const applyLanguage = (language) => {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-zh][data-en]').forEach((element) => {
      element.textContent = element.dataset[language];
    });
    const portrait = document.querySelector('.portrait img');
    portrait.alt = english ? portrait.dataset.altEn : portrait.dataset.altZh;
    document.querySelector('nav').setAttribute('aria-label', english ? 'Page navigation' : '页面导航');
    document.querySelector('.topics').setAttribute('aria-label', english ? 'Research topics' : '研究方向');
    button.innerHTML = `${english ? '中文' : 'EN'} <span aria-hidden="true">↗</span>`;
    button.setAttribute('aria-label', english ? '切换至中文' : 'Switch to English');
    document.title = english ? 'Di Chen · 陈迪' : '陈迪 · Di Chen';
    try { localStorage.setItem('homepage-language', language); } catch (_) { /* Storage is optional. */ }
  };
  button.hidden = false;
  let savedLanguage;
  try { savedLanguage = localStorage.getItem('homepage-language'); } catch (_) { /* Keep Chinese as the default. */ }
  applyLanguage(savedLanguage === 'en' ? 'en' : 'zh');
  button.addEventListener('click', () => applyLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en'));
  document.getElementById('year').textContent = new Date().getFullYear();
})();
