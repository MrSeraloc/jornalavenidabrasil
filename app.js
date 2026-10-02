const feedFolder = '02. Feed';
const feedFiles = ["01. S\u00C9RUMDOVE.png","02. DESODORANTE DOVE.png","03. SAB. DOVE.png","04. NIVEA MILK.png","05. KIT SEDA.png","06. NIVEA FACIAL.png","07. REXONA.png","08. Sabonete em Barra Lux.png","09. Creme Dental Sorriso Tripla.png","10. Absorvente Mili Prote\u00E7\u00E3o Tot.png","11. Absorvente Intimus Toda.png","12. Absorvente Interno Intimus .png","13. Creme Bepantol Derma.png","14. Tratamento Leave-in S\u00E9rum.png","15. \u00D3leo e S\u00E9rum Dove Bond.png","16. Preservativo Lubrificado Jon.png","17. Aparelho de Barbear Gillette.png","18. SUN FRESH FPS 70 - 200 ml.png","19. SUNDOWN - FPS 50 100 ML.png","20. SUNDOWN FPS 60 - KIDS.png","21. Protetor Solar Principia.png","22. Protetor Solar Facial Nivea.png","23. Protetor Solar Ps-03 .png","24. Protetor Solar  Facial Nivea.png","25. CREATINA  300g.png","26. flex + 60 capsulas.png","27. NAC TERRA NATIVA.png","28. Mag Plus 5 Herbamed .png","29. Gummies Hair Tutti-Frutti.png","30. GTECH BSP-11.png","31. PLENITUD PLUS FIT.png","32. VITA PLUS.png","33. FRALDA BB FOFINHO PLUS.png","34. BB FOFINHO PREMIUM.png","35. HUGGIES HIPERZINHA.png","36. FRALDA MILI.png","37. BEBE FOFINHO 140 _ 100 .png","38. BB FOFINHO PREMIUM.png","39. LEN\u00C7O HUGGIES - 120 UNIDADES.png","40. Fralda Huggies Praia.png","41. Fralda Hipop\u00F3 Baby Hiper.png","42. NISTATINA - OXIDO DE ZINCO.png","43. CIMEGRIPE 20 CAPSULAS.png","44. GRIP 7.png","45. LORATAMED 12 COMPRIMIDOS.png","46. Dorflex Analg\u00E9sico.png","47. Vick Inalador.png","48. Maxalgina Gotas 500mg_mL.png","49. Composto de Mel e Extrato.png","50. Sal de Fruta Eno  Sach\u00EA 5g.png","51. Complexo Senna  Almeida Prad.png","52. Luftal Simeticona 75mg_mL.png","53. Vitamina D 600UI Dprev Todo.png"];

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
