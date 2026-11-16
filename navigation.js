(function () {
  const page = window.location.pathname.split("/").pop() || "index.html";
  const links = [
    { key: "nav.home", href: "index.html", pages: ["index.html", ""] },
    { key: "nav.books", href: "siri-cahaya.html", pages: ["siri-cahaya.html"] },
    {
      key: "nav.ghostwrite",
      href: "ghostwriting.html",
      pages: ["ghostwriting.html"],
    },
    {
      key: "nav.about",
      href: "profile-penulis.html",
      pages: ["profile-penulis.html"],
    },
    {
      key: "nav.wakaf",
      href: "wakaf-sudut-cahaya.html",
      pages: ["wakaf-sudut-cahaya.html", "wakaf.html"],
    },
    {
      key: "nav.contact",
      href: "services.html",
      pages: ["services.html", "perkhidmatan.html"],
    },
  ];

  const linkLabels = {
    "nav.home": "Utama",
    "nav.books": "Buku",
    "nav.ghostwrite": "Ghostwriting",
    "nav.about": "Tentang",
    "nav.wakaf": "Komuniti",
    "nav.contact": "Hubungi",
    "nav.enquire": "Tanya Sekarang",
  };

  function setToggleLabel(toggle, open) {
    const isEnglish = document.documentElement.lang === "en";
    toggle.setAttribute(
      "aria-label",
      open
        ? isEnglish
          ? "Close navigation"
          : "Tutup navigasi"
        : isEnglish
          ? "Open navigation"
          : "Buka navigasi",
    );
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

    let enquire = controls.querySelector(".nav-enquire");
    if (!enquire) {
      enquire = document.createElement("a");
      enquire.href = "services.html";
      enquire.className = "button button-gold nav-enquire";
      enquire.dataset.i18n = "nav.enquire";
      enquire.textContent = linkLabels["nav.enquire"];
      const existingToggle = controls.querySelector(".menu-toggle");
      if (existingToggle) controls.insertBefore(enquire, existingToggle);
      else controls.appendChild(enquire);
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
    inner.insertBefore(nav, controls);
    nav.className = "nav";
    nav.id = "mainNav";
    nav.setAttribute(
      "aria-label",
      document.documentElement.lang === "en"
        ? "Main navigation"
        : "Navigasi utama",
    );
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
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () =>
        setToggleLabel(toggle, toggle.getAttribute("aria-expanded") === "true"),
      );
    });

    const closeMenu = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      setToggleLabel(toggle, false);
    };
    nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });

    const language = localStorage.getItem("emyDahliaLanguage") || "ms";
    if (typeof window.setLanguage === "function") window.setLanguage(language);
    if (typeof window.applyLanguage === "function")
      window.applyLanguage(language);
  }

  document.addEventListener("DOMContentLoaded", setup);
})();
