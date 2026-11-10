(function () {
  const page = window.location.pathname.split("/").pop() || "index.html";
  const links = [
    { key: "nav.home", href: "index.html#home", pages: ["index.html", ""] },
    { key: "nav.story", href: "kisah-saya.html", pages: ["kisah-saya.html"] },
    { key: "nav.profile", href: "profile-penulis.html", pages: ["profile-penulis.html"] },
    { key: "nav.books", href: "siri-cahaya.html", pages: ["siri-cahaya.html"] },
    { key: "nav.wakaf", href: "wakaf-sudut-cahaya.html", pages: ["wakaf-sudut-cahaya.html", "wakaf.html"] },
    { key: "nav.sofri", href: "capt-Sofri.html", pages: ["capt-Sofri.html"] },
    { key: "nav.contact", href: "services.html#contact", pages: ["services.html", "perkhidmatan.html"] }
  ];

  const linkLabels = {
    "nav.home": "Utama",
    "nav.story": "Kisah Saya",
    "nav.profile": "Profil Penulis",
    "nav.books": "Karya",
    "nav.wakaf": "Wakaf",
    "nav.sofri": "Capt. Sofri",
    "nav.contact": "Hubungi"
  };

  const footerMarkup = `
    <div class="container footer-top">
      <a class="brand footer-brand" href="index.html#home">
        <img class="brand-logo" src="assets/logo.jpeg" alt="">
        <span class="brand-name">EMY DAHLIA <b>EMPIRE</b></span>
      </a>
      <p data-i18n="footer.message">Semoga setiap cerita mendekatkan kita kepada cahaya-Nya.</p>
      <div class="footer-social">
        <small data-i18n="footer.social">Ikuti kami</small>
        <div>
          <a href="https://www.facebook.com/emydahliaempire/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
          <a href="https://www.instagram.com/emydahliaempire/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          <a href="https://www.tiktok.com/@emydahliaempire" target="_blank" rel="noopener noreferrer" aria-label="TikTok">TikTok</a>
        </div>
      </div>
      <a class="back-top" href="index.html#home" data-i18n="footer.top">Kembali ke atas ↑</a>
    </div>
    <div class="container footer-bottom">
      <span data-i18n="footer.copyright">© <span id="currentYear">2026</span> Emy Dahlia Empire. Hak cipta terpelihara.</span>
      <span data-i18n="footer.values">Iman · Harapan · Renungan</span>
    </div>`;

  function setToggleLabel(toggle, open) {
    const isEnglish = document.documentElement.lang === "en";
    toggle.setAttribute("aria-label", open
      ? (isEnglish ? "Close navigation" : "Tutup navigasi")
      : (isEnglish ? "Open navigation" : "Buka navigasi"));
  }

  function setup() {
    const header = document.querySelector(".site-header");
    const inner = header && header.querySelector(".header-inner");
    if (!inner) return;

    let controls = inner.querySelector(".header-controls");
    if (!controls) {
      controls = document.createElement("div");
      controls.className = "header-controls";
      inner.appendChild(controls);
    }

    let toggle = controls.querySelector(".menu-toggle");
    if (!toggle) {
      toggle = document.createElement("button");
      toggle.className = "menu-toggle";
      toggle.type = "button";
      toggle.innerHTML = "<span></span><span></span>";
      controls.appendChild(toggle);
    }
    toggle.id = "menuToggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "mainNav");
    setToggleLabel(toggle, false);

    let nav = inner.querySelector(".nav");
    if (!nav) {
      nav = document.createElement("nav");
      inner.appendChild(nav);
    }
    nav.className = "nav";
    nav.id = "mainNav";
    nav.setAttribute("aria-label", document.documentElement.lang === "en" ? "Main navigation" : "Navigasi utama");
    nav.setAttribute("data-i18n-aria-label", "nav.aria");
    nav.replaceChildren();

    links.forEach(({ key, href, pages }) => {
      const link = document.createElement("a");
      link.href = href;
      link.dataset.i18n = key;
      link.textContent = linkLabels[key];
      if (pages.includes(page)) {
        link.classList.add("is-current");
        link.setAttribute("aria-current", "page");
      }
      nav.appendChild(link);
    });

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      setToggleLabel(toggle, open);
    });
    document.querySelectorAll("[data-language]").forEach(button => {
      button.addEventListener("click", () => setToggleLabel(toggle, toggle.getAttribute("aria-expanded") === "true"));
    });

    const closeMenu = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      setToggleLabel(toggle, false);
    };
    nav.addEventListener("click", event => {
      if (event.target instanceof HTMLAnchorElement) closeMenu();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });

    let footer = document.querySelector(".site-footer");
    if (!footer) {
      footer = document.createElement("footer");
      footer.className = "site-footer";
      document.body.appendChild(footer);
    }
    footer.innerHTML = footerMarkup;

    const language = localStorage.getItem("emyDahliaLanguage") || "ms";
    if (typeof window.setLanguage === "function") window.setLanguage(language);
    if (typeof window.applyLanguage === "function") window.applyLanguage(language);
    const year = footer.querySelector("#currentYear");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", setup);
})();
