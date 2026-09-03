const flyerFolder = '01. Encarte_JPEG';
const feedFolder = '02. Feed_JPEG';
const flyerFiles = [
  '01. CAPA [80.SET].png',
  '02. PAG 02 - [80.SET].png',
  '03. PAG. 03 [80-SET].png',
  '04. PAG. 04 [80.SET].png'
];

const productFiles = [
  ['01. SÉRUMDOVE.png', 'Sérum Dove', 'Beleza'],
  ['02. DESODORANTE DOVE.png', 'Desodorante Dove', 'Beleza'],
  ['03. DEO DOVE ROLL-ON.png', 'Desodorante Dove Roll-on', 'Beleza'],
  ['04. SAB. DOVE.png', 'Sabonete Dove', 'Beleza'],
  ['05. OLEO DOVE.png', 'Óleo Dove', 'Beleza'],
  ['06. KIT SEDA.png', 'Kit Seda', 'Beleza'],
  ['07. SABONETE REXONA.png', 'Sabonete Rexona', 'Beleza'],
  ['08. SHAMPOO PANTENE.png', 'Shampoo Pantene', 'Beleza'],
  ['09. CONDICIONADOR PANTENE.png', 'Condicionador Pantene', 'Beleza'],
  ['10. PRINCIPIA.png', 'Principia', 'Beleza'],
  ['11. NIVEA LATINHA.png', 'Nivea Creme', 'Beleza'],
  ['12. PAIXÃO.png', 'Óleo Corporal Paixão', 'Beleza'],
  ['13. BEPANTOL.png', 'Bepantol', 'Beleza'],
  ['14. NIVEA ROLL-ON.png', 'Nivea Roll-on', 'Beleza'],
  ['15. MONANGE.png', 'Monange', 'Beleza'],
  ['16. BOZZANO.png', 'Bozzano', 'Beleza'],
  ['17. BOZZANO E MONANGE.png', 'Bozzano + Monange', 'Beleza'],
  ['18. COLGATE 12H.png', 'Creme Dental Colgate', 'Beleza'],
  ['19. ESCOVA COLGATE.png', 'Escova Colgate', 'Beleza'],
  ['20. LISTERINE.png', 'Enxaguante Listerine', 'Beleza'],
  ['21.  FIO DENTAL.png', 'Fio dental', 'Beleza'],
  ['22. SUN FRESH FPS 70 - 200 ml.png', 'Sun Fresh FPS 70', 'Cuidados'],
  ['23. FACIAL NEUTROGENA COM E SEM .png', 'Protetor facial Neutrogena', 'Cuidados'],
  ['24. SUNDOWN - FPS 50 100 ML.png', 'Sundown FPS 50', 'Cuidados'],
  ['25. SUNDOWN FPS 60 - KIDS.png', 'Sundown Kids FPS 60', 'Cuidados'],
  ['26. PLENITUD PLUS FIT.png', 'Plenitud Plus Fit', 'Cuidados'],
  ['27. VITA PLUS.png', 'Vita Plus', 'Cuidados'],
  ['28. INTIMUS 32 UNIDADES.png', 'Intimus', 'Cuidados'],
  ['29. MILI 16 UNIDADES.png', 'Mili', 'Bebê'],
  ['30. FRALDA BB FOFINHO PLUS.png', 'Fralda Bebê Fofinho Plus', 'Bebê'],
  ['31. BB FOFINHO PREMIUM.png', 'Bebê Fofinho Premium', 'Bebê'],
  ['32. HUGGIES HIPERZINHA.png', 'Huggies Hiperzinha', 'Bebê'],
  ['33. FRALDA MILI.png', 'Fralda Mili Baby', 'Bebê'],
  ['34. BEBE FOFINHO 140 _ 100 .png', 'Bebê Fofinho', 'Bebê'],
  ['35. BB FOFINHO PREMIUM.png', 'Bebê Fofinho Premium', 'Bebê'],
  ['36. LENÇO HUGGIES - 120 UNIDADES.png', 'Lenço Huggies', 'Bebê'],
  ['37. GRANADO 250mL.png', 'Granado', 'Cuidados'],
  ['38. HIPOGLOS 40g.png', 'Hipoglós', 'Cuidados'],
  ['39. NISTATINA - OXIDO DE ZINCO.png', 'Nistatina + óxido de zinco', 'Saúde'],
  ['40. CREATINA  300g.png', 'Creatina 300g', 'Bem-estar'],
  ['41. COBALAMAX.png', 'Cobalamax', 'Bem-estar'],
  ['42. MAG PLUS.png', 'Mag Plus', 'Bem-estar'],
  ['43. flex + 60 capsulas.png', 'Flex +', 'Bem-estar'],
  ['44. NAC TERRA NATIVA.png', 'NAC Terra Nativa', 'Bem-estar'],
  ['45. GTECH BSP-11.png', 'Aparelho G-Tech', 'Saúde'],
  ['46. CIMEGRIPE 20 CAPSULAS.png', 'Cimegripe', 'Saúde'],
  ['47. GRIP 7.png', 'Grip 7', 'Saúde'],
  ['48. VAPO RUB 12G.png', 'VapoRub', 'Saúde'],
  ['49. LORATAMED 12 COMPRIMIDOS.png', 'Loratamed', 'Saúde'],
  ['50. MAXIDRATE.png', 'Maxidrate', 'Saúde'],
  ['51. TYLENOL 10 COMPRIMIDOS.png', 'Tylenol', 'Saúde'],
  ['52. NOVALGINA.png', 'Novalgina', 'Saúde'],
  ['53. NEOSALDINA 30 COMP.png', 'Neosaldina', 'Saúde'],
  ['54. SAL DE FRUTA ENO.png', 'Sal de Fruta Eno', 'Saúde'],
  ['55. ENTEROGERMINA.png', 'Enterogermina', 'Saúde'],
  ['56. ENTEROGERMINA PLUS.png', 'Enterogermina Plus', 'Saúde'],
  ['57. COLIRIO HYABAK.png', 'Colírio Hyabak', 'Saúde']
];

const icons = {
  share: '<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="2.5"></circle><circle cx="6" cy="12" r="2.5"></circle><circle cx="18" cy="19" r="2.5"></circle><path d="m8.2 10.8 7.5-4.2M8.2 13.2l7.5 4.2"></path></svg>',
  expand: '<svg viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M21 16v5h-5"></path></svg>',
  'arrow-down': '<svg viewBox="0 0 24 24"><path d="M12 4v15M6 13l6 6 6-6"></path></svg>',
  'arrow-up': '<svg viewBox="0 0 24 24"><path d="M12 20V5M6 11l6-6 6 6"></path></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"></path></svg>'
};

const $ = (selector) => document.querySelector(selector);
const fileUrl = (folder, filename) => `${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;
const rootFileUrl = (filename) => `${encodeURIComponent(flyerFolder)}/${encodeURIComponent(filename)}`;

const pages = flyerFiles.map((file, index) => ({
  id: index === 0 ? 'capa' : `pagina-${index + 1}`,
  title: index === 0 ? 'Capa do encarte' : `Página ${index + 1} do encarte`,
  category: 'Encarte',
  src: rootFileUrl(file),
  kind: 'page'
}));

const offers = productFiles.map(([file, title, category], index) => ({
  id: String(index + 1).padStart(2, '0'),
  title,
  category,
  src: fileUrl(feedFolder, file),
  kind: 'offer'
}));

const feedItems = [...pages, ...offers];
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
  const label = item.kind === 'page' ? item.id === 'capa' ? 'CAPA' : `PÁG. ${item.id.split('-')[1]}` : `OFERTA ${item.id}`;
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
  $('#offer-modal-title').textContent = item.title;
  $('#offer-modal-category').textContent = item.category;
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
