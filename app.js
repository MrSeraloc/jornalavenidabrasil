const feedFolder = '02. Feed';
const feedFiles = ["01. NIVEA FPS 70.png","02. PRINCIPIA 200ML.png","03. PRINCIPIA 40G.png","04. PRINCIPIA 14G.png","05. GEL PRINCIPIA.png","06. NIVEA LATINHA.png","07. GEL CICATRICURE.png","08. NEUTROGENA 400ml.png","09. kit seda.png","10. KIT PANTENE.png","11. DESODORANTE DOVE.png","12. DESODORANTE NIVEA.png","13. V\u00CANUS.png","14. SABONETE DOVE PACK.png","15. SABONETE L\u00CDQUIDO NIVEA 200ML.png","16. SABONETE KRONEL .png","17. ABS. INTERNO INTIMUS.png","18. ABS. MILI NOTURNO.png","19. CONFORT MASTER.png","20. ESCOVA DENTAL SOFT BLACK.png","21. COLGATE CREME DENTAL.png","22. CREME DENTAL SENSODYNE.png","23. FIO DENTAL J&J.png","24. COREGA .png","25. FRALDA BB FOFINHO PREMIUM.png","26. FRALDA BB FOFINHO PLUS.png","27. FRALDA MILI.png","28. FRALDA SWIMMERS.png","29. COTONETE MILI.png","30. LEN\u00C7O BB FOFINHO PREMIUM.png","31. LEN\u00C7O BB FOFINHO PLUS.png","32. LEN\u00C7O MILI.png","33. SAB. LIQUIDO HUGGIES 200mL.png","34. POMADA BEPANTOL.png","35. WHEY INTEGRALMEDICA.png","36. COBI-12.png","37. CALCIO MDK .png","38. FLEX +.png","39. NAC TRRA NATIVA.png","40. MAGN\u00C9SIO  5+.png","41. RENU-FRESH.png","42. TESTE GRAVIDEZ CLEAR BLUE.png","43. EPOCLER 12 BLISTER.png","44. ENGOV ENVELOPE.png","45. LEITE MAGN\u00C9SIO 120mL.png","46. ENTEROGERMINA PLUS.png","47. LUFTAL GEL.png","48.  VICK VAPORUB 30g.png","49. DECONGEX 120mL.png","50. NOVALGINA  FLASH.png"];

const icons = {
  share: '<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="2.5"></circle><circle cx="6" cy="12" r="2.5"></circle><circle cx="18" cy="19" r="2.5"></circle><path d="m8.2 10.8 7.5-4.2M8.2 13.2l7.5 4.2"></path></svg>',
  expand: '<svg viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M21 16v5h-5"></path></svg>',
  'arrow-down': '<svg viewBox="0 0 24 24"><path d="M12 4v15M6 13l6 6 6-6"></path></svg>',
  'arrow-up': '<svg viewBox="0 0 24 24"><path d="M12 20V5M6 11l6-6 6 6"></path></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"></path></svg>'
};

const $ = (selector) => document.querySelector(selector);
const fileUrl = (folder, filename) => `${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;

const feedItems = feedFiles.map((file, index) => ({
  id: String(index + 1).padStart(2, '0'),
  title: file.replace(/^\d+\.\s*/, '').replace(/\.[^.]+$/, '').trim(),
  category: 'Oferta',
  src: fileUrl(feedFolder, file),
  kind: 'offer'
}));
const state = { visibleLimit: 8, selectedItem: null };

function applyIcons() {
  document.querySelectorAll('[data-icon]').forEach((element) => {
    if (icons[element.dataset.icon]) element.innerHTML = icons[element.dataset.icon];
  });
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

function itemCard(item, index) {
  const label = `OFERTA ${item.id}`;
  return `<article class="feed-item" style="animation-delay:${Math.min(index * 24, 220)}ms">
    <div class="feed-frame" data-action="view-item" data-item-id="${item.id}" role="button" tabindex="0" aria-label="Ampliar ${escapeHtml(item.title)}">
      <img src="${item.src}" alt="${escapeHtml(item.title)}" loading="${index < 2 ? 'eager' : 'lazy'}" decoding="async" />
      <span class="feed-index">${label}</span>
      <button class="feed-control" data-action="view-item" data-item-id="${item.id}" aria-label="Ampliar imagem"><span class="icon" data-icon="expand"></span></button>
      <span class="feed-hint"><span class="icon" data-icon="expand"></span> tocar para ampliar</span>
    </div>
    <div class="feed-caption"><strong>${escapeHtml(item.title)}</strong><span>${item.category}</span></div>
  </article>`;
}

function renderFeed() {
  const visible = feedItems.slice(0, state.visibleLimit);
  $('#offer-feed').innerHTML = visible.map(itemCard).join('');
  $('#feed-count').textContent = feedItems.length;
  $('#feed-sentinel').hidden = visible.length >= feedItems.length;
  $('#empty-state').hidden = feedItems.length > 0;
  applyIcons();
}

function openItem(id) {
  const item = feedItems.find((entry) => entry.id === id);
  if (!item) return;
  state.selectedItem = item;
  $('#offer-image').src = item.src;
  $('#offer-image').alt = item.title;
  $('#offer-modal').hidden = false;
  document.body.classList.add('modal-open');
}

function closeModal() {
  $('#offer-modal').hidden = true;
  document.body.classList.remove('modal-open');
}

function showToast(message) {
  $('#toast-message').textContent = message;
  const toast = $('#toast');
  toast.classList.add('is-visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
}

async function share(url, title, text) {
  try {
    if (navigator.share) {
      await navigator.share({ title, text, url });
      return;
    }
    await navigator.clipboard.writeText(url);
    showToast('Link copiado');
  } catch (error) {
    if (error?.name !== 'AbortError') showToast('Não foi possível compartilhar agora');
  }
}

function shareSite() {
  share(window.location.href.split('#')[0], 'Ofertas Drogaria Total', 'Confira o encarte digital da Drogaria Total');
}

function shareItem(id) {
  const item = feedItems.find((entry) => entry.id === id) || state.selectedItem;
  if (!item) return;
  share(`${window.location.href.split('#')[0]}#${item.id}`, `Oferta ${item.title} | Drogaria Total`, `Confira esta página do encarte: ${item.title}`);
}

document.addEventListener('click', (event) => {
  const element = event.target.closest('[data-action]');
  if (!element) return;
  const action = element.dataset.action;
  if (action === 'view-item') openItem(element.dataset.itemId);
  if (action === 'share-site') shareSite();
  if (action === 'share-item') shareItem(element.dataset.itemId);
  if (action === 'share-offer') shareItem();
  if (action === 'close-modal') closeModal();
  if (action === 'scroll-top') window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal-backdrop')) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-action="view-item"]')) {
    event.preventDefault();
    openItem(event.target.dataset.itemId);
  }
});

const observer = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting || state.visibleLimit >= feedItems.length) return;
  state.visibleLimit += 8;
  renderFeed();
}, { rootMargin: '500px 0px' });

observer.observe($('#feed-sentinel'));

window.addEventListener('scroll', () => {
  $('.back-top').classList.toggle('is-visible', window.scrollY > 650);
}, { passive: true });

applyIcons();
renderFeed();
