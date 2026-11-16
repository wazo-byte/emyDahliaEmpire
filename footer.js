async function loadFooter() {
  const placeholder = document.querySelector("[data-footer]");
  if (!placeholder) {
    throw new Error("Footer placeholder is missing from this page.");
  }

  const footerUrl = new URL("footer.html", window.location.href);
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
