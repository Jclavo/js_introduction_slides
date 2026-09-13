# JavaScript Workshop — Presentation Script

A facilitator's run-of-show for `index.html`. Total runtime is designed for
roughly **3–3.5 hours** including exercises, with natural break points marked
below. Timings are guidance, not a contract — let the feedback check-ins
(slide 15, and the pairing/challenge moments) actually adjust your pace.

Open `index.html` in any modern browser before the session starts and click
through once to confirm the code runners work on the room's Wi-Fi/offline
setup (they need no internet access once the fonts have loaded).

---

## Before you start

- Confirm every participant can open `index.html` locally (no server needed —
  it's plain HTML/CSS/JS).
- Have each person open their browser's developer console once, live, before
  slide 1 — half the "setup" friction disappears if this happens early.
- Mention the slide-index button (top right, hamburger icon) — it lets you or
  a participant jump straight to any slide if you get a question out of order.

---

## Slide 1 — Welcome (2 min)

Say what the workshop *is* and *isn't*: a from-scratch introduction, not a
framework or React workshop. Point out that every code block with a "Run"
button is live — they'll be typing directly into these slides all day, not
just watching.

## Slide 2 — Agenda & outcomes (3 min)

Read the six blocks aloud, but spend more time on the **learning outcomes**
card than the agenda card — outcomes are what participants will actually be
able to check for themselves at the end.

## Slide 3 — How we'll work (3 min)

Introduce the four callout types once, clearly, so you don't have to explain
them again when they appear later. This is also a good moment to set
expectations about pairing: ask people to find a partner now if the room
allows for it.

**Transition:** "With that out of the way — what actually *is* JavaScript?"

---

## Block 1 — What is JavaScript? (~15 min)

### Slide 4 — A language built in ten days

The Mocha → LiveScript → JavaScript naming history is a good hook — it
usually gets a laugh and makes the point that "JavaScript" and "Java" are
unrelated, which is a genuinely common point of confusion.

### Slide 5 — Where JavaScript runs

Keep this brief for a browser-focused workshop: the goal is just that
participants know *why* Node.js is optional today, not a Node.js tutorial.
Use the real-world callout (checkout button vs. payment processing) to ground
the browser/server split in something they've experienced as a user.

**Break point:** this is a reasonable spot for a 5-minute pause if the room
needs one before setup.

---

## Block 2 — Environment setup (~20 min)

### Slide 6 — What you need on your machine

Walk the room through opening dev tools live (F12 / Cmd+Option+I) rather than
just reading the shortcut off the slide. If anyone needs to install VS Code
or Node.js, this is the moment — don't let it bleed into later blocks.

### Slide 7 — Verify & try it (pair programming)

This is the first hands-on moment and the first pairing callout. Give it a
full 5–8 minutes even though the task is small — the goal is comfort with the
Run button and the console, not the code itself. Walk the room while pairs
work.

**Feedback moment:** ask for a quick show of hands — "who got a green output,
who got an error?" — before moving on. Errors here are a good sign people are
actually experimenting.

---

## Block 3 — First steps (~15 min)

### Slide 8 — Hello World

Run the two `console.log` lines live before letting participants edit them.
Emphasize that `console.log` is the tool they'll use constantly for the rest
of the workshop (and beyond) to see what their code is doing.

### Slide 9 — Linking a script

This is more reading than typing — the HTML snippet isn't in a live runner
since it needs a real file and `<script>` tag to demonstrate properly. If
time allows, have participants actually create `index.html` + `script.js` on
their own machine here rather than just reading the slide.

**Break point:** good spot for a longer break (10–15 min) before syntax.

---

## Block 4 — Basic syntax (~25 min)

### Slide 10 — Variables & types

Run the starter code once as-is, then modify one value live (e.g. change
`attendeeCount`) and re-run, so participants see that editing + re-running is
the whole workflow. Cover `const` vs. `let` vs. `var` as a quick decision
rule: "default to `const`; switch to `let` the moment you need to reassign."

### Slide 11 — Operators

The `===` vs `==` distinction is worth slowing down for — it's one of the
most common sources of bugs for newcomers. Run the `"17" === 17` /
`"17" == 17` pair specifically and ask the room to predict the output before
you press Run.

---

## Block 5 — Arithmetic operations (~20 min)

### Slide 12 — Doing math in JavaScript

Run each line one at a time rather than all at once the first time through —
pause on the `"10" + 4` lines specifically, since string concatenation vs.
numeric addition is the single most common "gotcha" question you'll get.

### Slide 13 — Shortcuts (real-world callout)

Frame `+=`, `-=`, `++`, `--` as *shorthand*, not new concepts — they're doing
exactly the same thing as the full `x = x + 1` form. The real-world callout
(shopping cart, score, view counter) helps this land as something they've
already seen as users.

**Break point:** short break before exercises — this is where the workshop
shifts from mostly-watching to mostly-doing.

---

## Block 6 — Exercises (~45–60 min)

### Slide 14 — Three progressive exercises

Structure for each exercise: **2 minutes explaining the prompt → participants
work independently (or in pairs) → 1–2 minutes debrief before moving on.**
Don't reveal hints or solutions until participants have attempted the
exercise — the `<details>` disclosures are collapsed by default for exactly
this reason.

- **Exercise 1** (variables warm-up) should take almost everyone under 5
  minutes — if it's taking longer, that's a signal to slow down and revisit
  Block 4.
- **Exercise 2** (restaurant bill) is the first exercise that chains two
  operations together. Walk the room during this one.
- **Exercise 3** (even or odd) introduces the idea of "no `if` needed" —
  flag that a real conditional would normally be used here, and that they'll
  see `if` in a follow-up session.

Use the progressive-challenge callout for anyone who finishes all three
early, so the room doesn't stall waiting for the last few participants.

---

## Slide 15 — Wrap-up & next steps (10 min)

Read the recap list aloud and actually pause on each bullet — it doubles as a
final "does everyone recognize this" check. Close with the feedback
check-in: ask for a 1–5 confidence rating (show of hands or in whatever chat
tool the room uses) before ending the session. Use that number to decide
whether the natural next session opens with a review of today or moves
straight into conditionals and functions.

---

## Facilitator quick-reference: slide → block map

| Slide | Title | Block |
|---|---|---|
| 1 | Welcome | — |
| 2 | Agenda & outcomes | — |
| 3 | How we'll work | — |
| 4 | A language built in ten days | 1. What is JavaScript? |
| 5 | Where JavaScript runs | 1. What is JavaScript? |
| 6 | What you need on your machine | 2. Environment setup |
| 7 | Verify & try it | 2. Environment setup |
| 8 | Hello World | 3. First steps |
| 9 | Linking a script | 3. First steps |
| 10 | Variables & types | 4. Basic syntax |
| 11 | Operators | 4. Basic syntax |
| 12 | Doing math in JavaScript | 5. Arithmetic operations |
| 13 | Shortcuts | 5. Arithmetic operations |
| 14 | Three progressive exercises | 6. Exercises |
| 15 | Wrap-up & next steps | — |
