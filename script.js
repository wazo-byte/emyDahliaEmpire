const WHATSAPP_NUMBER = "601158883287";

const translations = {
  ms: {
    "nav.home": "Utama", "nav.about": "Tentang", "nav.journey": "Perjalanan", "nav.books": "Buku-buku", "nav.wakaf": "Wakaf Cahaya", "nav.bimbingan": "Bimbingan Penulis", "nav.ghostwrite": "Ghost Writer", "nav.contact": "Hubungi",
    "about.eyebrow": "Kisah Saya", "about.title": "Dari pengalaman lahirlah tulisan. Dari perjalanan lahirlah Siri Cahaya.",
    "about.body1": "Saya menulis bukan sekadar untuk menceritakan kehidupan sendiri, tetapi untuk mencari makna di sebalik setiap perjalanan yang Allah izinkan berlaku.",
    "about.body2": "Ada pengalaman yang kelihatan biasa ketika dilalui, namun setelah direnungi kembali, ia membuka lapisan makna yang tidak pernah saya sedari sebelumnya.",
    "about.body3": "Daripada doa, ujian keluarga, pertemuan, kehilangan, pencarian dan kesyukuran, lahirlah Siri Cahaya. Sebuah perjalanan yang bermula sebagai kisah peribadi, tetapi akhirnya saya sedari bahawa rasa yang dilalui mungkin turut menjadi sebahagian daripada kisah orang lain.",
    "about.body4": "Kerana setiap takdir mempunyai ceritanya, dan setiap cerita mempunyai ruang untuk kita mengambil ibrah.", "about.closing": "Empat naskhah, empat perjalanan, satu amanah.", "about.read": "Baca Kisah Saya <span>→</span>", "about.profile": "Lihat Profil Penulis", "about.imageNote": "Dari pengalaman lahirlah tulisan",
    "profile.eyebrow": "03 — Profil penulis", "profile.title": "Profil Penulis Rasmi", "profile.subtitle": "Empat naskhah, empat perjalanan, satu amanah.",
    "profile.description1": "Kenali Emy Dahlia Burhanuddin melalui perjalanan penulisan, karya-karya Siri Cahaya dan pengalaman kehidupan yang menjadi asas kepada penulisan beliau.", "profile.description2": "Profil ini menghimpunkan pengenalan penulis, sinopsis rasmi empat naskhah Siri Cahaya, suara pembaca, jejak karya di perpustakaan serta inisiatif Wakaf Sudut Cahaya.", "profile.description3": "Sebuah dokumen pengenalan rasmi untuk pembaca, perpustakaan, institusi, media dan rakan kolaborasi.", "profile.read": "Baca Profil Penulis <span>↗</span>", "profile.download": "Muat Turun PDF <span>↓</span>", "reader.title": "Profil Penulis Rasmi", "reader.open": "Buka skrin penuh ↗", "reader.close": "Tutup", "reader.fallback": "Pelayar anda tidak dapat memaparkan PDF ini. <a href=\"assets/profilPenulis.pdf\" target=\"_blank\" rel=\"noopener\">Buka PDF</a>.",
    "services.eyebrow": "Ruang berkarya", "services.title": "Bina cerita yang <em>bermakna.</em>", "services.intro": "Setiap cerita bermula dengan satu idea. Pilih sokongan yang sesuai untuk membawa idea anda menjadi naskhah.", "guidance.label": "Bimbingan Penulis", "guidance.title": "Temui suara dan arah tulisan anda.", "guidance.body": "Sesi bimbingan untuk menyusun idea, membina struktur, menguatkan watak dan menjadikan proses menulis lebih jelas serta terarah.", "guidance.item1": "Idea dan konsep cerita", "guidance.item2": "Struktur dan aliran bab", "guidance.item3": "Semakan manuskrip", "guidance.cta": "Tanya tentang bimbingan <span>→</span>", "ghost.label": "Ghost Writer", "ghost.title": "Biarkan cerita anda ditulis dengan jiwa.", "ghost.body": "Perkhidmatan penulisan dari idea awal hingga manuskrip lengkap, dengan pendekatan yang menjaga suara, visi dan kerahsiaan anda.", "ghost.item1": "Penulisan buku dan memoir", "ghost.item2": "Artikel dan kandungan jenama", "ghost.item3": "Kerahsiaan dan kolaborasi", "ghost.cta": "Bincang projek anda <span>→</span>"
  },
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.journey": "The Journey", "nav.books": "The Books", "nav.wakaf": "Wakaf Cahaya", "nav.bimbingan": "Writing Guidance", "nav.ghostwrite": "Ghost Writer", "nav.contact": "Get in touch",
    "about.eyebrow": "My Story", "about.title": "From lived experiences came the words. From the journey came Siri Cahaya.",
    "about.body1": "I write not merely to tell my own story, but to seek meaning in every journey Allah has allowed me to experience.", "about.body2": "Some experiences seem ordinary as they unfold. Yet when revisited through reflection, they reveal layers of meaning I had never noticed before.", "about.body3": "From prayers, family trials, encounters, loss, spiritual searching and gratitude, Siri Cahaya was born. What began as a personal story gradually became a journey that others might recognize within their own lives.", "about.body4": "For every destiny carries a story, and every story offers an opportunity for reflection and understanding.", "about.closing": "Four books, four journeys, one entrusted purpose.", "about.read": "Read My Story <span>→</span>", "about.profile": "View Author Profile", "about.imageNote": "From lived experience came the words",
    "profile.eyebrow": "03 — Author profile", "profile.title": "Official Author Profile", "profile.subtitle": "Four books, four journeys, one entrusted purpose.", "profile.description1": "Discover Emy Dahlia Burhanuddin through her writing journey, the works of Siri Cahaya, and the life experiences that have shaped her literary voice.", "profile.description2": "This profile brings together the author's introduction, official synopses of the four Siri Cahaya titles, readers' reflections, library presence and the Wakaf Sudut Cahaya initiative.", "profile.description3": "An official introduction prepared for readers, libraries, institutions, media and potential collaborators.", "profile.read": "Read Author Profile <span>↗</span>", "profile.download": "Download PDF <span>↓</span>", "reader.title": "Official Author Profile", "reader.open": "Open full screen ↗", "reader.close": "Close", "reader.fallback": "Your browser cannot display this PDF. <a href=\"assets/profilPenulis.pdf\" target=\"_blank\" rel=\"noopener\">Open the PDF</a>.",
    "services.eyebrow": "A space to create", "services.title": "Build a story that <em>matters.</em>", "services.intro": "Every story begins with an idea. Choose the support that will help bring your idea to life.", "guidance.label": "Writing Guidance", "guidance.title": "Find your voice and direction.", "guidance.body": "Guidance sessions to shape your ideas, build structure, strengthen characters and make the writing process clearer and more purposeful.", "guidance.item1": "Story ideas and concepts", "guidance.item2": "Chapter structure and flow", "guidance.item3": "Manuscript review", "guidance.cta": "Ask about guidance <span>→</span>", "ghost.label": "Ghost Writer", "ghost.title": "Let your story be written with soul.", "ghost.body": "Writing support from first idea to complete manuscript, shaped around your voice, vision and confidentiality.", "ghost.item1": "Books and memoirs", "ghost.item2": "Articles and brand content", "ghost.item3": "Confidential collaboration", "ghost.cta": "Discuss your project <span>→</span>"
  }
};

function setLanguage(language) {
  const locale = translations[language] ? language : "ms";
  document.documentElement.lang = locale;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = translations[locale][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-language]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.language === locale)));
  if (menuToggle) menuToggle.setAttribute("aria-label", locale === "ms" ? "Buka navigasi" : "Open navigation");
  localStorage.setItem("emyDahliaLanguage", locale);
}

const whatsappFloat = document.getElementById("whatsappFloat");
if (whatsappFloat) whatsappFloat.href = `https://wa.me/${WHATSAPP_NUMBER}`;

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("mainNav");
document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.language)));
setLanguage(localStorage.getItem("emyDahliaLanguage") || "ms");
function closeMenu() {
  if (!menuToggle || !nav) return;
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", document.documentElement.lang === "ms" ? "Buka navigasi" : "Open navigation");
}
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    const isMalay = document.documentElement.lang === "ms";
    menuToggle.setAttribute("aria-label", isOpen ? (isMalay ? "Buka navigasi" : "Open navigation") : (isMalay ? "Tutup navigasi" : "Close navigation"));
    nav.classList.toggle("is-open", !isOpen);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") { closeMenu(); menuToggle.focus(); }
  });
}

const sectionNavigation = [...document.querySelectorAll(".nav a[href^='#']")];
const navigableSections = sectionNavigation
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
function setCurrentNavigation(section) {
  sectionNavigation.forEach(link => {
    const isCurrent = link.getAttribute("href") === `#${section.id}`;
    link.classList.toggle("is-current", isCurrent);
    if (isCurrent) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}
sectionNavigation.forEach(link => link.addEventListener("click", () => {
  const section = document.querySelector(link.getAttribute("href"));
  if (section) setCurrentNavigation(section);
}));
if (navigableSections.length) {
  const updateCurrentNavigation = () => {
    const headerOffset = document.querySelector(".site-header")?.offsetHeight || 0;
    let currentSection = navigableSections[0];
    navigableSections.forEach(section => {
      if (section.getBoundingClientRect().top <= headerOffset + 24) currentSection = section;
    });
    setCurrentNavigation(currentSection);
  };
  const hashSection = document.querySelector(window.location.hash);
  if (hashSection && navigableSections.includes(hashSection)) setCurrentNavigation(hashSection);
  else updateCurrentNavigation();
  window.addEventListener("scroll", updateCurrentNavigation, { passive: true });
  window.addEventListener("hashchange", updateCurrentNavigation);
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

const profileReader = document.getElementById("profileReader");
const openProfileReader = document.getElementById("openProfileReader");
if (profileReader && openProfileReader) {
  openProfileReader.addEventListener("click", () => profileReader.showModal());
  profileReader.querySelectorAll("[data-close-profile-reader]").forEach(button => button.addEventListener("click", () => profileReader.close()));
  profileReader.addEventListener("click", event => { if (event.target === profileReader) profileReader.close(); });
}
