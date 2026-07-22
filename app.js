/* ===========================================================
   Day Skipper Theory Trainer — app logic
   Plain browser JS, no build step. Works from file:// or Pages.
   =========================================================== */

(function () {
  "use strict";

  // ----- Element handles -----
  const el = (id) => document.getElementById(id);
  const startScreen = el("startScreen");
  const quizScreen = el("quizScreen");
  const resultScreen = el("resultScreen");

  const topicSelect = el("topicSelect");
  const lengthSelect = el("lengthSelect");
  const shuffleChk = el("shuffleChk");
  const startBtn = el("startBtn");

  const topicChip = el("topicChip");
  const counter = el("counter");
  const progressFill = el("progressFill");
  const qImage = el("qImage");
  const questionText = el("questionText");
  const optionsList = el("optionsList");
  const feedback = el("feedback");
  const feedbackHead = el("feedbackHead");
  const feedbackExplain = el("feedbackExplain");
  const nextBtn = el("nextBtn");
  const quitBtn = el("quitBtn");

  const scorePill = el("scorePill");
  const scoreText = el("scoreText");

  const resultPercent = el("resultPercent");
  const resultFraction = el("resultFraction");
  const resultMessage = el("resultMessage");
  const reviewList = el("reviewList");
  const restartBtn = el("restartBtn");
  const retryWrongBtn = el("retryWrongBtn");

  const LETTERS = ["A", "B", "C", "D", "E", "F"];

  // ----- Session state -----
  let deck = [];        // questions for this run
  let index = 0;        // current question index
  let score = 0;        // correct count
  let answered = false; // has current question been answered
  let results = [];     // { question, chosen, correct }

  // ----- Utilities -----
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function show(screen) {
    [startScreen, quizScreen, resultScreen].forEach((s) => (s.hidden = s !== screen));
  }

  // ----- Populate topic dropdown -----
  function buildTopicList() {
    const topics = [...new Set(QUESTIONS.map((q) => q.category))].sort();
    const mixed = document.createElement("option");
    mixed.value = "__all__";
    mixed.textContent = `Mixed — all topics (${QUESTIONS.length} questions)`;
    topicSelect.appendChild(mixed);

    topics.forEach((t) => {
      const count = QUESTIONS.filter((q) => q.category === t).length;
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = `${t} (${count})`;
      topicSelect.appendChild(opt);
    });
  }

  // ----- Start a test -----
  function startTest(pool) {
    let selected = pool;
    if (!selected) {
      const topic = topicSelect.value;
      selected =
        topic === "__all__"
          ? QUESTIONS.slice()
          : QUESTIONS.filter((q) => q.category === topic);
    }

    if (shuffleChk.checked) selected = shuffle(selected);

    const wanted = parseInt(lengthSelect.value, 10);
    if (!pool && wanted > 0 && wanted < selected.length) {
      selected = selected.slice(0, wanted);
    }

    deck = selected;
    index = 0;
    score = 0;
    results = [];
    scorePill.hidden = false;
    updateScore();
    show(quizScreen);
    renderQuestion();
  }

  function updateScore() {
    scoreText.textContent = `${score} / ${results.length}`;
  }

  // ----- Render current question -----
  function renderQuestion() {
    answered = false;
    feedback.hidden = true;
    nextBtn.disabled = true;
    nextBtn.textContent = index === deck.length - 1 ? "See results" : "Next";

    const q = deck[index];
    topicChip.textContent = q.category;
    counter.textContent = `Question ${index + 1} of ${deck.length}`;
    progressFill.style.width = `${(index / deck.length) * 100}%`;

    // Optional diagram (trusted, app-generated inline SVG — see diagrams.js)
    if (q.image) {
      qImage.innerHTML = q.image;
      qImage.hidden = false;
    } else {
      qImage.innerHTML = "";
      qImage.hidden = true;
    }

    questionText.textContent = q.q;

    optionsList.innerHTML = "";
    q.options.forEach((text, i) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.className = "option";
      btn.type = "button";
      btn.innerHTML =
        `<span class="letter">${LETTERS[i]}</span>` +
        `<span class="opt-text"></span>`;
      btn.querySelector(".opt-text").textContent = text;
      btn.addEventListener("click", () => selectAnswer(i, btn));
      li.appendChild(btn);
      optionsList.appendChild(li);
    });
  }

  // ----- Handle an answer -----
  function selectAnswer(chosen, btn) {
    if (answered) return;
    answered = true;

    const q = deck[index];
    const correct = q.answer;
    const isRight = chosen === correct;

    const buttons = [...optionsList.querySelectorAll(".option")];
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (i === correct) {
        b.classList.add("correct");
        b.insertAdjacentHTML("beforeend", '<span class="mark">✓</span>');
      }
      if (i === chosen && !isRight) {
        b.classList.add("wrong");
        b.insertAdjacentHTML("beforeend", '<span class="mark">✗</span>');
      }
    });

    if (isRight) score++;
    results.push({ question: q, chosen, correct });
    updateScore();

    feedbackHead.textContent = isRight ? "Correct" : "Not quite";
    feedbackHead.className = "feedback-head " + (isRight ? "good" : "bad");
    feedbackExplain.textContent = q.explain;
    feedback.hidden = false;

    nextBtn.disabled = false;
    progressFill.style.width = `${((index + 1) / deck.length) * 100}%`;
  }

  // ----- Navigation -----
  function next() {
    if (!answered) return;
    if (index < deck.length - 1) {
      index++;
      renderQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      showResults();
    }
  }

  // ----- Results -----
  function showResults() {
    show(resultScreen);
    const total = results.length;
    const pct = total ? Math.round((score / total) * 100) : 0;
    resultPercent.textContent = `${pct}%`;
    resultFraction.textContent = `${score} of ${total} correct`;

    let msg;
    if (pct >= 90) msg = "Excellent — you're well prepared. 🧭";
    else if (pct >= 75) msg = "Good work — a solid pass standard.";
    else if (pct >= 50) msg = "Getting there — review the topics below.";
    else msg = "Keep practising — focus on the explanations below.";
    resultMessage.textContent = msg;

    reviewList.innerHTML = "";
    results.forEach((r, i) => {
      const isRight = r.chosen === r.correct;
      const li = document.createElement("li");
      li.className = "review-item " + (isRight ? "ok" : "no");

      const rq = document.createElement("p");
      rq.className = "rq";
      rq.textContent = `${i + 1}. ${r.question.q}`;
      li.appendChild(rq);

      if (r.question.image) {
        const img = document.createElement("div");
        img.className = "q-image review-image";
        img.innerHTML = r.question.image;
        li.appendChild(img);
      }

      if (!isRight) {
        const your = document.createElement("p");
        your.className = "review-line your bad-text";
        your.innerHTML = `<span class="tag">Your answer:</span> `;
        your.append(document.createTextNode(r.question.options[r.chosen]));
        li.appendChild(your);
      }

      const ans = document.createElement("p");
      ans.className = "review-line ans";
      ans.innerHTML = `<span class="tag">Correct:</span> `;
      ans.append(document.createTextNode(r.question.options[r.correct]));
      li.appendChild(ans);

      const ex = document.createElement("p");
      ex.className = "review-explain";
      ex.textContent = r.question.explain;
      li.appendChild(ex);

      reviewList.appendChild(li);
    });

    const wrong = results.filter((r) => r.chosen !== r.correct);
    retryWrongBtn.hidden = wrong.length === 0;
    retryWrongBtn._wrongPool = wrong.map((r) => r.question);
  }

  function restart() {
    scorePill.hidden = true;
    show(startScreen);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ----- Wire up -----
  startBtn.addEventListener("click", () => startTest(null));
  nextBtn.addEventListener("click", next);
  restartBtn.addEventListener("click", restart);
  quitBtn.addEventListener("click", () => {
    if (results.length) showResults();
    else restart();
  });
  retryWrongBtn.addEventListener("click", () => {
    const pool = retryWrongBtn._wrongPool || [];
    if (pool.length) startTest(pool);
  });

  buildTopicList();
  show(startScreen);
})();
