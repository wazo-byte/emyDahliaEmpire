const WHATSAPP_NUMBER = "60162062223";

const whatsappFloat = document.getElementById('whatsappFloat');
if (whatsappFloat) {
  whatsappFloat.href = `https://wa.me/${WHATSAPP_NUMBER}`;
}

const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');

function closeMenu() {
  if (!mobileToggle || !nav) return;

  nav.classList.remove('open');
  mobileToggle.setAttribute('aria-expanded', 'false');
  mobileToggle.setAttribute('aria-label', 'Open menu');
}

if (mobileToggle && nav) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
    mobileToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    nav.classList.toggle('open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      mobileToggle.focus();
    }
  });
}

document.querySelectorAll('[data-book]').forEach((link) => {
  link.addEventListener('click', () => {
    const intentSelect = document.getElementById('intent');
    const detailsField = document.getElementById('details');

    if (intentSelect) {
      intentSelect.value = 'Order a book';
    }

    if (detailsField) {
      detailsField.value = '';
    }
  });
});

document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    const service = link.getAttribute('data-service');
    const intentSelect = document.getElementById('intent');
    const detailsField = document.getElementById('details');

    if (intentSelect) {
      intentSelect.value = service === 'Ghostwriting' ? 'Ghostwriting' : 'Consultation / writing guidance';
    }

    if (detailsField) {
      detailsField.value = '';
    }
  });
});

const inquiryForm = document.getElementById('inquiryForm');
const fallbackBox = document.getElementById('whatsappFallback');
const manualLink = document.getElementById('manualLink');

if (inquiryForm) {
  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(inquiryForm);
    const name = String(data.get('name') || '').trim();
    const intent = String(data.get('intent') || '');
    const details = String(data.get('details') || '').trim();
    const message = [
      `Hello, I'd like to get in touch about ${intent.toLowerCase()}.`,
      '',
      `My name is ${name}.`,
      '',
      details,
    ].join('\n');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const opened = window.open(url, '_blank');

    if (opened) {
      if (fallbackBox) fallbackBox.hidden = true;
      inquiryForm.reset();
    } else {
      if (fallbackBox) fallbackBox.hidden = false;
      if (manualLink) manualLink.href = url;
    }
  });
}

const currentYear = document.getElementById('currentYear');
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
