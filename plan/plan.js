/* 꾸밈 My [ ] 소개서 (2판) — 동작

   ── 여기만 바꾸면 됩니다 ─────────────────────────────────────────── */
/* 슬로건. 이 한 줄을 바꾸면 표지·끝 화면·장 머리가 전부 바뀝니다. */
var KKU_SLOGAN = '소중한 건, 이름을 새긴다.';
/* 표지에서만: 괄호 안 낱말을 직접 고르거나 적었을 때 아랫줄을 이 문장으로 바꿉니다. 없으면 위 슬로건. */
var KKU_SLOGAN_BY_WORD = {
  'Star': '최애 이름을 새겨 드립니다.', '최애': '최애 이름을 새겨 드립니다.',
  'Family': '이름을 새긴 선물.', 'Fan': '이름을 새긴 선물.',
  'Pet': '소중하면, 새겨 봐.', 'Car': '소중하면, 새겨 봐.'
};
/* 괄호 안에서 돌아가는 낱말 [낱말, 글꼴(plan.css 의 .f-…), 크기 맞춤]. 여기만 여러 글꼴을 씁니다. */
var KKU_WORDS = [
  ['Star', 'f-pfi', 1.06], ['Fan', 'f-anton', 1.14], ['Family', 'f-caveat', 1.32], ['Pet', 'f-jua', 1.02],
  ['Car', 'f-mono', .9], ['최애', 'f-bhs', 1.04], ['Mom', 'f-dm', 1.1], ['Dad', 'f-dohyeon', 1.1],
  ['Team', 'f-gaegu', 1.22], ['Love', 'f-pacifico', .88], ['Self', 'f-pf', 1.02], ['우리', 'f-myeongjo', .98], ['나', 'f-pen', 1.45]
];
var KKU_ROT_MS = 620;   /* 낱말이 바뀌는 빠르기(밀리초) */
/* ─────────────────────────────────────────────────────────────────────

   이 파일 = 꾸밈 자체의 것(괄호, 돌아가는 낱말, 차트, 계산기, 쪽 넘김, 인쇄 맞춤).
   남의 사진은 전부 refs.js 에 있고 여기서는 불러다 그리기만 합니다. 로고는 logo.js 한 곳.

   주소 뒤에 붙이는 값
     ?mode=external  남의 사진을 회색 칸 '교체 예정'으로 바꾸고
     ?print=1        16:9 한 쪽씩 떨어지는 인쇄 배치로 엽니다 (헤드리스 크롬 --print-to-pdf 용)

   숫자의 근거는 research/ 폴더에만 둡니다(화면에는 출처를 싣지 않습니다). */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var root = document.documentElement;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var QS = location.search || '';
  var EXT = /[?&]mode=external\b/.test(QS), PRINT = /[?&]print=1\b/.test(QS), TODO = /[?&]todo=1\b/.test(QS);
  if (EXT) root.classList.add('is-external');
  if (TODO) root.classList.add('with-todo');
  if (PRINT) { root.classList.add('is-print'); reduce = true; }

  /* ═════════ 0. 로고·표식·슬로건 (한 곳에서 불러 씁니다) ═════════ */
  var LOGO = window.KKU_LOGO || { text: '꾸밈' };
  var logoHTML = LOGO.body ? '<svg viewBox="' + LOGO.viewBox + '" role="img" aria-label="' + LOGO.text + '">' + LOGO.body + '</svg>' : LOGO.text;
  $$('[data-mark]').forEach(function (el) {
    el.innerHTML = '<span class="lock mini"><span class="kk" data-logo></span><span class="my">My</span><span class="kb"><span class="slot"></span></span></span>' +
      (el.getAttribute('data-mark') === 'plain' ? '' : '<em>' + KKU_SLOGAN + '</em>');
  });
  $$('[data-logo]').forEach(function (el) { el.innerHTML = logoHTML; if (LOGO.body) el.classList.add('is-svg'); });
  $$('[data-slogan]').forEach(function (el) { el.textContent = KKU_SLOGAN; });

  /* ═════════ 1. 남의 자료(refs.js) 불러오기 ═════════ */
  var REFS = window.KKU_REFS || [], GROUPS = window.KKU_REF_GROUPS || {}, PICKS = window.KKU_REF_PICKS || { top10: [], item: {} };
  var REF = {};
  REFS.forEach(function (r) { REF[r.id] = r; });
  var HIDE = { 'leather-07': 1, 'leather-08': 1 };            /* 화면에 올리지 않는 자료 */
  function group(g) { return REFS.filter(function (r) { return r.group === g && r.img && !HIDE[r.id]; }); }
  function swapped(r) { return EXT && r.external === false; }
  function slot(r) { return '<span class="swap"><b>교체 예정</b><i>' + r.id + '</i></span>'; }
  function imgTag(r, lazy, big) { return '<img src="' + (big ? r.img : r.img.replace('w=1440', 'w=900')) + '" alt="' + r.title + '" referrerpolicy="no-referrer" decoding="async"' + (r.mono ? ' class="mono"' : '') + (r.pos ? ' style="object-position:' + r.pos + '"' : '') + (lazy && !PRINT ? ' loading="lazy"' : '') + '>'; }
  /* 사진 한 장 + 이름. 출처·링크·'확인 전'은 화면에 올리지 않는다. 확인 안 된 값(check)은 값째 뺀다. */
  function shot(r, o) {
    o = o || {};
    if (!r || !r.img || HIDE[r.id]) return '';
    var sw = swapped(r), price = o.price && r.result && !r.check && !/미확인/.test(r.result);
    return '<figure class="shot ' + (o.cls || '') + (r.portrait ? ' pt' : '') + (sw ? ' swapd' : '') + '" data-id="' + r.id + '"><span class="ph">' + (sw ? slot(r) : imgTag(r, o.lazy)) + '</span>' +
      '<figcaption><b>' + r.title + '</b>' + (r.sub ? '<span class="w">' + r.sub + '</span>' : '') + (price ? '<strong>' + r.result + '</strong>' : '') + '</figcaption></figure>';
  }
  function shots(list, o) { return list.map(function (r) { return shot(r, o); }).join(''); }
  /* 인쇄 때 사진 줄을 격자로: 장수에 따라 칸 수와 사진 높이를 정한다 */
  function cols(st) {
    var n = st.children.length, rows = n <= 7 ? 1 : (n <= 14 ? 2 : 3);
    st.style.setProperty('--cols', rows === 1 ? Math.max(n, 4) : Math.ceil(n / rows));
    st.style.setProperty('--ph', (rows === 1 ? 300 : (rows === 2 ? 190 : 132)) + 'px');
  }
  /* 본문에 자리만 잡아 둔 사진: <span class="thumb" data-ref="…">, <figure class="tile" data-ref="…"> */
  $$('[data-ref]').forEach(function (el) {
    var r = REF[el.getAttribute('data-ref')], tile = el.classList.contains('tile');
    if (!r || !r.img) { el.classList.add('noimg'); return; }
    var inner = swapped(r) ? slot(r) : imgTag(r);
    if (swapped(r)) el.classList.add('swapd');
    if (tile) el.insertAdjacentHTML('afterbegin', '<span class="ph">' + inner + '</span>'); else el.innerHTML = inner;
  });
  /* 큰 사진 화면: 괄호는 꾸밈 것, 안의 사진은 남의 것 */
  function plateHTML(ids, labs, big, mono, pos) {
    mono = mono || []; pos = pos || {};
    return ids.map(function (id, i) {
      var r = REF[String(id).trim()]; if (!r || !r.img) return '';
      if (mono.indexOf(r.id) > -1 || pos[r.id]) { r = Object.assign({}, r); if (mono.indexOf(r.id) > -1) r.mono = true; if (pos[r.id]) r.pos = pos[r.id]; }
      var sw = swapped(r);
      return '<figure class="pl' + (sw ? ' swapd' : '') + '" data-id="' + r.id + '">' + (sw ? slot(r) : imgTag(r, false, big || ids.length < 3)) + (labs[i] ? '<span class="tagk">' + labs[i] + '</span>' : '') + '</figure>';
    }).join('');
  }
  $$('[data-plates]').forEach(function (el) {
    var pos = {}; (el.getAttribute('data-pos') || '').split('|').forEach(function (s) { var k = s.split('='); if (k[1]) pos[k[0]] = k[1]; });
    el.innerHTML = plateHTML(el.getAttribute('data-plates').split(','), (el.getAttribute('data-labels') || '').split('|'), el.hasAttribute('data-big'), (el.getAttribute('data-mono') || '').split(','), pos);
  });
  /* 한눈에 보는 벽 */
  (function () {
    var el = $('#wall'), W = PICKS.wall; if (!el || !W) return;
    el.innerHTML = W.ids.map(function (id) {
      var r = REF[id]; if (!r) return '';
      var sw = swapped(r);
      return '<span class="wl' + (W.color.indexOf(id) > -1 ? ' c' : '') + (sw ? ' swapd' : '') + '" data-id="' + r.id + '">' + (sw ? slot(r) : imgTag(r)) + '</span>';
    }).join('');
  })();
  (function () {
    var top = $('#sTop'); if (!top) return;
    top.innerHTML = PICKS.top10.map(function (t) { return shot(REF[t.id], { cls: 'bx' }); }).join('');
  })();

  /* ═════════ 2. 꾸밈 자체 자료 ═════════ */
  var ITEMS = [
    { k: 'sweat', no: '01', name: '자수 의류', verb: '수놓다', price: '79,000', range: '59,000 · 79,000 · 109,000', line: '옷 위에 이름을 수놓습니다.', desc: '맨투맨과 후디입니다. 사진에서 글자가 잘 읽힙니다. 꾸밈의 매출을 끌고 갈 품목입니다.' },
    { k: 'key', no: '02', name: '각인 키링', verb: '새기다', price: '29,000', range: '19,000 · 29,000 · 39,000', line: '금속에 이름을 새깁니다.', desc: '처음 사 보기 좋은 가격입니다. 금속 등급, 각인 깊이, 포장으로 값을 합니다.' },
    { k: 'plush', next: 1, no: '03', name: '인형 키링', verb: '달다', price: '39,000', range: '29,000 · 39,000 · 55,000', line: '이름을 달고 다닙니다.', desc: '가방에 늘 달려 있어서 가장 잘 퍼집니다. 주문이 모이면 엽니다.' },
    { k: 'leather', next: 1, no: '04', name: '가죽 소품', verb: '찍다', price: '69,000', range: '49,000 · 69,000 · 99,000', line: '가죽에 이니셜을 찍습니다.', desc: '카드지갑과 키홀더입니다. 좋은 가죽과 만듦새로 값을 합니다.' }
  ];
  var SCENES = [
    { w: 'Star', t: '나의 스타에게', p: '스타가 걸쳐도, 팬끼리 맞춰 들어도 자랑거리가 됩니다.', a: '이름과 날짜, 응원색, 팬만 아는 상징', b: '자수 의류, 각인 키링', c: '' },
    { w: 'Fan', t: '팬끼리, 그리고 팬에게', p: '나란히 새겨 나눠 듭니다.', a: '우리끼리 쓰는 말, 두 사람 이름', b: '각인 키링, 자수 의류, 단체 주문', c: '공연 우정 팔찌. 마이클스 장신구 매출이 40% 넘게 늘었습니다.' },
    { w: 'Family', t: '가족에게', p: '선물할 날이 해마다 돌아옵니다.', a: '아이 이름, 엄마 이름, 기념일', b: '자수 의류, 가죽 소품', c: '자주 파자마 이니셜.' },
    { w: 'Pet', t: '반려동물에게', p: '꾸밈 계정에서 바로 보여 줄 수 있는 장면입니다.', a: '이름과 처음 만난 날', b: '자수 의류, 인형 키링', c: '' },
    { w: 'Car', t: '내 차에', p: '차를 아끼는 사람에게 차는 식구입니다.', a: '차 이름과 처음 만난 날', b: '각인 키링, 가죽 키홀더', c: '' },
    { w: 'Self', t: '나에게', p: '가장 가볍게 해 보는 첫 주문입니다.', a: '내 이니셜, 별명, 좌우명', b: '각인 키링, 가죽 소품', c: 'Nike By You.' }
  ];
  var TODOS = [];

  /* 07장: 주력 넷 한눈에 + 품목마다 큰 사진 화면, 상품 화면 */
  (function () {
    var f = $('#four4');
    if (f) f.innerHTML = ITEMS.map(function (it) { return '<li class="' + (it.next ? 'next' : '') + '"><i>' + it.no + (it.next ? ' · 다음' : ' · 지금') + '</i><b>' + it.name + '</b><span>' + it.verb + ' · ' + it.price + '원</span><p>' + it.line + '</p></li>'; }).join('');
    var el = $('#items'); if (!el) return;
    function strip(id, title, inner, nav) {
      return '<div class="wrap"><div class="strip-h"><h3 class="h3">' + title + '</h3>' + (nav ? '<div class="strip-nav" data-for="' + id + '"><button type="button" aria-label="앞으로">←</button><button type="button" aria-label="뒤로">→</button></div>' : '') + '</div></div><div class="strip" id="' + id + '" tabindex="0">' + inner + '</div>';
    }
    el.innerHTML = ITEMS.map(function (it, i) {
      var pr = group('item-' + it.k), bxs = (PICKS.item[it.k] || []).map(function (id) { return REF[id]; }).filter(function (r) { return r && r.img; });
      var pp = ((PICKS.plate || {})[it.k] || []).filter(function (p) { return REF[p.id]; });
      var head = '<div class="item-h2"><div><i>' + it.no + (it.next ? ' · 다음' : ' · 지금') + '</i><h3>' + it.name + '<small>' + it.verb + '</small></h3></div><div><div class="pr">' + it.price + '<small>원</small></div><p>' + it.line + ' ' + it.desc + '</p><p class="sub2">걸어 볼 값은 ' + it.range + '원입니다.</p></div></div>';
      var pv = pp.length ? '<div class="view plate" data-view><div class="wrap"><div class="pl-row">' + plateHTML(pp.map(function (p) { return p.id; }), pp.map(function (p) { return p.label; })) + '</div><div class="pl-say"><p><i class="pl-no">' + it.no + ' ' + it.name + '</i>' + it.line + '</p></div></div></div>' : '';
      var cls = 'view item' + (it.next ? ' next' : '');
      if (PRINT) return pv + '<div class="' + cls + '" data-view><div class="wrap">' + head + '</div>' + strip('sItem' + i, '기준으로 삼는 상품 ' + pr.length + '건', shots(pr, { cls: 'pd', price: 1 })) + '</div>' +
        (bxs.length ? '<div class="' + cls + '" data-view><div class="wrap"><h3 class="h2">' + it.name + '. 이런 만듦새를 봅니다.</h3></div><div class="strip">' + shots(bxs, { cls: 'bx' }) + '</div></div>' : '');
      return pv + '<div class="' + cls + '" data-view><div class="wrap">' + head + '</div>' + strip('sItem' + i, '기준으로 삼는 상품 ' + pr.length + '건', shots(pr, { cls: 'pd', price: 1 }) + shots(bxs, { cls: 'bx', lazy: 1 }), true) + '</div>';
    }).join('');
  })();

  /* 13장: 참고 사진 모음 — 화면에서는 한 묶음씩, 인쇄에서는 묶음마다 한 쪽 */
  (function () {
    var tabs = $('#bxTabs'), st = $('#sBx'), ttl = $('#bxTitle'); if (!tabs || !st) return;
    var keys = Object.keys(GROUPS).filter(function (k) { return GROUPS[k].board; }).sort(function (a, b) { return GROUPS[a].no - GROUPS[b].no; });
    if (!keys.length) return;
    function name(k) { return GROUPS[k].title.replace(/^Behance[^—]*—\s*/, ''); }
    $$('[data-bx-total]').forEach(function (e) { e.textContent = keys.reduce(function (n, k) { return n + group(k).length; }, 0); });
    $$('[data-bx-groups]').forEach(function (e) { e.textContent = keys.length; });
    function head(k) { return GROUPS[k].no + '. ' + name(k) + '<small>' + group(k).length + '장</small>'; }
    function set(i) {
      $$('button', tabs).forEach(function (b, n) { b.classList.toggle('on', n === i); b.setAttribute('aria-selected', n === i ? 'true' : 'false'); });
      ttl.innerHTML = head(keys[i]);
      st.innerHTML = shots(group(keys[i]), { cls: 'bx', lazy: 1 });
      st.scrollLeft = 0; cols(st);
      if (window.__watchImgs) window.__watchImgs(st);
    }
    tabs.innerHTML = keys.map(function (k, i) { return '<button type="button" role="tab" data-g="' + i + '">' + GROUPS[k].no + '<span>' + name(k) + '</span></button>'; }).join('');
    tabs.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) set(+b.getAttribute('data-g')); });
    set(0);
    if (PRINT) {
      var html = '';
      keys.slice(1).forEach(function (k) { html += '<div class="view" data-view><div class="wrap"><div class="strip-h" style="margin-top:0"><h3 class="h2 bxh">' + head(k) + '</h3></div></div><div class="strip">' + shots(group(k), { cls: 'bx' }) + '</div></div>'; });
      st.closest('.view').insertAdjacentHTML('afterend', html);
    }
  })();

  $$('.strip').forEach(cols);
  $$('.strip-nav').forEach(function (nv) {
    var st = document.getElementById(nv.getAttribute('data-for')); if (!st) return;
    var bs = $$('button', nv);
    bs[0].addEventListener('click', function () { st.scrollBy({ left: -st.clientWidth * .8, behavior: reduce ? 'auto' : 'smooth' }); });
    bs[1].addEventListener('click', function () { st.scrollBy({ left: st.clientWidth * .8, behavior: reduce ? 'auto' : 'smooth' }); });
  });

  /* 사진: 못 불러오면 그 칸을 감춘다. 몇 장 떴는지는 window.__img 로 센다 */
  var IMG = { total: 0, ok: 0, fail: 0, failed: [] };
  window.__img = IMG;
  function bad(img) { if (img.__d) return; img.__d = 1; IMG.fail++; IMG.failed.push(img.getAttribute('src')); var h = img.closest('.shot,.thumb,.pl,.wl,.tile'); if (h) h.classList.add('noimg'); }
  function good(img) { if (img.__d) return; if (img.naturalWidth < 2) return bad(img); img.__d = 1; IMG.ok++; }
  function watch(scope) {
    $$('img', scope).forEach(function (img) {
      if (img.__w || img.classList.contains('stage-poster')) return; img.__w = 1; IMG.total++;
      if (img.complete && (img.naturalWidth > 1 || img.getAttribute('loading') !== 'lazy')) { if (img.naturalWidth > 1) good(img); else bad(img); }
      else { img.addEventListener('load', function () { good(img); }); img.addEventListener('error', function () { bad(img); }); }
    });
  }
  window.__watchImgs = watch;
  watch($('main'));

  if (EXT) {
    var bar = document.createElement('div');
    bar.className = 'ext-bar';
    bar.innerHTML = '<span><b>외부용 미리보기</b> 회색 칸 ' + $$('.swapd').length + '곳이 교체 예정입니다</span><span>refs.js 에서 external:false 인 자료 ' + REFS.filter(function (r) { return r.external === false; }).length + '건</span>';
    document.body.appendChild(bar);
  }

  /* ═════════ 3. 인트로 영상 — 파일이 없으면 꾸밈 My [ ] 만 ═════════ */
  (function () {
    var stage = $('#introStage'); if (!stage) return;
    var sec = stage.closest('.intro'), poster = $('#introPoster'), vid = $('#introVid'), play = $('#introPlay'), snd = $('#introSound');
    function posterOk() { stage.classList.add('has-poster'); sec.classList.remove('no-poster'); }
    function posterNo() { poster.style.display = 'none'; vid.removeAttribute('poster'); }
    sec.classList.add('no-poster');
    if (poster.complete) { if (poster.naturalWidth > 1) posterOk(); else posterNo(); }
    else { poster.addEventListener('load', posterOk); poster.addEventListener('error', posterNo); }
    if (PRINT) { vid.remove(); return; }
    vid.addEventListener('loadedmetadata', function () { stage.classList.add('has-video'); });
    vid.addEventListener('error', function () { stage.classList.remove('has-video'); });
    vid.addEventListener('play', function () { stage.classList.add('playing'); play.textContent = '멈춤'; });
    vid.addEventListener('pause', function () { stage.classList.remove('playing'); play.textContent = '재생'; });
    vid.addEventListener('ended', function () { stage.classList.remove('playing'); play.textContent = '다시 보기'; });
    vid.src = '../intro/kkumim-intro.mp4';
    play.addEventListener('click', function () { if (vid.paused) { var p = vid.play(); if (p && p.catch) p.catch(function () {}); } else vid.pause(); });
    snd.addEventListener('click', function () { vid.muted = !vid.muted; snd.textContent = vid.muted ? '소리 켜기' : '소리 끄기'; snd.setAttribute('aria-pressed', vid.muted ? 'false' : 'true'); });
    window.addEventListener('beforeprint', function () { vid.pause(); });
  })();

  /* ═════════ 4. 괄호 안의 낱말: 기본은 돌아가고, 직접 적으면 멈춘다 ═════════ */
  var rots = $$('[data-rot]'), ri = 0, typed = '', timer = null;
  function isLat(s) { return /^[\x20-\x7E]+$/.test(s); }
  function wEm(s) { var w = 0; Array.from(s).forEach(function (c) { w += /[ᄀ-ᇿ㄰-㆏가-힣぀-ヿ一-鿿]/.test(c) ? .96 : (c === ' ' ? .3 : (/[A-Z0-9MWmw]/.test(c) ? .74 : .56)); }); return w; }
  function fit(el) {
    el.style.transform = '';
    var box = el.parentNode.clientWidth, w = el.offsetWidth;
    if (box && w > box * .98) el.style.transform = 'scale(' + (box * .98 / w).toFixed(3) + ')';
  }
  function paint() {
    var w = KKU_WORDS[ri];
    rots.forEach(function (el) {
      if (typed) { el.className = 'rot typed'; el.textContent = typed; el.style.setProperty('--sz', 1); }
      else { el.className = 'rot ' + w[1]; el.textContent = w[0]; el.style.setProperty('--sz', w[2]); }
      fit(el);
    });
  }
  function tick() { ri = (ri + 1) % KKU_WORDS.length; paint(); }
  function run() { clearInterval(timer); if (!typed && !reduce) timer = setInterval(function () { if (!document.hidden) tick(); }, KKU_ROT_MS); }
  function maxOf(el) { var h = el.closest('[data-max]'); return h ? +h.getAttribute('data-max') : 3.2; }
  function apply(v, src) {
    typed = (v || '').trim();
    $$('input[data-win]').forEach(function (i) {
      if (i !== src && i.value !== v) i.value = v || '';
      i.style.setProperty('--fs', Math.min(1, maxOf(i) / Math.max(wEm(i.value || i.placeholder || ''), .9)).toFixed(3));
      if (i.classList.contains('fill')) i.style.width = 'calc(var(--u)*' + Math.max(1.4, Math.min(maxOf(i), wEm(i.value || i.placeholder || 'Star') + .25)).toFixed(2) + ')';
    });
    root.classList.toggle('has-word', !!typed);
    var cs = $('#coverSlogan'); if (cs) cs.textContent = (typed && KKU_SLOGAN_BY_WORD[typed]) || KKU_SLOGAN;
    var mw = $('#madeWord'); if (mw) { mw.textContent = typed || 'Star'; mw.style.setProperty('--fs', Math.min(1, 3 / Math.max(wEm(typed || 'Star'), .9)).toFixed(3)); }
    paint(); run();
  }
  window.__word = apply;
  $$('input[data-win]').forEach(function (i) { i.addEventListener('input', function () { apply(i.value, i); }); });
  $$('[data-set]').forEach(function (b) { b.addEventListener('click', function () { apply(b.getAttribute('data-set')); }); });
  /* 인쇄용: 낱말 여러 개를 세로로 */
  $$('[data-stack]').forEach(function (el) { el.innerHTML = KKU_WORDS.slice(0, 7).map(function (w) { return '<span class="' + w[1] + '" style="--sz:' + w[2] + '">' + w[0] + '</span>'; }).join(''); });
  apply('');
  window.addEventListener('resize', paint);
  if (document.fonts && document.fonts.load) {
    Promise.all(KKU_WORDS.map(function (w) { var t = document.createElement('span'); t.className = w[1]; t.style.cssText = 'position:absolute;visibility:hidden'; t.textContent = w[0]; document.body.appendChild(t); var f = getComputedStyle(t); var p = document.fonts.load(f.fontStyle + ' ' + f.fontWeight + ' 40px ' + f.fontFamily, w[0]); t.remove(); return p.catch(function () {}); })).then(paint);
  }

  /* ═════════ 5. 목차·진행·방향키 ═════════ */
  var chs = $$('section.ch').filter(function (s) { return !(EXT && s.classList.contains('todo')); }), views = $$('[data-view]');
  var rail = $('#railList'), idxL = $('#idxList');
  chs.forEach(function (s) {
    var n = s.getAttribute('data-n'), t = s.getAttribute('data-t');
    if (rail) rail.insertAdjacentHTML('beforeend', '<li><a href="#' + s.id + '" data-id="' + s.id + '"><b>' + n + '</b><span>' + t + '</span></a></li>');
    if (idxL) idxL.insertAdjacentHTML('beforeend', '<li><a href="#' + s.id + '"><b>' + n + '</b>' + t + '</a></li>');
  });
  var idxBtn = $('#idxBtn');
  function idxToggle(on) { document.body.classList.toggle('idx-on', on); if (idxBtn) idxBtn.setAttribute('aria-expanded', on ? 'true' : 'false'); }
  if (idxBtn) idxBtn.addEventListener('click', function () { idxToggle(!document.body.classList.contains('idx-on')); });
  if (idxL) idxL.addEventListener('click', function (e) { if (e.target.closest('a')) idxToggle(false); });
  function topH() { return parseFloat(getComputedStyle(root).getPropertyValue('--top')) || 0; }
  function vTop(v) { return v.getBoundingClientRect().top + window.scrollY - topH(); }
  function jump(d) {
    var vs = views.filter(function (v) { return v.offsetParent !== null; });
    var y = window.scrollY, tops = vs.map(vTop), i = 0;
    for (var k = 0; k < tops.length; k++) if (tops[k] <= y + 6) i = k;
    var t = d > 0 ? tops[Math.min(i + 1, tops.length - 1)] : (y > tops[i] + 60 ? tops[i] : tops[Math.max(i - 1, 0)]);
    window.scrollTo({ top: t, behavior: reduce ? 'auto' : 'smooth' });
  }
  window.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var tg = e.target, tn = tg && tg.tagName;
    if (e.key === 'Escape') { idxToggle(false); if (tn === 'INPUT') tg.blur(); return; }
    if (tn === 'INPUT' || tn === 'TEXTAREA' || tn === 'SELECT' || (tg && tg.closest && tg.closest('.strip'))) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); jump(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); jump(-1); }
  });
  var prog = $('#prog'), idxNow = $('#idxNow'), ticking = false;
  function onScroll() {
    ticking = false;
    var y = window.scrollY, H = root.scrollHeight - window.innerHeight;
    if (prog) prog.style.width = (H > 0 ? Math.min(100, y / H * 100) : 0) + '%';
    var cur = chs[0], line = y + window.innerHeight * .4;
    chs.forEach(function (s) { if (s.getBoundingClientRect().top + y <= line) cur = s; });
    $$('#railList a').forEach(function (a) { a.classList.toggle('on', a.getAttribute('data-id') === cur.id); });
    if (idxNow) idxNow.textContent = cur.getAttribute('data-n') + ' / 13';
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ═════════ 6. 03장: 회사별 성장 — 확인된 해만 기둥으로 그린다(사이를 잇지 않는다) ═════════ */
  var GROW = [
    { n: '팝마트', u: '억 위안', say: '4년 만에 8배', pts: [[2021, 44.9], [2022, 46.2], [2023, 63.0], [2024, 130.4], [2025, 371.2]] },
    { n: '하이브 굿즈', u: '억 원', say: '2년 만에 75% 증가', pts: [[2023, 3256], [2024, 4202], [2025, 5706]] },
    { n: '케이스티파이', u: '억 달러', say: '2년 만에 2.4배', plus: 1, pts: [[2020, 1.25], [2021, null], [2022, 3]] },
    { n: '빌드어베어', u: '억 달러', say: '코로나 전보다 57% 커졌습니다', pts: [[2019, 3.39], [2020, 2.55], [2021, 4.12], [2022, 4.68], [2023, 4.86], [2024, 4.96], [2025, 5.30]] },
    { n: '마플', u: '억 원', say: '3년 만에 1.8배', pts: [[2022, 186], [2023, 341], [2024, 503], [2025, 343]] }
  ];
  (function () {
    var el = $('#grow'); if (!el) return;
    function fmt(v) { return v >= 1000 ? Math.round(v).toLocaleString('ko-KR') : (v >= 100 ? Math.round(v) : (v >= 10 ? v.toFixed(1) : v.toFixed(2).replace(/0$/, ''))); }
    el.innerHTML = GROW.map(function (g) {
      var vals = g.pts.filter(function (p) { return p[1] != null; }), max = Math.max.apply(null, vals.map(function (p) { return p[1]; }));
      var first = vals[0], last = vals[vals.length - 1];
      return '<figure class="gw"><div class="gw-cols" style="--n:' + g.pts.length + '">' + g.pts.map(function (p) {
        return '<span class="' + (p[1] == null ? 'none' : (p === last ? 'last' : '')) + '"><i style="height:' + (p[1] == null ? 0 : Math.max(3, p[1] / max * 100)).toFixed(1) + '%"></i><em>' + String(p[0]).slice(2) + '</em></span>';
      }).join('') + '</div><figcaption><b>' + g.n + '</b><strong>' + g.say + '</strong><span>' + first[0] + '년 ' + fmt(first[1]) + (g.plus ? ' 이상' : '') + ' → ' + last[0] + '년 ' + fmt(last[1]) + (g.plus ? ' 이상' : '') + ' ' + g.u + '</span></figcaption></figure>';
    }).join('');
  })();

  /* ═════════ 7. 05장: 마플 4년 ═════════ */
  var MP = [
    { y: 2022, rev: 186.1, revL: '186', op: -16.1, opL: '−16.1억', g: '—', opm: '—', revT: '186억 1천만 원', opT: '−16억 1천만 원', say: '매출 186억 원, 영업손실 16억 원이었습니다.' },
    { y: 2023, rev: 341.06, revL: '341', op: 0.4454, opL: '+0.4억', g: '+83.3%', opm: '0.13%', revT: '341억 6백만 원', opT: '+4,454만 원', say: '매출이 83% 늘어 341억 원이 됐습니다. 영업이익은 4,454만 원이었습니다.' },
    { y: 2024, rev: 503.2, revL: '503', op: -22.1, opL: '−22.1억', g: '+47.6%', opm: '−4.40%', revT: '503억 2천만 원', opT: '−22억 1천만 원', say: '매출이 503억 원으로 가장 컸습니다. 손실도 22억 원으로 가장 컸습니다.' },
    { y: 2025, rev: 342.9, revL: '343', op: 7.5146, opL: '+7.5억', g: '−31.9%', opm: '2.19%', revT: '342억 9천만 원', opT: '+7억 5,146만 원', say: '이익이 적은 품목을 줄였습니다. 매출은 343억 원으로 줄었고 7.5억 원 흑자가 났습니다.' }
  ];
  (function () {
    var colsEl = $('#mpCols'), box = $('#mp'); if (!colsEl) return;
    var Z = 30, PX = 3, user = false;
    colsEl.innerHTML = MP.map(function (d, i) {
      var p = Math.max(2, Math.abs(d.op) * PX), neg = d.op < 0;
      return '<button type="button" class="mp-col" data-i="' + i + '" aria-label="' + d.y + '년 매출 ' + d.revT + ', 영업이익 ' + d.opT + '"><span class="mp-v">' + d.revL + '<small>억</small></span><span class="mp-b"><i style="--h:' + (d.rev / 503.2 * 100).toFixed(1) + '"></i></span><span class="mp-y">' + d.y + '</span><span class="mp-p"><i class="' + (neg ? 'neg' : 'pos') + '" style="--p:' + p.toFixed(1) + '"></i><em style="--o:' + (neg ? Z + p : Z).toFixed(1) + '">' + d.opL + '</em></span></button>';
    }).join('');
    function sel(i) {
      var d = MP[i];
      $$('.mp-col', colsEl).forEach(function (c, k) { c.classList.toggle('on', k === i); });
      $('#mpYr').textContent = d.y; $('#mpSay').textContent = d.say;
      $('#mpDl').innerHTML = [['매출', d.revT], ['1년 전보다', d.g], ['영업이익', d.opT], ['영업이익률', d.opm]].map(function (r) { return '<div><dt>' + r[0] + '</dt><dd>' + r[1] + '</dd></div>'; }).join('');
    }
    colsEl.addEventListener('click', function (e) { var c = e.target.closest('.mp-col'); if (c) { user = true; sel(+c.getAttribute('data-i')); } });
    sel(3);
    window.addEventListener('beforeprint', function () { user = true; box.classList.add('in'); sel(3); });
    if (!('IntersectionObserver' in window) || reduce) { box.classList.add('in'); return; }
    var io = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return; io.disconnect(); box.classList.add('in');
      [0, 1, 2, 3].forEach(function (i) { setTimeout(function () { if (!user) sel(i); }, 500 + i * 950); });
    }, { threshold: .35 });
    io.observe(box);
  })();

  /* ═════════ 8. 07장: 여섯 장면 ═════════ */
  (function () {
    var tabs = $('#sceneTabs'); if (!tabs) return;
    function set(i) {
      var d = SCENES[i];
      $$('button', tabs).forEach(function (b, k) { b.classList.toggle('on', k === i); b.setAttribute('aria-selected', k === i ? 'true' : 'false'); });
      $('#scWord').textContent = d.w; $('#scT').textContent = d.t; $('#scP').textContent = d.p;
      $('#scA').textContent = d.a; $('#scB').textContent = d.b; $('#scC').textContent = d.c;
      $('#scCrow').hidden = !d.c;
    }
    tabs.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) set(+b.getAttribute('data-sc')); });
    set(0);
  })();

  /* ═════════ 9. 08장: 첫 화면 시연 ═════════ */
  (function () {
    var demo = $('#demo'); if (!demo) return;
    var items = $$('button.it[data-it]', demo), pick = 'sweat', timers = [];
    items.forEach(function (b) { b.addEventListener('click', function () { pick = b.getAttribute('data-it'); items.forEach(function (x) { var on = x === b; x.classList.toggle('sel', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); }); }); });
    function make() {
      $('#madeHow').innerHTML = pick === 'key' ? '새김<small>각인 키링</small>' : '수놓음<small>자수 의류</small>';
      var lis = $$('#madeSteps li'); lis.forEach(function (l) { l.classList.add('wait'); });
      demo.classList.add('done'); timers.forEach(clearTimeout); timers = [];
      lis.forEach(function (l, i) { timers.push(setTimeout(function () { l.classList.remove('wait'); }, reduce ? 0 : 500 + i * 520)); });
    }
    $('#demoGo').addEventListener('click', make);
    $('#demoIn').addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); make(); } });
    $('#demoBack').addEventListener('click', function () { demo.classList.remove('done'); });
  })();

  /* ═════════ 10. 10장: 사업성 계산기 — 세 경우 모두 사업성 가정 모델의 원래 값 ═════════ */
  var ORD = [50, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1500, 2000, 2500, 3000, 4000, 5000, 6000, 8000, 10000];
  var ST = {
    cons: { name: '보수', price: 45000, orders: [100, 250, 500], grp: [[1, 60], [3, 80], [6, 100]], col: [[0, 0], [2, 1500], [4, 2000]], mi: .40, mg: .33, mc: .25, fix: [.5, 1.0, 1.6], k: .1, ad: 15000 },
    base: { name: '기준', price: 60000, orders: [300, 900, 2000], grp: [[3, 80], [8, 100], [20, 120]], col: [[1, 2000], [4, 3000], [8, 4000]], mi: .45, mg: .38, mc: .30, fix: [.7, 2.0, 4.0], k: .3, ad: 15000 },
    aggr: { name: '공격', price: 75000, orders: [800, 3000, 8000], grp: [[6, 100], [25, 120], [60, 150]], col: [[2, 3000], [8, 5000], [16, 8000]], mi: .50, mg: .43, mc: .35, fix: [1.5, 5.0, 12.0], k: .5, ad: 15000 }
  };
  function calc(sc, yi, price, orders, k, ad) {
    var ind = price / 1.1 * orders * 12;
    var grp = sc.grp[yi][0] * sc.grp[yi][1] * 1e4 * 12 / 1.1;
    var col = sc.col[yi][0] * sc.col[yi][1] * 1e4 / 1.1;
    var rev = ind + grp + col, cm = ind * sc.mi + grp * sc.mg + col * sc.mc;
    var buy = orders * 12 * Math.max(0, 1 - k), adc = buy * ad, fix = sc.fix[yi] * 1e8;
    return { rev: rev, cm: cm, ad: adc, fix: fix, op: cm - adc - fix, buy: buy, per: price / 1.1 * sc.mi - Math.max(0, 1 - k) * ad };
  }
  window.__calc = function (st, yi, o) { var s = ST[st]; o = o || {}; return calc(s, yi, o.price || s.price, o.orders || s.orders[yi], o.k == null ? s.k : o.k, o.ad || s.ad); };
  function eok(v, sign) { var a = Math.abs(v) / 1e8; return (v < 0 ? '−' : (sign ? '+' : '')) + a.toFixed(2); }
  function won(v) { return Math.round(v).toLocaleString('ko-KR'); }
  (function () {
    var box = $('#calc'); if (!box) return;
    var st = 'base', yi = 2, rP = $('#rPrice'), rO = $('#rOrders'), rK = $('#rK'), rA = $('#rAd');
    function load() { var s = ST[st]; rP.value = s.price; rO.value = ORD.indexOf(s.orders[yi]); rK.value = s.k; rA.value = s.ad; }
    function seg() {
      $$('#segStage button').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-st') === st); });
      $$('#segYear button').forEach(function (b) { b.classList.toggle('on', +b.getAttribute('data-y') === yi); });
    }
    function draw() {
      var s = ST[st], price = +rP.value, orders = ORD[+rO.value], k = +rK.value, ad = +rA.value, r = calc(s, yi, price, orders, k, ad);
      $('#oPrice').innerHTML = won(price) + '<small>원</small>';
      $('#oOrders').innerHTML = won(orders) + '<small>건</small>';
      $('#oK').textContent = k.toFixed(2);
      $('#oAd').innerHTML = won(ad) + '<small>원</small>';
      $('#oTraffic').textContent = '하루 약 ' + Math.max(1, Math.round(orders * 12 / 365)) + '건입니다. 100명이 들어와 1.5명이 산다고 보면 한 달에 약 ' + (orders / .015 >= 1e4 ? (Math.round(orders / .015 / 1e3) / 10) + '만' : won(orders / .015)) + ' 명이 찾아와야 합니다.';
      $('#xRev').innerHTML = eok(r.rev) + '<small>억 원</small>';
      $('#xAd').innerHTML = eok(r.ad) + '<small>억 원</small>';
      $('#xOp').innerHTML = eok(r.op, 1) + '<small>억 원</small>';
      var pc = function (v) { return Math.max(0, Math.min(100, Math.abs(v) / r.rev * 100)) + '%'; };
      $('#bRev').style.width = '100%'; $('#tRev').textContent = eok(r.rev) + '억';
      $('#bCm').style.width = pc(r.cm); $('#tCm').textContent = eok(r.cm) + '억';
      $('#bAd').style.width = pc(r.ad); $('#tAd').textContent = eok(r.ad) + '억';
      $('#bFix').style.width = pc(r.fix); $('#tFix').textContent = eok(r.fix) + '억';
      $('#bOp').style.width = pc(r.op); $('#tOp').textContent = eok(r.op, 1) + '억';
      $('#rowOp').className = r.op < 0 ? 'loss' : '';
      $('#xPer').textContent = (r.per < 0 ? '−' : '') + won(Math.abs(r.per)) + '원';
      $('#xAdPct').textContent = (r.ad / r.rev * 100).toFixed(1) + '%';
      $('#xBuy').textContent = won(r.buy) + '건 / ' + won(orders * 12) + '건';
      $('#xVerdict').textContent = r.per < 0 ? '이 값이면 광고로 팔수록 손해입니다. 입소문이 더 필요합니다.' :
        (r.op >= 0 ? '이 값이면 한 해 ' + eok(r.op) + '억 원이 남습니다.' : '이 값이면 한 해 ' + eok(-r.op) + '억 원이 모자랍니다. 입소문을 올리거나 광고비를 내려 보세요.');
      $('#xFixed').textContent = '고정해 둔 값(' + s.name + ' · ' + (yi + 1) + '년차). 남는 비율은 개인 ' + Math.round(s.mi * 100) + '% · 단체 ' + Math.round(s.mg * 100) + '% · 협업 ' + Math.round(s.mc * 100) + '%입니다.';
    }
    $('#segStage').addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; st = b.getAttribute('data-st'); load(); seg(); draw(); });
    $('#segYear').addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; yi = +b.getAttribute('data-y'); load(); seg(); draw(); });
    [rP, rO, rK, rA].forEach(function (r) { r.addEventListener('input', draw); });
    load(); seg(); draw();
    var tb = $('#scTbl tbody');
    if (tb) {
      tb.innerHTML = ['cons', 'base', 'aggr'].map(function (key) {
        var s = ST[key];
        return '<tr class="' + (key === 'base' ? 'hl' : '') + '"><td>' + s.name + '</td>' + [0, 1, 2].map(function (y) {
          var r = calc(s, y, s.price, s.orders[y], s.k, s.ad);
          return '<td><button type="button" data-st="' + key + '" data-y="' + y + '" class="cell' + (r.op < 0 ? ' neg' : '') + '">' + eok(r.rev) + ' / ' + eok(r.op, 1) + '</button></td>';
        }).join('') + '</tr>';
      }).join('');
      tb.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        st = b.getAttribute('data-st'); yi = +b.getAttribute('data-y'); load(); seg(); draw();
        var cv = $('#calcView'); if (cv) window.scrollTo({ top: vTop(cv), behavior: reduce ? 'auto' : 'smooth' });
      });
    }
  })();

  /* 처음에 필요한 돈(만 원) */
  (function () {
    var el = $('#fund'); if (!el) return;
    var F = [['운영 인력 6개월', 1700, 2100], ['첫 광고와 시험 판매 6개월', 600, 3000], ['사이트', 300, 2000], ['브랜드 디자인', 300, 1500], ['촬영', 300, 1000], ['견본', 300, 800], ['빈 옷과 빈 키링', 400, 750, 1], ['빈 인형과 가죽(다음 단계)', 500, 1200, 1], ['포장재', 200, 500], ['상표(국내)', 180, 300], ['상표(해외로 나갈 때)', 300, 800], ['법률 검토', 100, 300]];
    el.innerHTML = F.map(function (f) { return '<div class="' + (f[3] ? 'inv' : '') + '"><span>' + f[0] + '</span><u><i style="left:' + (f[1] / 30) + '%;width:' + ((f[2] - f[1]) / 30) + '%"></i></u><em>' + won(f[1]) + '~' + won(f[2]) + '만</em></div>'; }).join('');
  })();

  
  (function () {
    var el = $('#todoList'); if (!el) return;
    var KEY = 'kku-todo-v2', done = {};
    try { done = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}
    el.innerHTML = TODOS.map(function (g, gi) {
      return '<section><h3>' + g[0] + '</h3><ul>' + g[1].map(function (t, ti) { var id = gi + '-' + ti; return '<li><label><input type="checkbox" data-id="' + id + '"' + (done[id] ? ' checked' : '') + '><span>' + t.replace(/^(.+?) — /, '<b>$1</b> ') + '</span></label></li>'; }).join('') + '</ul></section>';
    }).join('');
    el.addEventListener('change', function (e) {
      var c = e.target; if (!c.getAttribute('data-id')) return;
      done[c.getAttribute('data-id')] = c.checked;
      try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (err) {}
    });
  })();

  /* ═════════ 11. 인쇄·PDF: 화면 하나 = 16:9 한 쪽 (1280×720). 넘치면 통째로 줄인다 ═════════ */
  var PW = 1280, PH = 720;
  function fitPrint() {
    var vs = $$('[data-view]').filter(function (v) { return getComputedStyle(v).display !== 'none' && getComputedStyle(v.closest('section')).display !== 'none'; });
    $$('.strip').forEach(cols);
    vs.forEach(function (v) {
      v.style.zoom = '1'; v.style.height = 'auto'; v.style.width = PW + 'px';
      var z = 1;
      for (var k = 0; k < 4; k++) {
        v.style.width = (PW / z) + 'px';
        var nz = Math.min(1, PH / v.scrollHeight * .985);
        if (Math.abs(nz - z) < .004) { z = Math.min(z, nz); break; }
        z = nz;
      }
      v.style.width = (PW / z) + 'px'; v.style.height = (PH / z) + 'px'; v.style.zoom = z;
      v.setAttribute('data-zoom', z.toFixed(2));
    });
    paint();
    window.__pages = vs.length;
  }
  function unfitPrint() { $$('[data-view]').forEach(function (v) { v.style.zoom = ''; v.style.height = ''; v.style.width = ''; }); paint(); }
  window.__fitPrint = fitPrint;
  if (PRINT) { fitPrint(); window.addEventListener('load', fitPrint); }
  else {
    window.addEventListener('beforeprint', function () { root.classList.add('is-print'); clearInterval(timer); $$('img[loading="lazy"]').forEach(function (i) { i.loading = 'eager'; }); fitPrint(); });
    window.addEventListener('afterprint', function () { root.classList.remove('is-print'); unfitPrint(); run(); onScroll(); });
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { paint(); if (PRINT) fitPrint(); });
})();
