const FOOTER_SCRIPT_URL = new URL(document.currentScript?.src || "js/footer.js", window.location.href);

async function loadFooter() {
  const placeholder = document.querySelector("[data-footer]");
  if (!placeholder) {
    throw new Error("Footer placeholder is missing from this page.");
  }

  const scriptUrl = FOOTER_SCRIPT_URL;
  const footerUrl = new URL("../pages/footer/footer.html", scriptUrl);
  const response = await fetch(footerUrl);
  if (!response.ok) {
    throw new Error(`Failed to load footer.html: ${response.status}`);
  }

  const template = document.createElement("template");
  template.innerHTML = await response.text();
  const footer = template.content.firstElementChild;
  if (!footer || !footer.matches("footer.site-footer")) {
    throw new Error("footer.html must contain a site-footer element.");
  }

  footer.querySelectorAll('a[href="index.html#home"]').forEach((link) => {
    link.href = new URL("../index.html#home", scriptUrl).href;
  });
  const logo = footer.querySelector(".brand-logo");
  if (logo) logo.src = new URL("../assets/logos/logo.jpeg", scriptUrl).href;

  placeholder.replaceWith(template.content);

  const updateYear = () => {
    const year = document.querySelector("#currentYear");
    if (year) year.textContent = String(new Date().getFullYear());
  };
  updateYear();
  document
    .querySelectorAll("[data-language]")
    .forEach((button) => button.addEventListener("click", updateYear));

  if (typeof window.setLanguage === "function") {
    window.setLanguage(localStorage.getItem("emyDahliaLanguage") || "ms");
  }
  if (typeof window.applyLanguage === "function") window.applyLanguage();
}

document.addEventListener("DOMContentLoaded", () => {
  loadFooter().catch((error) => {
    console.error("Unable to load the shared footer.", error);
  });
});
