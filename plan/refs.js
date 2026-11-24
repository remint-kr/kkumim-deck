/* ═══════════════════════════════════════════════════════════════════
   꾸밈 기획안 — 남의 자료 모음 (남의 사진 · 남의 사례 · 남의 상품)

   본문(index.html·plan.js)은 남의 사진과 사례 카드를 여기서만 불러다 그립니다.
   꾸밈 자체 그림(워드마크·괄호·도해·시연·계산기)은 이 파일에 없습니다.

   한 줄 = 자료 한 건
     id        고유 이름. 본문에서 이 이름으로 부릅니다
     group     묶음. 아래 KKU_REF_GROUPS 참고
     title     이름(브랜드·사람·문화)
     sub       무엇인지 한 줄
     when      언제 / BX 번호
     result    반응·가격 등 굵게 보일 한 줄
     note      덧붙이는 말
     href      원문 링크
     img       이미지 주소(없으면 글 카드로 나옵니다)
     check     true = '확인 전' 표시(검색 요약으로만 본 것)
     portrait  true = 세로 사진
     mono      true = 색이 요란해 흑백으로 보여 주는 사진(원본은 컬러)
     pos       좁은 칸에 넣을 때 보여 줄 자리(예: 'left', '84% center')
     external  false = 외부용에서 빼거나 우리 것으로 바꿀 것
               (우리 사진으로 바꿨으면 true로 고칩니다)

   외부용 점검: 주소 뒤에 ?mode=external 을 붙이면 external:false 인 사진이
   전부 회색 칸 '교체 예정'으로 바뀝니다.

   이어 붙이는 법: 맨 아래에 KKU_REFS.push({ ... }) 로 더하면 됩니다.
   BX 보드에 새 묶음을 만들려면 KKU_REF_GROUPS['bx-9'] = { title:'…', board:true, no:9 } 도 같이.
   ═══════════════════════════════════════════════════════════════════ */
window.KKU_REFS = [

  /* ── fan — 보통 사람들끼리의 인증 문화 (3장) ── */
  {"id":"fan-01","group":"fan","title":"우정 팔찌 교환","sub":"공연 관객이 이름·노랫말 구슬 팔찌를 만들어 서로 바꾸고 올립니다","when":"2023~","result":"마이클스 장신구 부문 매출 40% 이상 증가","note":"미국 공예 체인. 펜실베이니아 매장은 500% 이상.","href":"https://www.retailcustomerexperience.com/news/taylor-swifts-the-eras-tour-pumps-up-michaels-sales/","img":"https://nmgprod.s3.amazonaws.com/media/files/23/b6/23b6098b4a932f43adf607999a4b09bb/cover_image_1691610335.jpeg.1600x900_q85_crop_upscale.webp","external":false},
  {"id":"fan-02","group":"fan","title":"유니폼 이름 마킹","sub":"응원 선수 이름이나 내 이름을 새겨 입고 직관 인증","when":"한국 프로야구","result":"기념 유니폼 예약 첫날 70억 원(보도 제목 기준)","note":"마킹을 넣으면 약 3만 원 더 비쌉니다(10만 → 13만 원 사례).","href":"https://osen.co.kr/article/G1112404564","img":"","check":true,"external":false},
  {"id":"fan-03","group":"fan","title":"파자마 이니셜 새김","sub":"자주(JAJU) 매장에서 이니셜·짧은 문구를 새겨 줍니다","when":"2025-03~05","result":"서비스를 시작한 기간에 해당 파자마 매출 50% 이상 증가","note":"5개 매장 시범 뒤 96개 매장으로.","href":"https://magazine.hankyung.com/business/article/202506116784b","img":"https://img.hankyung.com/photo/202506/AD.40783090.1.jpg","external":false},
  {"id":"fan-04","group":"fan","title":"네컷 사진","sub":"친구·연인·팬끼리 찍어 올립니다","when":"2023 → 2024","result":"무인 사진관 1,006곳 → 3,000곳 이상","note":"이용자 80% 이상이 10~20대(한국관광공사 인용 보도).","href":"https://www.wikitree.co.kr/articles/1151054","img":"https://cdnweb01.wikitree.co.kr/webdata/editor/202608/07/202608071405471962.jpeg","external":false},
  {"id":"fan-05","group":"fan","title":"누이카츠","sub":"인형을 데리고 다니며 찍어 올리고, 가방에 답니다","when":"일본 2025","result":"15~24세 여성 507명 중 80% 이상이 경험","note":"70%는 “부적을 지닌 느낌”.","href":"https://www.fashionsnap.com/article/2025-03-16/nui-katsu-shibuya109/","img":"https://fashionsnap-assets.com/asset/format=auto,width=1280,height=670,gravity=auto,fit=pad/article/images/2025/03/shibuya109-202503122-241b9601-91fe-414c-8f76-abfe7f47fb11.png","external":false},
  {"id":"fan-06","group":"fan","title":"백꾸 · 키링","sub":"가방에 키링·인형을 달아 꾸미고 올립니다","when":"2024-10~2025-01","result":"29CM 키링 거래액 178% 증가","note":"크림 2025 상반기 최고 인기 상품도 한정판 키링.","href":"https://byline.network/2025/07/18_kream/","img":"https://cdn.byline.network/wp-content/uploads/2025/07/이미지-크림-2025년-상반기-트렌드-리포트-발표.jpg","external":false},

  /* ── case — 유명인이 걸친 사례 (3장) ── */
  {"id":"case-01","group":"case","title":"테일러 스위프트 × Wove","sub":"‘TNT’ 글자를 넣은 맞춤 팔찌. 보석상이 건넨 것을 착용(구매·선물 여부는 보도가 엇갈림)","when":"2024-01","result":"매출 2,000% 이상 · 방문 5,000% 증가","note":"직원 8명의 주문 제작 보석상. 대표 발언, 착용 직후 약 2주.","href":"https://6abc.com/post/wove-made-inc-taylor-swift-bracelets-kansas-city-chiefs/14388935/","img":"https://cdn.abcotvs.com/dip/images/14389151_TNT.PNG?w=1600","external":false},
  {"id":"case-02","group":"case","title":"메건 마클 — ‘A’ 목걸이","sub":"아들 이니셜. 시드니의 Verse Fine Jewellery","when":"2019-07","result":"홈페이지가 두 번 멈춤","note":"디자이너: “주문이 눈사태처럼.”","href":"https://www.yahoo.com/now/duchess-sussex-initial-necklace-baby-archie-website-crashes-131130544.html","img":"https://api.photon.aremedia.net.au/wp-content/uploads/sites/15/media/40830/meghan-preview.jpg?resize=1200%2C630&format=auto","external":false},
  {"id":"case-03","group":"case","title":"메건 마클 — ‘M·H’ 목걸이","sub":"두 사람의 이니셜. LA의 Maya Brenner","when":"2016-12","result":"사진이 퍼지자 품절","note":"영국·유럽 주문을 받으려고 영국 작업실을 열었습니다.","href":"https://hellomagazine.com/fashion/669948/meghan-markle-necklace-prince-harry-intial-made-maya-brenner-go-viral","img":"https://images.hellomagazine.com/horizon/landscape/1200/7c084766c70e-gettyimages-1048991406.jpg","external":false},
  {"id":"case-04","group":"case","title":"조지 왕자의 가운","sub":"이름 새김 전문 브랜드(My 1st Years)의 가운, 약 27~30파운드","when":"2016-04","result":"사진 공개 몇 분 만에 품절","note":"2021년 재입고가 다시 기사가 됐습니다.","href":"https://www.hellomagazine.com/fashion/royal-style/20210925122550/prince-george-white-robe-barack-obama-meeting-back-in-stock/","img":"https://images.hellomagazine.com/horizon/landscape/1200/7e3a194816c5-prince-george-robe-t.jpg","external":false},
  {"id":"case-05","group":"case","title":"‘마티 슈프림’ 재킷","sub":"받을 사람을 배우가 직접 골랐다고 디자이너가 밝혔습니다","when":"2025-11~12","result":"정가 250달러 → 되팔이 4,000달러 이상","note":"유명인들이 입고 찍혔습니다. 250달러에 일반 판매도 했습니다.","href":"https://www.thestar.com.my/lifestyle/style/2026/01/10/from-cinema-to-cult-designs-the-puzzling-fashion-influence-of-039marty-supreme039","img":"https://images.complex.com/complex/image/upload/c_crop,h_1081,w_1920,x_0,y_0/g_xy_center,x_960,y_541,ar_1.91,c_fill,q_auto,w_1200/v1763579451/sanity-new/supreme_c4g4cf","external":false},
  {"id":"case-06","group":"case","title":"리사의 라부부 키링","sub":"가방에 단 인형 키링. 이름 새김은 아니고, ‘달린 물건이 퍼진다’의 증거","when":"2024-04","result":"동남아 구매 열풍의 계기로 꼽힙니다","note":"팝마트 해당 라인 2024년 매출 8배 이상.","href":"https://www.caixinglobal.com/2025-06-18/in-depth-how-labubu-became-a-monster-of-a-business-102331846.html","img":"https://img.caixin.com/2025-06-18/175024190500083_560_373.jpg","external":false},
  {"id":"case-07","group":"case","title":"장원영","sub":"팬이 준 목걸이를 6년째 착용(한 매체 보도)","when":"2025-07","result":"“6년 동안 간직하는 게 감동” 같은 반응","note":"품절 기록은 없습니다.","href":"https://www.news-wa.com/article/entertainment/celebrity-issue/2025/07/12/20250712500013","img":"https://img.news-wa.com//img/upload/2025/07/12/NWC_20250712203927.jpg","external":false},
  {"id":"case-08","group":"case","title":"박은빈","sub":"팬이 준 가방과 토끼 키링을 들고 공항에","when":"2023-01","result":"패션지가 “팬이 선물해 준 아이템”으로 소개","note":"품절 기록은 없습니다.","href":"https://www.allurekorea.com/?p=194136","img":"https://www.allurekorea.com/wp_data/allure/2023/01/style_63cb5268433f3.png","external":false},
  {"id":"case-09","group":"case","title":"해리 스타일스의 카디건","sub":"디자이너가 선물한 패치워크 카디건","when":"2020-02","result":"팬들이 직접 떠서 인증 → 실물은 V&A 박물관 소장","note":"디자이너가 도안을 무료로 풀었습니다.","href":"https://collections.vam.ac.uk/item/O1570456/cardigan","img":"https://framemark.vam.ac.uk/collections/2023NR0483/full/!600,/0/default.jpg","external":false},
  {"id":"case-10","group":"case","title":"헤일리 비버 — ‘B’ 목걸이","sub":"성 이니셜 풍선 글자 목걸이","when":"2023","result":"각국 매체가 단독 기사로 다룸","note":"2만~12만 원대 유사품 시장이 생겼습니다.","href":"https://www.vogue.co.kr/2023/10/10/%ed%97%a4%ec%9d%bc%eb%a6%ac-%eb%b9%84%eb%b2%84%ec%9d%98-b-%ed%8e%9c%eb%8d%98%ed%8a%b8-%eb%aa%a9%ea%b1%b8%ec%9d%b4/","img":"https://www.vogue.co.kr/wp_data/vogue/2023/10/style_6524ffc137ed8-1920x1080.jpeg","external":false},
  {"id":"case-11","group":"case","title":"케이트 미들턴 — ‘G·C·L’","sub":"세 자녀 이니셜을 새긴 금 원판 목걸이","when":"2020-01~","result":"“아이 이니셜 목걸이”로 반복 보도","note":"브랜드 매출 수치는 미확인.","href":"https://www.marieclaire.com/celebrity/a34121019/kate-middleton-personalized-necklace-children","img":"https://cdn.mos.cms.futurecdn.net/PumW8gzNbSCxJ4eL3GbdmC-2560-80.jpg","check":true,"external":false},
  {"id":"case-12","group":"case","title":"진 (BTS)","sub":"브랜드가 한 사람을 위해 만든 맞춤 재킷","when":"2025-02","result":"본인 인스타그램에 게시","note":"판매 수치는 미확인.","href":"https://sportskeeda.com/us/k-pop/news-jin-special-well-loved-fans-react-alo-yoga-makes-personalized-outfit-bts-jin","img":"https://staticg.sportskeeda.com/editor/2025/02/fbce9-17391436785410-1920.jpg","check":true,"external":false},
  {"id":"case-13","group":"case","title":"태우 나타폰 (태국)","sub":"중국 팬들이 준 반지","when":"2020-06","result":"본인이 “팬클럽 선물”이라고 직접 밝힘","note":"착용·브랜드 반응은 기사에 없습니다.","href":"https://www.posttoday.com/ent/news/626152","img":"https://image.posttoday.com/media/content/2020/06/16/516877DC0394FA88D8D6B45B0CEEAD62.jpg","external":false},
  {"id":"case-14","group":"case","title":"하뉴 유즈루 (일본)","sub":"팬이 링크에 던져 주던 곰돌이 푸 인형","when":"2026-08","result":"10여 년 뒤 공식 협업 상품이 됨","note":"판매 수치는 미확인.","href":"https://www.oricon.co.jp/news/2471636/full/","img":"https://contents.oricon.co.jp/upimg/news/2472000/2471636/20260803_094626_p_o_11989758.jpg","check":true,"external":false},

  /* ── frame — 틀이 브랜드가 된 회사 (4장) ── */
  {"id":"frame-01","group":"frame","title":"Casetify — 창업자","sub":"초기 자본 약 20만 달러로 시작","when":"2022-11","result":"2020년 1억 2,500만 달러 이상","note":"CNBC Make It.","href":"https://www.nbcsandiego.com/news/business/money-report/ceo-of-multimillion-dollar-company-casetify-shares-his-no-1-super-underrated-business-tip/3108246/","img":"https://media.nbcsandiego.com/2022/11/107151012-1668410913145-CEO_office_1.jpg","external":false},
  {"id":"frame-02","group":"frame","title":"Casetify — 매장","sub":"매장에서 30분 안에 맞춤 케이스 제작","when":"2023-02","result":"2022년 3억 달러 이상(대표 발언)","note":"Inside Retail.","href":"https://insideretail.asia/2023/02/22/art-and-upcycling-how-casetify-plans-to-reach-100-stores-globally-by-2025/","img":"https://insideretail.asia/wp-content/uploads/2023/02/Casetify-3.jpg","external":false},
  {"id":"frame-03","group":"frame","title":"Casetify — 협업","sub":"작가 300명 이상이 입점, 팔릴 때마다 수익을 나눔","when":"2023-01","result":"직원 1,000명 이상 · 180개국 이상","note":"Tatler Asia.","href":"https://www.tatlerasia.com/power-purpose/others/casetify-founder-wesley-ng","img":"https://cdn.tatlerasia.com/tatlerasia/i/2023/01/13104124-social_cover_1200x630.jpg","external":false},
  {"id":"frame-04","group":"frame","title":"Nike By You","sub":"색 조합 + 문자·숫자 ‘Personal ID’","when":"에어맥스 90","result":"165달러","note":"대량 생산 회사의 맞춤 라인. 별명·좌우명을 넣게 합니다.","href":"https://www.nike.com/u/custom-air-max-90-by-you-10002041/2667687259","img":"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_599,c_limit/0bd7e3c7-2680-444b-8ba3-3a6cff7b39ae/AIR+MAX+90+NBY.png","external":false},

  /* ── item-sweat — 자수 의류 — 실제 상품 (6장) ── */
  {"id":"sweat-01","group":"item-sweat","title":"Maison Labiche","sub":"파리 · 가슴에 손글씨풍 자수 한 줄","result":"140유로","href":"https://www.maisonlabiche.com/products/customizable-unisex-ledru-sweatshirt","img":"https://cdn.shopify.com/s/files/1/0577/9069/3556/files/DYOMLEDRU-CARBONWASHED-1_1d08de38-01b9-4f09-b139-08daae375dd4.jpg","check":true,"external":false},
  {"id":"sweat-02","group":"item-sweat","title":"Lingua Franca","sub":"뉴욕 · 맞춤 문구 손자수 캐시미어","result":"320달러","href":"https://linguafranca.nyc/products/custom-crewneck","img":"https://cdn.shopify.com/s/files/1/1280/1673/files/aa9ec863-62c5-4783-9788-a2c2aa3800b2.jpg","check":true,"external":false},
  {"id":"sweat-03","group":"item-sweat","title":"Bode","sub":"뉴욕 · 주문자의 삶을 그려 넣는 코듀로이 재킷","result":"2,300달러","href":"https://bode.com/products/custom-senior-cord-side-tab-jacket","img":"https://cdn.shopify.com/s/files/1/1218/8970/files/SENIORCORDSIDETABJACKET-05.jpg","external":false},
  {"id":"sweat-04","group":"item-sweat","title":"West & Willow","sub":"반려동물 얼굴 자수 크루넥","result":"80달러","href":"https://www.westandwillow.com/products/custom-pet-embroidery-crewneck","img":"https://cdn.shopify.com/s/files/1/0198/9715/5646/files/14.jpg","external":false},
  {"id":"sweat-05","group":"item-sweat","title":"My 1st Years","sub":"영국 · 이름 자수 아동 가운","result":"36파운드","href":"https://www.my1styears.com/products/personalised-luxe-penguin-robe","img":"https://cdn.shopify.com/s/files/1/0928/8122/4028/files/2bRh7IvaJkrBuePUQMWmGlMwMn8M8LA2AoFmT0Di.jpg","external":false},
  {"id":"sweat-06","group":"item-sweat","title":"Stoney Clover Lane","sub":"손자수 맞춤 글자 패치","result":"58달러","href":"https://www.stoneycloverlane.com/products/hand-embroidered-small-custom-text-patch","img":"https://cdn.shopify.com/s/files/1/0096/2392/files/small_bbe15f50-fb80-466c-805c-94683d6b51e9.png","external":false},
  {"id":"sweat-07","group":"item-sweat","title":"Burberry","sub":"체크 캐시미어 머플러 · 이니셜 자수","result":"450파운드","href":"https://int.burberry.com/check-cashmere-scarf-p80946531","img":"https://assets.burberry.com/is/image/Burberryltd/CC340DD7-ACAF-4881-98C5-C7A61823F736","external":false},
  {"id":"sweat-08","group":"item-sweat","title":"자주 JAJU","sub":"시어서커 파자마 이니셜 새김","result":"요금 미확인","href":"https://magazine.hankyung.com/business/article/202506116784b","img":"https://img.hankyung.com/photo/202506/AD.40783090.1.jpg","external":false},
  {"id":"sweat-09","group":"item-sweat","title":"Polo Ralph Lauren","sub":"폴로셔츠 모노그램 추가","result":"추가 10달러","href":"https://www.ralphlauren.com/men-clothing-polo-shirts/the-custom-polo-made-to-order/588160-25.html","img":"","check":true,"external":false},
  {"id":"sweat-10","group":"item-sweat","title":"Dior — ABCDior","sub":"북 토트에 이름 자수","result":"가방 약 2,350~3,800달러","href":"https://dior.com/en_in/fashion/gifts-personalization/personalization/abcdior","img":"","check":true,"external":false},

  /* ── item-key — 각인 키링 — 실제 상품 (6장) ── */
  {"id":"key-01","group":"item-key","title":"Wove","sub":"Custom Link TNT 팔찌","result":"450달러","href":"https://wovemade.com/products/custom-link-tnt-bracelet","img":"https://cdn.shopify.com/s/files/1/0785/6111/6207/files/MWW-132309-Y-1.jpg","external":false},
  {"id":"key-02","group":"item-key","title":"Maya Brenner","sub":"금 글자 참 · 2007년부터 같은 틀","result":"145달러","href":"https://mayabrenner.com/products/gold-letter-charm","img":"https://cdn.shopify.com/s/files/1/1726/8437/files/14ct-yellow-gold-letter-charm-s.jpg","external":false},
  {"id":"key-03","group":"item-key","title":"The Right Hand Gal","sub":"The Meghan 미니 이니셜 목걸이","result":"399~599캐나다달러","href":"https://www.therighthandgal.com/products/tiny-initial-necklace-solid-gold","img":"https://cdn.shopify.com/s/files/1/0781/9893/products/meghan-mini-initial-necklace-one-initial-the-right-hand-gal.jpg","external":false},
  {"id":"key-04","group":"item-key","title":"Mejuri","sub":"각인 가능한 원판 참","result":"528달러","href":"https://www.mejuri.com/products/disc-pave-diamond-engravable-charm","img":"https://cdn.shopify.com/s/files/1/0797/3637/3533/files/0_PaveDiamondBailRoundTagPendant_YG_Hero_new_00ad086f-96ec-45af-a4c3-f8b52d29bc64.png","external":false},
  {"id":"key-05","group":"item-key","title":"Tiffany & Co.","sub":"Return to Tiffany 은 태그 키링 · 각인 선택","result":"290~310달러","href":"https://www.tiffany.com/home-accessories/personal-accessories/return-to-tiffany-sterling-silver-personal-accessories-73361877.html","img":"","check":true,"external":false},
  {"id":"key-06","group":"item-key","title":"Daniella Draper","sub":"영국 · 이니셜 각인 목걸이","result":"약 1,070파운드","href":"https://katemiddletonstyle.org/item/daniella-draper-moon-necklace/","img":"","check":true,"external":false},

  /* ── item-plush — 인형 키링 — 실제 상품 (6장) ── */
  {"id":"plush-01","group":"item-plush","title":"Cuddle Clones","sub":"반려동물을 그대로 본뜬 맞춤 인형","result":"247.99달러","href":"https://cuddleclones.com/products/custom-plush-cuddle-clones","img":"https://cdn.shopify.com/s/files/1/0528/6176/3740/files/heroplushimage.png","check":true,"external":false},
  {"id":"plush-02","group":"item-plush","title":"My 1st Years","sub":"기성 토끼 인형 + 귀에 이름 자수","result":"22.40~25.20파운드","href":"https://www.my1styears.com/products/personalised-dusky-mauve-bunny-soft-toy","img":"https://cdn.shopify.com/s/files/1/0928/8122/4028/files/se_50111935-mauve-bunny-a.jpg","external":false},
  {"id":"plush-03","group":"item-plush","title":"Build-A-Bear","sub":"발바닥에 이름·날짜 자수 곰","result":"40~44달러","href":"https://www.buildabear.com/personalized-embroidered-spring-green-frog-stuffed-animal-with-white-gifting-bow/32521_28706.html","img":"","check":true,"external":false},
  {"id":"plush-04","group":"item-plush","title":"Louis Vuitton","sub":"LV Louis Bear 가방 참","result":"1,490달러","href":"https://us.louisvuitton.com/eng-us/products/lv-louis-bear-bag-charm-s00-nvprod7760024v/M04362","img":"","check":true,"external":false},
  {"id":"plush-05","group":"item-plush","title":"Burberry","sub":"Thomas Bear 참","result":"355유로","href":"https://numero.com/en/fashion/bag-charms-kitsch-and-fun-accessories","img":"","check":true,"external":false},
  {"id":"plush-06","group":"item-plush","title":"Pop Mart · Jellycat","sub":"라부부 키링 / 젤리캣 곰. 대중 가격의 바닥","result":"24유로 / 28유로","href":"https://numero.com/en/fashion/bag-charms-kitsch-and-fun-accessories","img":"","check":true,"external":false},
  {"id":"plush-07","group":"item-plush","title":"일본 개인 작가","sub":"오시누이 1체 주문 제작, 납기 3주~2개월","result":"5,000엔~","href":"https://coconala.com/services/2670299","img":"","check":true,"external":false},

  /* ── item-leather — 가죽 소품 — 실제 상품 (6장) ── */
  {"id":"leather-01","group":"item-leather","title":"Anya Hindmarch","sub":"런던 · Bespoke A5 저널","result":"420파운드","href":"https://www.anyahindmarch.com/products/bespoke-a5-two-way-journal-in-london-grain-cobalt","img":"https://cdn.shopify.com/s/files/1/0505/4467/2922/products/5050925707435_a5-two-way-journal_8.jpg","external":false},
  {"id":"leather-02","group":"item-leather","title":"Anya Hindmarch","sub":"Bespoke 가죽 참","result":"120~175파운드","href":"https://www.anyahindmarch.com/products/bespoke-charm-lucky-clover-in-capra-viridian","img":"https://cdn.shopify.com/s/files/1/0505/4467/2922/products/5050925131353_Charm_2.jpg","external":false},
  {"id":"leather-03","group":"item-leather","title":"Clare V.","sub":"LA · 러기지택 + 손으로 그린 모노그램","result":"95달러","href":"https://www.clarev.com/products/cuoio-vachetta-black-cream-stripe-luggage-tag","img":"https://cdn.shopify.com/s/files/1/1240/1014/products/Hand-Painted-Monogram.jpg","external":false},
  {"id":"leather-04","group":"item-leather","title":"Cuyana","sub":"가죽 여권 커버 · 군더더기 없는 이니셜","result":"98달러","href":"https://cuyana.com/products/passport-cover","img":"https://cdn.shopify.com/s/files/1/0712/5054/2907/files/PDP_1080x1350_HO25_PassportCover_Cappuccino_0234.jpg","external":false},
  {"id":"leather-05","group":"item-leather","title":"Leatherology","sub":"디럭스 러기지택","result":"45달러","href":"https://www.leatherology.com/products/deluxe-luggage-tag-black-onyx","img":"https://cdn.shopify.com/s/files/1/0687/7950/7960/files/Deluxe-Luggage-Tag-new-Black-427-135.jpg","external":false},
  {"id":"leather-06","group":"item-leather","title":"헤비츠 HEVITZ","sub":"한국 · 카드홀더 39,000원에 각인 +3,000원","result":"42,000원","href":"https://www.hevitz.com/product/detail.html?product_no=2533","img":"https://hevitz.cafe24.com/web/upload/share-image-1-b3a549ed52c8857c848b91097a8565e0.png","external":false},
  {"id":"leather-07","group":"item-leather","title":"The Daily Edited","sub":"호주 · 가죽 키링. 상품 급만 참고(회사는 2024 법정관리)","result":"41.30~48.30호주달러","href":"https://www.thedailyedited.com/products/olvia-keyring-black","img":"https://cdn.shopify.com/s/files/1/0629/2842/1077/files/TD00166BABLKO-1.jpg","external":false},
  {"id":"leather-08","group":"item-leather","title":"Mon Purse","sub":"호주 · 매듭 가죽 키링. 상품 급만 참고(회사는 2020 청산)","result":"50~60호주달러","href":"https://www.monpurse.com/products/knotted-keyring-chocolate-gold","img":"https://cdn.shopify.com/s/files/1/0609/7833/1880/products/mon-purse-knotted-keyring-chocolate-brown-leather-gold-hardware-front_02957a11-0159-4253-b7cf-d045471c1551.jpg","external":false},
  {"id":"leather-09","group":"item-leather","title":"Louis Vuitton","sub":"포켓 오거나이저 + 이니셜 핫스탬핑","result":"520달러","href":"https://us.louisvuitton.com/eng-us/products/pocket-organizer-epi-008210/M60642","img":"","check":true,"external":false},
  {"id":"leather-10","group":"item-leather","title":"Rimowa","sub":"가죽 네임택 · 이니셜 맞춤","result":"90달러","href":"https://www.rimowa.com/us/en/accessories/travel-accessories/tags-extras/address-tag/51400042.html","img":"","check":true,"external":false},

  /* ── bx-1 — 자수·직조 라벨, 택, 케어라벨 (12장 BX 보드) ── */
  {"id":"bx-1-1","group":"bx-1","title":"Ventura Foreman(런던 작업복)","sub":"원단 롤에 감긴 사이즈·브랜드 라벨 띠","when":"BX 1-1","note":"라벨 시스템 소개 컷: '모든 물건에 같은 표식'(기준 5)","href":"https://bpando.org/2024/03/07/workwear-branding-packaging-typography-ventura-foreman-studio-blackburn/","img":"https://bpando.org/wp-content/uploads/15-Ventura-Foreman-Fashion-Branding-Art-Direction-Labelling-Labels-Studio-Blackburn-London-UK-BPO-Review.jpg","external":false},
  {"id":"bx-1-2","group":"bx-1","title":"Ventura Foreman","sub":"주문 번호와 'Designed and Manufactured in'이 적힌 제작 태그, 재봉틀 위 손","when":"BX 1-2","note":"제작 카드(의식) 대목의 실물 근거","href":"https://bpando.org/2024/03/07/workwear-branding-packaging-typography-ventura-foreman-studio-blackburn/","img":"https://bpando.org/wp-content/uploads/7a-Ventura-Foreman-Fashion-Branding-Packaging-Labels-Studio-Blackburn-London-UK-BPO-Review.jpg","external":false},
  {"id":"bx-1-3","group":"bx-1","title":"Farah","sub":"검정 원단 위 흰 직조 라벨 정면","when":"BX 1-3","note":"서명(작은 표식)이 옷에 앉는 방식","href":"https://bpando.org/2016/04/25/branding-farah/","img":"https://bpando.org/wp-content/uploads/04-Farah-Branding-Logo-Labels-Post-BPO.jpg","external":false},
  {"id":"bx-1-4","group":"bx-1","title":"Marc Jacobs(Triboro)","sub":"노랑 행택 3종, 흑백 패턴 배경","when":"BX 1-4","note":"택 크기 체계·색 하나 규칙","href":"https://bpando.org/2022/04/14/new-branding-marc-jacobs-2022/","img":"https://bpando.org/wp-content/uploads/8-Marc-Jacobs-Branding-Labels-2022-Triboro-Design-New-York-BPO.jpg","external":false},
  {"id":"bx-1-5","group":"bx-1","title":"The Fableists","sub":"목 안쪽에 찍은 케어라벨(치수·세탁 기호)","when":"BX 1-5","note":"케어라벨을 브랜드 글자로 쓰는 예","href":"https://bpando.org/2013/10/22/logo-the-fableists/","img":"https://bpando.org//wp-content/uploads/09-The-Fableists-Label-Freytag-Anderson-BPO.jpg","external":false},
  {"id":"bx-1-6","group":"bx-1","title":"Croft Knitwear","sub":"니트 목 안쪽 직조 라벨 접사","when":"BX 1-6","note":"자수·직조 라벨 실물 급 기준","href":"https://bpando.org/2015/02/03/logo-croft-knitwear/","img":"https://bpando.org/wp-content/uploads/04-Croft-Logo-and-Label-by-Commission-on-BPO.jpg","external":false},
  {"id":"bx-1-7","group":"bx-1","title":"Lorod(Pentagram)","sub":"재킷 안쪽 흰 라벨을 손으로 젖힌 컷","when":"BX 1-7","note":"'물건에는 이름 대신 표식' 설명 컷","href":"https://bpando.org/2017/01/24/branding-lorod/","img":"https://bpando.org/wp-content/uploads/11-Lorod-Branding-Inside-Label-Pentagram-Natasha-Jen-New-York-USA-BPO.jpg","external":false},
  {"id":"bx-1-8","group":"bx-1","title":"Lorod","sub":"형압(잉크 없이 눌러 찍은) 택과 명함","when":"BX 1-8","note":"빈 괄호를 형압으로 남기는 방식 참고","href":"https://bpando.org/2017/01/24/branding-lorod/","img":"https://bpando.org/wp-content/uploads/09-Lorod-Branding-Print-Blind-Embossed-Tags-Pentagram-Natasha-Jen-New-York-USA-BPO.jpg","external":false},
  {"id":"bx-1-9","group":"bx-1","title":"Helbers","sub":"검정 종이에 검정 박을 올린 택 접사","when":"BX 1-9","note":"무채색만으로 급을 내는 택","href":"https://bpando.org/2016/08/22/branding-helbers/","img":"https://bpando.org/wp-content/uploads/04-Helbers-Branding-Logotype-Swing-Tage-Block-Foil-Only-Studio-Leeds-UK-BPO.jpg","external":false},
  {"id":"bx-1-10","group":"bx-1","title":"Levi's","sub":"데님 주머니에 박힌 흰 천 라벨 접사(커스텀 부스 현장)","when":"BX 1-10","note":"커스텀 서비스 현장 디테일","href":"https://hypebeast.com/2023/9/hypebeast-flea-levis-customization-space-recap-video","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F09%2Fhypebeast-flea-levis-customization-space-recap-video-01.jpg?w=1440&cbr=1&q=90&fit=max","portrait":true,"external":false},

  /* ── bx-2 — 포장 상자, 쇼핑백, 박스 테이프, 스티커 봉인 (12장 BX 보드) ── */
  {"id":"bx-2-1","group":"bx-2","title":"Lunge(Porto Rocha)","sub":"워드마크 테이프를 두른 택배 상자 3단","when":"BX 2-1","note":"박스 테이프 시안의 직접 참고","href":"https://bpando.org/2024/07/31/premium-pet-product-branding-luxury-lunge-porto-rocha/","img":"https://bpando.org/wp-content/uploads/8-Lunge-pet-product-branding-Packaging-Porto-Rocha-New-York-BPO-Review.jpg","external":false},
  {"id":"bx-2-2","group":"bx-2","title":"Lunge","sub":"검정 더스트백에 은색 워드마크","when":"BX 2-2","note":"더스트백·속포장","href":"https://bpando.org/2024/07/31/premium-pet-product-branding-luxury-lunge-porto-rocha/","img":"https://bpando.org/wp-content/uploads/10-Lunge-pet-product-branding-Drawstring-Bag-Porto-Rocha-New-York-BPO-Review.jpg","external":false},
  {"id":"bx-2-3","group":"bx-2","title":"Ventura Foreman","sub":"주문 번호 스티커가 붙은 골판지 상자","when":"BX 2-3","note":"주문 제작임을 포장에서 보여 주는 법","href":"https://bpando.org/2024/03/07/workwear-branding-packaging-typography-ventura-foreman-studio-blackburn/","img":"https://bpando.org/wp-content/uploads/7-Ventura-Foreman-Fashion-Branding-Packaging-Labels-Studio-Blackburn-London-UK-BPO-Review.jpg","external":false},
  {"id":"bx-2-4","group":"bx-2","title":"Paco Rabanne(Zak Group)","sub":"흰 쇼핑백과 상자, 굵은 소문자 워드마크","when":"BX 2-4","note":"쇼핑백 급 기준(굵고 단정)","href":"https://bpando.org/2016/06/28/branding-paco-rabanne/","img":"https://bpando.org/wp-content/uploads/06-Paco-Rabanne-Branding-Logo-Print-Bags-Zak-Group-BPO.jpeg","external":false},
  {"id":"bx-2-5","group":"bx-2","title":"Fouta Harissa","sub":"흰 더스트백과 빨강 문장 테이프","when":"BX 2-5","note":"색 하나 + 문장형 테이프","href":"https://bpando.org/2026/03/19/fouta-harissa-fashion-brand-by-sometimes-always/","img":"https://bpando.org/wp-content/uploads/sometimes-always-fouta-harissa-branding-identity-logo-wordmark-design-bpo-review-tape.png","external":false},
  {"id":"bx-2-6","group":"bx-2","title":"WallpaperSTORE*(APFEL)","sub":"패턴 봉투에 빨강 원형 스티커 봉인","when":"BX 2-6","note":"스티커 봉인 = 주홍 한 점 규칙","href":"https://bpando.org/2016/09/22/packaging-wallpaper-store/","img":"https://bpando.org/wp-content/uploads/07-Wallpaper-Store-Packaging-A-Practice-For-Everyday-Life-London-UK-BPO.jpg","external":false},
  {"id":"bx-2-7","group":"bx-2","title":"WallpaperSTORE*","sub":"파랑·회색 상자, 육각 창","when":"BX 2-7","note":"상자 구조·창 내기 참고","href":"https://bpando.org/2016/09/22/packaging-wallpaper-store/","img":"https://bpando.org/wp-content/uploads/06-Wallpaper-Store-Packaging-A-Practice-For-Everyday-Life-London-UK-BPO.jpg","external":false},
  {"id":"bx-2-8","group":"bx-2","title":"Marc Jacobs(Triboro)","sub":"노랑 상자·택 전체 세트","when":"BX 2-8","note":"포장 한 벌 전체 구성 예","href":"https://bpando.org/2022/04/14/new-branding-marc-jacobs-2022/","img":"https://bpando.org/wp-content/uploads/7-Marc-Jacobs-Branding-Packaging-2022-Triboro-Design-New-York-BPO.jpg","external":false},
  {"id":"bx-2-9","group":"bx-2","title":"더현대(스튜디오 fnt)","sub":"흰 택배 상자와 초록 로고 테이프","when":"BX 2-9","note":"국내 사례: 상자 + 테이프 한 벌","href":"https://bpando.org/2015/10/30/branding-the-hyundai/","img":"https://bpando.org/wp-content/uploads/12-The-Hyundai-Brand-Identity-Packaging-Studio-fnt-BPO.jpg","external":false},
  {"id":"bx-2-10","group":"bx-2","title":"Tilly Sveaas(Bond)","sub":"회색 상자에 흰 박 글자","when":"BX 2-10","note":"작은 상자(키링용) 참고","href":"https://bpando.org/2016/12/07/branding-tilly-sveaas/","img":"https://bpando.org/wp-content/uploads/00-Tilly-Sveaas-Jewellery-Branding-Print-Packaging-Bond-London-BPO.jpg","external":false},

  /* ── bx-3 — 자수·각인 접사 (12장 BX 보드) ── */
  {"id":"bx-3-1","group":"bx-3","title":"Acne Studios 스카프 이니셜 자수 서비스","sub":"주황 스카프 끝 'JHK' 자수, 인물 정면","when":"BX 3-1","note":"핵심 참고: 이니셜 자수가 패션 캠페인이 되는 예","href":"https://hypebeast.com/2021/11/acne-studios-scarf-personalization-service-vernon-ronan-mckenzie-portraits","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F11%2Facne-studios-scarf-personalization-service-vernon-ronan-mckenzie-portraits-08.jpg?w=1440&cbr=1&q=90&fit=max","portrait":true,"external":false},
  {"id":"bx-3-2","group":"bx-3","title":"Acne Studios","sub":"같은 서비스, 다른 인물·다른 이니셜","when":"BX 3-2","note":"'채운 것이 주인공' 사람마다 다른 컷","href":"https://hypebeast.com/2021/11/acne-studios-scarf-personalization-service-vernon-ronan-mckenzie-portraits","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F11%2Facne-studios-scarf-personalization-service-vernon-ronan-mckenzie-portraits-01.jpg?w=1440&cbr=1&q=90&fit=max","portrait":true,"external":false},
  {"id":"bx-3-3","group":"bx-3","title":"Acne Studios 데님 개인화","sub":"검정 데님 요크의 붉은 글자 접사","when":"BX 3-3","note":"자수 접사 급 기준","href":"https://hypebeast.com/2022/9/acne-studios-personalised-denim-service-info","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F09%2Facne-studios-personalised-denim-service-info-019.jpg?w=1440&cbr=1&q=90&fit=max","portrait":true,"external":false},
  {"id":"bx-3-4","group":"bx-3","title":"Acne Studios","sub":"뒷주머니 옆 글자 접사","when":"BX 3-4","note":"새김 위치 예시","href":"https://hypebeast.com/2022/9/acne-studios-personalised-denim-service-info","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F09%2Facne-studios-personalised-denim-service-info-020.jpg?w=1440&cbr=1&q=90&fit=max","portrait":true,"external":false},
  {"id":"bx-3-5","group":"bx-3","title":"Yohji Yamamoto","sub":"검정 재킷 위 흰 실 자수 접사","when":"BX 3-5","note":"흑백 + 실 한 가닥, 결 사진 규칙","href":"https://hypebeast.com/2026/4/yohji-yamamoto-pour-homme-cracked-embroidery-collection-release-info","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2026%2F04%2F27%2FYohji-Yamamoto-POUR-HOMME-Cracked-Embroidery-Collection-Release-Info-6.jpg?w=1440&cbr=1&q=90&fit=max","external":false},
  {"id":"bx-3-6","group":"bx-3","title":"SOPHNET. × L.L.Bean","sub":"토트 안쪽 라벨과 자수 접사","when":"BX 3-6","note":"가방 안쪽 서명 자리","href":"https://hypebeast.com/2026/8/sophnet-l-l-bean-boat-and-tote-collaboration-collection-release-info","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2026%2F08%2F25%2FSOPHNET-l-l-Bean-Boat-and-Tote-Collaboration-collection-Release-Info-7.jpg?w=1440&cbr=1&q=90&fit=max","external":false},
  {"id":"bx-3-7","group":"bx-3","title":"Blackhorse Lane Ateliers","sub":"청바지 허리 가죽 패치 형압","when":"BX 3-7","note":"가죽 각인 접사","href":"https://bpando.org/2017/02/28/branding-blackhorse-lane-ateliers/","img":"https://bpando.org/wp-content/uploads/04-Blackhorse-Lane-Ateliers-Branding-Logo-Jean-Label-Studio-Small-London-UK-BPO.jpg","external":false},
  {"id":"bx-3-8","group":"bx-3","title":"AMBUSH","sub":"놋쇠 자물쇠 옆면 각인 접사","when":"BX 3-8","note":"금속 각인 접사 급 기준","href":"https://hypebeast.com/2019/3/ambush-gold-tone-padlock-keyring-release","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F03%2Fambush-gold-tone-padlock-keyring-release-002.jpg?w=1440&cbr=1&q=90&fit=max","external":false},
  {"id":"bx-3-9","group":"bx-3","title":"한지(스튜디오 fnt)","sub":"유니폼 자락의 파랑 로고 자수","when":"BX 3-9","note":"국내 사례: 옷 위 작은 자수 표식","href":"https://bpando.org/2020/09/08/hanji-by-studio-fnt/","img":"https://bpando.org/wp-content/uploads/19-Hanji-Korean-Papers-Brand-Identity-Branded-Uniform-Studio-fnt-BPO.jpg","external":false},
  {"id":"bx-3-10","group":"bx-3","title":"나이키 에어 맥스 1 한글날","sub":"뒤축 스웨이드에 눌러 새긴 한글 '나이키'·'에어 맥스'","when":"BX 3-10","note":"한글 각인 실물(8번 묶음 겸용)","href":"https://hypebeast.kr/2023/9/nike-adds-the-air-max-1-to-its-hangul-day-celebrations-release-info","img":"https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2023%2F09%2Fnike-adds-the-air-max-1-to-its-hangul-day-celebrations-release-info-05.jpg?w=1440&cbr=1&q=90&fit=max","external":false},

  /* ── bx-4 — 키링·참·작은 오브제 (12장 BX 보드) ── */
  {"id":"bx-4-1","group":"bx-4","title":"Maison Margiela 타비 부츠 키링","sub":"은·금 한 쌍, 흰 배경","when":"BX 4-1","note":"키링을 오브제로 찍는 법","href":"https://hypebeast.com/2019/7/maison-margiela-ssense-exclusive-tabi-boot-keychain-release","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F07%2Fmaison-margiela-ssense-exclusive-tabi-boot-keychain-release-000.jpg?w=1440&cbr=1&q=90&fit=max","external":false},
  {"id":"bx-4-2","group":"bx-4","title":"Hermès × Apple AirTag 키링 3색","when":"BX 4-2","note":"가죽 + 금속, 입문 가격 품목의 급","href":"https://hypebeast.com/2021/4/apple-airtags-hermes-key-ring-bag-charm-luggage-tag-release","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F04%2Fapple-airtag-hermes-key-ring-bag-charm-luggage-tag-release-000.jpg?w=1440&cbr=1&q=90&fit=max","external":false},
  {"id":"bx-4-3","group":"bx-4","title":"Jil Sander 가죽 달력 키링","sub":"날짜 다이얼 접사","when":"BX 4-3","note":"'날짜를 새긴다'는 상품 아이디어","href":"https://hypebeast.com/2019/8/jil-sander-leather-calendar-keychain-runway-accessories","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F08%2Fjil-sander-leather-calendar-keychain-runway-accessories-2.jpg?w=1440&cbr=1&q=90&fit=max","portrait":true,"external":false},
  {"id":"bx-4-4","group":"bx-4","title":"Raf Simons 반쪽 하트 참","sub":"'BLUE MONDAY' 각인","when":"BX 4-4","note":"이름 둘을 나란히 새기는 짝 상품","href":"https://hypebeast.com/2019/7/raf-simons-key-chains-accessories-double-cherry-charm-release","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F07%2Fraf-simons-key-chains-accessories-double-cherry-charm-release-4.jpg?w=1440&cbr=1&q=90&fit=max","portrait":true,"external":false},
  {"id":"bx-4-5","group":"bx-4","title":"Raf Simons 열쇠 참","sub":"숫자 13 꼬리표","when":"BX 4-5","note":"숫자·날짜 꼬리표","href":"https://hypebeast.com/2019/7/raf-simons-key-chains-accessories-double-cherry-charm-release","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F07%2Fraf-simons-key-chains-accessories-double-cherry-charm-release-2.jpg?w=1440&cbr=1&q=90&fit=max","portrait":true,"external":false},
  {"id":"bx-4-6","group":"bx-4","title":"uniform experiment × fragment 카라비너 + 에나멜 태그","when":"BX 4-6","note":"가방에 다는 방식(카라비너)","href":"https://hypebeast.com/2019/8/uniform-experiment-fragment-design-aluminum-carabiner-release","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F08%2Funiform-experiment-fragment-design-aluminum-carabiner-release-0.jpg?w=1440&cbr=1&q=90&fit=max","external":false},
  {"id":"bx-4-7","group":"bx-4","title":"Telfar 미니 쇼퍼 백 참","sub":"귀걸이처럼 대고 찍은 캠페인 컷","when":"BX 4-7","note":"참을 사람과 함께 찍는 캠페인","href":"https://hypebeast.com/2026/7/telfar-mini-shopper-bag-charm-release-info","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2026%2F07%2F15%2Ftelfar-mini-shopper-bag-charm-release-info-2.jpg?w=1440&cbr=1&q=90&fit=max","external":false},
  {"id":"bx-4-8","group":"bx-4","title":"제이홉 'Charm of HOPE' 키링(무신사)","sub":"금속 키링 흑백 접사","when":"BX 4-8","note":"공식 협업(3단계) 키링 실례","href":"https://hypebeast.kr/2025/7/bts-j-hope-releases-exclusive-charm-of-hope-keyring-with-musinsa","img":"https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2025%2F07%2F09%2Fbts-j-hope-releases-exclusive-charm-of-hope-keyring-with-musinsa6.jpg?w=1440&cbr=1&q=90&fit=max","external":false},

  /* ── bx-5 — 봉제인형·캐릭터 오브제 (12장 BX 보드) ── */
  {"id":"bx-5-1","group":"bx-5","title":"PORTER 탱커 나일론 곰","sub":"남색 + 주황, 흰 배경 정면","when":"BX 5-1","note":"핵심 참고: 어른스러운 봉제인형, 색 하나","href":"https://hypebeast.com/2021/6/porter-iron-blue-tanker-grizzly-bear-references-stuffed-bears-release","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F05%2Fporter-tanker-ib-iron-blue-grizzly-bear-release-info-0000.jpg?w=1440&cbr=1&q=90&fit=max","external":false},
  {"id":"bx-5-2","group":"bx-5","title":"PORTER 곰","sub":"몸통에 박힌 직조 라벨 접사","when":"BX 5-2","note":"인형 위 서명(라벨) 자리","href":"https://hypebeast.com/2021/6/porter-iron-blue-tanker-grizzly-bear-references-stuffed-bears-release","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F05%2Fporter-tanker-ib-iron-blue-grizzly-bear-release-info-0003.jpg?w=1440&cbr=1&q=90&fit=max","external":false},
  {"id":"bx-5-3","group":"bx-5","title":"READYMADE 커밋","sub":"등판 라벨 접사","when":"BX 5-3","note":"인형 + 라벨 접사 방식","href":"https://hypebeast.com/2021/11/readymade-disney-kermit-the-frog-the-muppets-release-info","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F11%2Freadymade-disney-kermit-the-frog-the-muppets-release-info-005.jpg?w=1440&cbr=1&q=90&fit=max","external":false},
  {"id":"bx-5-4","group":"bx-5","title":"KAWS 봉제인형","sub":"일련번호가 적힌 원형 택","when":"BX 5-4","note":"제작 카드·번호 매기기","href":"https://hypebeast.com/2023/9/kaws-accomplice-plush-doll-lantern-ddtstore","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F09%2Fkaws-accomplice-plush-doll-lantern-ddtstore-7.jpg?w=1440&cbr=1&q=90&fit=max","portrait":true,"external":false},
  {"id":"bx-5-5","group":"bx-5","title":"Louis Vuitton 곰 참","sub":"가방에 달고 든 컷","when":"BX 5-5","note":"가방에 달린 인증 장면","href":"https://hypebeast.com/2025/6/louis-vuitton-vivienne-fashionista-and-louis-bear-bag-charms-release-info","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2025%2F06%2F25%2Flouis-vuitton-new-bag-charms-00.jpg?w=1440&cbr=1&q=90&fit=max","external":false},
  {"id":"bx-5-6","group":"bx-5","title":"doublet 봉제 동물 가방·목도리","when":"BX 5-6","note":"낯선 봉제 오브제(무드)","href":"https://hypebeast.com/2021/9/doublet-stuffed-animal-camel-alpaca-bag-cat-scarf-fall-winter-2021","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F09%2Fdoublet-stuffed-animal-camel-alpaca-bag-cat-scarf-fall-winter-2021-0.jpg?w=1440&cbr=1&q=90&fit=max","external":false},

  /* ── bx-6 — 포스터·캠페인 그래픽 (12장 BX 보드) ── */
  {"id":"bx-6-1","group":"bx-6","title":"타이포잔치 2015 'C( ) T( )'(스튜디오 fnt)","sub":"빈 괄호 로고","when":"BX 6-1","note":"핵심 참고: 괄호 안을 비워 둔 로고, 'My [ ]' 근거","href":"https://bpando.org/2016/01/05/branding-typojanchi-2015/","img":"https://bpando.org/wp-content/uploads/10-Typojanchi-2015-Branding-Logo-by-Studio-fnt-on-BPO.jpg","external":false},
  {"id":"bx-6-2","group":"bx-6","title":"C( ) T( )","sub":"에코백 적용","when":"BX 6-2","note":"빈 괄호가 물건에 올라간 모습","href":"https://bpando.org/2016/01/05/branding-typojanchi-2015/","img":"https://bpando.org/wp-content/uploads/08-Typojanchi-2015-Branding-Tote-Bag-by-Studio-fnt-on-BPO.jpg","external":false},
  {"id":"bx-6-3","group":"bx-6","title":"C( ) T( )","sub":"'THANKS YOU' 카드","when":"BX 6-3","note":"제작 카드·감사 카드","href":"https://bpando.org/2016/01/05/branding-typojanchi-2015/","img":"https://bpando.org/wp-content/uploads/04-Typojanchi-2015-Branding-Postcard-by-Studio-fnt-on-BPO.jpg","external":false},
  {"id":"bx-6-4","group":"bx-6","title":"C( ) T( )","sub":"가로등 배너(광화문)","when":"BX 6-4","note":"옥외 적용","href":"https://bpando.org/2016/01/05/branding-typojanchi-2015/","img":"https://bpando.org/wp-content/uploads/01-Typojanchi-2015-Branding-Signage-by-Studio-fnt-on-BPO.jpg","external":false},
  {"id":"bx-6-5","group":"bx-6","title":"Windham Campbell Prizes(Pentagram)","sub":"괄호 무늬 포스터, 게시판","when":"BX 6-5","note":"괄호를 무늬로 쓰는 법","href":"https://bpando.org/2025/07/24/book-prize-branding-windham-campbell-prizes-by-pentagram/","img":"https://bpando.org/wp-content/uploads/5-Book-Award-Branding-Windham-Campbell-Prizes-Pentagram-Branded-Print-Posters-Trabucco-Campos-BPO-Review.jpg","external":false},
  {"id":"bx-6-6","group":"bx-6","title":"Fjord 사우나(DutchScot)","sub":"흑백 굵은 글자 포스터","when":"BX 6-6","note":"굵은 흑백 타이포 포스터 급","href":"https://bpando.org/2026/07/16/dutchscot-fjord-san-francisco-sauna-branding/","img":"https://bpando.org/wp-content/uploads/DutchScot-Fjord-branding-identity-design-bpo-review-Posters-3.jpg","external":false},
  {"id":"bx-6-7","group":"bx-6","title":"Cashflow Vodka(Marx Design)","sub":"영수증 서식 포스터","when":"BX 6-7","note":"'기록 형식' 말투(제작 기록)","href":"https://bpando.org/2025/08/07/vodka-branding-packaging-cashflow-marx-design/","img":"https://bpando.org/wp-content/uploads/6-Vodka-Branding-Cashflow-Poster-Packaging-Design-Marx-BPO.jpg","external":false},
  {"id":"bx-6-8","group":"bx-6","title":"Six Six(A Friend of Mine)","sub":"글자 줄 사이 빈 자리에 얼굴이 들어간 포스터","when":"BX 6-8","note":"글자 사이 빈칸을 고객 것으로 채우는 구성","href":"https://bpando.org/2026/05/05/six-six-by-a-friend-of-mine/","img":"https://bpando.org/wp-content/uploads/A-Friend-of-Mine-Six-Six-identity-brand-design-bpo-review-poster.jpg","external":false},
  {"id":"bx-6-9","group":"bx-6","title":"P.A.C.(Polar)","sub":"마침표가 로고인 컵 더미","when":"BX 6-9","note":"문장부호가 곧 로고","href":"https://www.itsnicethat.com/articles/polar-pac-graphic-design-project-041126","img":"https://m.itsnicethat.com/original_images/pac-polar-graphic-design-project-itsnicethat-14.png?class=w1440","portrait":true,"external":false},
  {"id":"bx-6-10","group":"bx-6","title":"워크룸","sub":"박현정 'TAR' 포스터, 검정 굵은 글자","when":"BX 6-10","note":"흑백 굵은 타이포","href":"https://workroom.kr/","img":"https://workroom.kr/wp-content/uploads/2026/10/PHJ-2026-TAR-scaled.jpg","portrait":true,"external":false},
  {"id":"bx-6-11","group":"bx-6","title":"워크룸","sub":"'진노(震怒)' 포스터, 빨강 바탕에 흰 사각 획 글자","when":"BX 6-11","note":"주홍 + 사각 획(칸의 색·획과 가장 가까움)","href":"https://workroom.kr/","img":"https://workroom.kr/wp-content/uploads/2026/10/Jinno-FINAL-2-scaled.jpg","portrait":true,"external":false},

  /* ── bx-7 — 매장·팝업·주문 카운터·제작 과정 (12장 BX 보드) ── */
  {"id":"bx-7-1","group":"bx-7","title":"HOFF 마드리드 플래그십(수선·커스텀 '스니커 랩'을 둔 매장)","sub":"원목 벽과 스테인리스 카운터","when":"BX 7-1","note":"주문 카운터 재질·조명 참고","href":"https://www.designboom.com/architecture/el-departamento-pink-marble-clad-hoff-flagship-madrid-historic-boulevard-11-14-2025/","img":"https://www.designboom.com/wp-content/dbsub/453960/2025-11-13/el-departamento-designs-hoffs-new-velazquez-flagship-inspired-by-madrids-long-lost-champs-elysees-11-6915b009d18a7.jpg","external":false},
  {"id":"bx-7-2","group":"bx-7","title":"Nike House of Innovation NYC","sub":"라이트박스 벽과 긴 카운터","when":"BX 7-2","note":"주문 카운터 구성 참고","href":"https://www.wallpaper.com/lifestyle/nike-flagship-house-innovation-000-store-new-york-city","img":"https://cdn.mos.cms.futurecdn.net/Vo8JBTmX5pjf2nXuWgDuGf.jpg","external":false},
  {"id":"bx-7-3","group":"bx-7","title":"Nike House of Innovation","sub":"염료 병과 물들인 운동화","when":"BX 7-3","note":"제작 과정 접사('놓는 중')","href":"https://www.wallpaper.com/lifestyle/nike-flagship-house-innovation-000-store-new-york-city","img":"https://cdn.mos.cms.futurecdn.net/dn57NbFSk3bdi2h2zL8WEn.jpg","external":false},
  {"id":"bx-7-4","group":"bx-7","title":"Levi's 커스텀 부스","sub":"합판 카운터와 걸린 옷","when":"BX 7-4","note":"팝업 최소 구성(1인 운영 가능)","href":"https://hypebeast.com/2023/9/hypebeast-flea-levis-customization-space-recap-video","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F09%2Fhypebeast-flea-levis-customization-space-recap-video-06.jpg?w=1440&cbr=1&q=90&fit=max","external":false},
  {"id":"bx-7-5","group":"bx-7","title":"Levi's 부스","sub":"직원과 손님이 옷을 놓고 상의","when":"BX 7-5","note":"'새길 말을 정하는' 상담 장면","href":"https://hypebeast.com/2023/9/hypebeast-flea-levis-customization-space-recap-video","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F09%2Fhypebeast-flea-levis-customization-space-recap-video-04.jpg?w=1440&cbr=1&q=90&fit=max","portrait":true,"external":false},
  {"id":"bx-7-6","group":"bx-7","title":"Levi's 부스","sub":"실크스크린 찍는 손","when":"BX 7-6","note":"'놓는 중' 과정 컷","href":"https://hypebeast.com/2023/9/hypebeast-flea-levis-customization-space-recap-video","img":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F09%2Fhypebeast-flea-levis-customization-space-recap-video-03.jpg?w=1440&cbr=1&q=90&fit=max","portrait":true,"external":false},
  {"id":"bx-7-7","group":"bx-7","title":"Gentle Monster 하우스 도산","sub":"파랑 바닥, 긴 진열대, 노란 구","when":"BX 7-7","note":"기준 공간(젠틀몬스터)","href":"https://www.designboom.com/design/gentle-monster-haus-dosan-seoul-02-26-2021/","img":"https://www.designboom.com/wp-content/uploads/2021/02/gentle-monster-haus-dosan-designboom-004.jpg","external":false},
  {"id":"bx-7-8","group":"bx-7","title":"하우스 노웨어 서울","sub":"거대한 닥스훈트","when":"BX 7-8","note":"'익숙한 것을 낯선 크기로' 원리","href":"https://www.designboom.com/architecture/gentle-monster-haus-nowhere-seoul-giant-breathing-dachshund-installation-09-10-2025/","img":"https://www.designboom.com/wp-content/uploads/2025/09/gentle-monster-haus-nowhere-seoul-giant-breathing-dachshund-designboom-03.jpg","portrait":true,"external":false},

  /* ── bx-8 — 한글 워드마크·한글 타이포 적용 (12장 BX 보드) ── */
  {"id":"bx-8-1","group":"bx-8","title":"한지(스튜디오 fnt)","sub":"한글·한자 도장 실물 더미","when":"BX 8-1","note":"낙관 같은 표식(기준 5) 실물","href":"https://bpando.org/2020/09/08/hanji-by-studio-fnt/","img":"https://bpando.org/wp-content/uploads/3-Hanji-Korean-Papers-Brand-Identity-Stamps-Studio-fnt-BPO.jpg","external":false},
  {"id":"bx-8-2","group":"bx-8","title":"한지","sub":"종이 위 금박 '한지' 도장","when":"BX 8-2","note":"한글 표식 박 가공","href":"https://bpando.org/2020/09/08/hanji-by-studio-fnt/","img":"https://bpando.org/wp-content/uploads/6-Hanji-Korean-Papers-Brand-Identity-Print-Guide-Book-Studio-fnt-BPO.jpg","external":false},
  {"id":"bx-8-3","group":"bx-8","title":"한지","sub":"콘크리트 벽 '한지 자료 저장소' 사인","when":"BX 8-3","note":"한글 사인 적용","href":"https://bpando.org/2020/09/08/hanji-by-studio-fnt/","img":"https://bpando.org/wp-content/uploads/16-Hanji-Korean-Papers-Brand-Identity-Signage-Wayfinding-Studio-fnt-BPO.jpg","external":false},
  {"id":"bx-8-4","group":"bx-8","title":"한지","sub":"'청송전통한지' 책등 세트","when":"BX 8-4","note":"한글 제목이 상자·책에 앉은 모습","href":"https://bpando.org/2020/09/08/hanji-by-studio-fnt/","img":"https://bpando.org/wp-content/uploads/5-Hanji-Korean-Papers-Brand-Identity-Sample-Book-Studio-fnt-BPO.jpg","external":false},
  {"id":"bx-8-5","group":"bx-8","title":"북서울미술관 2018(스튜디오 fnt)","sub":"한글 자소를 면으로 쓴 포스터","when":"BX 8-5","note":"한글을 구조로 쓰는 예","href":"https://bpando.org/2018/07/03/buk-seoul-museum-2018/","img":"https://bpando.org/wp-content/uploads/1-Buk-Seoul-Museum-of-Art-2018-Season-Guide-Print-Identity-Studio-fnt-South-Korea-BPO.jpg","external":false},
  {"id":"bx-8-6","group":"bx-8","title":"나이키 에어포스 1 한글날","sub":"'나이키' 한글 미니 택","when":"BX 8-6","note":"한글 워드마크가 작은 택으로 달린 실물","href":"https://hypebeast.kr/2023/9/the-nike-air-force-1-low-hangul-day-details-info","img":"https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2023%2F09%2Fthe-nike-air-force-1-low-hangul-day-details-info-06.jpg?w=1440&cbr=1&q=90&fit=max","external":false},
  {"id":"bx-8-7","group":"bx-8","title":"한글 문장 티셔츠","sub":"옥상에서 펼쳐 든 컷","when":"BX 8-7","note":"한글이 읽히는 옷(인증 사진의 모습)","href":"https://hypebeast.kr/2024/3/tshirt-makers-of-seoul-taehoseoul-waaaavyyy-seoul-cult-rushhourtimes-molrich","img":"https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2024%2F03%2Fthe-tshirt-makers-of-seoul-taehoseoul-waaaavyyy-seoul-cult-rushhourtimes-molrich25.jpg?w=1440&cbr=1&q=90&fit=max","external":false},
  {"id":"bx-8-8","group":"bx-8","title":"일상의실천","sub":"『우리의 노래가』 표지, 큰 한글 제목","when":"BX 8-8","note":"굵은 한글 제목 타이포","href":"https://everyday-practice.com/%e3%80%8aour-song%e3%80%8b-cover-design-humanitas/","img":"https://everyday-practice.com/wp-content/uploads/2026/10/우리의-노래가_instagram_10801440px_-1-scaled.jpg","portrait":true,"external":false},
  {"id":"bx-8-9","group":"bx-8","title":"워크룸","sub":"'프라우드 메리' 포스터, 한글 레터링","when":"BX 8-9","note":"한글 레터링(색은 참고 안 함)","href":"https://workroom.kr/","img":"https://workroom.kr/wp-content/uploads/2026/10/ProudMaryPosterk96-scaled.jpg","portrait":true,"external":false},
  {"id":"bx-8-10","group":"bx-8","title":"워크룸","sub":"『출판문화』 표지, 한글 제호","when":"BX 8-10","note":"한글 제호 구성","href":"https://workroom.kr/","img":"https://workroom.kr/wp-content/uploads/2026/10/PRCL727-COVER3.jpg","portrait":true,"external":false}
];

/* 묶음 이름과 쓰이는 곳 */
window.KKU_REF_GROUPS = {
  "fan": {
    "title": "보통 사람들끼리의 인증 문화",
    "where": "3장"
  },
  "case": {
    "title": "유명인이 걸친 사례",
    "where": "3장"
  },
  "frame": {
    "title": "틀이 브랜드가 된 회사",
    "where": "4장"
  },
  "item-sweat": {
    "title": "자수 의류 — 실제 상품",
    "where": "6장"
  },
  "item-key": {
    "title": "각인 키링 — 실제 상품",
    "where": "6장"
  },
  "item-plush": {
    "title": "인형 키링 — 실제 상품",
    "where": "6장"
  },
  "item-leather": {
    "title": "가죽 소품 — 실제 상품",
    "where": "6장"
  },
  "bx-1": {
    "title": "자수·직조 라벨, 택, 케어라벨",
    "where": "12장 BX 보드",
    "board": true,
    "no": 1
  },
  "bx-2": {
    "title": "포장 상자, 쇼핑백, 박스 테이프, 스티커 봉인",
    "where": "12장 BX 보드",
    "board": true,
    "no": 2
  },
  "bx-3": {
    "title": "자수·각인 접사",
    "where": "12장 BX 보드",
    "board": true,
    "no": 3
  },
  "bx-4": {
    "title": "키링·참·작은 오브제",
    "where": "12장 BX 보드",
    "board": true,
    "no": 4
  },
  "bx-5": {
    "title": "봉제인형·캐릭터 오브제",
    "where": "12장 BX 보드",
    "board": true,
    "no": 5
  },
  "bx-6": {
    "title": "포스터·캠페인 그래픽",
    "where": "12장 BX 보드",
    "board": true,
    "no": 6
  },
  "bx-7": {
    "title": "매장·팝업·주문 카운터·제작 과정",
    "where": "12장 BX 보드",
    "board": true,
    "no": 7
  },
  "bx-8": {
    "title": "한글 워드마크·한글 타이포 적용",
    "where": "12장 BX 보드",
    "board": true,
    "no": 8
  }
};

/* 골라 쓰는 목록: 6장 가장 좋은 10장(이유 포함), 품목별 만듦새 참고 */
window.KKU_REF_PICKS = {
  "top10": [
    {
      "id": "bx-6-1",
      "why": "괄호 안을 비운 로고의 선례. 'My [ ]'가 낯설지 않다는 근거"
    },
    {
      "id": "bx-3-1",
      "why": "이니셜 자수가 그대로 패션 캠페인이 된다"
    },
    {
      "id": "bx-5-1",
      "why": "어른스러운 봉제인형. 색 하나 규칙까지 같다"
    },
    {
      "id": "bx-1-2",
      "why": "주문 번호가 적힌 제작 태그 = 제작 카드의 실물"
    },
    {
      "id": "bx-2-1",
      "why": "워드마크 테이프 하나로 택배 상자가 브랜드가 된다"
    },
    {
      "id": "bx-4-4",
      "why": "이름 둘을 나눠 새기는 짝 상품"
    },
    {
      "id": "bx-8-6",
      "why": "한글 워드마크가 작은 택으로 달린 실물"
    },
    {
      "id": "bx-8-1",
      "why": "낙관 같은 표식을 실제 도장으로"
    },
    {
      "id": "bx-6-11",
      "why": "주홍 + 사각 획. '칸'의 색·획과 가장 가깝다"
    },
    {
      "id": "bx-7-5",
      "why": "'새길 말을 정하는' 상담 장면"
    }
  ],
  "item": {
    "sweat": [
      "bx-3-1",
      "bx-3-2",
      "bx-3-3",
      "bx-3-4",
      "bx-3-5",
      "bx-3-9",
      "bx-1-2",
      "bx-1-3",
      "bx-1-6",
      "bx-1-7",
      "bx-8-7"
    ],
    "key": [
      "bx-4-1",
      "bx-4-4",
      "bx-4-5",
      "bx-4-6",
      "bx-4-7",
      "bx-4-8",
      "bx-3-8",
      "bx-2-10"
    ],
    "plush": [
      "bx-5-1",
      "bx-5-2",
      "bx-5-3",
      "bx-5-4",
      "bx-5-5",
      "bx-5-6"
    ],
    "leather": [
      "bx-3-7",
      "bx-4-2",
      "bx-4-3",
      "bx-3-6",
      "bx-3-10"
    ]
  }
};

/* ── bx-9 — Behance BX: 136장(16개 프로젝트) 가운데 라벨·택·포장·적용 목업이 또렷한 20장만 골랐다 (12장 BX 보드, 5·6·7장)
      뺀 것: 글만 있는 장표, 색상표, 로고 격자 도해, 앱 화면, 긴 세로 장표 가운데 목업이 안 보이는 것.
      원본 목록: design/behance/behance-refs.json ── */
window.KKU_REF_GROUPS['bx-9'] = { title: 'Behance BX — 라벨·택·포장·적용 목업', where: '12장 BX 보드', board: true, no: 9 };
window.KKU_REFS.push(
  {"id": "be-257882649-7", "group": "bx-9", "title": "Vellum", "sub": "검정 니트 안쪽의 흰 직조 라벨 접사", "when": "Behance", "href": "https://www.behance.net/gallery/257882649", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/cf6ce5257882649.6ae6d9fac1f37.png", "pos": "84% center", "external": false},
  {"id": "be-257882649-8", "group": "bx-9", "title": "Vellum", "sub": "검정 문구 세트와 명함. 무채색만으로 낸 급", "when": "Behance", "href": "https://www.behance.net/gallery/257882649", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/fbf1f8257882649.6ae6d9fac5262.png", "external": false},
  {"id": "be-257882649-9", "group": "bx-9", "title": "Vellum", "sub": "옥외 광고판. 흑백 인물 위 작은 워드마크", "when": "Behance", "href": "https://www.behance.net/gallery/257882649", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/978811257882649.6ae6d9fac368d.png", "external": false},
  {"id": "be-257878989-2", "group": "bx-9", "title": "Maison d'Ondine (Cashmere)", "sub": "그림 한 장을 두른 쇼핑백", "when": "Behance", "href": "https://www.behance.net/gallery/257878989", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/068ab6257878989.6ae687f62a5ce.png", "portrait": true, "external": false},
  {"id": "be-257878989-4", "group": "bx-9", "title": "Maison d'Ondine (Cashmere)", "sub": "잉크 없이 눌러 찍은 형압", "when": "Behance", "href": "https://www.behance.net/gallery/257878989", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/448b84257878989.6ae687f62c2ef.png", "portrait": true, "external": false},
  {"id": "be-257878989-5", "group": "bx-9", "title": "Maison d'Ondine (Cashmere)", "sub": "박엽지에 싼 니트와 작은 라벨", "when": "Behance", "href": "https://www.behance.net/gallery/257878989", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d4cea2257878989.6ae687f62c9bf.png", "portrait": true, "external": false},
  {"id": "be-257878989-8", "group": "bx-9", "title": "Maison d'Ondine (Cashmere)", "sub": "개어 놓은 니트에 달린 행택", "when": "Behance", "href": "https://www.behance.net/gallery/257878989", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/14979d257878989.6ae687f62bc39.png", "portrait": true, "external": false},
  {"id": "be-257878989-6", "group": "bx-9", "title": "Maison d'Ondine (Cashmere)", "sub": "금속 명함 케이스에 눌러 새긴 표식", "when": "Behance", "href": "https://www.behance.net/gallery/257878989", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/cc7f90257878989.6ae687f62ad13.png", "portrait": true, "external": false},
  {"id": "be-182909711-8", "group": "bx-9", "title": "LE CASHMERE", "sub": "손에 든 쇼핑백. 색 하나, 워드마크 하나", "when": "Behance", "href": "https://www.behance.net/gallery/182909711", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/77b7de182909711.689d921781187.jpg", "portrait": true, "external": false},
  {"id": "be-182909711-9", "group": "bx-9", "title": "LE CASHMERE", "sub": "나란히 건 행택 넉 장", "when": "Behance", "href": "https://www.behance.net/gallery/182909711", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/975598182909711.68b165d0eb9ec.jpg", "external": false},
  {"id": "be-182909711-1", "group": "bx-9", "title": "LE CASHMERE", "sub": "거리의 옥외 적용", "when": "Behance", "href": "https://www.behance.net/gallery/182909711", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d3eede182909711.68a3e9987234c.jpg", "external": false},
  {"id": "be-257989869-6", "group": "bx-9", "title": "PAWE — Canine Couture", "sub": "반려견 옆에 놓인 선물 포장", "when": "Behance", "href": "https://www.behance.net/gallery/257989869", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/dcb483257989869.6ae9f5ece5248.jpg", "external": false},
  {"id": "be-257989869-7", "group": "bx-9", "title": "PAWE — Canine Couture", "sub": "제품 이름과 소재를 적은 행택 두 장", "when": "Behance", "href": "https://www.behance.net/gallery/257989869", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a7b5bd257989869.6ae9f5ece4af9.jpg", "portrait": true, "pos": "top", "external": false},
  {"id": "be-243372239-7", "group": "bx-9", "title": "MUUT", "sub": "쇼핑백. 흰 바탕에 색 하나", "when": "Behance", "href": "https://www.behance.net/gallery/243372239", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d20ca2243372239.698098432c90f.png", "portrait": true, "pos": "top", "external": false},
  {"id": "be-243372239-5", "group": "bx-9", "title": "MUUT", "sub": "명함과 옥외 포스터 적용", "when": "Behance", "href": "https://www.behance.net/gallery/243372239", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c5a431243372239.698098432b03a.png", "portrait": true, "pos": "top", "external": false},
  {"id": "be-196766859-7", "group": "bx-9", "title": "DEEPSCENT", "sub": "명함과 라벨 적용", "when": "Behance", "href": "https://www.behance.net/gallery/196766859", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/265921196766859.6625cc3973fc1.png", "portrait": true, "pos": "top", "external": false},
  {"id": "be-146729475-5", "group": "bx-9", "title": "오로시", "sub": "세로쓰기 한글 표지", "when": "Behance", "href": "https://www.behance.net/gallery/146729475", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/559dd9146729475.62b56ffa022b9.jpg", "pos": "right", "external": false},
  {"id": "be-245107289-6", "group": "bx-9", "title": "BYSEC", "sub": "검정 티셔츠 가슴의 작은 표식", "when": "Behance", "href": "https://www.behance.net/gallery/245107289", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/35521d245107289.6a474844ab71d.png", "portrait": true, "external": false},
  {"id": "be-252462537-4", "group": "bx-9", "title": "morphee", "sub": "제품에 눌러 새긴 워드마크 접사", "when": "Behance", "href": "https://www.behance.net/gallery/252462537", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/93c0c9252462537.6a4ffc4dd5639.png", "external": false},
  {"id": "be-247308751-6", "group": "bx-9", "title": "tomt*", "sub": "키링·간판·아이콘 적용 모음", "when": "Behance", "href": "https://www.behance.net/gallery/247308751", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/86d3d5247308751.69e0b767e06a2.png", "portrait": true, "pos": "top", "external": false}
);
/* 품목별 만듦새 참고에 Behance 장면 더하기 */
window.KKU_REF_PICKS.item.sweat.push('be-257878989-5', 'be-257878989-8', 'be-245107289-6');
window.KKU_REF_PICKS.item.key.push('be-252462537-4');
window.KKU_REF_PICKS.item.plush.push('be-257989869-6', 'be-257989869-7');
window.KKU_REF_PICKS.item.leather.push('be-257878989-6');

/* 큰 사진 화면(본문 data-plates)에 쓰는 자료는 위 목록의 id 를 그대로 부른다.
   세르게이가 Behance 상품 목업을 더 모으면(design/behance/behance-products.json) 이 아래에 같은 꼴로 이어 붙인다. */

/* 6장 품목별 큰 사진 세 장(품목 화면 맨 앞). id 와 사진 위에 얹을 짧은 말.
   Behance 상품 목업이 더 모이면 여기 id 만 바꿔 끼우면 된다. */
window.KKU_REF_PICKS.plate = {
  sweat:   [{ id: 'bx-3-5', label: '흰 실 자수' }, { id: 'be-257878989-5', label: '박엽지 포장' }, { id: 'be-245107289-6', label: '가슴의 작은 표식' }],
  key:     [{ id: 'bx-4-7', label: '달고 다니는 것' }, { id: 'bx-4-5', label: '금속' }, { id: 'bx-4-8', label: '새긴 글자' }],
  plush:   [{ id: 'bx-5-1', label: '바디' }, { id: 'bx-5-2', label: '몸통의 라벨' }, { id: 'bx-5-4', label: '일련번호 택' }],
  leather: [{ id: 'leather-03', label: '이니셜' }, { id: 'bx-3-7', label: '눌러 찍은 표식' }, { id: 'be-257878989-6', label: '케이스' }]
};

/* ── bx-10 ~ bx-13 — Behance 상품 목업: 416장(35개 프로젝트) 가운데 실물 목업이 또렷한 것만 골랐다
      뺀 것: 글만 있는 장표, 로고·색상표·격자 도해, 앱·웹 화면, 쇼윈도 일러스트, 화장품·향수 병,
             요란한 캐릭터 스티커·AI 느낌의 인형 그림, 남의 명품 로고를 얹은 택 시안, 같은 장면의 반복 컷.
      mono:true = 색이 요란해 흑백으로 보여 주는 사진(원본은 컬러).
      원본 목록: design/behance/behance-products.json ── */
window.KKU_REF_GROUPS['bx-10'] = { title: "Behance 상품 목업 — 의류·자수·프린트", where: '12장 BX 보드', board: true, no: 10 };
window.KKU_REF_GROUPS['bx-11'] = { title: "Behance 상품 목업 — 행택·직조 라벨", where: '12장 BX 보드', board: true, no: 11 };
window.KKU_REF_GROUPS['bx-12'] = { title: "Behance 상품 목업 — 상자·쇼핑백·포장", where: '12장 BX 보드', board: true, no: 12 };
window.KKU_REF_GROUPS['bx-13'] = { title: "Behance 상품 목업 — 에코백·참·가죽", where: '12장 BX 보드', board: true, no: 13 };
window.KKU_REFS.push(
  {"id": "bp-242997523-1", "group": "bx-10", "title": "Trato Studio", "sub": "주황 플리스 등판의 자수 워드마크", "when": "Behance", "href": "https://www.behance.net/gallery/242997523", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4d75d9242997523.69c0952d6ba7b.png", "pos": "40% center", "external": false},
  {"id": "bp-257353475-6", "group": "bx-10", "title": "Forgewear", "sub": "남색 원단 위 자수 워드마크 접사", "when": "Behance", "href": "https://www.behance.net/gallery/257353475", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d60dee257353475.6ad7487fe6363.jpg", "external": false},
  {"id": "bp-257353475-18", "group": "bx-10", "title": "Forgewear", "sub": "개어 놓은 티셔츠와 행택", "when": "Behance", "href": "https://www.behance.net/gallery/257353475", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/68ea30257353475.6ad7487fe7692.jpg", "external": false},
  {"id": "bp-257353475-13", "group": "bx-10", "title": "Forgewear", "sub": "투톤 후디 목업", "when": "Behance", "href": "https://www.behance.net/gallery/257353475", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/39243c257353475.6ad7487fea2fd.jpg", "external": false},
  {"id": "bp-257353475-9", "group": "bx-10", "title": "Forgewear", "sub": "목 안쪽 직조 라벨", "when": "Behance", "href": "https://www.behance.net/gallery/257353475", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a6cc1c257353475.6ad7487fe6792.jpg", "mono": true, "external": false},
  {"id": "bp-220344165-5", "group": "bx-10", "title": "ARMOROFGOD", "sub": "검정 긴팔 등판 프린트", "when": "Behance", "href": "https://www.behance.net/gallery/220344165", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/ffe3d7220344165.67c10e9ab7497.png", "external": false},
  {"id": "bp-220344165-17", "group": "bx-10", "title": "ARMOROFGOD", "sub": "회색 티셔츠 가슴의 작은 표식", "when": "Behance", "href": "https://www.behance.net/gallery/220344165", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/2b5c69220344165.691ddfec0d609.jpg", "portrait": true, "external": false},
  {"id": "bp-220344165-16", "group": "bx-10", "title": "ARMOROFGOD", "sub": "모자 자수", "when": "Behance", "href": "https://www.behance.net/gallery/220344165", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/23ff98220344165.67c10e9ab5e00.png", "external": false},
  {"id": "bp-257882649-10", "group": "bx-10", "title": "Vellum", "sub": "검정 후디 가슴의 작은 워드마크", "when": "Behance", "href": "https://www.behance.net/gallery/257882649", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4cc9c7257882649.6ae6d9fac0383.png", "pos": "left", "external": false},
  {"id": "bp-254006335-4", "group": "bx-10", "title": "Rvali", "sub": "검정 후디와 더플백의 자수", "when": "Behance", "href": "https://www.behance.net/gallery/254006335", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/b1318a254006335.6a7900c13d106.jpg", "external": false},
  {"id": "bp-257585357-2", "group": "bx-10", "title": "youni", "sub": "플리스 등판 자수", "when": "Behance", "href": "https://www.behance.net/gallery/257585357", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/846c8b257585357.6ade226f0db2c.jpg", "mono": true, "pos": "right", "external": false},
  {"id": "bp-257585357-16", "group": "bx-10", "title": "youni", "sub": "플리스 등판 자수, 앉은 뒷모습", "when": "Behance", "href": "https://www.behance.net/gallery/257585357", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4944ea257585357.6ade226f0b567.jpg", "mono": true, "external": false},
  {"id": "bp-257585357-18", "group": "bx-10", "title": "youni", "sub": "모자 자수", "when": "Behance", "href": "https://www.behance.net/gallery/257585357", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d342e7257585357.6ade226f10070.jpg", "mono": true, "external": false},
  {"id": "bp-257589569-13", "group": "bx-10", "title": "Yappi", "sub": "옷걸이에 건 프린트 티셔츠", "when": "Behance", "href": "https://www.behance.net/gallery/257589569", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/539f1c257589569.6ade4086e741c.png", "portrait": true, "external": false},
  {"id": "bp-257882649-12", "group": "bx-11", "title": "Vellum", "sub": "옷에 단 긴 행택", "when": "Behance", "href": "https://www.behance.net/gallery/257882649", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d3e235257882649.6ae6d9fac2e1b.png", "external": false},
  {"id": "bp-257882649-14", "group": "bx-11", "title": "Vellum", "sub": "접은 셔츠 위 라벨과 택", "when": "Behance", "href": "https://www.behance.net/gallery/257882649", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/fd0eb5257882649.6ae6d9fac1196.png", "pos": "right", "external": false},
  {"id": "bp-220344165-8", "group": "bx-11", "title": "ARMOROFGOD", "sub": "목 안쪽 직조 라벨 접사", "when": "Behance", "href": "https://www.behance.net/gallery/220344165", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/05f7ed220344165.67c10e9ab7932.png", "external": false},
  {"id": "bp-258290711-3", "group": "bx-11", "title": "VS", "sub": "목 안쪽 프린트와 행택, 주황 한 줄", "when": "Behance", "href": "https://www.behance.net/gallery/258290711", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/e53e40258290711.6af302f69a107.jpg", "pos": "left", "external": false},
  {"id": "bp-258461701-4", "group": "bx-11", "title": "Falco", "sub": "흑백 행택 한 쌍", "when": "Behance", "href": "https://www.behance.net/gallery/258461701", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/710ad4258461701.6af74b2ef0e69.png", "external": false},
  {"id": "bp-258461701-5", "group": "bx-11", "title": "Falco", "sub": "검정 행택 한 장", "when": "Behance", "href": "https://www.behance.net/gallery/258461701", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/e14ce5258461701.6af74b2eefa6f.png", "external": false},
  {"id": "bp-241301201-4", "group": "bx-11", "title": "Atmosphere", "sub": "돌 위에 놓인 검정 행택", "when": "Behance", "href": "https://www.behance.net/gallery/241301201", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/0e295d241301201.6953ebcf2726b.png", "external": false},
  {"id": "bp-31351515-11", "group": "bx-11", "title": "Florence Alexander", "sub": "니트 위 행택", "when": "Behance", "href": "https://www.behance.net/gallery/31351515", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5dc87e31351515.565350621fedb.jpg", "pos": "right", "external": false},
  {"id": "bp-165970753-1", "group": "bx-11", "title": "Apparel Label Tag 목업", "sub": "흰 셔츠 위, 손에 든 행택", "when": "Behance", "href": "https://www.behance.net/gallery/165970753", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d18a8a165970753.64108cd95cdd9.jpg", "external": false},
  {"id": "bp-18756417-1", "group": "bx-11", "title": "Swanndri", "sub": "체크 원단 위 직조 라벨 접사", "when": "Behance", "href": "https://www.behance.net/gallery/18756417", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/88c8dd18756417.562cec6099e44.JPG", "mono": true, "external": false},
  {"id": "bp-18756417-3", "group": "bx-11", "title": "Swanndri", "sub": "크라프트 행택", "when": "Behance", "href": "https://www.behance.net/gallery/18756417", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/27858918756417.562cec60ac938.JPG", "mono": true, "external": false},
  {"id": "bp-184067913-2", "group": "bx-11", "title": "DO SO Clothing", "sub": "크라프트 행택 두 장", "when": "Behance", "href": "https://www.behance.net/gallery/184067913", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/25f210184067913.6af9eaaf38a53.png", "external": false},
  {"id": "bp-184067913-3", "group": "bx-11", "title": "DO SO Clothing", "sub": "목 라벨과 사이즈 라벨", "when": "Behance", "href": "https://www.behance.net/gallery/184067913", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/71891e184067913.6af9eaaf39430.png", "external": false},
  {"id": "bp-252499953-13", "group": "bx-11", "title": "MARROW", "sub": "행택 석 장", "when": "Behance", "href": "https://www.behance.net/gallery/252499953", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/b1af7e252499953.6a50dc33d3c95.jpg", "external": false},
  {"id": "bp-255265639-11", "group": "bx-11", "title": "vimi", "sub": "카드형 택", "when": "Behance", "href": "https://www.behance.net/gallery/255265639", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4cd972255265639.6ab4b67c0ede7.jpg", "portrait": true, "external": false},
  {"id": "bp-257270577-4", "group": "bx-11", "title": "LÄTT", "sub": "옷에 단 행택과 라벨", "when": "Behance", "href": "https://www.behance.net/gallery/257270577", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4762f0257270577.6ad4d6a6332f2.jpg", "mono": true, "external": false},
  {"id": "bp-258139047-9", "group": "bx-11", "title": "Vesper", "sub": "직조 라벨 접사", "when": "Behance", "href": "https://www.behance.net/gallery/258139047", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/8a9809258139047.6aede5c9768fd.jpg", "mono": true, "external": false},
  {"id": "bp-36434135-2", "group": "bx-11", "title": "Alchemy Equipment", "sub": "검정 택과 카드", "when": "Behance", "href": "https://www.behance.net/gallery/36434135", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/72700b36434135.5afc0fbb26ea9.jpg", "external": false},
  {"id": "bp-257882649-15", "group": "bx-12", "title": "Vellum", "sub": "흑백 쇼핑백", "when": "Behance", "href": "https://www.behance.net/gallery/257882649", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/257e02257882649.6ae6d9fac0a5b.png", "external": false},
  {"id": "bp-257882649-11", "group": "bx-12", "title": "Vellum", "sub": "흑백 상자", "when": "Behance", "href": "https://www.behance.net/gallery/257882649", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/0cf912257882649.6ae6d9fac61a7.png", "pos": "left", "external": false},
  {"id": "bp-258006511-10", "group": "bx-12", "title": "SKELTCH", "sub": "주황 상자 묶음", "when": "Behance", "href": "https://www.behance.net/gallery/258006511", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/391d83258006511.6aea553e1c56d.png", "external": false},
  {"id": "bp-258006511-4", "group": "bx-12", "title": "SKELTCH", "sub": "띠지를 두른 상자", "when": "Behance", "href": "https://www.behance.net/gallery/258006511", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/1a0f94258006511.6aea531a816e7.png", "portrait": true, "external": false},
  {"id": "bp-258006511-13", "group": "bx-12", "title": "SKELTCH", "sub": "낱개 포장", "when": "Behance", "href": "https://www.behance.net/gallery/258006511", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/b85214258006511.6aea531a81152.png", "external": false},
  {"id": "bp-247245675-9", "group": "bx-12", "title": "Calima", "sub": "쇼핑백과 상자", "when": "Behance", "href": "https://www.behance.net/gallery/247245675", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/de8b68247245675.69d67fcfee258.png", "portrait": true, "external": false},
  {"id": "bp-31351515-1", "group": "bx-12", "title": "Florence Alexander", "sub": "쇼핑백과 박엽지", "when": "Behance", "href": "https://www.behance.net/gallery/31351515", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d182ca31351515.5653506216994.jpg", "external": false},
  {"id": "bp-258082169-15", "group": "bx-12", "title": "Awl", "sub": "상자 속 가죽과 택", "when": "Behance", "href": "https://www.behance.net/gallery/258082169", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d25c3d258082169.6aec5fa44f5c0.png", "pos": "78% center", "external": false},
  {"id": "bp-258139047-18", "group": "bx-12", "title": "Vesper", "sub": "형압 검정 상자", "when": "Behance", "href": "https://www.behance.net/gallery/258139047", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/3e2a6f258139047.6aede5c97a0d1.jpg", "external": false},
  {"id": "bp-257778367-18", "group": "bx-12", "title": "KOME", "sub": "파우치와 도장 찍은 포장지", "when": "Behance", "href": "https://www.behance.net/gallery/257778367", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a93fd7257778367.6ae343e0ea5cf.jpg", "external": false},
  {"id": "bp-257392659-13", "group": "bx-12", "title": "回力 100주년", "sub": "쇼핑백과 상자 세트", "when": "Behance", "href": "https://www.behance.net/gallery/257392659", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d9c56e257392659.6ad85f8b75ef5.jpg", "portrait": true, "external": false},
  {"id": "bp-257392659-15", "group": "bx-12", "title": "回力 100주년", "sub": "신발 상자", "when": "Behance", "href": "https://www.behance.net/gallery/257392659", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/6a88f7257392659.6ad861dfccd2a.jpg", "portrait": true, "external": false},
  {"id": "bp-252499953-14", "group": "bx-12", "title": "MARROW", "sub": "손잡이 달린 상자", "when": "Behance", "href": "https://www.behance.net/gallery/252499953", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c22cb0252499953.6a50dc33d497f.jpg", "external": false},
  {"id": "bp-257270577-5", "group": "bx-12", "title": "LÄTT", "sub": "쇼핑백과 라벨", "when": "Behance", "href": "https://www.behance.net/gallery/257270577", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9d6b3b257270577.6ad4d6a6313e6.jpg", "mono": true, "external": false},
  {"id": "bp-255265639-12", "group": "bx-12", "title": "vimi", "sub": "명함 묶음", "when": "Behance", "href": "https://www.behance.net/gallery/255265639", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/65036f255265639.6ab4b67c0f19a.jpg", "portrait": true, "external": false},
  {"id": "bp-220344165-2", "group": "bx-13", "title": "ARMOROFGOD", "sub": "검정 에코백", "when": "Behance", "href": "https://www.behance.net/gallery/220344165", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/002346220344165.67c10e9ab3b84.png", "external": false},
  {"id": "bp-242997523-12", "group": "bx-13", "title": "Trato Studio", "sub": "어깨에 멘 에코백", "when": "Behance", "href": "https://www.behance.net/gallery/242997523", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d700d6242997523.6a711c3512a76.png", "portrait": true, "external": false},
  {"id": "bp-257585357-13", "group": "bx-13", "title": "youni", "sub": "에코백", "when": "Behance", "href": "https://www.behance.net/gallery/257585357", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/085b61257585357.6ade226f0f45e.jpg", "mono": true, "pos": "left", "external": false},
  {"id": "bp-257574547-1", "group": "bx-13", "title": "오늘도싱싱", "sub": "에코백 자수", "when": "Behance", "href": "https://www.behance.net/gallery/257574547", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/72357c257574547.6addd0e40fe3d.png", "pos": "right", "external": false},
  {"id": "bp-256955113-5", "group": "bx-13", "title": "Exchange Life", "sub": "손바닥 위 참 키링", "when": "Behance", "href": "https://www.behance.net/gallery/256955113", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/eb7735256955113.6acba8e0648db.png", "portrait": true, "external": false},
  {"id": "bp-256955113-7", "group": "bx-13", "title": "Exchange Life", "sub": "참을 꿴 목걸이", "when": "Behance", "href": "https://www.behance.net/gallery/256955113", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/e0f4ad256955113.6acba8e0f202c.png", "portrait": true, "external": false},
  {"id": "bp-256955113-3", "group": "bx-13", "title": "Exchange Life", "sub": "가죽 고리에 단 참", "when": "Behance", "href": "https://www.behance.net/gallery/256955113", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c35db2256955113.6acba8df9779c.png", "portrait": true, "external": false},
  {"id": "bp-258082169-14", "group": "bx-13", "title": "Awl", "sub": "가죽에 눌러 찍은 워드마크", "when": "Behance", "href": "https://www.behance.net/gallery/258082169", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/021f9f258082169.6aec5fa44c43c.png", "external": false},
  {"id": "bp-258082169-17", "group": "bx-13", "title": "Awl", "sub": "형압 가죽 카드", "when": "Behance", "href": "https://www.behance.net/gallery/258082169", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a763ee258082169.6aec5fa44f9b5.png", "portrait": true, "external": false},
  {"id": "bp-242997523-17", "group": "bx-13", "title": "Trato Studio", "sub": "여행 가방에 단 주황 택", "when": "Behance", "href": "https://www.behance.net/gallery/242997523", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/ef8f11242997523.69c0952d6c3ca.png", "external": false}
);

/* 품목별 만듦새 참고에 Behance 상품 목업 더하기(앞쪽에 놓는다) */
window.KKU_REF_PICKS.item.sweat = ['bp-242997523-1', 'bp-257353475-6', 'bp-257353475-18', 'bp-220344165-5', 'bp-257882649-10', 'bp-220344165-17', 'bp-220344165-16', 'bp-257585357-2', 'bp-257585357-16', 'bp-257589569-13', 'bp-257882649-12', 'bp-258290711-3'].concat(window.KKU_REF_PICKS.item.sweat);
window.KKU_REF_PICKS.item.key = ['bp-256955113-5', 'bp-256955113-7', 'bp-256955113-3'].concat(window.KKU_REF_PICKS.item.key);
window.KKU_REF_PICKS.item.leather = ['bp-258082169-14', 'bp-258082169-15', 'bp-258082169-17'].concat(window.KKU_REF_PICKS.item.leather);
/* 품목 첫 화면의 큰 사진 세 장 */
window.KKU_REF_PICKS.plate.sweat = [{ id: 'bp-242997523-1', label: '등판 자수' }, { id: 'bp-257353475-6', label: '자수 접사' }, { id: 'bp-257353475-18', label: '택을 단 옷' }];
window.KKU_REF_PICKS.plate.leather = [{ id: 'leather-03', label: '이니셜' }, { id: 'bp-258082169-14', label: '눌러 찍은 표식' }, { id: 'bp-258082169-15', label: '상자' }];
/* 6장 '한눈에 보는 벽' 12장. color 에 든 것만 색을 살리고 나머지는 흑백 */
window.KKU_REF_PICKS.wall = { ids: ['bp-242997523-1', 'bp-257882649-12', 'bp-258290711-3', 'bp-220344165-2', 'bp-258006511-10', 'bp-257353475-18', 'bp-220344165-8', 'bp-247245675-9', 'bp-220344165-5', 'bp-258461701-4', 'bp-257882649-15', 'bp-258082169-15'], color: ['bp-242997523-1', 'bp-258006511-10', 'bp-258290711-3'] };
