(function () {
  const page = window.location.pathname.split("/").pop() || "index.html";
  const links = [
    { key: "nav.home", href: "index.html", pages: ["index.html", ""] },
    { key: "nav.story", href: "kisah-saya.html", pages: ["kisah-saya.html"] },
    { key: "nav.books", href: "siri-cahaya.html", pages: ["siri-cahaya.html"] },
    { key: "nav.wakaf", href: "wakaf-sudut-cahaya.html", pages: ["wakaf-sudut-cahaya.html", "wakaf.html"] },
    { key: "nav.contact", href: "services.html#contact", pages: ["services.html", "perkhidmatan.html"] }
  ];

  function closeMenu(nav, toggle) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", document.documentElement.lang === "en" ? "Open navigation" : "Buka navigasi");
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

    const nav = inner.querySelector(".nav") || document.createElement("nav");
    const hadNav = Boolean(nav.parentElement);
    nav.className = "nav";
    nav.id = "mainNav";
    nav.setAttribute("aria-label", "Navigasi utama");
    nav.setAttribute("data-i18n-aria-label", "nav.aria");
    nav.innerHTML = "";
    links.forEach(({ key, href, pages }) => {
      const link = document.createElement("a");
      link.href = href;
      link.dataset.i18n = key;
      link.textContent = key === "nav.home" ? "Utama" : key === "nav.story" ? "Kisah Saya" : key === "nav.books" ? "Siri Cahaya" : key === "nav.wakaf" ? "Wakaf Sudut Cahaya" : "Hubungi";
      if (pages.includes(page)) {
        link.classList.add("is-current");
        link.setAttribute("aria-current", "page");
      }
      nav.appendChild(link);
    });
    if (!hadNav) inner.appendChild(nav);

    if (!hadNav) toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open
        ? (document.documentElement.lang === "en" ? "Open navigation" : "Buka navigasi")
        : (document.documentElement.lang === "en" ? "Close navigation" : "Tutup navigasi"));
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => closeMenu(nav, toggle)));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu(nav, toggle);
    });
    const language = localStorage.getItem("emyDahliaLanguage") || "ms";
    if (typeof window.setLanguage === "function") window.setLanguage(language);
    if (typeof window.applyLanguage === "function") window.applyLanguage(language);
  }

  document.addEventListener("DOMContentLoaded", setup);
})();
