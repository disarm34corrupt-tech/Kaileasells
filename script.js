/* KAILEASELL: shop -> product -> bag -> fake checkout -> receipt -> post on X */

const IMAGE_BASE = "https://raw.githubusercontent.com/disarm34corrupt-tech/Kaileasells/main/";
const X_HANDLE = "@junrnals";

const products = [
 {id:1,name:"Balenciaga Le City Small Black",price:15000000,condition:"Like New",image:"01-balenciaga-city.jpg",category:"bags",note:"I clearly thought one black bag wasn't enough. Was I wrong? No. Do I still need this one? Also no."},
 {id:2,name:"iPhone 17 Pro 1TB",price:15000000,condition:"Excellent",image:"02-iphone-17-pro.jpg",category:"other",note:"I upgraded. Don't ask why. The 18 Pro won, so this baby has to go. She's been treated very well though."},
 {id:3,name:"Louis Vuitton Speedy Bandouliere 25",price:27500000,condition:"Very Good",image:"03-lv-speedy.jpg",category:"bags",note:"She's gorgeous, she's classic, and honestly she deserves someone who will actually take her places."},
 {id:4,name:"Miu Miu Quilted Mini Bag Pink",price:3750000,condition:"Like New",image:"04-miumiu-pink-bag.jpg",category:"bags",tag:"COLLABORATION",note:"Miu Miu sent her over, I said thank you, I wore her, took approximately 400 photos with her, and now we're here."},
 {id:5,name:"Miu Miu Matelasse Mini Bag Brown",price:4750000,condition:"Like New",image:"05-miumiu-brown-bag.jpg",category:"bags",tag:"COLLABORATION",note:"Another Miu Miu piece I absolutely loved for a while. My closet, unfortunately, has a very short attention span."},
 {id:6,name:"Miu Miu Logo Sunglasses",price:1750000,condition:"Like New",image:"06-miumiu-sunglasses.jpg",category:"accessories",note:"These made every outfit look more expensive than it actually was. Which is obviously a good thing."},
 {id:7,name:"Miu Miu Optical Glasses",price:1500000,condition:"Like New",image:"07-miumiu-glasses.jpg",category:"accessories",note:"Cute enough to make me look like I have my life together. Spoiler: the glasses were doing most of the work."},
 {id:8,name:"Miu Miu Leather Top Handle Bag Brown",price:4250000,condition:"Like New",image:"08-miumiu-brown-top-handle.jpg",category:"bags",note:"She is very pretty. She is very Miu Miu. She is also currently sitting in my closet doing absolutely nothing."},
 {id:9,name:"Coach Mini Bag Pink",price:1850000,condition:"Very Good",image:"09-coach-pink-bag.jpg",category:"bags",tag:"EX GIFT",note:"Yes, this was a gift from an ex. No, I don't have feelings about it anymore. The bag is cute, let's focus on that."},
 {id:10,name:"Coach Signature Mules Pink",price:1250000,condition:"Like New",image:"10-coach-pink-mules.jpg",category:"shoes",note:"Bought them. Tried them. Realised my feet and these shoes had completely different plans."},
 {id:11,name:"adidas Mary Jane White",price:850000,condition:"Worn Once",image:"11-adidas-mary-jane.jpg",category:"shoes",note:"I wanted cute Mary Janes. I got cute Mary Janes and blisters. So now we're breaking up."},
 {id:12,name:"Floral Rain Boots",price:950000,condition:"Like New",image:"12-floral-rain-boots.jpg",category:"shoes",note:"Bought these specifically for a photoshoot that went in a completely different direction. Mereka masih nunggu their big moment."},
 {id:13,name:"RIMOWA Pink Luggage Set",price:17500000,condition:"Excellent",image:"13-rimowa-cabin.jpg",category:"other",tag:"2 PCS",note:"Two suitcases because apparently one pink RIMOWA was not enough for me. My mistake can now be your travel upgrade."},
 {id:14,name:"Louis Vuitton Monogram Shirt White",price:3250000,condition:"Like New",image:"15-lv-shirt.jpg",category:"clothing",note:"I wanted the oversized look. Ternyata I may have misunderstood the assignment."},
 {id:15,name:"adidas 3-Stripes Set White Navy",price:650000,condition:"Like New",image:"16-adidas-3-stripes-set.jpg",category:"clothing",note:"Very cute set. Unfortunately, my body has chosen violence and decided it is simply too small."},
 {id:16,name:"adidas White Set",price:750000,condition:"Tried Once",image:"17-adidas-white-set.jpg",category:"clothing",note:"It looked cute online. Then I tried it on and suddenly I understood why I kept staring at myself in the mirror."},
 {id:17,name:"Pink Floral Mini Dress",price:450000,condition:"Never Worn",image:"18-pink-floral-dress.jpg",category:"clothing",tag:"ENDORSEMENT",note:"This came from an endorsement and somehow never made it out of the closet. So technically, you get first dibs."},
 {id:18,name:"Pink Butterfly Embellished Set",price:1250000,condition:"Like New",image:"19-pink-butterfly-set.jpg",category:"clothing",tag:"ENDORSEMENT",note:"Another endorsement piece that deserves a life outside my closet. She's cute, I just don't need to be the one wearing her."},
 {id:19,name:"Pink Seaside Coquette Set",price:550000,condition:"Very Good",image:"20-pink-coquette-set.jpg",category:"clothing",note:"I loved this one. Then I wore it enough times to get bored. She's ready for her next personality."},
 {id:20,name:"Pink Ankle Boots",price:1850000,condition:"Worn Once",image:"21-pink-ankle-boots.jpg",category:"shoes",note:"The boots are cute. The silhouette on me? Not my favourite. I looked a little... compact."},
 {id:21,name:"Blue Distressed Cap",price:250000,condition:"Very Good",image:"22-blue-distressed-cap.jpg",category:"accessories",note:"I was obsessed with this cap. Past tense. She's cute, I'm just bored."},
 {id:22,name:"Lilac Bag with Tumbler Holder",price:250000,condition:"Like New",image:"23-lilac-tumbler-bag.jpg",category:"bags",note:"I loved the colour, I loved the idea, I loved the little tumbler holder. I did not love how enormous the whole thing felt."},
 {id:23,name:"Headphones — FUCK OFF",price:500000,condition:"Very Good",image:"24-fuck-off-headphones.jpg",category:"other",note:"Keenan said the wording was rude. I said that's literally the point. Anyway, apparently someone else can have them now."},
 {id:24,name:"Dior Floral Saddle Bag Green Pink",price:28000000,condition:"Very Good",image:"25-dior-floral-saddle.jpg",category:"bags",note:"Bought this when I was 19 and thought everything had to be pink, floral and extremely girly. I've evolved. The bag has not."},
 {id:25,name:"Pink Telephone Heart Bag",price:850000,condition:"Like New",image:"26-pink-telephone-bag.jpg",category:"bags",note:"Bought this for the Taylor Swift Bangkok concert because obviously I needed a bag specifically for the occasion. I stand by the decision."},
 {id:26,name:"Pastel Resin Bangle Set",price:100000,condition:"Very Good",image:"27-pastel-bangle-set.jpg",category:"accessories",tag:"4 PCS",note:"Bought these for a photoshoot. Used them for approximately five minutes. They've been unemployed ever since."},
 {id:27,name:"Dior Green Floral Sandals",price:6500000,condition:"Like New",image:"28-dior-green-sandals.jpg",category:"shoes",note:"I loved them. Keenan called them frog shoes. Unfortunately, I can no longer unsee it."},
 {id:28,name:"Rainbow Cloud Denim Set",price:1350000,condition:"Excellent",image:"29-rainbow-cloud-set.jpg",category:"clothing",note:"Wore this on Day 6 of the DAY6 concert. Young K noticed me. I never wore the outfit again because honestly, how do you top that?"},
 {id:29,name:"Pink Sage Ombre Dress",price:650000,condition:"Very Good",image:"30-pink-sage-dress.jpg",category:"clothing",note:"I liked the dress until Keenan looked at it and said it looked like baju kelunturan. I haven't emotionally recovered."}
];

/* STATE */
const BAG_KEY = "kaileasell_bag";
let bag = [];
try {
  const ids = JSON.parse(localStorage.getItem(BAG_KEY) || "[]");
  bag = ids.map(id => products.find(p => p.id === id)).filter(Boolean);
} catch (e) { bag = []; }
let selectedProduct = null;
let category = "all";
let lastReceipt = null;

/* HELPERS */
const $ = id => document.getElementById(id);

function money(n) {
  return new Intl.NumberFormat("id-ID", {style:"currency", currency:"IDR", maximumFractionDigits:0}).format(n);
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function updateBagCount() {
  $("bagCount").textContent = bag.length;
  try { localStorage.setItem(BAG_KEY, JSON.stringify(bag.map(p => p.id))); } catch (e) {}
}

function makeModal(html, extraClass = "") {
  const m = document.createElement("div");
  m.className = "product-modal";
  m.innerHTML = `<div class="modal-overlay"></div><div class="modal-card ${extraClass}">${html}</div>`;
  document.body.appendChild(m);
  m.querySelector(".modal-overlay").addEventListener("click", () => m.classList.remove("active"));
  const close = m.querySelector(".modal-close");
  if (close) close.addEventListener("click", () => m.classList.remove("active"));
  return m;
}

/* SHOP */
function showProducts(list) {
  const grid = $("productGrid");
  const empty = $("emptyState");
  grid.innerHTML = "";
  $("productCount").textContent = `${list.length} PIECE${list.length === 1 ? "" : "S"} AVAILABLE`;
  empty.style.display = list.length ? "none" : "block";

  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image">
        <img src="${IMAGE_BASE + p.image}" alt="${esc(p.name)}" loading="lazy">
        <span class="product-condition">${esc(p.condition)}</span>
      </div>
      <div class="product-info">
        <span class="product-brand">KAILEASELL</span>
        <h3 class="product-name">${esc(p.name)}</h3>
        <p class="product-price">${money(p.price)}</p>
        ${p.tag ? `<span class="product-tag">${esc(p.tag)}</span>` : ""}
      </div>`;
    card.addEventListener("click", () => openProduct(p));
    grid.appendChild(card);
  });
}

function applyFilters() {
  const kw = $("searchInput").value.toLowerCase();
  showProducts(products.filter(p =>
    (category === "all" || p.category === category) &&
    (p.name.toLowerCase().includes(kw) || p.note.toLowerCase().includes(kw))
  ));
}

$("searchInput").addEventListener("input", applyFilters);

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    category = btn.dataset.category || "all";
    applyFilters();
  });
});

/* PRODUCT MODAL */
const productModal = makeModal(`
  <button class="modal-close" type="button">×</button>
  <div class="modal-image"><img id="modalImage" src="" alt=""></div>
  <div class="modal-info">
    <span class="modal-label">KAILEASELL / PRELOVED</span>
    <h2 id="modalName"></h2>
    <div class="modal-price" id="modalPrice"></div>
    <div class="modal-condition" id="modalCondition"></div>
    <div class="modal-note"><small>WHY I'M SELLING THIS</small><p id="modalNote"></p></div>
    <button class="add-bag-button" id="addButton" type="button">ADD TO BAG</button>
  </div>`);

function openProduct(p) {
  selectedProduct = p;
  $("modalImage").src = IMAGE_BASE + p.image;
  $("modalImage").alt = p.name;
  $("modalName").textContent = p.name;
  $("modalPrice").textContent = money(p.price);
  $("modalCondition").textContent = p.condition;
  $("modalNote").textContent = p.note;
  const inBag = bag.some(i => i.id === p.id);
  $("addButton").textContent = inBag ? "ALREADY IN YOUR BAG" : "ADD TO BAG";
  productModal.classList.add("active");
}

$("addButton").addEventListener("click", () => {
  if (!selectedProduct) return;
  if (!bag.some(i => i.id === selectedProduct.id)) bag.push(selectedProduct);
  updateBagCount();
  productModal.classList.remove("active");
  openBag();
});

/* BAG DRAWER */
const bagDrawer = document.createElement("aside");
bagDrawer.id = "bagDrawer";
bagDrawer.innerHTML = `
  <div class="bag-header">
    <div><span class="section-label">YOUR QUESTIONABLE DECISIONS</span><h2>My Bag</h2></div>
    <button id="bagClose" type="button">×</button>
  </div>
  <div id="bagItems"></div>
  <div class="bag-footer">
    <div class="bag-total-row"><span>SUBTOTAL</span><strong id="bagTotal">Rp0</strong></div>
    <p class="bag-disclaimer">No regrets accepted after checkout.</p>
    <button id="checkoutButton" class="primary-button" type="button">CHECKOUT</button>
  </div>`;
document.body.appendChild(bagDrawer);

const pageOverlay = document.createElement("div");
pageOverlay.id = "overlay";
document.body.appendChild(pageOverlay);

function openBag() { renderBag(); bagDrawer.classList.add("active"); pageOverlay.classList.add("active"); }
function closeBag() { bagDrawer.classList.remove("active"); pageOverlay.classList.remove("active"); }

document.querySelector(".bag-button").addEventListener("click", openBag);
$("bagClose").addEventListener("click", closeBag);
pageOverlay.addEventListener("click", closeBag);

function bagTotal() { return bag.reduce((t, p) => t + p.price, 0); }

function renderBag() {
  const box = $("bagItems");
  box.innerHTML = "";
  $("bagTotal").textContent = money(bagTotal());
  $("checkoutButton").disabled = bag.length === 0;

  if (!bag.length) {
    box.innerHTML = `<div class="empty-bag"><div class="empty-bag-icon">♡</div><h3>Your bag is empty.</h3><p>Which is probably financially responsible.</p></div>`;
    return;
  }

  bag.forEach(p => {
    const item = document.createElement("div");
    item.className = "bag-item";
    item.innerHTML = `
      <img src="${IMAGE_BASE + p.image}" alt="${esc(p.name)}">
      <div class="bag-item-info">
        <span>PRELOVED</span>
        <h4>${esc(p.name)}</h4>
        <strong>${money(p.price)}</strong>
        <button class="remove-item" data-id="${p.id}" type="button">REMOVE</button>
      </div>`;
    box.appendChild(item);
  });

  box.querySelectorAll(".remove-item").forEach(b => {
    b.addEventListener("click", () => {
      bag = bag.filter(i => i.id !== Number(b.dataset.id));
      updateBagCount();
      renderBag();
    });
  });
}

/* CHECKOUT (FICTIONAL) */
const checkoutModal = makeModal(`
  <button class="modal-close" type="button">×</button>
  <div class="checkout-wrap">
    <span class="section-label">KAILEASELL CHECKOUT</span>
    <h2>Make it yours.</h2>
    <p class="fiction-note">This is a fictional store. No real payment, no real shipping. Just a very pretty receipt.</p>
    <form id="checkoutForm">
      <label>Your Name
        <input id="customerName" type="text" required maxlength="30" placeholder="e.g. Jun">
      </label>
      <label>Your X Username (optional)
        <input id="customerHandle" type="text" maxlength="16" placeholder="@username">
      </label>
      <h3>PAYMENT (PRETEND)</h3>
      <div class="payment-options">
        <label class="payment-option"><input type="radio" name="payment" value="Bank Transfer" required><span><strong>BANK TRANSFER</strong><small>BCA / Mandiri / BNI</small></span></label>
        <label class="payment-option"><input type="radio" name="payment" value="E-Wallet"><span><strong>E-WALLET</strong><small>GoPay / OVO / DANA</small></span></label>
        <label class="payment-option"><input type="radio" name="payment" value="Credit Card"><span><strong>CREDIT CARD</strong><small>Visa / Mastercard</small></span></label>
      </div>
      <div class="bag-total-row"><span>TOTAL</span><strong id="checkoutTotal"></strong></div>
      <button class="add-bag-button" type="submit">PLACE FAKE ORDER</button>
    </form>
  </div>`, "single");

$("checkoutButton").addEventListener("click", () => {
  if (!bag.length) return;
  $("checkoutTotal").textContent = money(bagTotal());
  closeBag();
  checkoutModal.classList.add("active");
});

$("checkoutForm").addEventListener("submit", e => {
  e.preventDefault();
  const handle = $("customerHandle").value.trim().replace(/^@/, "");
  lastReceipt = {
    no: "KS-" + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleString("en-GB", {dateStyle:"long", timeStyle:"short"}),
    name: $("customerName").value.trim(),
    handle: handle ? "@" + handle : "",
    payment: document.querySelector("input[name=payment]:checked").value,
    items: bag.slice(),
    total: bagTotal()
  };
  bag = [];
  updateBagCount();
  $("checkoutForm").reset();
  checkoutModal.classList.remove("active");
  showReceipt();
});

/* RECEIPT */
const receiptModal = makeModal(`
  <button class="modal-close" type="button">×</button>
  <div class="receipt-wrap">
    <div id="receiptCard"></div>
    <div id="receiptPreview"></div>
    <div class="receipt-actions">
      <button class="add-bag-button" id="downloadReceipt" type="button">DOWNLOAD JPG</button>
      <a class="secondary-button" id="postOnX" target="_blank" rel="noopener">POST ON X ↗</a>
      <p class="receipt-hint">Download the receipt, then attach it to your post on X and tag ${X_HANDLE}.</p>
    </div>
  </div>`, "single");

function showReceipt() {
  const r = lastReceipt;
  $("receiptPreview").innerHTML = "";
  $("downloadReceipt").textContent = "DOWNLOAD JPG";
  $("receiptCard").innerHTML = `
    <div class="r-top">
      <div class="r-logo">KaileaSell</div>
      <div class="r-sub">PRELOVED BY LEA</div>
    </div>
    <div class="r-meta">
      <span>ORDER ${r.no}</span><span>${esc(r.date)}</span>
      <span>CUSTOMER: ${esc(r.name)}${r.handle ? " (" + esc(r.handle) + ")" : ""}</span>
      <span>PAID VIA: ${esc(r.payment)}</span>
    </div>
    <div class="r-line"></div>
    ${r.items.map(p => `<div class="r-item"><span>${esc(p.name)}</span><span>${money(p.price)}</span></div>`).join("")}
    <div class="r-line"></div>
    <div class="r-item r-total"><span>TOTAL</span><span>${money(r.total)}</span></div>
    <div class="r-line"></div>
    <p class="r-foot">Thank you for your very serious purchase.<br>No regrets accepted after checkout.<br>This receipt is 100% fictional.</p>
    <div class="r-stamp">PRELOVED ✦ NO REGRETS</div>`;

  const tweet = `just made a very questionable purchase at Lea's closet (KaileaSell) 🛍️ receipt below ${X_HANDLE}`;
  $("postOnX").href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweet);
  receiptModal.classList.add("active");
}

/* DOWNLOAD RECEIPT AS JPG */
function loadHtml2Canvas() {
  return new Promise((resolve, reject) => {
    if (typeof html2canvas !== "undefined") return resolve();
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

$("downloadReceipt").addEventListener("click", async function () {
  const btn = this;
  btn.textContent = "MAKING JPG...";

  try {
    await loadHtml2Canvas();

    const canvas = await html2canvas($("receiptCard"), {
      scale: 2,
      backgroundColor: "#fffafc",
      useCORS: true
    });

    const dataUrl = canvas.toDataURL("image/jpeg", 0.95);

    // Fallback: tekan lama gambar > Save Image
    $("receiptPreview").innerHTML = `
      <p class="receipt-hint" style="margin-top:14px">Kalau download tidak jalan: tekan lama gambar di bawah, lalu pilih Save Image.</p>
      <img src="${dataUrl}" alt="KaileaSell receipt" style="width:100%;border:1px solid var(--ink);margin-top:8px">`;

    // Coba download otomatis
    const a = document.createElement("a");
    a.download = `kaileasell-receipt-${lastReceipt.no}.jpg`;
    a.href = dataUrl;
    document.body.appendChild(a);
    a.click();
    a.remove();

    btn.textContent = "DOWNLOAD AGAIN";
  } catch (err) {
    console.error(err);
    btn.textContent = "DOWNLOAD JPG";
    alert("Gagal bikin JPG. Screenshot struknya aja ya!");
  }
});

/* INIT */
showProducts(products);
updateBagCount();
if (new URLSearchParams(location.search).get("bag") === "1") openBag();
