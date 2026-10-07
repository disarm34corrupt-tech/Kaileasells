const IMAGE_BASE =
  "https://raw.githubusercontent.com/disarm34corrupt-tech/Kaileasells/main/";

const X_HANDLE = "@junrnals";
const BAG_KEY = "kaileasell_bag";

const products = [
  {
    id: 1,
    name: "Balenciaga Le City Small Black",
    price: 15000000,
    condition: "Like New",
    image: "01-balenciaga-city.jpg",
    category: "bags",
    note: "Aku jelas-jelas pernah mikir satu tas hitam itu nggak cukup. Ternyata memang nggak cukup... tapi sekarang kebanyakan. Jadi yaudah, kamu aja yang punya."
  },
  {
    id: 2,
    name: "iPhone 17 Pro 1TB",
    price: 15000000,
    condition: "Excellent",
    image: "02-iphone-17-pro.jpg",
    category: "other",
    note: "Aku upgrade. Jangan tanya kenapa 😭 HP ini masih bagus banget kok, cuma setelah punya yang baru, yang ini jadi nggak kepake."
  },
  {
    id: 3,
    name: "Louis Vuitton Speedy Bandouliere 25",
    price: 27500000,
    condition: "Very Good",
    image: "03-lv-speedy.jpg",
    category: "bags",
    note: "Ini cantik banget dan klasik. Cuma akhir-akhir ini lebih sering duduk manis di closet daripada diajak jalan. Sayang kan."
  },
  {
    id: 4,
    name: "Miu Miu Quilted Mini Bag Pink",
    price: 3750000,
    condition: "Like New",
    image: "04-miumiu-pink-bag.jpg",
    category: "bags",
    tag: "COLLAB",
    note: "Miu Miu sent her over, aku bilang thank you, terus aku pakai, foto-foto sekitar 400 kali, dan sekarang... yaudah deh. Kayaknya dia butuh pemilik baru."
  },
  {
    id: 5,
    name: "Miu Miu Matelasse Mini Bag Brown",
    price: 4750000,
    condition: "Like New",
    image: "05-miumiu-brown-bag.jpg",
    category: "bags",
    tag: "COLLAB",
    note: "Aku suka banget sama tas ini. Banget. Tapi aku gampang bosen, dan kayaknya dia udah cukup lama tinggal di closet aku. So, time to go."
  },
  {
    id: 6,
    name: "Miu Miu Logo Sunglasses",
    price: 1750000,
    condition: "Like New",
    image: "06-miumiu-sunglasses.jpg",
    category: "accessories",
    note: "Ini salah satu barang yang bikin outfit kelihatan lebih mahal padahal sebenarnya cuma pakai sunglasses 😭 Tapi sunglasses aku udah kebanyakan, jadi satu harus pergi."
  },
  {
    id: 7,
    name: "Miu Miu Optical Glasses",
    price: 1500000,
    condition: "Like New",
    image: "07-miumiu-glasses.jpg",
    category: "accessories",
    note: "Pakai kacamata ini tuh bikin aku kelihatan kayak orang yang hidupnya teratur. Padahal ya... kalian tahu sendiri."
  },
  {
    id: 8,
    name: "Miu Miu Leather Top Handle Bag Brown",
    price: 4250000,
    condition: "Like New",
    image: "08-miumiu-brown-top-handle.jpg",
    category: "bags",
    note: "Cantik banget kan? Aku juga suka. Masalahnya sekarang dia cuma duduk di closet dan nggak pernah diajak pergi. Kasian, jadi mending cari pemilik baru."
  },
  {
    id: 9,
    name: "Coach Mini Bag Pink",
    price: 1850000,
    condition: "Very Good",
    image: "09-coach-pink-bag.jpg",
    category: "bags",
    tag: "EX GIFT",
    note: "Iya, ini hadiah dari mantan 😭 Tapi tenang, aku udah nggak ada perasaan apa-apa kok. Tasnya aja yang masih aku suka. Kita fokus ke tasnya ya."
  },
  {
    id: 10,
    name: "Coach Signature Mules Pink",
    price: 1250000,
    condition: "Like New",
    image: "10-coach-pink-mules.jpg",
    category: "shoes",
    note: "Aku beli karena lucu, aku coba, terus ternyata kaki aku punya pendapat lain. Cantik sih, tapi kaki aku bilang jangan."
  },
  {
    id: 11,
    name: "adidas Mary Jane White",
    price: 850000,
    condition: "Worn Once",
    image: "11-adidas-mary-jane.jpg",
    category: "shoes",
    note: "Aku pengen punya Mary Janes yang cute. Dapet sih... sama bonus lecet 😭 Jadi kayaknya kita cukup sampai di sini."
  },
  {
    id: 12,
    name: "Floral Rain Boots",
    price: 950000,
    condition: "Like New",
    image: "12-floral-rain-boots.jpg",
    category: "shoes",
    note: "Ini tadinya aku beli buat photoshoot, tapi ternyata konsepnya berubah dan akhirnya nggak kepake. Dari kemarin cuma nunggu kesempatan yang nggak datang-datang."
  },
  {
    id: 13,
    name: "RIMOWA Pink Luggage Set",
    price: 17500000,
    condition: "Excellent",
    image: "13-rimowa-cabin.jpg",
    category: "other",
    tag: "2 PCS",
    note: "Dua koper pink karena apparently satu nggak cukup buat aku 😭 Padahal travel aku juga nggak sebanyak itu. Tapi ya... lihat sendiri, cantik banget kan."
  },
  {
    id: 14,
    name: "Louis Vuitton Monogram Shirt White",
    price: 3250000,
    condition: "Like New",
    image: "15-lv-shirt.jpg",
    category: "clothing",
    note: "Aku tuh pengen banget oversized look. Ternyata aku salah memahami ukuran oversized 😭 Bajunya nggak salah, aku aja yang salah strategi."
  },
  {
    id: 15,
    name: "adidas 3-Stripes Set White Navy",
    price: 650000,
    condition: "Like New",
    image: "16-adidas-3-stripes-set.jpg",
    category: "clothing",
    note: "Set ini sebenarnya lucu banget, cuma ternyata kekecilan di aku. Daripada cuma disimpan di closet, mending cari orang yang bisa pakai dengan nyaman."
  },
  {
    id: 16,
    name: "adidas White Set",
    price: 750000,
    condition: "Tried Once",
    image: "17-adidas-white-set.jpg",
    category: "clothing",
    note: "Kelihatannya lucu banget waktu lihat online. Begitu dicoba, aku langsung tahu... kayaknya kita bukan jodoh. Tetap cantik kok bajunya."
  },
  {
    id: 17,
    name: "Pink Floral Mini Dress",
    price: 450000,
    condition: "Never Worn",
    image: "18-pink-floral-dress.jpg",
    category: "clothing",
    tag: "ENDORSEMENT",
    note: "Ini dari endorsement dan jujur aja sampai sekarang belum pernah keluar dari closet 😭 Jadi daripada cuma jadi penghuni tetap, mending kamu yang pakai."
  },
  {
    id: 18,
    name: "Pink Butterfly Embellished Set",
    price: 1250000,
    condition: "Like New",
    image: "19-pink-butterfly-set.jpg",
    category: "clothing",
    tag: "ENDORSEMENT",
    note: "Ini juga dari endorsement. Aku suka banget detail kupu-kupunya, cuma sekarang udah nggak punya occasion buat pakai. Sayang kalau cuma disimpan."
  },
  {
    id: 19,
    name: "Pink Seaside Coquette Set",
    price: 550000,
    condition: "Very Good",
    image: "20-pink-coquette-set.jpg",
    category: "clothing",
    note: "Aku dulu suka banget sama set ini. Udah beberapa kali dipakai, terus ya... namanya juga aku, mulai bosen 😭 Sekarang mungkin waktunya dia punya cerita baru."
  },
  {
    id: 20,
    name: "Pink Ankle Boots",
    price: 1850000,
    condition: "Worn Once",
    image: "21-pink-ankle-boots.jpg",
    category: "shoes",
    note: "Boots-nya cute, tapi pas aku pakai kok rasanya badan aku jadi agak... compact 😭 Mas Keenan juga nggak membantu dengan komentarnya. Jadi yaudah, kita berpisah baik-baik."
  },
  {
    id: 21,
    name: "Blue Distressed Cap",
    price: 250000,
    condition: "Very Good",
    image: "22-blue-distressed-cap.jpg",
    category: "accessories",
    note: "Dulu aku obsessed banget sama cap ini. Sekarang masih cute, cuma aku udah bosen aja. Jangan ditanya kenapa, aku juga nggak tahu."
  },
  {
    id: 22,
    name: "Lilac Bag with Tumbler Holder",
    price: 250000,
    condition: "Like New",
    image: "23-lilac-tumbler-bag.jpg",
    category: "bags",
    note: "Aku suka banget warna dan tempat tumblernya. Cuma ternyata tasnya lumayan gede buat aku. Jadi lucu sih... tapi agak terlalu niat."
  },
  {
    id: 23,
    name: "Headphones — FUCK OFF",
    price: 500000,
    condition: "Very Good",
    image: "24-fuck-off-headphones.jpg",
    category: "other",
    note: "Mas Keenan bilang tulisannya rude. Aku bilang memang itu tujuannya 😭 Jadi daripada debat terus, mending headphones-nya dijual aja."
  },
  {
    id: 24,
    name: "Dior Floral Saddle Bag Green Pink",
    price: 28000000,
    condition: "Very Good",
    image: "25-dior-floral-saddle.jpg",
    category: "bags",
    note: "Aku beli ini waktu masih 19 tahun dan kayaknya waktu itu prinsipku: kalau bisa pink dan floral, kenapa harus yang biasa? Sekarang aku sudah sedikit berubah. Tasnya belum."
  },
  {
    id: 25,
    name: "Pink Telephone Heart Bag",
    price: 850000,
    condition: "Like New",
    image: "26-pink-telephone-bag.jpg",
    category: "bags",
    note: "Aku beli ini khusus buat konser Taylor Swift di Bangkok 😭 Karena apparently aku butuh tas yang cocok buat satu occasion tertentu. Tapi jujur, aku tetap nggak nyesel."
  },
  {
    id: 26,
    name: "Pastel Resin Bangle Set",
    price: 100000,
    condition: "Very Good",
    image: "27-pastel-bangle-set.jpg",
    category: "accessories",
    tag: "4 PCS",
    note: "Ini aku beli buat photoshoot. Dipakai sekitar lima menit. Setelah itu pensiun dini di closet. Kasian banget, jadi ayo kasih mereka pekerjaan baru."
  },
  {
    id: 27,
    name: "Dior Green Floral Sandals",
    price: 6500000,
    condition: "Like New",
    image: "28-dior-green-sandals.jpg",
    category: "shoes",
    note: "Aku sebenarnya suka banget sama sandal ini. Terus Mas Keenan bilang, 'kok kayak kaki kodok?' Dan sekarang setiap lihat sandal ini aku malah mikir kodok 😭 Thanks ya, Mas."
  },
  {
    id: 28,
    name: "Rainbow Cloud Denim Set",
    price: 1350000,
    condition: "Excellent",
    image: "29-rainbow-cloud-set.jpg",
    category: "clothing",
    note: "Ini aku pakai waktu Day 6 konser DAY6. Terus Young K notice aku. Setelah kejadian itu aku merasa outfit ini sudah mencapai puncak kariernya, jadi nggak pernah aku pakai lagi 😭"
  },
  {
    id: 29,
    name: "Pink Sage Ombre Dress",
    price: 650000,
    condition: "Very Good",
    image: "30-pink-sage-dress.jpg",
    category: "clothing",
    note: "Aku sebenarnya suka banget dress ini. Terus Mas Keenan lihat dan bilang, 'kok kayak baju kelunturan?' Sejak saat itu aku jadi agak insecure sama dress ini 😭 Padahal cantik kok."
  }
];

let bag = JSON.parse(localStorage.getItem(BAG_KEY) || "[]");
let selectedProduct = null;
let category = "all";
let lastReceipt = null;


/* =========================
   HELPERS
========================= */

function money(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function updateBagCount() {
  const count = document.getElementById("bagCount");

  if (count) {
    count.textContent = bag.length;
  }
}

function saveBag() {
  localStorage.setItem(BAG_KEY, JSON.stringify(bag));
  updateBagCount();
}


/* =========================
   PRODUCT GRID
========================= */

function showProducts(list) {
  const grid = document.getElementById("productGrid");
  const emptyState = document.getElementById("emptyState");
  const productCount = document.getElementById("productCount");

  if (!grid) return;

  grid.innerHTML = "";

  if (productCount) {
    productCount.textContent =
      `${list.length} ${list.length === 1 ? "PIECE" : "PIECES"} AVAILABLE`;
  }

  if (list.length === 0) {
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  list.forEach(product => {
    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${IMAGE_BASE}${product.image}"
          alt="${esc(product.name)}"
          loading="lazy"
        >

        ${
          product.tag
            ? `<span class="product-tag">${esc(product.tag)}</span>`
            : ""
        }
      </div>

      <div class="product-info">
        <div class="product-name">${esc(product.name)}</div>
        <div class="product-condition">${esc(product.condition)}</div>
        <div class="product-price">${money(product.price)}</div>
      </div>
    `;

    card.addEventListener("click", () => openProduct(product));

    grid.appendChild(card);
  });
}


/* =========================
   FILTER + SEARCH
========================= */

function applyFilters() {
  const input = document.getElementById("searchInput");

  const query = input
    ? input.value.toLowerCase().trim()
    : "";

  const filtered = products.filter(product => {
    const matchesCategory =
      category === "all" ||
      product.category === category;

    const searchable =
      `${product.name} ${product.condition} ${product.note} ${product.tag || ""}`
        .toLowerCase();

    const matchesSearch =
      !query || searchable.includes(query);

    return matchesCategory && matchesSearch;
  });

  showProducts(filtered);
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter")
      .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    category = button.dataset.category;

    applyFilters();
  });
});

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", applyFilters);
}


/* =========================
   PRODUCT MODAL
========================= */

function makeModal() {
  let modal = document.getElementById("productModal");

  if (modal) return modal;

  modal = document.createElement("div");

  modal.id = "productModal";
  modal.className = "product-modal";

  modal.innerHTML = `
    <div class="modal-overlay"></div>

    <div class="modal-card">

      <button
        type="button"
        class="modal-close"
        id="modalClose"
        aria-label="Close"
      >
        ×
      </button>

      <div class="modal-image">
        <img id="modalImage" src="" alt="">
      </div>

      <div class="modal-info">

        <div class="modal-eyebrow">
          PRELOVED BY LEA
        </div>

        <h2 id="modalName"></h2>

        <div class="modal-price" id="modalPrice"></div>

        <div class="modal-condition" id="modalCondition"></div>

        <div class="modal-note" id="modalNote"></div>

        <button
          type="button"
          class="add-bag-button"
          id="addButton"
        >
          ADD TO BAG →
        </button>

      </div>

    </div>
  `;

  document.body.appendChild(modal);

  modal
    .querySelector(".modal-overlay")
    .addEventListener("click", closeProduct);

  modal
    .querySelector("#modalClose")
    .addEventListener("click", closeProduct);

  modal
    .querySelector("#addButton")
    .addEventListener("click", () => {
      if (!selectedProduct) return;

      bag.push(selectedProduct);
      saveBag();

      closeProduct();
      openBag();
    });

  return modal;
}

function openProduct(product) {
  selectedProduct = product;

  const modal = makeModal();

  document.getElementById("modalImage").src =
    IMAGE_BASE + product.image;

  document.getElementById("modalImage").alt =
    product.name;

  document.getElementById("modalName").textContent =
    product.name;

  document.getElementById("modalPrice").textContent =
    money(product.price);

  document.getElementById("modalCondition").textContent =
    product.condition;

  document.getElementById("modalNote").textContent =
    product.note;

  modal.classList.add("active");

  document.body.classList.add("modal-open");
}

function closeProduct() {
  const modal = document.getElementById("productModal");

  if (modal) {
    modal.classList.remove("active");
  }

  document.body.classList.remove("modal-open");
}


/* =========================
   BAG DRAWER
========================= */

function makeBagDrawer() {
  let drawer = document.getElementById("bagDrawer");

  if (drawer) return drawer;

  const overlay = document.createElement("div");

  overlay.id = "overlay";
  overlay.className = "overlay";

  document.body.appendChild(overlay);

  drawer = document.createElement("aside");

  drawer.id = "bagDrawer";
  drawer.className = "bag-drawer";

  drawer.innerHTML = `
    <div class="bag-header">
      <div>
        <div class="bag-kicker">LEA'S BAG</div>
        <h2>Your bag.</h2>
      </div>

      <button
        type="button"
        id="bagClose"
        class="bag-close"
      >
        ×
      </button>
    </div>

    <div id="bagItems" class="bag-items"></div>

    <div class="bag-footer">

      <div class="bag-total-row">
        <span>TOTAL</span>
        <strong id="bagTotal">Rp0</strong>
      </div>

      <div class="bag-disclaimer">
        Pretend checkout only. No actual money will leave your bank account.
        Probably.
      </div>

      <button
        type="button"
        id="checkoutButton"
        class="checkout-button"
      >
        CHECK OUT →
      </button>

    </div>
  `;

  document.body.appendChild(drawer);

  drawer
    .querySelector("#bagClose")
    .addEventListener("click", closeBag);

  overlay.addEventListener("click", closeBag);

  drawer
    .querySelector("#checkoutButton")
    .addEventListener("click", openCheckout);

  return drawer;
}

function renderBag() {
  const drawer = makeBagDrawer();

  const items = document.getElementById("bagItems");
  const totalElement = document.getElementById("bagTotal");
  const checkoutButton = document.getElementById("checkoutButton");

  if (!items) return;

  if (bag.length === 0) {
    items.innerHTML = `
      <div class="empty-bag">
        <div class="empty-bag-title">
          Your bag is empty.
        </div>

        <p>
          Lea probably has something you don't need.
          Go find it.
        </p>

        <a href="shop.html" class="primary-button">
          SHOP THE CLOSET
        </a>
      </div>
    `;

    totalElement.textContent = money(0);

    if (checkoutButton) {
      checkoutButton.disabled = true;
    }

    return;
  }

  let total = 0;

  items.innerHTML = bag.map((product, index) => {
    total += product.price;

    return `
      <div class="bag-item">

        <img
          src="${IMAGE_BASE}${product.image}"
          alt="${esc(product.name)}"
        >

        <div class="bag-item-info">
          <div class="bag-item-name">
            ${esc(product.name)}
          </div>

          <div class="bag-item-price">
            ${money(product.price)}
          </div>

          <button
            type="button"
            class="remove-item"
            data-index="${index}"
          >
            REMOVE
          </button>
        </div>

      </div>
    `;
  }).join("");

  totalElement.textContent = money(total);

  if (checkoutButton) {
    checkoutButton.disabled = false;
  }

  items.querySelectorAll(".remove-item").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);

      bag.splice(index, 1);

      saveBag();
      renderBag();
    });
  });
}

function openBag() {
  const drawer = makeBagDrawer();
  const overlay = document.getElementById("overlay");

  renderBag();

  drawer.classList.add("active");
  overlay.classList.add("active");

  document.body.classList.add("drawer-open");
}

function closeBag() {
  const drawer = document.getElementById("bagDrawer");
  const overlay = document.getElementById("overlay");

  if (drawer) {
    drawer.classList.remove("active");
  }

  if (overlay) {
    overlay.classList.remove("active");
  }

  document.body.classList.remove("drawer-open");
}


/* =========================
   BAG BUTTON
========================= */

const bagButton = document.querySelector(".bag-button");

if (bagButton) {
  bagButton.addEventListener("click", event => {
    event.preventDefault();
    openBag();
  });
}


/* =========================
   CHECKOUT MODAL
========================= */

function makeCheckoutModal() {
  let modal = document.getElementById("checkoutModal");

  if (modal) return modal;

  modal = document.createElement("div");

  modal.id = "checkoutModal";
  modal.className = "checkout-modal";

  modal.innerHTML = `
    <div class="checkout-overlay"></div>

    <div class="checkout-card">

      <button
        type="button"
        class="checkout-close"
        id="checkoutClose"
      >
        ×
      </button>

      <div class="checkout-kicker">
        ONE LAST THING
      </div>

      <h2>
        Let's make this<br>
        <em>official-ish.</em>
      </h2>

      <p class="checkout-intro">
        This is a fictional checkout. No actual payment
        will happen. Lea promises.
      </p>

      <label>
        Your name
        <input
          type="text"
          id="customerName"
          placeholder="e.g. pretty girl"
        >
      </label>

      <label>
        Your X username
        <input
          type="text"
          id="customerX"
          placeholder="@yourusername (optional)"
        >
      </label>

      <div class="payment-label">
        Pretend payment method
      </div>

      <div class="payment-options">

        <button
          type="button"
          class="payment-option active"
          data-payment="Bank Transfer"
        >
          BANK TRANSFER
        </button>

        <button
          type="button"
          class="payment-option"
          data-payment="QRIS"
        >
          QRIS
        </button>

        <button
          type="button"
          class="payment-option"
          data-payment="Credit Card"
        >
          CARD
        </button>

      </div>

      <button
        type="button"
        class="place-order-button"
        id="placeOrderButton"
      >
        PLACE FAKE ORDER →
      </button>

    </div>
  `;

  document.body.appendChild(modal);

  let selectedPayment = "Bank Transfer";

  modal
    .querySelector("#checkoutClose")
    .addEventListener("click", closeCheckout);

  modal
    .querySelector(".checkout-overlay")
    .addEventListener("click", closeCheckout);

  modal
    .querySelectorAll(".payment-option")
    .forEach(button => {
      button.addEventListener("click", () => {
        modal
          .querySelectorAll(".payment-option")
          .forEach(item => {
            item.classList.remove("active");
          });

        button.classList.add("active");

        selectedPayment =
          button.dataset.payment;
      });
    });

  modal
    .querySelector("#placeOrderButton")
    .addEventListener("click", () => {
      const customerName =
        document
          .getElementById("customerName")
          .value.trim();

      const customerX =
        document
          .getElementById("customerX")
          .value.trim();

      if (!customerName) {
        alert("Name dulu, babe 😭");
        return;
      }

      createReceipt(
        customerName,
        customerX,
        selectedPayment
      );
    });

  return modal;
}

function openCheckout() {
  if (bag.length === 0) return;

  const modal = makeCheckoutModal();

  modal.classList.add("active");

  document.body.classList.add("modal-open");
}

function closeCheckout() {
  const modal =
    document.getElementById("checkoutModal");

  if (modal) {
    modal.classList.remove("active");
  }

  document.body.classList.remove("modal-open");
}


/* =========================
   RECEIPT
========================= */

function createReceipt(
  customerName,
  customerX,
  payment
) {
  const orderNumber =
    "KS-" +
    Math.floor(
      100000 + Math.random() * 900000
    );

  const total = bag.reduce(
    (sum, product) =>
      sum + product.price,
    0
  );

  lastReceipt = {
    orderNumber,
    customerName,
    customerX,
    payment,
    total,
    items: [...bag],
    date: new Date()
  };

  closeCheckout();
  closeBag();

  showReceipt();
}

function showReceipt() {
  let modal =
    document.getElementById("receiptModal");

  if (!modal) {
    modal = document.createElement("div");

    modal.id = "receiptModal";
    modal.className = "receipt-modal";

    modal.innerHTML = `
      <div class="receipt-overlay"></div>

      <div class="receipt-card">

        <button
          type="button"
          class="receipt-close"
          id="receiptClose"
        >
          ×
        </button>

        <div id="receiptContent"></div>

        <div class="receipt-actions">

          <button
            type="button"
            id="downloadReceipt"
            class="receipt-button"
          >
            SAVE RECEIPT
          </button>

          <button
            type="button"
            id="shareReceipt"
            class="receipt-button pink"
          >
            POST ON X
          </button>

        </div>

      </div>
    `;

    document.body.appendChild(modal);

    modal
      .querySelector("#receiptClose")
      .addEventListener("click", closeReceipt);

    modal
      .querySelector(".receipt-overlay")
      .addEventListener("click", closeReceipt);

    modal
      .querySelector("#downloadReceipt")
      .addEventListener("click", downloadReceipt);

    modal
      .querySelector("#shareReceipt")
      .addEventListener("click", shareReceipt);
  }

  const receipt = lastReceipt;

  const itemsHTML = receipt.items
    .map(product => `
      <div class="receipt-item">
        <span>${esc(product.name)}</span>
        <strong>${money(product.price)}</strong>
      </div>
    `)
    .join("");

  document.getElementById("receiptContent").innerHTML = `
    <div class="receipt-top">
      <div class="receipt-logo">
        KaileaSell
      </div>

      <div class="receipt-small">
        PRETEND PURCHASE RECEIPT
      </div>
    </div>

    <div class="receipt-success">
      ORDER CONFIRMED ♡
    </div>

    <div class="receipt-number">
      ${esc(receipt.orderNumber)}
    </div>

    <div class="receipt-meta">
      <div>
        <span>NAME</span>
        <strong>${esc(receipt.customerName)}</strong>
      </div>

      <div>
        <span>PAYMENT</span>
        <strong>${esc(receipt.payment)}</strong>
      </div>
    </div>

    <div class="receipt-items">
      ${itemsHTML}
    </div>

    <div class="receipt-total">
      <span>TOTAL</span>
      <strong>${money(receipt.total)}</strong>
    </div>

    <div class="receipt-note">
      Thank you for making a questionable decision.
      Lea hopes you actually like it.
      <br><br>
      Tag ${X_HANDLE} when you post your receipt 🎀
    </div>
  `;

  modal.classList.add("active");

  document.body.classList.add("modal-open");

  bag = [];
  saveBag();
}

function closeReceipt() {
  const modal =
    document.getElementById("receiptModal");

  if (modal) {
    modal.classList.remove("active");
  }

  document.body.classList.remove("modal-open");
}


/* =========================
   DOWNLOAD RECEIPT
========================= */

function downloadReceipt() {
  if (!lastReceipt) return;

  const receiptCard =
    document.querySelector(".receipt-card");

  if (
    typeof html2canvas === "undefined"
  ) {
    alert(
      "Receipt-nya sudah jadi, tapi fitur save gambar belum tersedia di browser ini."
    );
    return;
  }

  html2canvas(receiptCard, {
    backgroundColor: "#fffafc",
    scale: 2
  }).then(canvas => {
    const link =
      document.createElement("a");

    link.download =
      `${lastReceipt.orderNumber}-kaileasell.jpg`;

    link.href =
      canvas.toDataURL("image/jpeg", 0.95);

    link.click();
  });
}


/* =========================
   POST TO X
========================= */

function shareReceipt() {
  if (!lastReceipt) return;

  const text =
    `I just made a questionable decision at KaileaSell 🎀\n\n` +
    `Order: ${lastReceipt.orderNumber}\n` +
    `Total: ${money(lastReceipt.total)}\n\n` +
    `Preloved by Lea ♡ ${X_HANDLE}`;

  const url =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(text);

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}


/* =========================
   KEYBOARD
========================= */

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  closeProduct();
  closeCheckout();
  closeReceipt();
  closeBag();
});


/* =========================
   INITIALIZE
========================= */

showProducts(products);
updateBagCount();

const params =
  new URLSearchParams(window.location.search);

if (params.get("bag") === "1") {
  openBag();
}
