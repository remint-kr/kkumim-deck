/* 꾸밈 My [ ] 소개서 (3판) — 동작

   ── 여기만 바꾸면 됩니다 ─────────────────────────────────────────── */
/* 슬로건. 이 한 줄을 바꾸면 표지·끝 화면·장 머리가 전부 바뀝니다. */
var KKU_SLOGAN = '소중한 건, 이름을 새긴다.';
/* 처음에 필요한 돈 (만 원). 금액을 고치거나 줄을 더하고 빼면 합계·재고 비율·막대·계산기 1년차 고정비가 저절로 맞춰집니다.
   [항목, 금액, 표시]. 표시 1 = 재고(빗금 줄), 2 = 고정비가 아닌 것(광고 매체비, 포장재처럼 팔릴 때 원가로 녹는 돈). 인건비 줄은 아래 두 값으로 계산됩니다.
   계산기의 1년차 고정비 = 인건비 + 표시가 없는 줄(1~6개월) + 아래 KKU_BUDGET2 에서 넷째 칸이 없는 줄(7~12개월). 지금 값으로 6억 4,100만 원입니다. */
var KKU_MONTHS = 6;            // 처음 버티는 기간(개월)
var KKU_PAY_MONTH = 1500;      // 인건비, 한 달(만 원)
var KKU_BUDGET = [
  ['광고와 시험 판매', 5500, 2], ['사이트(주문·새김 미리보기)', 3000], ['브랜드 디자인', 2000],
  ['촬영(제품·착용·영상)', 1500], ['빈 옷과 빈 키링', 1500, 1], ['견본', 1200], ['빈 인형과 가죽', 1200, 1],
  ['작업 공간', 1200], ['상표(국내·해외)', 1000], ['포장재', 700, 2], ['법률 검토', 500], ['예비비', 1700]
];
/* 이어서 더 넣는 돈: 7~12개월 (만 원). [항목, 금액, 묶음, 고정비 아님]. 재무팀 수정안(11-24).
   줄을 고치거나 더하고 빼면 막대·합계·비율·1년 합계·문장·계산기 1년차 고정비가 저절로 맞춰집니다.
   묶음(셋째 칸)이 같은 줄끼리 합쳐서 '사람 34% · 광고 37%' 같은 묶음 막대를 그립니다. 묶음을 비우면 '그 밖'으로 들어갑니다.
   넷째 칸 1 = 고정비가 아닌 것(광고 매체비, 협업 선급). 계산기는 광고비를 따로 세므로 고정비에서 뺍니다. */
var KKU_BUDGET2 = [
  ['인건비·채용(4명 → 12명)', 24000, '사람'],
  ['성과 광고', 22500, '광고', 1], ['광고 증액 대기분', 2000, '광고', 1], ['광고 소재 제작', 1500, '광고'],
  ['인플루언서·공식 협찬', 5000], ['팝업 2회', 6500], ['공식 협업 선급', 2500, '', 1], ['새 품목 개발(신발)', 2500],
  ['사이트 고도화', 1500], ['사무·작업 공간', 2000]
];
/* 7~12개월을 한 줄로 말하는 문장. 1년 예산 화면에 들어갑니다. 비우면 가장 큰 항목 셋으로 문장을 만듭니다. */
var KKU_BUDGET2_SAY = '7개월차부터 사람을 12명으로 늘리고, 광고를 크게 키웁니다.';
/* 5년 그림. 숫자가 오면 한 해에 한 줄씩 채웁니다(억 원). 비어 있으면 그 화면은 나오지 않습니다.
   [연차, 재투자 매출, 재투자 남는 돈, 재투자 없음 매출, 재투자 없음 남는 돈]
   뒤의 두 칸(재투자 없음)을 비우면 재투자 한 줄만 그립니다.
   예) var KKU_5Y = [[1, 20.0, -0.8, 20.0, -0.8], [2, 54.8, 2.9, 50.0, 3.5], …]; */
var KKU_5Y = [[1, 20.0, -0.77, 20.0, -0.77], [2, 54.8, 0.01, 54.8, 2.09], [3, 103.9, 3.82, 94.2, 3.64], [4, 157.2, 12.27, 118.5, 6.11], [5, 204.3, 18.32, 142.9, 8.58]];
var KKU_5Y_SAY = '2년차에 번 돈을 다시 광고와 사람에 넣으면, 5년차 매출이 143억 원에서 204억 원으로 커집니다. 5년 동안 남는 돈도 19.7억 원에서 33.7억 원이 됩니다.';   /* 5년 그림 아래 한 줄 */
/* 이름 후보(11-24). '꾸밈'은 가칭이라 본문에만 남고 이 목록에는 없습니다.
   표지·장 머리·끝 화면의 앞 괄호에서 이 이름들이 이 순서로 돌아가고, 06장 '이름 후보' 화면이 이 목록으로 그려집니다(3~5개).
   { name: 이름, en: 로마자, meaning: 뜻, image: 주는 느낌, pros: [장점…], cons: [단점…] }  순서에 순위의 뜻은 없습니다. */
var KKU_NAMES = [
  { name: '메움', en: 'MEUM',
    meaning: '빈칸을 메운다. 꾸밈은 빈칸이고, 고객이 그 칸을 메운다. 라틴어 meum은 ‘나의 것’이라 뒤의 My와 맞물린다.',
    image: '비어 있는 틀, 그것을 채우는 손. 양 끝의 ㅁ을 열면 그대로 [ ] 괄호가 된다(MEUM도 양 끝이 M).',
    pros: ['틀이라는 뜻이 이름에 그대로 있음', '로고가 이름에서 바로 나옴', '같은 이름 상표 없음(1차), meum.kr 비어 있음'],
    cons: ['‘구멍을 메운다’처럼 실용적인 말로도 들림', '영어권에서 읽는 법이 갈릴 수 있음'] },
  { name: '한밈', en: 'HANMIM',
    meaning: '한(하나, 韓) + 밈. 꾸밈의 ‘밈’을 물려받았다. 밈은 따라 하며 퍼지는 것이라, 선물이 자랑되고 퍼지는 구조와 같다.',
    image: '하나뿐인 것이 퍼져 나가는 모습. 밈(ㅁㅣㅁ)은 글자 자체가 [ | ]처럼 생겼다.',
    pros: ['꾸밈의 소리와 뜻을 이어받음', '퍼짐이라는 사업 구조가 이름에 들어 있음', '같은 이름 상표 없음(1차), hanmim.kr 비어 있음'],
    cons: ['‘밈’이 인터넷 유머처럼 가볍게 들릴 수 있어 서체와 톤으로 무게를 잡아야 함'] },
  { name: '지님', en: 'JINIM',
    meaning: '늘 지니고 다닌다. 키링, 옷, 가방처럼 몸에 지니는 물건과 바로 이어진다.',
    image: '늘 곁에 두는 작은 물건, 오래 함께한 시간.',
    pros: ['품목과 가장 가까운 뜻', '부드럽고 따뜻함', '꾸밈처럼 ‘-ㅁ’으로 끝남'],
    cons: ['같은 이름의 취향 기록 서비스가 운영 중이고 도메인이 이미 쓰임'] },
  { name: '한칸', en: 'HANKAN',
    meaning: '단 한 칸, 그 칸은 고객의 것. ‘한’은 하나이면서 한국이다.',
    image: '이름이 곧 틀. 하나의 칸, 하나의 괄호.',
    pros: ['틀이라는 생각이 가장 또렷함', '같은 받침이 반복돼 소리가 좋음'],
    cons: ['판매업(35류)에 ‘한칸샵’이 먼저 있음', '도메인이 이미 쓰임', '일본어로 ‘반감’과 소리가 같음'] },
  { name: '새밈', en: 'SAEMIM',
    meaning: '새김 + 꾸밈. 이름을 새겨 꾸민다.',
    image: '새겨진 글자, 손으로 남긴 흔적.',
    pros: ['상표·도메인이 가장 깨끗함(.com까지 비어 있음)', '새김이라는 행위가 이름에 들어 있음'],
    cons: ['‘새 밈’으로 읽힐 수 있음', '영어권에서 ‘ae’를 읽기 어려움'] }
];
var KKU_NAME_MS = 2600;  /* 장 머리·끝 화면의 앞 괄호에서 이름 후보가 바뀌는 빠르기(밀리초) */
/* 표지: 앞 괄호에서 '가칭 → 후보들'이 로고 시안 다섯(logo.js)과 엇갈려 돌아갑니다. 인쇄에서는 여섯 개가 한 줄로 놓입니다. */
var KKU_TEMP_NAME = '꾸밈';   /* 가칭. 표지에서만 후보들 앞에 넣습니다 */
var KKU_COVER_MS = 1350;      /* 표지에서 이름이 바뀌는 빠르기(밀리초). 뒤 괄호 낱말보다 느리게 */
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
  /* 이름은 가칭: 큰 표기와 장 머리는 '[이름 후보] My [ ]', 옆 목차와 쪽 머리(data-mark="plain")는 'My [ ]'만 */
  var NAMES = (KKU_NAMES || []).filter(function (n) { return n && n.name; });
  if (!NAMES.length) NAMES = [{ name: LOGO.text || '' }];
  $$('[data-mark]').forEach(function (el) {
    var plain = el.getAttribute('data-mark') === 'plain';
    el.innerHTML = '<span class="lock mini">' + (plain ? '' : '<span class="kk" data-logo></span>') + '<span class="my">My</span><span class="kb"><span class="slot"></span></span></span>' +
      (plain ? '' : '<em>' + KKU_SLOGAN + '</em>');
  });
  $$('[data-logo]').forEach(function (el) { el.innerHTML = '<span class="kb nb"><span class="nbox"><span class="nrot" data-name></span></span></span>'; });
  var nrots = $$('[data-name]'), ni = 0, ntimer = null;
  var oneLogo = LOGO.body && NAMES.length === 1 && NAMES[0].name === LOGO.text;
  /* 앞 괄호 너비 = 가장 긴 이름에 맞춘다(돌아가도 자리가 흔들리지 않게). 글꼴이 뜨면 실제 너비로 다시 잰다 */
  function sizeNames() {
    var t = document.createElement('span'); t.className = 'nrot'; t.style.cssText = 'position:absolute;visibility:hidden;font-size:96px';
    document.body.appendChild(t);
    var w = 0; NAMES.forEach(function (n) { t.textContent = n.name; w = Math.max(w, t.offsetWidth); });
    t.remove();
    root.style.setProperty('--nw', (w ? w / 100 + .04 : Math.max.apply(null, NAMES.map(function (n) { return wEm(n.name); }))).toFixed(2));
  }
  sizeNames();
  function paintName() { nrots.forEach(function (el) { if (oneLogo) { el.innerHTML = logoHTML; el.classList.add('is-svg'); } else el.textContent = NAMES[ni].name; }); }
  function tickName() {
    nrots.forEach(function (el) { el.classList.add('out'); });
    setTimeout(function () { ni = (ni + 1) % NAMES.length; paintName(); nrots.forEach(function (el) { el.classList.remove('out'); }); }, 240);
  }
  function runName() { clearInterval(ntimer); if (NAMES.length > 1 && !reduce) ntimer = setInterval(function () { if (!document.hidden) tickName(); }, KKU_NAME_MS); }
  paintName(); runName();

  /* 표지: 이름 후보 × 로고 시안. 이름은 여섯(가칭 + 후보), 시안은 다섯이라 돌 때마다 짝이 엇갈린다 */
  var DRAFTS = window.KKU_LOGO_DRAFTS || [];
  var STY = [{ c: 'lg-1', n: '먹' }, { c: 'lg-2', n: '열림' }, { c: 'lg-3', n: '겹' }, { c: 'lg-4', n: '길게' }, { c: 'lg-5', n: '가위집' }];
  var CN = (KKU_TEMP_NAME ? [{ name: KKU_TEMP_NAME, tbd: 1 }] : []).concat(NAMES.filter(function (n) { return n.name !== KKU_TEMP_NAME; }));
  function markHTML(name, k) {
    var d = DRAFTS[k];
    if (name === KKU_TEMP_NAME && d && d.d) return '<svg viewBox="' + d.viewBox + '" role="img" aria-label="' + name + '"><path fill-rule="evenodd" d="' + d.d + '"/></svg>';
    return Array.from(name).map(function (ch) { return '<span>' + ch + '</span>'; }).join('');
  }
  var cvHost = $('[data-cover]'), cvName = null, cvCap = null, cvBox = null, ci = 0, si = 0, ctimer = null;
  if (cvHost) {
    cvHost.innerHTML = '<span class="kb nb cvb"><span class="nbox"><span class="nrot cv"></span></span></span><i class="ncap"></i>';
    cvName = $('.nrot', cvHost); cvCap = $('.ncap', cvHost); cvBox = $('.kb', cvHost);
  }
  function paintCover() {
    if (!cvName) return;
    var n = CN[ci], s = STY[si];
    cvName.className = 'nrot cv ' + s.c; cvName.innerHTML = markHTML(n.name, si);
    cvBox.className = 'kb nb cvb ' + s.c;
    cvCap.textContent = (n.tbd ? '가칭' : '이름 후보') + ' · 로고 ' + s.n;
  }
  /* 앞 괄호 너비는 여섯 이름 × 다섯 시안 가운데 가장 넓은 것에 맞춘다. 그래야 'My [ ]'가 움직이지 않는다 */
  function sizeCover() {
    if (!cvHost) return;
    var t = document.createElement('span');
    t.style.cssText = 'position:absolute;left:0;top:0;visibility:hidden;font-size:96px;white-space:nowrap';
    document.body.appendChild(t);
    var w = 0;
    CN.forEach(function (n) { STY.forEach(function (s, k) { t.className = 'nrot cv ' + s.c; t.innerHTML = markHTML(n.name, k); w = Math.max(w, t.getBoundingClientRect().width); }); });
    document.body.removeChild(t);
    if (w) cvHost.style.setProperty('--nw', (w / 100 + .06).toFixed(2));
  }
  function runCover() { clearInterval(ctimer); if (cvName && CN.length > 1 && !reduce) ctimer = setInterval(function () { if (document.hidden) return; ci = (ci + 1) % CN.length; si = (si + 1) % STY.length; paintCover(); }, KKU_COVER_MS); }
  paintCover(); sizeCover(); runCover();
  window.__cover = function (c, s) { clearInterval(ctimer); ci = c % CN.length; si = s % STY.length; paintCover(); };   /* 검수용: 원하는 짝을 세워 본다 */
  /* 인쇄용: 여섯 이름을 작게 한 줄로. 시안도 하나씩 엇갈려 입힌다 */
  $$('[data-nrow]').forEach(function (el) {
    el.innerHTML = CN.map(function (n, k) { var s = STY[k % STY.length]; return '<span class="nri"><span class="nrot cv ' + s.c + '">' + markHTML(n.name, k % STY.length) + '</span>' + (n.tbd ? '<em>가칭</em>' : '') + '</span>'; }).join('');
  });
  /* 큰 표기가 자리를 넘으면 통째로 줄인다(이름이 길어져도 안 깨지게) */
  function fitLocks() {
    $$('.lock.hero, .end .lock, .stage-empty .lock, .map .us .lock, .demo-ask .lock, .made .lock, .nc .lock').forEach(function (el) {
      el.style.removeProperty('--u');
      var p = el.parentNode, cs = getComputedStyle(p), avail = p.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      var w = Math.max(el.offsetWidth, el.scrollWidth);
      if (avail > 40 && w > avail + 1) el.style.setProperty('--u', (parseFloat(getComputedStyle(el).fontSize) / 1.04 * avail / w * .985).toFixed(2) + 'px');
    });
  }
  window.__names = NAMES;
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

  /* 06장 끝: 이름 후보 — KKU_NAMES 에서 그린다 */
  (function () {
    var el = $('#names'); if (!el) return;
    var L = NAMES.slice(0, 5);
    function li(a) { return (a || []).map(function (t) { return '<li>' + t + '</li>'; }).join(''); }
    el.style.setProperty('--n', L.length);
    el.className = 'names n' + L.length;
    el.innerHTML = L.map(function (n) {
      return '<article class="nc"><div class="nc-h"><span class="lock"><span class="nfix">' + n.name + '</span><span class="my">My</span><span class="kb"><span class="slot"></span></span></span>' + (n.en ? '<i>' + n.en + '</i>' : '') + '</div><dl>' +
        (n.meaning ? '<div><dt>뜻</dt><dd>' + n.meaning + '</dd></div>' : '') + (n.image ? '<div><dt>주는 느낌</dt><dd>' + n.image + '</dd></div>' : '') +
        ((n.pros || []).length ? '<div><dt>장점</dt><dd><ul>' + li(n.pros) + '</ul></dd></div>' : '') + ((n.cons || []).length ? '<div><dt>단점</dt><dd><ul>' + li(n.cons) + '</ul></dd></div>' : '') + '</dl></article>';
    }).join('');
  })();

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
    paint(); run(); fitLocks(); paint();
  }
  window.__word = apply;
  $$('input[data-win]').forEach(function (i) { i.addEventListener('input', function () { apply(i.value, i); }); });
  $$('[data-set]').forEach(function (b) { b.addEventListener('click', function () { apply(b.getAttribute('data-set')); }); });
  /* 인쇄용: 낱말 여러 개를 세로로 */
  $$('[data-stack]').forEach(function (el) { el.innerHTML = KKU_WORDS.slice(0, 7).map(function (w) { return '<span class="' + w[1] + '" style="--sz:' + w[2] + '">' + w[0] + '</span>'; }).join(''); });
  apply('');
  window.addEventListener('resize', function () { fitLocks(); paint(); });
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

  /* ═════════ 10. 10장: 사업성 계산기 — 같은 10억, 결과만 다른 세 경우 (research/2026-11-24-1년10억-전개모델.md 6절) ═════════
     광고비 = 광고로 받은 주문 × 1건 광고비. 광고로 받은 주문 = 전체 주문 × (1 − k). k = 전체 주문 중 광고 없이 들어오는 비율(입소문).
     1년차 고정비(fix 의 첫 칸)는 맨 위 예산 두 목록에서 계산한다. 예산을 고치면 계산기도 따라온다. */
  var ORD = [50, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1500, 2000, 2500, 3000, 4000, 5000, 6000, 8000, 8700, 10000, 12000];
  (function () { var r = document.getElementById('rOrders'); if (r) r.max = ORD.length - 1; })();
  var FIX1 = (KKU_PAY_MONTH * KKU_MONTHS +
    KKU_BUDGET.reduce(function (s, f) { return s + (f[2] ? 0 : f[1]); }, 0) +
    (typeof KKU_BUDGET2 === 'undefined' ? [] : KKU_BUDGET2).reduce(function (s, f) { return s + (f[3] ? 0 : f[1]); }, 0)) / 1e4;
  var ST = {
    cons: { name: '아쉬울 때', price: 75000, orders: [1500, 3000, 5000], grp: [[5, 90], [20, 110], [40, 130]], col: [[2, 10000], [5, 10000], [10, 10000]], mi: .43, mg: .37, mc: .33, fix: [FIX1, 12.0, 15.0], k: [.25, .25, .25], ad: [25000, 27000, 30000] },
    base: { name: '계획', price: 80000, orders: [2000, 5000, 8700], grp: [[7, 94], [30, 120], [60, 150]], col: [[2, 10000], [8, 10000], [20, 10000]], mi: .45, mg: .38, mc: .35, fix: [FIX1, 15.08, 24.78], k: [.35, .35, .40], ad: [20000, 22000, 25000] },
    aggr: { name: '잘될 때', price: 85000, orders: [3000, 8000, 12000], grp: [[10, 100], [40, 120], [80, 150]], col: [[3, 10000], [10, 12000], [20, 15000]], mi: .47, mg: .40, mc: .36, fix: [FIX1, 17.0, 27.0], k: [.50, .50, .55], ad: [15000, 17000, 19000] }
  };
  window.__fix1 = FIX1;
  /* ad(주문 1건 광고비)와 k(입소문)는 숫자 하나 또는 [1년차, 2년차, 3년차] 배열. 경우·연차를 고르면 그해 값이 막대에 들어온다 */
  function yv(v, yi) { return Array.isArray(v) ? (v[yi] != null ? v[yi] : v[v.length - 1]) : v; }
  function calc(sc, yi, price, orders, k, ad) {
    var ind = price / 1.1 * orders * 12;
    var grp = sc.grp[yi][0] * sc.grp[yi][1] * 1e4 * 12 / 1.1;
    var col = sc.col[yi][0] * sc.col[yi][1] * 1e4 / 1.1;
    var rev = ind + grp + col, cm = ind * sc.mi + grp * sc.mg + col * sc.mc;
    var buy = orders * 12 * Math.max(0, 1 - k), adc = buy * ad, fix = sc.fix[yi] * 1e8;
    return { rev: rev, cm: cm, ad: adc, fix: fix, op: cm - adc - fix, buy: buy, per: price / 1.1 * sc.mi - Math.max(0, 1 - k) * ad };
  }
  window.__calc = function (st, yi, o) { var s = ST[st]; o = o || {}; return calc(s, yi, o.price || s.price, o.orders || s.orders[yi], o.k == null ? yv(s.k, yi) : o.k, o.ad || yv(s.ad, yi)); };
  function eok(v, sign) { var a = Math.abs(v) / 1e8; return (v < 0 ? '−' : (sign ? '+' : '')) + a.toFixed(2); }
  function won(v) { return Math.round(v).toLocaleString('ko-KR'); }
  (function () {
    var box = $('#calc'); if (!box) return;
    var st = 'base', yi = 2, rP = $('#rPrice'), rO = $('#rOrders'), rK = $('#rK'), rA = $('#rAd');
    function load() { var s = ST[st]; rP.value = s.price; rO.value = ORD.indexOf(s.orders[yi]); rK.value = yv(s.k, yi); rA.value = yv(s.ad, yi); }
    function seg() {
      $$('#segStage button').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-st') === st); });
      $$('#segYear button').forEach(function (b) { b.classList.toggle('on', +b.getAttribute('data-y') === yi); });
    }
    function draw() {
      var s = ST[st], price = +rP.value, orders = ORD[+rO.value], k = +rK.value, ad = +rA.value, r = calc(s, yi, price, orders, k, ad);
      $('#oPrice').innerHTML = won(price) + '<small>원</small>';
      $('#oOrders').innerHTML = won(orders) + '<small>건</small>';
      $('#oK').innerHTML = Math.round(k * 100) + '<small>%</small>';
      var kn = $('#oKNote'); if (kn) kn.textContent = k <= 0 ? '0%면 모든 주문을 광고로 받습니다.' : Math.round(k * 100) + '%면 광고로 받은 주문 1건이 ' + (k / (1 - k)).toFixed(2) + '건을 더 데려옵니다.';
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
    /* 표 아래 큰 문장: 흑자 시점을 내세우지 않고 재투자 → 3년차부터를 앞에 세운다. 숫자는 '계획' 경우에서 계산 */
    var say = $('#scSay');
    if (say) {
      var bs = ST.base, rs = [0, 1, 2].map(function (y) { return calc(bs, y, bs.price, bs.orders[y], yv(bs.k, y), yv(bs.ad, y)); });
      var e1 = function (v) { return (v / 1e8).toFixed(1); };
      say.textContent = '1~2년차에 번 돈은 다시 광고와 사람에 넣습니다. 3년차부터 가파르게 오릅니다. ' + bs.name + '대로면 매출은 ' + e1(rs[0].rev) + '억, ' + e1(rs[1].rev) + '억, ' + e1(rs[2].rev) + '억 원으로 커지고 3년차에 ' + (rs[2].op >= 0 ? (rs[2].op / 1e8).toFixed(2) + '억 원이 남습니다.' : (-rs[2].op / 1e8).toFixed(2) + '억 원이 모자랍니다.');
    }
    var sn = $('#scNote');
    if (sn) {
      var w10 = function (v) { return (Math.round(v / 1e3) / 10) + '만'; };
      var span = function (v, f, unit) { if (!Array.isArray(v)) return f(v) + unit; var lo = Math.min.apply(null, v), hi = Math.max.apply(null, v); return lo === hi ? f(lo) + unit : f(lo) + '~' + f(hi) + unit; };
      var pc = function (v) { return Math.round(v * 100); };
      sn.textContent = '단위는 억 원입니다. ' + ['cons', 'base', 'aggr'].map(function (k) { var s = ST[k]; return s.name + (/때$/.test(s.name) ? '는' : '은') + ' 주문 ' + w10(s.price) + ' 원 · 입소문 ' + span(s.k, pc, '%') + ' · 광고 1건 ' + span(s.ad, w10, ' 원'); }).join(', ') + '입니다. 숫자를 누르면 계산기에 그 값이 들어갑니다.';
    }
      var tb = $('#scTbl tbody');
    if (tb) {
      tb.innerHTML = ['cons', 'base', 'aggr'].map(function (key) {
        var s = ST[key];
        return '<tr class="' + (key === 'base' ? 'hl' : '') + '"><td>' + s.name + '</td>' + [0, 1, 2].map(function (y) {
          var r = calc(s, y, s.price, s.orders[y], yv(s.k, y), yv(s.ad, y));
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

  /* 처음에 필요한 돈 + 이어서 더 넣는 돈(만 원). 전부 맨 위 설정에서 계산한다 */
  (function () {
    var el = $('#fund'); if (!el) return;
    var F = [['인건비 ' + KKU_MONTHS + '개월(월 ' + won(KKU_PAY_MONTH) + '만)', KKU_PAY_MONTH * KKU_MONTHS]].concat(KKU_BUDGET.map(function (f) { return /광고|공간/.test(f[0]) ? [f[0] + ' ' + KKU_MONTHS + '개월', f[1], f[2]] : f; }));
    var F2 = (typeof KKU_BUDGET2 === 'undefined' ? [] : KKU_BUDGET2).filter(function (f) { return f && f[1] > 0; });
    var SAY2 = typeof KKU_BUDGET2_SAY === 'undefined' ? '' : KKU_BUDGET2_SAY;
    var sum = function (A) { return A.reduce(function (s, f) { return s + f[1]; }, 0); };
    var tot = sum(F), tot2 = sum(F2), yr = tot + tot2, inv = F.reduce(function (s, f) { return s + (f[2] === 1 ? f[1] : 0); }, 0);
    var mx = Math.max.apply(null, F.concat(F2).map(function (f) { return f[1]; }));
    var man = function (v) { var e = Math.floor(v / 1e4), r = Math.round(v % 1e4); return (e ? e + '억' : '') + (r ? (e ? ' ' : '') + won(r) + '만' : '') || '0'; };
    var big = function (v) { return man(v).replace(/(억|만)/g, '<small>$1</small>') + '<small>원</small>'; };
    var pct = function (v, t) { return t ? Math.round(v / t * 100) : 0; };
    /* 묶음: 설정 셋째 칸. 처음 나온 순서대로 g1, g2 … 묶음이 없는 줄은 '그 밖' */
    var G = [], gi = {};
    F2.forEach(function (f) { var k = f[2] || ''; if (!k) return; if (gi[k] == null) { gi[k] = G.length; G.push({ k: k, v: 0, c: 'g' + (G.length + 1) }); } G[gi[k]].v += f[1]; });
    var rest = tot2 - G.reduce(function (s, g) { return s + g.v; }, 0);
    var GA = G.concat(G.length && rest > 0 ? [{ k: '그 밖', v: rest, c: 'g0' }] : []);
    function gbar(cls) {
      if (!G.length) return '';
      return '<div class="gbar ' + (cls || '') + '">' + GA.map(function (g) { return '<div class="' + g.c + '" style="flex:' + g.v + ' 1 0"><u></u><span><b>' + g.k + ' ' + pct(g.v, tot2) + '%</b><i>' + man(g.v) + '</i></span></div>'; }).join('') + '</div>';
    }
    function rows(A, T, grouped) {
      return A.map(function (f) {
        var g = grouped && f[2] && gi[f[2]] != null ? G[gi[f[2]]] : null;
        return '<div class="' + (!grouped && f[2] === 1 ? 'inv' : '') + (g ? ' ' + g.c : (grouped && G.length ? ' g0' : '')) + '"><span>' + f[0] + '</span><u><i style="left:0;width:' + (f[1] / mx * 100) + '%"></i></u><em>' + won(f[1]) + '만<b>' + pct(f[1], T) + '%</b></em></div>';
      }).join('') + '<div class="sum"><span>합계</span><u></u><em>' + man(T) + '</em></div>';
    }
    el.innerHTML = rows(F, tot);
    var t = $('#fundTotal'); if (t) t.innerHTML = big(tot);
    var m = $('#fundMonths'); if (m) m.textContent = KKU_MONTHS + '개월';
    var n = $('#fundNote'); if (n) n.textContent = '첫 ' + KKU_MONTHS + '개월을 끌고 가는 돈입니다. 인건비 월 ' + won(KKU_PAY_MONTH) + '만 원을 넣었습니다. 빗금 줄이 재고인데, 전체의 ' + Math.round(inv / tot * 100) + '%뿐입니다. 돈은 재고가 아니라 사람과 브랜드에 씁니다.';
    /* 이어서 더 넣는 돈 */
    var span2 = (KKU_MONTHS + 1) + '~12개월', top = F2.slice().sort(function (a, b) { return b[1] - a[1]; }), nm = function (f) { return f[0].replace(/\s*\(.*?\)/g, ''); };
    var gs = G.slice().sort(function (a, b) { return b.v - a.v; });
    var e2 = $('#fund2'); if (e2) e2.innerHTML = rows(F2, tot2, true);
    var eg = $('#fund2G'); if (eg) eg.innerHTML = gbar();
    var t2 = $('#fund2Total'); if (t2) t2.innerHTML = big(tot2);
    var m2 = $('#fund2Months'); if (m2) m2.textContent = span2;
    var n2 = $('#fund2Note');
    if (n2 && top.length) n2.textContent = span2 + '에 더 넣는 돈입니다. ' + (gs.length ? gs.map(function (g) { return g.k + '에 ' + pct(g.v, tot2) + '%'; }).join(', ') + '를 씁니다. ' : '가장 큰 줄은 ' + nm(top[0]) + '입니다. 전체의 ' + pct(top[0][1], tot2) + '%입니다. ') + '막대 길이는 왼쪽과 같은 눈금입니다.';
    /* 1년 합계 화면 */
    var y = $('#yrTotal'); if (y) y.textContent = man(yr);
    var yl = $('#yrLead'); if (yl) yl.textContent = '첫 ' + KKU_MONTHS + '개월에 ' + man(tot) + ' 원으로 물건과 사이트를 세웁니다. ' + (SAY2 || '다음 ' + (12 - KKU_MONTHS) + '개월에 ' + man(tot2) + ' 원을 더 넣어 ' + top.slice(0, 3).map(nm).join(', ') + '에 힘을 싣습니다.');
    var yb = $('#yr');
    if (yb) {
      var mo1 = tot / KKU_MONTHS, mo2 = tot2 / (12 - KKU_MONTHS), r100 = function (v) { return Math.round(v / 100) * 100; };
      yb.innerHTML = '<div class="yr-bar"><div class="s1" style="flex:' + tot + ' 1 0"><i>1~' + KKU_MONTHS + '개월</i><b>' + big(tot) + '</b><span>한 달 약 ' + man(r100(mo1)) + ' 원</span></div>' +
        '<div class="s2" style="flex:' + tot2 + ' 1 0"><i>' + span2 + '</i><b>+' + big(tot2) + '</b><span>한 달 약 ' + man(r100(mo2)) + ' 원</span>' + gbar('in') + '</div></div>' +
        '<div class="yr-ax"><span>시작</span><span style="left:' + (tot / yr * 100) + '%">' + KKU_MONTHS + '개월 · 누적 ' + man(tot) + '</span><span>12개월 · 누적 ' + man(yr) + '</span></div>' +
        '<p class="yr-say">한 달에 쓰는 돈이 ' + (mo2 / mo1).toFixed(1) + '배로 커집니다.</p>';
    }
    /* 09장 재고 화면 */
    var sp = $('#stockPct'); if (sp) sp.textContent = pct(inv, tot) + '%';
    var sm = $('#stockM'); if (sm) sm.textContent = KKU_MONTHS;
    var sb = $('#stockBar'); if (sb) sb.style.width = (inv / tot * 100) + '%';
    var s1 = $('#stockL1'); if (s1) s1.textContent = '재고 ' + man(inv) + ' 원';
    var s2 = $('#stockL2'); if (s2) s2.textContent = '처음 ' + KKU_MONTHS + '개월 자금 ' + man(tot) + ' 원';
  })();

  /* 5년 그림: KKU_5Y 가 채워지면 화면이 나타난다. 한 해에 막대 둘(재투자 / 재투자 없음), 아래에 남는 돈 */
  (function () {
    var v = $('#fiveView'), el = $('#five'); if (!v || !el) return;
    var A = (typeof KKU_5Y === 'undefined' ? [] : KKU_5Y).filter(function (r) { return r && r.length >= 2 && r[1] != null; });
    if (!A.length) { v.hidden = true; return; }
    v.hidden = false;
    var two = A.some(function (r) { return r[3] != null; });
    var mx = Math.max.apply(null, A.map(function (r) { return Math.max(r[1], r[3] || 0); }));
    var op = function (x) { return x == null ? '' : '<u class="' + (x < 0 ? 'neg' : '') + '">' + (x < 0 ? '−' : '+') + Math.abs(x) + '</u>'; };
    var bar = function (val, cls) { return val == null ? '' : '<span class="fv-c ' + cls + '"><b>' + val + '</b><i style="height:' + Math.max(1.5, val / mx * 100).toFixed(1) + '%"></i></span>'; };
    el.className = 'five' + (two ? ' two' : '');
    el.innerHTML = A.map(function (r) {
      return '<div class="fv"><div class="fv-b">' + bar(r[1], 'a') + (two ? bar(r[3], 'b') : '') + '</div><em>' + r[0] + '년차</em><p>' + op(r[2]) + (two ? op(r[4]) : '') + '</p></div>';
    }).join('');
    var lg = $('#fiveLegend');
    if (lg) lg.innerHTML = '<span class="a"><i></i>재투자</span>' + (two ? '<span class="b"><i></i>재투자 없음</span>' : '') + '<span class="t">막대는 매출, 아래 숫자는 남는 돈입니다. 단위는 억 원입니다.</span>';
    var s = $('#fiveSay'); if (s) s.textContent = typeof KKU_5Y_SAY === 'undefined' ? '' : KKU_5Y_SAY;
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
    window.addEventListener('beforeprint', function () { root.classList.add('is-print'); clearInterval(timer); clearInterval(ntimer); clearInterval(ctimer); $$('img[loading="lazy"]').forEach(function (i) { i.loading = 'eager'; }); fitPrint(); });
    window.addEventListener('afterprint', function () { root.classList.remove('is-print'); unfitPrint(); run(); runName(); runCover(); onScroll(); });
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { sizeNames(); sizeCover(); fitLocks(); paint(); if (PRINT) fitPrint(); });
})();
