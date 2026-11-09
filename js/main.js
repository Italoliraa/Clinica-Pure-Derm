(function () {
  var SITE = window.SITE, DATA = window.DATA;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- Ícones (estilo Lucide, SVG embutido) ---------- */
  var ICONS = {
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    whatsapp: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
    quote: '<path d="M3 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3c0 4-2 5-4 5z"/><path d="M15 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3c0 4-2 5-4 5z"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
    sparkles: '<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0l1.58 6.14a2 2 0 0 0 1.44 1.44l6.14 1.58a.5.5 0 0 1 0 .96l-6.14 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    droplets: '<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>',
    flower: '<circle cx="12" cy="12" r="3"/><path d="M12 9a4.5 4.5 0 1 0-3-1M15 12a4.5 4.5 0 1 0 1 3M12 15a4.5 4.5 0 1 0 3 1M9 12a4.5 4.5 0 1 0-1-3"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    clipboard: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    armchair: '<path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M5 18v2M19 18v2"/>',
    badge: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
    gem: '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>'
  };
  function icon(name, size, cls) {
    return '<svg class="icon ' + (cls || '') + '" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + '</svg>';
  }
  function hydrate(root) {
    $$('[data-icon]', root).forEach(function (el) {
      el.outerHTML = icon(el.getAttribute('data-icon'), el.getAttribute('data-size') || 24, el.className);
    });
  }

  function waLink(text) {
    return 'https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent(text || SITE.whatsappMessage);
  }

  /* ---------- Links de WhatsApp, Instagram e dados de contato ---------- */
  $$('[data-wa]').forEach(function (a) { a.href = waLink(); a.target = '_blank'; a.rel = 'noreferrer'; });
  $$('[data-ig]').forEach(function (a) { a.href = SITE.instagramUrl; a.target = '_blank'; a.rel = 'noreferrer'; a.textContent = a.hasAttribute('data-ig-at') ? '@' + SITE.instagramUser : a.textContent; });
  $$('[data-site]').forEach(function (el) { el.textContent = SITE[el.getAttribute('data-site')]; });
  $$('[data-hours]').forEach(function (el) { el.innerHTML = SITE.hours.map(function (h) { return '<span>' + h + '</span>'; }).join(''); });
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  var map = $('#map');
  if (SITE.mapEmbedUrl) {
    map.innerHTML = '<iframe title="Mapa da clínica" src="' + SITE.mapEmbedUrl + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  }

  /* ---------- Listas ---------- */
  $('#cards').innerHTML = DATA.procedures.map(function (p, i) {
    var msg = 'Olá! Gostaria de saber mais sobre: ' + p.name + '.';
    return '<article class="card reveal" data-delay="' + (i % 3) * 90 + '"><div class="card__img"><img src="' + p.img + '" alt="" loading="lazy" style="object-position:' + p.pos + '"><span class="card__icon"><i data-icon="' + p.icon + '" data-size="20"></i></span></div>' +
      '<div class="card__body"><h3>' + p.name + '</h3><p>' + p.text + '</p><a class="link" href="' + waLink(msg) + '" target="_blank" rel="noreferrer">Saiba mais</a></div></article>';
  }).join('');

  function pair(item, large) {
    var big = large ? 40 : 28;
    return '<div class="pair' + (large ? ' pair--lg' : '') + '">' +
      ['Antes', 'Depois'].map(function (l) { return '<div class="pair__half">' + icon('image', big) + '<span>' + l + '</span></div>'; }).join('') +
      '<em class="pair__tag">' + item.note + '</em></div>';
  }
  $('#gallery').innerHTML = DATA.results.map(function (r, i) {
    return '<div class="reveal" data-delay="' + i * 90 + '"><button class="gallery__item" data-open="' + i + '" aria-label="Ampliar: ' + r.title + '">' + pair(r) + '<span class="gallery__caption">' + r.title + '</span></button></div>';
  }).join('');

  $('#diffs').innerHTML = DATA.differentials.map(function (d, i) {
    return '<div class="diff reveal" data-delay="' + i * 70 + '"><span class="diff__icon"><i data-icon="' + d.icon + '"></i></span><h3>' + d.title + '</h3><p>' + d.text + '</p></div>';
  }).join('');

  $('#quotes').innerHTML = DATA.testimonials.map(function (t, i) {
    return '<figure class="quote reveal" data-delay="' + i * 90 + '"><span class="quote__mark" data-icon="quote" data-size="28"></span><blockquote>' + t.text + '</blockquote><figcaption>' + t.name + '<small>Depoimento de exemplo</small></figcaption></figure>';
  }).join('');

  hydrate(document);

  /* ---------- Menu ---------- */
  var header = $('.header'), nav = $('#menu'), burger = $('.burger');
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    header.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    burger.innerHTML = icon(open ? 'x' : 'menu', 24);
    document.body.style.overflow = open ? 'hidden' : '';
    onScroll();
  }
  function onScroll() { header.classList.toggle('is-solid', window.scrollY > 24 || nav.classList.contains('is-open')); }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
  $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  $$('.logo').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  window.addEventListener('scroll', onScroll, { passive: true });
  burger.innerHTML = icon('menu', 24);
  onScroll();

  /* ---------- Animação ao rolar ---------- */
  var items = $$('.reveal');
  items.forEach(function (el) { el.style.transitionDelay = (el.getAttribute('data-delay') || 0) + 'ms'; });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('is-in'); }); }

  /* ---------- Galeria ampliada ---------- */
  var box = $('#lightbox'), current = 0, total = DATA.results.length;
  function show(i) {
    current = (i + total) % total;
    $('#lightbox-pair').innerHTML = pair(DATA.results[current], true);
    $('#lightbox-title').textContent = DATA.results[current].title;
  }
  function openBox(i) { show(i); box.hidden = false; document.body.style.overflow = 'hidden'; }
  function closeBox() { box.hidden = true; document.body.style.overflow = ''; }
  $$('[data-open]').forEach(function (b) { b.addEventListener('click', function () { openBox(+b.getAttribute('data-open')); }); });
  box.addEventListener('click', closeBox);
  $('#lightbox-body').addEventListener('click', function (e) { e.stopPropagation(); });
  $('#lb-close').addEventListener('click', closeBox);
  $('#lb-prev').addEventListener('click', function (e) { e.stopPropagation(); show(current - 1); });
  $('#lb-next').addEventListener('click', function (e) { e.stopPropagation(); show(current + 1); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeBox(); setMenu(false); }
    if (!box.hidden && e.key === 'ArrowRight') show(current + 1);
    if (!box.hidden && e.key === 'ArrowLeft') show(current - 1);
  });

  /* ---------- Formulário ---------- */
  var form = $('#form'), msg = $('#form-msg');
  function validate(v) {
    var e = {};
    if (v.nome.trim().length < 3) e.nome = 'Informe seu nome completo.';
    var d = v.telefone.replace(/\D/g, '');
    if (d.length < 10 || d.length > 11) e.telefone = 'Informe um telefone com DDD, por exemplo (81) 99999-9999.';
    if (v.mensagem.trim().length < 10) e.mensagem = 'Escreva uma mensagem com pelo menos 10 caracteres.';
    return e;
  }
  function setMsg(text, type) { msg.textContent = text; msg.className = 'form__msg ' + (type || ''); }
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var v = { nome: form.nome.value, telefone: form.telefone.value, mensagem: form.mensagem.value };
    var errs = validate(v);
    ['nome', 'telefone', 'mensagem'].forEach(function (k) {
      $('[data-err="' + k + '"]').textContent = errs[k] || '';
      form[k].setAttribute('aria-invalid', errs[k] ? 'true' : 'false');
    });
    if (Object.keys(errs).length) return;
    var btn = $('button[type=submit]', form);
    if (SITE.formEndpoint) {
      btn.disabled = true; btn.textContent = 'Enviando…';
      fetch(SITE.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
        .then(function (r) { if (!r.ok) throw new Error(); setMsg('Mensagem enviada! Em breve entraremos em contato.', 'ok'); form.reset(); })
        .catch(function () { setMsg('Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.', 'err'); })
        .then(function () { btn.disabled = false; btn.textContent = 'Enviar mensagem'; });
    } else {
      window.open(waLink('Olá! Meu nome é ' + v.nome + '. Telefone: ' + v.telefone + '. ' + v.mensagem), '_blank', 'noopener');
      setMsg('Mensagem enviada! Em breve entraremos em contato.', 'ok');
      form.reset();
    }
  });
  $$('#form input, #form textarea').forEach(function (el) {
    el.addEventListener('input', function () { $('[data-err="' + el.name + '"]').textContent = ''; el.setAttribute('aria-invalid', 'false'); });
  });

  var priv = $('#privacy');
  priv.addEventListener('click', function (e) { e.preventDefault(); alert('Substitua este aviso pela Política de Privacidade da clínica (exigência da LGPD).'); });
})();
