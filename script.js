// Keep the existing WhatsApp contact destination from the original website.
const WHATSAPP_NUMBER = "60162062223";

const whatsappFloat = document.getElementById("whatsappFloat");
if (whatsappFloat) whatsappFloat.href = `https://wa.me/${WHATSAPP_NUMBER}`;

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("mainNav");
function closeMenu() {
  if (!menuToggle || !nav) return;
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    nav.classList.toggle("is-open", !isOpen);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") { closeMenu(); menuToggle.focus(); }
  });
}

document.querySelectorAll("[data-book]").forEach(link => {
  link.addEventListener("click", () => {
    const intent = document.getElementById("intent");
    const details = document.getElementById("details");
    if (intent) intent.value = "Book enquiry";
    if (details) details.value = `I would like to enquire about: ${link.dataset.book}.`;
  });
});
document.querySelectorAll("[data-interest]").forEach(link => {
  link.addEventListener("click", () => {
    const intent = document.getElementById("intent");
    const details = document.getElementById("details");
    if (intent) intent.value = link.dataset.interest;
    if (details) details.value = `I would like to know more about ${link.dataset.interest}.`;
  });
});

const form = document.getElementById("inquiryForm");
const fallback = document.getElementById("whatsappFallback");
const manualLink = document.getElementById("manualLink");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const intent = String(data.get("intent") || "General enquiry");
    const details = String(data.get("details") || "").trim();
    const message = ["Assalamualaikum Emy Dahlia Empire,", "", `My name is ${name}.`, `I'm interested in: ${intent}.`, "", details].join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const popup = window.open(url, "_blank");
    if (popup) {
      popup.opener = null;
      if (fallback) fallback.hidden = true;
      form.reset();
    } else {
      if (fallback) fallback.hidden = false;
      if (manualLink) manualLink.href = url;
    }
  });
}
const year = document.getElementById("currentYear");
if (year) year.textContent = String(new Date().getFullYear());
