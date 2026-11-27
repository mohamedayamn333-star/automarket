// ==========================================
// AutoMarket BY MOHAMED
// Main JavaScript
// ==========================================

// 1. TRANSLATIONS

const translations = {
  ar: {
    home: "الرئيسية",
    cars: "السيارات",
    about: "من نحن",
    login: "تسجيل الدخول",
    sell: "+ أضف سيارة",
    heroTag: "منصتك الأولى لعالم السيارات",
    heroTitle: 'اعثر على سيارتك<br><span>المثالية</span> معنا.',
    heroText: "اكتشف السيارات المعروضة للبيع، وقارن الأسعار واختر سيارتك القادمة بسهولة.",
    browse: "تصفح السيارات ←",
    sellCar: "اعرض سيارتك للبيع",
    statCars: "سيارة معروضة",
    statSupport: "دعم متواصل",
    statEasy: "سهولة الاستخدام",
    premium: "تجربة سيارات مميزة",
    find: "ابحث عن سيارتك",
    searchTitle: "اكتشف مجموعتنا",
    brand: "الماركة",
    allBrands: "كل الماركات",
    maxPrice: "أقصى سعر (جنيه)",
    anyPrice: "أي سعر",
    year: "سنة الصنع",
    anyYear: "كل السنوات",
    search: "بحث",
    allCars: "كل السيارات",
    featured: "مميزة",
    favorites: "المفضلة ♡",
    sortDefault: "الترتيب الافتراضي",
    sortLow: "السعر: الأقل أولاً",
    sortHigh: "السعر: الأعلى أولاً",
    sortNew: "الأحدث أولاً",
    noCars: "لا توجد سيارات مطابقة",
    tryAgain: "جرّب تغيير خيارات البحث.",
    whyUs: "لماذا AutoMarket؟",
    whyTitle: "تجربة شراء أسهل وأذكى",
    feature1Title: "بحث ذكي",
    feature1Text: "اعثر على السيارة المناسبة باستخدام فلاتر البحث.",
    feature2Title: "اختيارات متنوعة",
    feature2Text: "شاهد سيارات بموديلات وأسعار مختلفة.",
    feature3Title: "تواصل مباشر",
    feature3Text: "تواصل مع البائع لمعرفة تفاصيل السيارة.",
    footerText: "وجهتك لاكتشاف سيارتك القادمة.",
    newListing: "إعلان جديد",
    addCarTitle: "أضف سيارتك للبيع",
    carName: "اسم السيارة",
    carBrand: "الماركة",
    carPrice: "السعر بالجنيه",
    carYear: "سنة الصنع",
    carLocation: "المحافظة / المدينة",
    carImage: "رابط صورة السيارة",
    sellerPhone: "رقم التواصل",
    publish: "نشر الإعلان",
    loginTitle: "مرحباً بك",
    loginDemo: "تسجيل الدخول الحقيقي سيتم تفعيله عند ربط قاعدة البيانات.",
    email: "البريد الإلكتروني",
    continue: "متابعة",
    details: "عرض التفاصيل",
    contact: "تواصل مع البائع",
    location: "الموقع",
    currency: "جنيه",
    featuredTag: "مميزة",
    yearLabel: "سنة الصنع",
    confirmAdd: "تمت إضافة السيارة بنجاح!",
    invalidPhone: "من فضلك أدخل رقم تواصل صحيح.",
    invalidData: "من فضلك أكمل البيانات المطلوبة.",
    saved: "تمت الإضافة للمفضلة",
    removed: "تمت الإزالة من المفضلة",
    emptyFavorites: "لا توجد سيارات في المفضلة.",
    demoMessage: "هذه نسخة تجريبية. تسجيل الحسابات يحتاج قاعدة بيانات.",
    carCount: "سيارة",
    used: "مستعملة",
    otherBrand: "أخرى",
    close: "إغلاق",
    menu: "القائمة",
    sort: "الترتيب",
    favorite: "المفضلة",
    heroImageAlt: "سيارة فاخرة",
    carMileage: "المسافة المقطوعة (كم)",
    km: "كم",
    carNamePlaceholder: "BMW 320i",
    locationPlaceholder: "القاهرة",
    phonePlaceholder: "01xxxxxxxxx",
    phoneHint: "أدخل رقم موبايل مصري مثل 01012345678",
    saveError: "تعذر حفظ البيانات في هذا المتصفح."
  },

  en: {
    home: "Home",
    cars: "Cars",
    about: "About",
    login: "Login",
    sell: "+ Add Car",
    heroTag: "Your First Destination for Cars",
    heroTitle: 'Find Your<br><span>Perfect Car</span> With Us.',
    heroText: "Discover cars for sale, compare prices and find your next car easily.",
    browse: "Browse Cars →",
    sellCar: "Sell Your Car",
    statCars: "Listed Cars",
    statSupport: "Support",
    statEasy: "Easy Experience",
    premium: "Premium Car Experience",
    find: "Find Your Car",
    searchTitle: "Explore Our Collection",
    brand: "Brand",
    allBrands: "All Brands",
    maxPrice: "Maximum Price (EGP)",
    anyPrice: "Any Price",
    year: "Year",
    anyYear: "Any Year",
    search: "Search",
    allCars: "All Cars",
    featured: "Featured",
    favorites: "Favorites ♡",
    sortDefault: "Default Sorting",
    sortLow: "Price: Low to High",
    sortHigh: "Price: High to Low",
    sortNew: "Newest First",
    noCars: "No matching cars found",
    tryAgain: "Try changing your search filters.",
    whyUs: "Why AutoMarket?",
    whyTitle: "A Smarter Way to Buy Cars",
    feature1Title: "Smart Search",
    feature1Text: "Find the right car using search filters.",
    feature2Title: "Wide Selection",
    feature2Text: "Explore different models and prices.",
    feature3Title: "Direct Contact",
    feature3Text: "Contact sellers for more details.",
    footerText: "Your destination for finding your next car.",
    newListing: "New Listing",
    addCarTitle: "List Your Car for Sale",
    carName: "Car Name",
    carBrand: "Brand",
    carPrice: "Price in EGP",
    carYear: "Manufacturing Year",
    carLocation: "City / Location",
    carImage: "Car Image URL",
    sellerPhone: "Contact Number",
    publish: "Publish Listing",
    loginTitle: "Welcome",
    loginDemo: "Real authentication will be enabled after database integration.",
    email: "Email Address",
    continue: "Continue",
    details: "View Details",
    contact: "Contact Seller",
    location: "Location",
    currency: "EGP",
    featuredTag: "Featured",
    yearLabel: "Year",
    confirmAdd: "Car added successfully!",
    invalidPhone: "Please enter a valid contact number.",
    invalidData: "Please complete all required fields.",
    saved: "Added to favorites",
    removed: "Removed from favorites",
    emptyFavorites: "No cars in your favorites.",
    demoMessage: "This is a demo. Account registration requires a database.",
    carCount: "cars",
    used: "Used",
    otherBrand: "Other",
    close: "Close",
    menu: "Menu",
    sort: "Sort",
    favorite: "Favorite",
    heroImageAlt: "Luxury car",
    carMileage: "Mileage (KM)",
    km: "KM",
    carNamePlaceholder: "BMW 320i",
    locationPlaceholder: "Cairo",
    phonePlaceholder: "01xxxxxxxxx",
    phoneHint: "Enter an Egyptian mobile number like 01012345678",
    saveError: "Could not save data in this browser."
  }
};

// 2. SAMPLE CAR DATABASE

const defaultCars = [
  {
    id: 1,
    name: "BMW 320i",
    brand: "BMW",
    price: 1850000,
    year: 2023,
    location: "Cairo",
    arLocation: "القاهرة",
    mileage: 18000,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
    featured: true,
    phone: "201000000001"
  },
  {
    id: 2,
    name: "Mercedes C200",
    brand: "Mercedes",
    price: 2400000,
    year: 2024,
    location: "Alexandria",
    arLocation: "الإسكندرية",
    mileage: 9000,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",
    featured: true,
    phone: "201000000002"
  },
  {
    id: 3,
    name: "Toyota Corolla",
    brand: "Toyota",
    price: 1100000,
    year: 2022,
    location: "Giza",
    arLocation: "الجيزة",
    mileage: 35000,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=80",
    featured: false,
    phone: "201000000003"
  },
  {
    id: 4,
    name: "Hyundai Elantra",
    brand: "Hyundai",
    price: 950000,
    year: 2021,
    location: "Mansoura",
    arLocation: "المنصورة",
    mileage: 42000,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80",
    featured: false,
    phone: "201000000004"
  },
  {
    id: 5,
    name: "Kia Sportage",
    brand: "Kia",
    price: 1600000,
    year: 2023,
    location: "Cairo",
    arLocation: "القاهرة",
    mileage: 15000,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
    featured: true,
    phone: "201000000005"
  },
  {
    id: 6,
    name: "Nissan Sunny",
    brand: "Nissan",
    price: 650000,
    year: 2020,
    location: "Tanta",
    arLocation: "طنطا",
    mileage: 60000,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    featured: false,
    phone: "201000000006"
  }
];

// 2b. YEAR LIMITS (calculated from the current year, never hard-coded)

const currentYear = new Date().getFullYear();
const MIN_YEAR = 1990;
const MAX_YEAR = currentYear;

const PLACEHOLDER_IMAGE = "https://placehold.co/800x500/171c27/e8b45b?text=AutoMarket";

// 3. APP STATE

// v2: only the cars the user added are stored. The sample cars always come
// fresh from defaultCars, so changing them in the code shows up immediately.
const STORAGE_KEYS = {
  userCars: "automarket_user_cars_v2",
  legacyCars: "automarket_cars_v1",
  favorites: "automarket_favorites_v1",
  language: "automarket_language_v1"
};

const $ = (id) => document.getElementById(id);

function loadStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function isValidImageUrl(value) {
  return /^https?:\/\//i.test(String(value ?? "").trim());
}

// Never trust data coming from localStorage: check it and clean it.
function sanitizeCar(raw) {
  if (!raw || typeof raw !== "object") return null;

  const mileage = Number(raw.mileage);

  const car = {
    id: Number(raw.id),
    name: String(raw.name ?? "").trim(),
    brand: String(raw.brand ?? "").trim(),
    price: Number(raw.price),
    year: Number(raw.year),
    location: String(raw.location ?? "").trim(),
    arLocation: String(raw.arLocation ?? raw.location ?? "").trim(),
    mileage: mileage > 0 ? mileage : null,
    image: isValidImageUrl(raw.image) ? String(raw.image).trim() : PLACEHOLDER_IMAGE,
    featured: raw.featured === true,
    phone: String(raw.phone ?? "").replace(/\D/g, "")
  };

  const valid =
    Number.isFinite(car.id) &&
    car.name &&
    car.brand &&
    Number.isFinite(car.price) && car.price > 0 &&
    Number.isFinite(car.year) &&
    car.location;

  return valid ? car : null;
}

function loadUserCars() {
  const defaultIds = new Set(defaultCars.map(car => car.id));
  let saved = loadStorage(STORAGE_KEYS.userCars, null);

  // First run after the update: rescue the cars the user added in v1.
  if (!Array.isArray(saved)) {
    const legacy = loadStorage(STORAGE_KEYS.legacyCars, []);
    saved = Array.isArray(legacy)
      ? legacy.filter(car => car && !defaultIds.has(Number(car.id)))
      : [];
  }

  return saved
    .map(sanitizeCar)
    .filter(car => car && !defaultIds.has(car.id));
}

function loadFavorites() {
  const saved = loadStorage(STORAGE_KEYS.favorites, []);
  return Array.isArray(saved)
    ? saved.map(Number).filter(Number.isFinite)
    : [];
}

function loadLanguage() {
  const saved = loadStorage(STORAGE_KEYS.language, "ar");
  return translations[saved] ? saved : "ar";
}

let userCars = loadUserCars();
let favorites = loadFavorites();
let currentLanguage = loadLanguage();
let currentFilter = "all";

function getAllCars() {
  return [...userCars, ...defaultCars];
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEYS.userCars, JSON.stringify(userCars));
    localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favorites));
    localStorage.setItem(STORAGE_KEYS.language, JSON.stringify(currentLanguage));
  } catch (error) {
    showToast(t("saveError"));
  }
}

// 4. LANGUAGE SYSTEM

function t(key) {
  return translations[currentLanguage][key] || key;
}

function getLocale() {
  return currentLanguage === "ar" ? "ar-EG" : "en-US";
}

const TRANSLATED_ATTRIBUTES = ["placeholder", "alt", "aria-label", "title"];

function changeLanguage(language) {
  if (!translations[language]) return;

  currentLanguage = language;
  const dictionary = translations[language];

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.dir = language === "ar" ? "rtl" : "ltr";

  // Text: textContent by default. innerHTML only for elements that
  // really contain markup (marked with data-i18n-html, like the h1).
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (!dictionary[key]) return;

    if (element.hasAttribute("data-i18n-html")) {
      element.innerHTML = dictionary[key];
    } else {
      element.textContent = dictionary[key];
    }
  });

  // Attributes: placeholder, alt, aria-label, title
  TRANSLATED_ATTRIBUTES.forEach(attribute => {
    document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element => {
      const key = element.getAttribute(`data-i18n-${attribute}`);
      if (dictionary[key]) element.setAttribute(attribute, dictionary[key]);
    });
  });

  const languageBtn = $("languageBtn");
  languageBtn.textContent = language === "ar" ? "EN" : "عربي";
  languageBtn.lang = language === "ar" ? "en" : "ar";

  saveData();
  renderCars(); // renderCars also updates the stats
}

$("languageBtn").addEventListener("click", () => {
  changeLanguage(currentLanguage === "ar" ? "en" : "ar");
});

// 5. FORMATTING

function formatNumber(value) {
  return new Intl.NumberFormat(getLocale()).format(value);
}

function formatPrice(price) {
  return formatNumber(price) + " " + t("currency");
}

// Egyptian numbers: 01012345678 / +201012345678 / 1012345678 -> 201012345678
function normalizePhone(raw) {
  let digits = String(raw ?? "").replace(/\D/g, "");

  if (digits.startsWith("00")) digits = digits.slice(2);

  if (digits.startsWith("0")) {
    digits = "20" + digits.slice(1);
  } else if (/^1[0125]\d{8}$/.test(digits)) {
    digits = "20" + digits;
  }

  return digits;
}

function isValidPhone(digits) {
  return /^20(10|11|12|15)\d{8}$/.test(digits);
}

function whatsappLink(phone) {
  return "https://wa.me/" + encodeURIComponent(normalizePhone(phone));
}

// 6. CAR RENDERING

function renderCars() {
  const grid = $("carsGrid");
  let filtered = getAllCars();

  const brand = $("brandFilter").value;
  const maxPrice = $("priceFilter").value;
  const minYear = $("yearFilter").value;

  if (brand !== "all") {
    filtered = filtered.filter(car => car.brand === brand);
  }

  if (maxPrice !== "all") {
    filtered = filtered.filter(car => car.price <= Number(maxPrice));
  }

  if (minYear !== "all") {
    filtered = filtered.filter(car => car.year >= Number(minYear));
  }

  if (currentFilter === "featured") {
    filtered = filtered.filter(car => car.featured);
  }

  if (currentFilter === "favorites") {
    filtered = filtered.filter(car => favorites.includes(car.id));
  }

  const sort = $("sortFilter").value;

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "new") {
    filtered.sort((a, b) => b.year - a.year);
  }

  $("resultsCount").textContent =
    formatNumber(filtered.length) + " " + t("carCount");

  grid.innerHTML = "";

  $("emptyState").classList.toggle("hidden", filtered.length !== 0);

  filtered.forEach(car => {
    const isFavorite = favorites.includes(car.id);

    const location = currentLanguage === "ar"
      ? (car.arLocation || car.location)
      : car.location;

    const mileageHTML = car.mileage
      ? `<span><span aria-hidden="true">🛣️</span> ${formatNumber(car.mileage)} ${t("km")}</span>`
      : "";

    const card = document.createElement("article");
    card.className = "car-card";

    card.innerHTML = `
      <div class="car-image">
        <img src="${escapeHTML(car.image)}"
             alt="${escapeHTML(car.name)}"
             width="900"
             height="600"
             loading="lazy">

        ${car.featured
          ? `<span class="car-badge">${t("featuredTag")}</span>`
          : ""}

        <button class="favorite-btn ${isFavorite ? "active" : ""}"
                data-action="favorite"
                data-id="${escapeHTML(car.id)}"
                aria-label="${escapeHTML(t("favorite"))}"
                aria-pressed="${isFavorite}">
          <span aria-hidden="true">${isFavorite ? "♥" : "♡"}</span>
        </button>
      </div>

      <div class="car-info">
        <h3>${escapeHTML(car.name)}</h3>

        <div class="car-meta">
          <span><span aria-hidden="true">📅</span> ${escapeHTML(car.year)}</span>
          <span><span aria-hidden="true">📍</span> ${escapeHTML(location)}</span>
          ${mileageHTML}
        </div>

        <div class="car-bottom">
          <div class="car-price">
            ${escapeHTML(formatPrice(car.price))}
            <small>${t("used")}</small>
          </div>

          <button class="details-btn"
                  data-action="details"
                  data-id="${escapeHTML(car.id)}">
            ${t("details")}
          </button>
        </div>
      </div>
    `;

    // If the image fails to load, show the placeholder (once, to avoid a loop)
    const image = card.querySelector("img");
    image.addEventListener("error", () => {
      image.src = PLACEHOLDER_IMAGE;
    }, { once: true });

    grid.appendChild(card);
  });

  updateStats();
}

// 7. BASIC HTML ESCAPING

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

// 8. FAVORITES AND DETAILS

$("carsGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "favorite") {
    if (favorites.includes(id)) {
      favorites = favorites.filter(item => item !== id);
      showToast(t("removed"));
    } else {
      favorites.push(id);
      showToast(t("saved"));
    }

    saveData();
    renderCars();

    // The grid was rebuilt, so give the keyboard focus back to the same button
    const sameButton = $("carsGrid").querySelector(
      `[data-action="favorite"][data-id="${id}"]`
    );
    if (sameButton) sameButton.focus();
  }

  if (action === "details") {
    showDetails(id, button);
  }
});

function showDetails(id, opener) {
  const car = getAllCars().find(item => item.id === id);
  if (!car) return;

  const location = currentLanguage === "ar"
    ? (car.arLocation || car.location)
    : car.location;

  const mileageHTML = car.mileage
    ? `<p><span aria-hidden="true">🛣️</span> ${formatNumber(car.mileage)} ${t("km")}</p>`
    : "";

  $("detailsContent").innerHTML = `
    <button class="close-btn"
            data-close="detailsModal"
            aria-label="${escapeHTML(t("close"))}">
      <span aria-hidden="true">×</span>
    </button>

    <img src="${escapeHTML(car.image)}"
         alt="${escapeHTML(car.name)}"
         width="600"
         height="230">

    <span class="eyebrow">AutoMarket</span>
    <h2 id="detailsTitle">${escapeHTML(car.name)}</h2>

    <h2 class="details-price">${escapeHTML(formatPrice(car.price))}</h2>

    <p><span aria-hidden="true">📅</span> ${t("yearLabel")}: ${escapeHTML(car.year)}</p>
    <p><span aria-hidden="true">📍</span> ${t("location")}: ${escapeHTML(location)}</p>
    ${mileageHTML}
    <p>${t("brand")}: ${escapeHTML(car.brand)}</p>

    <a class="contact-btn"
       href="${escapeHTML(whatsappLink(car.phone))}"
       target="_blank"
       rel="noopener noreferrer">
       ${t("contact")} WhatsApp
    </a>
  `;

  openModal("detailsModal", opener);
}

// 9. FILTERS

function populateYearFilter() {
  const select = $("yearFilter");

  // Same steps as before (2025+, 2022+, 2020+, 2018+), but based on the current year
  [1, 4, 6, 8].forEach(offset => {
    const year = currentYear - offset;
    select.add(new Option(year + "+", String(year)));
  });
}

$("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  renderCars();
});

["brandFilter", "priceFilter", "yearFilter", "sortFilter"].forEach(id => {
  $(id).addEventListener("change", renderCars);
});

document.querySelectorAll(".filter-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-tab").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderCars();
  });
});

// 10. MODALS

const modalOpeners = {};

function openModal(id, opener) {
  const modal = $(id);

  // Remember what opened the modal so focus can go back to it
  modalOpeners[id] = opener || document.activeElement;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  const box = modal.querySelector(".modal-box");
  const firstField = box.querySelector("input, select, textarea");
  const target = firstField || box.querySelector("a[href], button");
  if (target) target.focus({ preventScroll: true });
}

function closeModal(id) {
  $(id).classList.add("hidden");

  if (!document.querySelector(".modal:not(.hidden)")) {
    document.body.style.overflow = "";
  }

  const opener = modalOpeners[id];
  if (opener && opener.isConnected) opener.focus();
  delete modalOpeners[id];
}

function getTopModal() {
  const openModals = document.querySelectorAll(".modal:not(.hidden)");
  return openModals.length ? openModals[openModals.length - 1] : null;
}

$("sellBtn").addEventListener("click", event => openModal("sellModal", event.currentTarget));
$("heroSellBtn").addEventListener("click", event => openModal("sellModal", event.currentTarget));
$("loginBtn").addEventListener("click", event => openModal("loginModal", event.currentTarget));

document.addEventListener("click", event => {
  const closeButton = event.target.closest("[data-close]");

  if (closeButton) {
    closeModal(closeButton.dataset.close);
  }

  if (event.target.classList.contains("modal")) {
    closeModal(event.target.id);
  }
});

document.addEventListener("keydown", event => {
  const modal = getTopModal();

  if (event.key === "Escape") {
    if (modal) {
      closeModal(modal.id);
    } else {
      setMenu(false);
    }
    return;
  }

  // Keep Tab inside the open modal
  if (event.key === "Tab" && modal) {
    const focusable = modal.querySelectorAll(
      "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])"
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

// 11. ADD CAR FORM

$("carForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("carName").value.trim();
  const brand = $("carBrand").value;
  const price = Number($("carPrice").value);
  const year = Number($("carYear").value);
  const location = $("carLocation").value.trim();
  const image = $("carImage").value.trim();
  const phone = normalizePhone($("sellerPhone").value);
  const mileageText = $("carMileage").value.trim();
  const mileage = mileageText === "" ? null : Number(mileageText);

  if (!name || !brand || !price || !year || !location || !$("sellerPhone").value.trim()) {
    showToast(t("invalidData"));
    return;
  }

  if (!isValidPhone(phone)) {
    showToast(t("invalidPhone"));
    return;
  }

  if (!Number.isInteger(year) || year < MIN_YEAR || year > MAX_YEAR) {
    showToast(t("invalidData"));
    return;
  }

  if (mileage !== null && (!Number.isFinite(mileage) || mileage < 0 || mileage > 1000000)) {
    showToast(t("invalidData"));
    return;
  }

  if (image && !isValidImageUrl(image)) {
    showToast(t("invalidData"));
    return;
  }

  const newCar = {
    id: Date.now(),
    name,
    brand,
    price,
    year,
    location,
    arLocation: location,
    mileage: mileage > 0 ? mileage : null,
    image: image || PLACEHOLDER_IMAGE,
    featured: false,
    phone
  };

  userCars.unshift(newCar);
  saveData();

  $("carForm").reset();
  $("brandFilter").value = "all";
  $("priceFilter").value = "all";
  $("yearFilter").value = "all";

  currentFilter = "all";

  document.querySelectorAll(".filter-tab").forEach(item => {
    item.classList.toggle("active", item.dataset.filter === "all");
  });

  renderCars();
  closeModal("sellModal");
  showToast(t("confirmAdd"));

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  $("cars").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
});

// 12. LOGIN DEMO

$("loginForm").addEventListener("submit", event => {
  event.preventDefault();
  showToast(t("demoMessage"));
  closeModal("loginModal");
});

// 13. MOBILE MENU

function setMenu(open) {
  $("navLinks").classList.toggle("open", open);
  $("menuBtn").setAttribute("aria-expanded", String(open));
}

$("menuBtn").addEventListener("click", () => {
  setMenu(!$("navLinks").classList.contains("open"));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => setMenu(false));
});

// 14. TOAST NOTIFICATIONS

let toastTimeout;

function showToast(message) {
  const toast = $("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// 15. STATISTICS (called only from renderCars)

function updateStats() {
  $("totalCars").textContent = formatNumber(getAllCars().length);
}

// 16. INITIALIZE WEBSITE

populateYearFilter();

$("carYear").min = MIN_YEAR;
$("carYear").max = MAX_YEAR;
$("copyYear").textContent = currentYear;

changeLanguage(currentLanguage); // translates the page and renders the cars once

console.log("AutoMarket BY MOHAMED is running!");

