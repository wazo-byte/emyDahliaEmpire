
(() => {
  const shelf = document.querySelector("[data-siri-shelf]");
  if (!shelf) return;

  const stage = shelf.querySelector(".siri-shelf-stage") || shelf;
  const art = shelf.querySelector("[data-shelf-art]");
  const lightButton = shelf.querySelector("[data-light-toggle]");
  const lightLabel = shelf.querySelector("[data-light-label]");
  const books = [...shelf.querySelectorAll("[data-book]")];
  const sideButtons = [...shelf.querySelectorAll("[data-cover-side]")];
  const status = shelf.querySelector("[data-shelf-status]");
  let selected = null;
  let side = "front";
  let language = document.documentElement.lang === "en" ? "en" : "ms";

  const text = {
    ms: {
      choose: "Pilih sebuah buku untuk meneroka kulitnya.",
      front: "Kulit hadapan",
      back: "Kulit belakang",
      on: "Lampu menyala",
      off: "Lampu dipadamkan"
    },
    en: {
      choose: "Select a book to explore its covers.",
      front: "Front cover",
      back: "Back cover",
      on: "Lights on",
      off: "Lights off"
    }
  };

  function updateStatus() {
    status.textContent = selected
      ? `${selected.dataset.title} · ${text[language][side]}`
      : text[language].choose;
  }

  // Pulled-out book is centred on the shelf niche, whichever slot it came from.
  function centreSelected() {
    if (!selected) return;
    selected.style.removeProperty("--pop-x");
    const stageBox = shelf.querySelector(".siri-shelf-books").getBoundingClientRect();
    const slotBox = selected.getBoundingClientRect();
    const offset = (stageBox.left + stageBox.width / 2) - (slotBox.left + slotBox.width / 2);
    selected.style.setProperty("--pop-x", `${offset.toFixed(1)}px`);
  }

  function setSide(nextSide) {
    side = nextSide;
    sideButtons.forEach(button => {
      const active = button.dataset.coverSide === side;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    books.forEach(book => book.classList.toggle("is-back", book === selected && side === "back"));
    updateStatus();
  }

  books.forEach(book => {
    book.addEventListener("click", () => {
      if (selected === book) {
        book.classList.remove("is-selected", "is-back");
        book.setAttribute("aria-pressed", "false");
        selected = null;
      } else {
        if (selected) {
          selected.classList.remove("is-selected", "is-back");
          selected.setAttribute("aria-pressed", "false");
        }
        selected = book;
        centreSelected();
        selected.classList.add("is-selected");
        selected.setAttribute("aria-pressed", "true");
      }
      setSide(side);
    });
    book.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        book.click();
      }
    });
  });

  window.addEventListener("resize", centreSelected);
  if (art && !art.complete) art.addEventListener("load", centreSelected);

  sideButtons.forEach(button => button.addEventListener("click", () => {
    if (!selected) {
      status.textContent = text[language].choose;
      return;
    }
    setSide(button.dataset.coverSide);
  }));

  lightButton.addEventListener("click", () => {
    const turnOff = shelf.dataset.lights !== "off";
    shelf.dataset.lights = turnOff ? "off" : "on";
    art.src = turnOff
      ? "../../assets/shelf/ShelfOff.png"
      : "../../assets/shelf/ShelfOn.png";
    art.alt = turnOff
      ? "Rak hiasan Siri Cahaya dengan tanglung tidak menyala"
      : "Rak hiasan Siri Cahaya dengan dua tanglung bercahaya";
    lightButton.setAttribute("aria-pressed", String(!turnOff));
    lightLabel.textContent = turnOff ? text[language].off : text[language].on;
    centreSelected();
  });

  document.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", () => {
      language = button.dataset.language;
      lightLabel.textContent = shelf.dataset.lights === "off" ? text[language].off : text[language].on;
      updateStatus();
    });
  });
})();
