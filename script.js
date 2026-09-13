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
    if (isMenuOpen()) {
      handleMenuKeydown(e);
      return;
    }
    if (e.target.tagName === "TEXTAREA") return; // don't hijack typing in code editors
    if (e.key === "ArrowRight" || e.key === "PageDown") { goTo(current + 1); }
    if (e.key === "ArrowLeft" || e.key === "PageUp") { goTo(current - 1); }
  });

  /* -------------------------------------------------------------------
     Menu drawer: a real accessible dialog.
     - inert while closed, so its (off-screen) contents can never grab
       keyboard focus or be reached by screen-reader virtual cursors.
     - focus moves into the dialog on open and returns to the trigger
       button on close.
     - Tab / Shift+Tab are trapped inside the dialog while it's open.
     ------------------------------------------------------------------- */

  function isMenuOpen() {
    return document.body.classList.contains("menu-open");
  }

  function focusableInDrawer() {
    return Array.from(
      menuDrawer.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')
    ).filter((el) => el.offsetParent !== null);
  }

  function openMenu() {
    document.body.classList.add("menu-open");
    menuDrawer.removeAttribute("inert");
    menuToggle.setAttribute("aria-expanded", "true");
    menuScrim.setAttribute("aria-hidden", "false");
    const focusables = focusableInDrawer();
    if (focusables.length) focusables[0].focus();
  }

  function closeMenu() {
    if (!isMenuOpen()) return;
    document.body.classList.remove("menu-open");
    menuDrawer.setAttribute("inert", "");
    menuToggle.setAttribute("aria-expanded", "false");
    menuScrim.setAttribute("aria-hidden", "true");
    menuToggle.focus();
  }

  function handleMenuKeydown(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeMenu();
      return;
    }
    if (e.key !== "Tab") return;

    const focusables = focusableInDrawer();
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  menuToggle.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);
  menuScrim.addEventListener("click", closeMenu);

  buildMenu();
  goTo(0);

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
