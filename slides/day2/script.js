/* =====================================================================
   JavaScript Workshop — Deck Controller
   Handles: slide navigation, progress bar, menu drawer, the live
   in-browser code runner, and the accessibility wiring for all of it
   (ARIA roles/states, focus management, a focus-trapped dialog, and
   a screen-reader announcer for slide changes).
   ===================================================================== */

(function () {
  "use strict";

  const slides = Array.from(document.querySelectorAll(".slide"));
  const total = slides.length;
  let current = 0;

  const progressTrack = document.getElementById("progress-track");
  const progressFill = document.getElementById("progress-fill");
  const counter = document.getElementById("slide-counter");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const announcer = document.getElementById("sr-announcer");

  const menuToggle = document.getElementById("menu-toggle");
  const menuScrim = document.getElementById("menu-scrim");
  const menuDrawer = document.getElementById("menu-drawer");
  const menuClose = document.getElementById("menu-close");
  const menuList = document.getElementById("menu-list");

  const a11yToggle = document.getElementById("a11y-toggle");
  const a11yDrawer = document.getElementById("a11y-drawer");
  const a11yClose = document.getElementById("a11y-close");

  /* -------------------------------------------------------------------
     Slide semantics: give every slide an ARIA identity up front so
     screen readers announce "slide, N of TOTAL: <title>" consistently,
     independent of the visual title text.
     ------------------------------------------------------------------- */
  slides.forEach((slide, i) => {
    const title = slide.dataset.title || `Slide ${i + 1}`;
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-roledescription", "slide");
    slide.setAttribute("aria-label", `Slide ${i + 1} de ${total}: ${title}`);
  });

  function buildMenu() {
    slides.forEach((slide, i) => {
      const label = slide.dataset.title || `Slide ${i + 1}`;
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.className = "menu-item";
      btn.type = "button";
      btn.innerHTML =
        `<span class="menu-item-num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span><span>${label}</span>`;
      btn.addEventListener("click", () => {
        goTo(i);
        closeMenu();
      });
      li.appendChild(btn);
      menuList.appendChild(li);
    });
  }

  function refreshMenuHighlight() {
    const items = menuList.querySelectorAll(".menu-item");
    items.forEach((el, i) => {
      const isCurrent = i === current;
      el.classList.toggle("current", isCurrent);
      if (isCurrent) {
        el.setAttribute("aria-current", "true");
      } else {
        el.removeAttribute("aria-current");
      }
    });
  }

  function goTo(index) {
    if (index < 0 || index >= total) return;

    slides[current].classList.remove("active");
    slides[current].setAttribute("aria-hidden", "true");

    current = index;

    slides[current].classList.add("active");
    slides[current].removeAttribute("aria-hidden");
    slides[current].scrollTop = 0;

    const pct = ((current + 1) / total) * 100;
    progressFill.style.width = pct + "%";
    counter.textContent = `${String(current + 1).padStart(2, "0")} / ${total}`;

    const title = slides[current].dataset.title || `Slide ${current + 1}`;
    progressTrack.setAttribute("aria-valuenow", String(current + 1));
    progressTrack.setAttribute("aria-valuetext", `Slide ${current + 1} de ${total}: ${title}`);

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    refreshMenuHighlight();

    // Tell screen-reader / AT users the slide changed without stealing
    // keyboard focus away from the Prev/Next controls.
    announcer.textContent = `Slide ${current + 1} de ${total}: ${title}`;
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));

  document.addEventListener("keydown", (e) => {
    const openDialog = getOpenDialog();
    if (openDialog) {
      openDialog.handleKeydown(e);
      return;
    }
    if (e.target.tagName === "TEXTAREA") return; // don't hijack typing in code editors
    if (e.key === "ArrowRight" || e.key === "PageDown") { goTo(current + 1); }
    if (e.key === "ArrowLeft" || e.key === "PageUp") { goTo(current - 1); }
  });

  /* -------------------------------------------------------------------
     Reusable accessible-dialog factory, used for both the slide-index
     drawer and the accessibility panel.
     - inert while closed, so off-screen contents can never grab
       keyboard focus or be reached by screen-reader virtual cursors.
     - focus moves into the dialog on open and returns to the trigger
       button on close.
     - Tab / Shift+Tab are trapped inside the dialog while it's open.
     - only one of these dialogs is ever open at a time; opening one
       closes the other so they never fight over the shared scrim.
     ------------------------------------------------------------------- */

  const openDialogs = new Set();
  function getOpenDialog() {
    for (const d of openDialogs) if (d.isOpen()) return d;
    return null;
  }

  function createDialog({ toggleBtn, drawerEl, closeBtn, bodyClass }) {
    function isOpen() {
      return document.body.classList.contains(bodyClass);
    }

    function focusable() {
      return Array.from(
        drawerEl.querySelectorAll('button, input, [href], [tabindex]:not([tabindex="-1"])')
      ).filter((el) => el.offsetParent !== null);
    }

    function open() {
      // Only one dialog open at a time.
      openDialogs.forEach((d) => { if (d !== api && d.isOpen()) d.close(); });
      document.body.classList.add(bodyClass);
      drawerEl.removeAttribute("inert");
      toggleBtn.setAttribute("aria-expanded", "true");
      menuScrim.setAttribute("aria-hidden", "false");
      const items = focusable();
      if (items.length) items[0].focus();
    }

    function close() {
      if (!isOpen()) return;
      document.body.classList.remove(bodyClass);
      drawerEl.setAttribute("inert", "");
      toggleBtn.setAttribute("aria-expanded", "false");
      if (!getOpenDialog()) menuScrim.setAttribute("aria-hidden", "true");
      toggleBtn.focus();
    }

    function handleKeydown(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    const api = { open, close, isOpen, handleKeydown };
    toggleBtn.addEventListener("click", () => (isOpen() ? close() : open()));
    closeBtn.addEventListener("click", close);
    openDialogs.add(api);
    return api;
  }

  const menuDialog = createDialog({
    toggleBtn: menuToggle,
    drawerEl: menuDrawer,
    closeBtn: menuClose,
    bodyClass: "menu-open",
  });

  const a11yDialog = createDialog({
    toggleBtn: a11yToggle,
    drawerEl: a11yDrawer,
    closeBtn: a11yClose,
    bodyClass: "a11y-open",
  });

  menuScrim.addEventListener("click", () => {
    const open = getOpenDialog();
    if (open) open.close();
  });

  function closeMenu() { menuDialog.close(); }

  buildMenu();
  goTo(0);

  /* -------------------------------------------------------------------
     Accessibility panel: text-resize control (WCAG 1.4.4) and a
     color-scheme switcher with themes tuned for low vision and common
     color-vision deficiencies. Both preferences persist across visits.
     ------------------------------------------------------------------- */

  const FONT_MIN = 0.85;
  const FONT_MAX = 2.0;
  const FONT_STEP = 0.15;
  const FONT_STORAGE_KEY = "jsWorkshopFontScale";
  const THEME_STORAGE_KEY = "jsWorkshopTheme";

  const fontDecreaseBtn = document.getElementById("font-decrease");
  const fontIncreaseBtn = document.getElementById("font-increase");
  const fontResetBtn = document.getElementById("font-reset");
  const fontSizeValue = document.getElementById("font-size-value");
  const themeRadios = document.querySelectorAll('input[name="a11y-theme"]');
  const themeStatus = document.getElementById("theme-status");
  const THEME_NAMES = {
    default: "Padrão",
    "high-contrast": "Alto contraste",
    colorblind: "Daltonismo (vermelho-verde)",
    grayscale: "Escala de cinza",
  };

  function applyFontScale(scale) {
    const clamped = Math.min(FONT_MAX, Math.max(FONT_MIN, scale));
    document.documentElement.style.setProperty("--font-scale", clamped.toFixed(2));
    fontSizeValue.textContent = `${Math.round(clamped * 100)}%`;
    fontDecreaseBtn.disabled = clamped <= FONT_MIN;
    fontIncreaseBtn.disabled = clamped >= FONT_MAX;
    try { localStorage.setItem(FONT_STORAGE_KEY, String(clamped)); } catch (e) { /* ignore */ }
    return clamped;
  }

  let currentFontScale = 1;
  try {
    const saved = parseFloat(localStorage.getItem(FONT_STORAGE_KEY));
    if (!isNaN(saved)) currentFontScale = saved;
  } catch (e) { /* ignore */ }
  currentFontScale = applyFontScale(currentFontScale);

  fontDecreaseBtn.addEventListener("click", () => {
    currentFontScale = applyFontScale(currentFontScale - FONT_STEP);
  });
  fontIncreaseBtn.addEventListener("click", () => {
    currentFontScale = applyFontScale(currentFontScale + FONT_STEP);
  });
  fontResetBtn.addEventListener("click", () => {
    currentFontScale = applyFontScale(1);
  });

  function applyTheme(theme) {
    const key = theme || "default";
    if (key !== "default") {
      document.documentElement.setAttribute("data-theme", key);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try { localStorage.setItem(THEME_STORAGE_KEY, key); } catch (e) { /* ignore */ }
    themeRadios.forEach((r) => { r.checked = r.value === key; });
    if (themeStatus) {
      themeStatus.textContent = `Tema aplicado: ${THEME_NAMES[key] || key}`;
    }
  }

  let savedTheme = "default";
  try {
    savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "default";
  } catch (e) { /* ignore */ }
  applyTheme(savedTheme);

  themeRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) applyTheme(radio.value);
    });
  });

  /* -------------------------------------------------------------------
     Live code runner
     Each .code-panel with a data-runner attribute gets a textarea
     (pre-filled with starter code), an output panel, and Run/Reset
     buttons. Code runs inside a Function() sandbox with console.log
     captured into the output panel. Errors are caught and shown in
     the brick-red error state rather than breaking the deck.

     Accessibility wiring per panel:
     - the textarea gets a real aria-label built from its panel title
       ("hello.js", "exercise-2.js", ...) so it isn't announced as a
       bare, unlabelled text box.
     - the Run/Reset buttons get aria-describedby pointing at the same
       title, so a screen reader announces "Run, button, hello.js"
       instead of nine identical unlabelled "Run" buttons.
     - the output panel already carries role="status" + aria-live in
       the markup, so a screen reader speaks the result automatically
       after Run is pressed — no extra focus movement required.
     ------------------------------------------------------------------- */

  const runners = document.querySelectorAll("[data-runner]");
  let titleIdCounter = 0;

  runners.forEach((panel) => {
    const textarea = panel.querySelector("textarea.code-input");
    const output = panel.querySelector(".output-panel");
    const runBtn = panel.querySelector(".run-btn");
    const resetBtn = panel.querySelector(".reset-btn");
    const titleEl = panel.querySelector(".code-panel-title");
    if (!textarea || !output || !runBtn) return;

    if (titleEl) {
      if (!titleEl.id) {
        titleIdCounter += 1;
        titleEl.id = `code-panel-title-${titleIdCounter}`;
      }
      const label = `Exemplo de código JavaScript editável: ${titleEl.textContent.trim()}`;
      textarea.setAttribute("aria-label", label);
      runBtn.setAttribute("aria-describedby", titleEl.id);
      if (resetBtn) resetBtn.setAttribute("aria-describedby", titleEl.id);
      output.setAttribute("aria-label", `Saída de ${titleEl.textContent.trim()}`);
    }

    const starter = textarea.value;

    function run() {
      const lines = [];
      const fakeConsole = {
        log: (...args) => lines.push(args.map(stringify).join(" ")),
        error: (...args) => lines.push("Erro: " + args.map(stringify).join(" ")),
        warn: (...args) => lines.push("Aviso: " + args.map(stringify).join(" ")),
      };

      output.classList.remove("has-error");
      try {
        const fn = new Function("console", textarea.value);
        fn(fakeConsole);
        output.textContent = lines.length ? lines.join("\n") : "";
        if (!lines.length) {
          output.textContent = "(Executado sem saída de console.log.)";
        }
      } catch (err) {
        output.classList.add("has-error");
        output.textContent = "⚠ " + err.message;
      }
    }

    function stringify(v) {
      if (typeof v === "object" && v !== null) {
        try { return JSON.stringify(v); } catch (e) { return String(v); }
      }
      return String(v);
    }

    runBtn.addEventListener("click", run);
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        textarea.value = starter;
        output.textContent = "";
        output.classList.remove("has-error");
      });
    }

    // Allow Ctrl/Cmd+Enter to run from inside the textarea
    textarea.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        run();
      }
    });
  });
})();
