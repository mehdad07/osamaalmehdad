import { portfolioData, type ContactMethod, type EducationItem, type Experience, type PageId, type ValueItem } from './data.js';

const tabButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-page]'));
const tabsContainer = document.querySelector<HTMLElement>('.tabs');
const contentPanel = document.querySelector<HTMLElement>('#page-panel');
const themeToggle = document.querySelector<HTMLButtonElement>('#theme-toggle');
const themeLabel = document.querySelector<HTMLElement>('#theme-label');
const heroImage = document.querySelector<HTMLImageElement>('#hero-image');

if (!tabsContainer || !contentPanel || !themeToggle || !themeLabel || !heroImage) throw new Error('تعذر العثور على عناصر الواجهة الأساسية.');

const escapeHtml = (value: string): string => value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] ?? character);
const pageIds: PageId[] = ['about', 'cv', 'education', 'vision', 'contact'];
const getPageId = (value: string | null): PageId => pageIds.includes(value as PageId) ? value as PageId : 'about';
const getPageLabel = (id: PageId): string => portfolioData.navigation.find((item) => item.id === id)?.label ?? '';

const renderHighlights = (highlights: Experience['highlights']): string => highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join('');
const renderExperience = (experience: Experience): string => `
  <article class="timeline-item"><div class="timeline-marker" aria-hidden="true"></div><div class="timeline-content">
    <div class="item-heading"><div><p class="item-kicker">${escapeHtml(experience.period)}</p><h3>${escapeHtml(experience.role)}</h3><p class="item-company">${escapeHtml(experience.company)}</p></div><span class="item-index" aria-hidden="true">↗</span></div>
    <p>${escapeHtml(experience.description)}</p><ul class="compact-list">${renderHighlights(experience.highlights)}</ul>
  </div></article>`;
const renderSkill = (skill: string): string => `<span class="skill-pill">${escapeHtml(skill)}</span>`;
const renderValue = (value: ValueItem, index: number): string => `<article class="value-card"><span class="value-index">${String(index + 1).padStart(2, '0')}</span><h3>${escapeHtml(value.title)}</h3><p>${escapeHtml(value.description)}</p></article>`;
const renderEducationItem = (item: EducationItem, index: number): string => `<article class="education-card"><div class="card-topline"><span>${String(index + 1).padStart(2, '0')}</span><span>${escapeHtml(item.period)}</span></div><p class="item-kicker">${escapeHtml(item.type)}</p><h3>${escapeHtml(item.title)}</h3><p class="item-company">${escapeHtml(item.institution)}</p><p>${escapeHtml(item.description)}</p></article>`;
const renderContactCard = (contact: ContactMethod, index: number): string => `<a class="contact-card" href="${escapeHtml(contact.href)}" ${contact.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}><span class="value-index">${String(index + 1).padStart(2, '0')}</span><div><p class="item-kicker">${escapeHtml(contact.label)}</p><h3>${escapeHtml(contact.value)}</h3><p>${escapeHtml(contact.description)}</p></div><span class="contact-arrow" aria-hidden="true">↗</span></a>`;

const renderAbout = (): string => `
  <div class="about-top"><div class="about-photo-wrap"><img class="about-photo" src="${portfolioData.profile.image}" alt="الصورة الشخصية لـ${escapeHtml(portfolioData.profile.name)}" /><span class="photo-caption">صورة شخصية / 2026</span></div><div class="panel-intro about-intro"><p class="section-eyebrow">من أنا / 01</p><h2>مرحباً، أنا ${escapeHtml(portfolioData.profile.name)}.</h2><p class="lead-copy">${escapeHtml(portfolioData.profile.bio)}</p><a class="text-link" href="#contact">دعنا نتواصل <span aria-hidden="true">↗</span></a></div></div>
  <div class="content-grid two-column about-details"><section class="content-section"><div class="section-heading"><span class="section-number">01</span><h3>ما أفعله</h3></div><p class="body-copy">${escapeHtml(portfolioData.profile.summary)} أعمل على تحويل الأفكار إلى تجارب رقمية عملية، جميلة، وسهلة الاستخدام.</p></section><section class="content-section"><div class="section-heading"><span class="section-number">02</span><h3>معلومات سريعة</h3></div><dl class="quick-facts"><div><dt>المكان</dt><dd>${escapeHtml(portfolioData.profile.location)}</dd></div><div><dt>الحالة</dt><dd>${escapeHtml(portfolioData.profile.availability)}</dd></div><div><dt>التخصص</dt><dd>${escapeHtml(portfolioData.profile.role)}</dd></div></dl></section></div>
  <section class="content-section values-section"><div class="section-heading"><span class="section-number">03</span><h3>ما أؤمن به</h3></div><div class="values-grid">${portfolioData.values.map(renderValue).join('')}</div></section>`;

const renderCv = (): string => `<div class="panel-intro"><p class="section-eyebrow">السيرة الذاتية / 02</p><h2>خبرة عملية، وفضول لا ينتهي.</h2><p class="lead-copy">مسار مهني يجمع بين التفكير التصميمي والتنفيذ التقني، مع اهتمام مستمر بالتفاصيل التي تجعل المنتج أسهل وأوضح.</p></div><div class="content-grid two-column"><section class="content-section"><div class="section-heading"><span class="section-number">01</span><h3>الخبرات</h3></div><div class="timeline">${portfolioData.experiences.map(renderExperience).join('')}</div></section><section class="content-section skills-section"><div class="section-heading"><span class="section-number">02</span><h3>الأدوات والمهارات</h3></div><div class="skills-list">${portfolioData.skills.map(renderSkill).join('')}</div><div class="quote-card"><span class="quote-mark">“</span><p>التصميم الجيد يترك مساحة كافية للإنسان كي يفكر.</p></div></section></div>`;
const renderEducation = (): string => `<div class="panel-intro compact-intro"><p class="section-eyebrow">التعليم / 03</p><h2>تعلم مستمر، لا قائمة منتهية.</h2><p class="lead-copy">أتعامل مع التعليم كمسار مفتوح: أساس أكاديمي متين، وأسئلة عملية تعود معي إلى كل مشروع.</p></div><section class="education-list">${portfolioData.education.map(renderEducationItem).join('')}</section>`;
const renderVision = (): string => `<div class="vision-hero"><p class="section-eyebrow">الرؤية / 04</p><h2>${escapeHtml(portfolioData.vision.statement)}</h2></div><div class="vision-copy">${portfolioData.vision.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}</div><div class="vision-signature"><span>رؤية مهنية قابلة للتطور</span><span aria-hidden="true">✳</span><span>منذ 2017</span></div>`;
const renderContactPage = (): string => `<div class="panel-intro compact-intro"><p class="section-eyebrow">تواصل معي / 05</p><h2>فكرة جيدة؟ لنبدأ من رسالة.</h2><p class="lead-copy">إذا كان لديك مشروع أو سؤال أو رغبة في تبادل الأفكار، اكتب لي. كل البيانات هنا تجريبية ويمكن استبدالها ببياناتك من ملف <code>data.ts</code>.</p></div><section class="contact-list">${portfolioData.contacts.map(renderContactCard).join('')}</section><a class="primary-cta" href="mailto:${portfolioData.profile.email}">أرسل رسالة الآن <span aria-hidden="true">↗</span></a>`;

const renderPage = (id: PageId): string => ({ about: renderAbout, cv: renderCv, education: renderEducation, vision: renderVision, contact: renderContactPage }[id])();
const updateUrl = (id: PageId): void => window.history.replaceState({}, '', `${window.location.pathname}${window.location.search}#${id}`);

let renderTimer = 0;
const setActivePage = (id: PageId, updateHistory = true): void => {
  tabButtons.forEach((button) => { const active = button.dataset.page === id; button.classList.toggle('is-active', active); button.setAttribute('aria-selected', String(active)); button.tabIndex = active ? 0 : -1; });
  clearTimeout(renderTimer);
  contentPanel.classList.remove('is-visible');
  renderTimer = window.setTimeout(() => { contentPanel.innerHTML = renderPage(id); contentPanel.setAttribute('aria-labelledby', `tab-${id}`); contentPanel.classList.add('is-visible'); }, 90);
  if (updateHistory) updateUrl(id);
  document.title = `${getPageLabel(id)} · ${portfolioData.profile.name}`;
};

const applyTheme = (theme: 'light' | 'dark'): void => { document.documentElement.dataset.theme = theme; const dark = theme === 'dark'; themeToggle.setAttribute('aria-pressed', String(dark)); themeLabel.textContent = dark ? 'الوضع الفاتح' : 'الوضع الداكن'; themeToggle.querySelector('.theme-icon')!.textContent = dark ? '☼' : '◐'; };
let savedTheme: string | null = null;
try { savedTheme = window.localStorage.getItem('portfolio-theme'); } catch { savedTheme = null; }
applyTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
heroImage.src = portfolioData.profile.image;

themeToggle.addEventListener('click', () => { const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; applyTheme(next); try { window.localStorage.setItem('portfolio-theme', next); } catch { /* التخزين قد يكون محجوباً في بعض المتصفحات */ } });
tabsContainer.addEventListener('click', (event) => { const target = event.target; const button = target instanceof Element ? target.closest<HTMLButtonElement>('[data-page]') : null; if (!button) return; event.preventDefault(); setActivePage(getPageId(button.dataset.page ?? null)); });
tabButtons.forEach((button, index) => { button.addEventListener('keydown', (event) => { if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return; event.preventDefault(); const nextIndex = (index + (event.key === 'ArrowLeft' ? -1 : 1) + tabButtons.length) % tabButtons.length; tabButtons[nextIndex].focus(); setActivePage(getPageId(tabButtons[nextIndex].dataset.page ?? null)); }); });
window.addEventListener('hashchange', () => setActivePage(getPageId(window.location.hash.slice(1)), false));
setActivePage(getPageId(window.location.hash.slice(1)), false);
