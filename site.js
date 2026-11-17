const EDE = {
  phone: "601158883287",
  lang:
    localStorage.getItem("emyDahliaLanguage") ||
    localStorage.getItem("ede-language") ||
    "ms",
};

function t(node) {
  return node.dataset[EDE.lang] || node.dataset.ms || node.textContent;
}
function applyLanguage() {
  document.documentElement.lang = EDE.lang;
  document.querySelectorAll("[data-menu]").forEach((button) => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute(
      "aria-label",
      EDE.lang === "en"
        ? open
          ? "Close navigation"
          : "Open navigation"
        : open
          ? "Tutup navigasi"
          : "Buka navigasi",
    );
  });
  document.querySelectorAll("[data-site-nav]").forEach((nav) => {
    nav.setAttribute(
      "aria-label",
      EDE.lang === "en" ? "Main navigation" : "Navigasi utama",
    );
  });
  document.querySelectorAll("[data-ms]").forEach((node) => {
    if (!node.querySelector("input, select, textarea"))
      node.innerHTML = t(node);
  });
  document.querySelectorAll("[data-ms-placeholder]").forEach((node) => {
    node.placeholder =
      node.dataset[`${EDE.lang}Placeholder`] || node.dataset.msPlaceholder;
  });
  document
    .querySelectorAll("[data-language]")
    .forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.language === EDE.lang),
      ),
    );
}
function nav() {
  const page = location.pathname.split("/").pop() || "index.html";
  const items = [
    ["index.html", "Utama", "Home"],
    ["siri-cahaya.html", "Buku", "Books"],
    ["ghostwriting.html", "Dunia Penulisan", "World of Writing"],
    ["profile-penulis.html", "Tentang", "About"],
    ["jejak-cahaya.html", "Jejak Cahaya", "Trails of Light"],
    ["services.html", "Hubungi", "Contact"],
  ];
  document.querySelectorAll("header .brand").forEach((brand) => {
    if (!brand.querySelector(".brand-logo")) {
      const logo = document.createElement("img");
      logo.className = "brand-logo";
      logo.src = "assets/logo.jpeg";
      logo.alt = "Emy Dahlia Empire";
      brand.prepend(logo);
    }
  });
  document.querySelectorAll("[data-site-nav]").forEach((nav) => {
    nav.id = "mainNav";
    nav.setAttribute(
      "aria-label",
      EDE.lang === "en" ? "Main navigation" : "Navigasi utama",
    );
    nav.innerHTML = items
      .map(
        ([href, ms, en]) =>
          `<a href="${href}"${href === page ? ' aria-current="page"' : ""} data-ms="${ms}" data-en="${en}">${EDE.lang === "en" ? en : ms}</a>`,
      )
      .join("");
  });
}
function shell() {
  document.querySelectorAll("[data-menu]").forEach((button) => {
    button.addEventListener("click", () => {
      const nav = button.closest("header").querySelector("nav");
      const open = nav.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
      applyLanguage();
    });
  });
  document.querySelectorAll("[data-site-nav]").forEach((nav) => {
    const closeMenu = () => {
      nav.classList.remove("open");
      const button = nav.closest("header").querySelector("[data-menu]");
      if (!button) return;
      button.setAttribute("aria-expanded", "false");
      applyLanguage();
    };
    nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        closeMenu();
        nav.closest("header").querySelector("[data-menu]")?.focus();
      }
    });
  });
  document.querySelectorAll("[data-language]").forEach((button) =>
    button.addEventListener("click", () => {
      EDE.lang = button.dataset.language;
      localStorage.setItem("emyDahliaLanguage", EDE.lang);
      applyLanguage();
    }),
  );
}
function contactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = (key) => String(data.get(key) || "").trim();
    const message = [
      `${EDE.lang === "en" ? "Hello" : "Assalamualaikum"} Emy Dahlia Empire,`,
      "",
      `${EDE.lang === "en" ? "Name" : "Nama"}: ${value("name")}`,
      `${EDE.lang === "en" ? "Contact" : "Hubungan"}: ${value("contact")}`,
      `${EDE.lang === "en" ? "Project" : "Projek"}: ${value("project")}`,
      "",
      value("message"),
    ].join("\n");
    window.open(
      `https://wa.me/${EDE.phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener",
    );
  });
}
document.addEventListener("DOMContentLoaded", () => {
  nav();
  applyLanguage();
  shell();
  contactForm();
});
