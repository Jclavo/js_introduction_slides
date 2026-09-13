/* =====================================================================
   JavaScript Workshop — Deck Controller
   Handles: slide navigation, progress bar, menu drawer, and the live
   in-browser code runner used by demo and exercise slides.
   ===================================================================== */

(function () {
  "use strict";

  const slides = Array.from(document.querySelectorAll(".slide"));
  const total = slides.length;
  let current = 0;

  const progressFill = document.getElementById("progress-fill");
  const counter = document.getElementById("slide-counter");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const menuToggle = document.getElementById("menu-toggle");
  const menuScrim = document.getElementById("menu-scrim");
  const menuList = document.getElementById("menu-list");

  function buildMenu() {
    slides.forEach((slide, i) => {
      const label = slide.dataset.title || `Slide ${i + 1}`;
      const btn = document.createElement("button");
      btn.className = "menu-item";
      btn.innerHTML =
        `<span class="menu-item-num">${String(i + 1).padStart(2, "0")}</span><span>${label}</span>`;
      btn.addEventListener("click", () => {
        goTo(i);
        closeMenu();
      });
      menuList.appendChild(btn);
    });
  }

  function refreshMenuHighlight() {
    Array.from(menuList.children).forEach((el, i) => {
      el.classList.toggle("current", i === current);
    });
  }

  function goTo(index) {
    if (index < 0 || index >= total) return;
    slides[current].classList.remove("active");
    current = index;
    slides[current].classList.add("active");
    slides[current].scrollTop = 0;

    const pct = ((current + 1) / total) * 100;
    progressFill.style.width = pct + "%";
    counter.textContent = `${String(current + 1).padStart(2, "0")} / ${total}`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    refreshMenuHighlight();
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));

  document.addEventListener("keydown", (e) => {
    if (document.body.classList.contains("menu-open")) {
      if (e.key === "Escape") closeMenu();
      return;
    }
    if (e.target.tagName === "TEXTAREA") return; // don't hijack typing in code editors
    if (e.key === "ArrowRight" || e.key === "PageDown") { goTo(current + 1); }
    if (e.key === "ArrowLeft" || e.key === "PageUp") { goTo(current - 1); }
  });

  function openMenu() { document.body.classList.add("menu-open"); }
  function closeMenu() { document.body.classList.remove("menu-open"); }
  menuToggle.addEventListener("click", openMenu);
  menuScrim.addEventListener("click", closeMenu);

  buildMenu();
  goTo(0);

  /* -------------------------------------------------------------------
     Live code runner
     Each .code-panel with a data-runner attribute gets a textarea
     (pre-filled with starter code) an output panel, and Run/Reset
     buttons. Code runs inside a Function() sandbox with console.log
     captured into the output panel. Errors are caught and shown in
     the brick-red error state rather than breaking the deck.
     ------------------------------------------------------------------- */

  const runners = document.querySelectorAll("[data-runner]");

  runners.forEach((panel) => {
    const textarea = panel.querySelector("textarea.code-input");
    const output = panel.querySelector(".output-panel");
    const runBtn = panel.querySelector(".run-btn");
    const resetBtn = panel.querySelector(".reset-btn");
    if (!textarea || !output || !runBtn) return;

    const starter = textarea.value;

    function run() {
      const lines = [];
      const fakeConsole = {
        log: (...args) => lines.push(args.map(stringify).join(" ")),
        error: (...args) => lines.push("Error: " + args.map(stringify).join(" ")),
        warn: (...args) => lines.push("Warning: " + args.map(stringify).join(" ")),
      };

      output.classList.remove("has-error");
      try {
        const fn = new Function("console", textarea.value);
        fn(fakeConsole);
        output.textContent = lines.length ? lines.join("\n") : "";
        if (!lines.length) {
          output.textContent = "(Ran with no console.log output.)";
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
