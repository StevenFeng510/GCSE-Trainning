const techniques = [
  {
    id: "hyperbole",
    name: "Hyperbole",
    cn: "夸张",
    signal: "明显不真实地放大程度、数量或感受",
    effect: "强调强度，抓住读者注意力，突出作者态度",
    stem:
      "The writer uses hyperbole to exaggerate the intensity of ..., making the reader notice how extreme the issue feels.",
    clues: ["always", "never", "millions", "the end of the world", "impossible to ignore"],
  },
  {
    id: "repetition",
    name: "Repetition",
    cn: "重复",
    signal: "某个词、短语或句式反复出现",
    effect: "强化重点，让观点更持续、更有力量",
    stem:
      "By repeating ..., the writer emphasises its importance, making the idea feel persistent and emotionally resonant.",
    clues: ["again", "every", "still", "same phrase repeated", "echoed wording"],
  },
  {
    id: "emotive-language",
    name: "Emotive Language",
    cn: "情绪化语言",
    signal: "带有强烈感情色彩的词语，激起同情、愤怒、担忧或兴奋",
    effect: "引发强烈反应，推动读者站到作者一边",
    stem:
      "The emotive language evokes strong feelings in the reader, encouraging sympathy and engagement with the topic.",
    clues: ["heartbreaking", "cruel", "terrified", "hope", "suffering"],
  },
  {
    id: "facts-statistics",
    name: "Facts and Statistics",
    cn: "事实与数据",
    signal: "出现具体事实、数字、比例、调查结果",
    effect: "增加可信度，让论点显得更客观、更有说服力",
    stem:
      "Including statistics strengthens the writer's position, making the point appear more convincing and authoritative.",
    clues: ["percentages", "research", "survey", "1 in 5", "according to data"],
  },
  {
    id: "personal-pronouns",
    name: "Personal Pronouns",
    cn: "人称代词",
    signal: "大量使用 we, you, our, us 等",
    effect: "拉近作者与读者距离，让读者感到被卷入其中",
    stem:
      "Personal pronouns establish a direct connection with the audience, encouraging them to relate to the message personally.",
    clues: ["we", "you", "our", "us", "together"],
  },
  {
    id: "rhetorical-questions",
    name: "Rhetorical Questions",
    cn: "反问",
    signal: "提出问题但并不真的期待答案",
    effect: "引导读者思考，强调荒谬性、重要性或紧迫性",
    stem:
      "The rhetorical question provokes consideration, prompting the reader to reflect on the writer's message.",
    clues: ["How long", "Who would", "Can we really", "Must we", "Why should"],
  },
];

const identifyBank = [
  {
    text: "The queue was a million miles long and felt endless.",
    answer: "hyperbole",
    explanation: "“a million miles long” is an obvious exaggeration, so the technique is hyperbole.",
  },
  {
    text: "We need change now, change in our schools, change in our streets, change in our future.",
    answer: "repetition",
    explanation: "The repeated word “change” reinforces the main idea and makes it more memorable.",
  },
  {
    text: "These innocent animals are trapped in cruel, filthy cages.",
    answer: "emotive-language",
    explanation: "Words like “innocent”, “cruel”, and “filthy” are emotionally charged and designed to upset the reader.",
  },
  {
    text: "According to the report, 68% of students say exam stress affects their sleep.",
    answer: "facts-statistics",
    explanation: "The percentage gives specific evidence, which adds credibility.",
  },
  {
    text: "If we ignore this problem, we are failing our own community.",
    answer: "personal-pronouns",
    explanation: "The repeated use of “we” and “our” directly involves the reader in the issue.",
  },
  {
    text: "How many more warnings do we need before we finally act?",
    answer: "rhetorical-questions",
    explanation: "The writer asks a question to make the reader reflect, not to get an actual answer.",
  },
];

const effectBank = [
  {
    text: "The writer says the hallway was 'so crowded that breathing felt impossible'.",
    technique: "hyperbole",
    choices: [
      "It exaggerates the situation to stress how uncomfortable and overwhelming it felt.",
      "It gives objective proof through measured evidence.",
      "It builds a direct relationship with the audience through the word 'you'.",
    ],
    answer: 0,
  },
  {
    text: "The article repeats 'safe streets' three times in one paragraph.",
    technique: "repetition",
    choices: [
      "It slows the pace so the article sounds less serious.",
      "It reinforces the message and keeps the key idea in the reader's mind.",
      "It proves the argument with statistics.",
    ],
    answer: 1,
  },
  {
    text: "The phrase 'terrified families' appears in the campaign leaflet.",
    technique: "emotive-language",
    choices: [
      "It creates strong feeling and encourages sympathy from the reader.",
      "It shows the writer is being strictly neutral.",
      "It asks the reader a question that they must answer.",
    ],
    answer: 0,
  },
  {
    text: "The writer states that '1 in 4 teenagers feels unsafe online'.",
    technique: "facts-statistics",
    choices: [
      "It increases authority by supporting the point with evidence.",
      "It exaggerates for comic effect.",
      "It creates a sense of unity through personal pronouns.",
    ],
    answer: 0,
  },
  {
    text: "The speech says, 'You deserve better, and we must demand it together.'",
    technique: "personal-pronouns",
    choices: [
      "It disconnects the audience from the speaker.",
      "It creates closeness and makes the audience feel involved.",
      "It suggests the point is unimportant.",
    ],
    answer: 1,
  },
  {
    text: "The line 'Should children have to learn in fear?' appears near the end.",
    technique: "rhetorical-questions",
    choices: [
      "It encourages reflection and underlines the seriousness of the topic.",
      "It gives a numerical summary.",
      "It repeats a phrase for rhythm.",
    ],
    answer: 0,
  },
];

const passageBank = [
  {
    text:
      "We cannot wait any longer. Every week, every day, every hour, more young people are left behind. How many chances must they lose before we decide that enough is enough?",
    correct: ["repetition", "rhetorical-questions", "personal-pronouns"],
    explanation:
      "“Every week, every day, every hour” is repetition, “How many chances...” is a rhetorical question, and “we” draws the reader into shared responsibility.",
  },
  {
    text:
      "A shocking 72% of local residents say they avoid the park after dark, yet our leaders still act as if nothing is wrong. This is a disgraceful failure.",
    correct: ["facts-statistics", "emotive-language", "personal-pronouns"],
    explanation:
      "The percentage is a statistic, “shocking” and “disgraceful failure” are emotive, and “our” helps connect the issue to the reader's community.",
  },
  {
    text:
      "The homework mountain was impossible to climb; it swallowed our evenings whole. We were exhausted, frustrated, and completely drained.",
    correct: ["hyperbole", "personal-pronouns", "emotive-language"],
    explanation:
      "“Homework mountain” and “swallowed our evenings whole” are exaggerated, “our” creates shared experience, and “exhausted, frustrated, drained” is emotive language.",
  },
];

const state = {
  score: 0,
  attempts: 0,
  currentIdentify: null,
  currentEffect: null,
  currentPassage: null,
};

const techniqueGrid = document.getElementById("technique-grid");
const scoreValue = document.getElementById("score-value");

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getTechniqueName(id) {
  const match = techniques.find((item) => item.id === id);
  return match ? `${match.name} / ${match.cn}` : id;
}

function renderTechniqueCards() {
  techniqueGrid.innerHTML = techniques
    .map(
      (item) => `
        <article class="technique-card">
          <header>
            <div>
              <h3>${item.name}</h3>
              <p>${item.cn}</p>
            </div>
            <span class="tag">Spot It Fast</span>
          </header>
          <div class="mini-list">
            <div class="mini-block">
              <strong>怎么判断</strong>
              <span>${item.signal}</span>
            </div>
            <div class="mini-block">
              <strong>常见效果</strong>
              <span>${item.effect}</span>
            </div>
            <div class="mini-block">
              <strong>答题句型</strong>
              <span>${item.stem}</span>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderOptions(container, name, options, type = "radio") {
  container.innerHTML = options
    .map(
      (option, index) => `
        <label class="option">
          <input type="${type}" name="${name}" value="${option.value ?? index}" />
          <span>${option.label}</span>
        </label>
      `,
    )
    .join("");
}

function setFeedback(element, message, mode = "") {
  element.className = `feedback ${mode}`.trim();
  element.innerHTML = message;
}

function updateScore() {
  scoreValue.textContent = `${state.score} / ${state.attempts}`;
}

function randomItem(bank, currentItem) {
  if (bank.length === 1) return bank[0];
  let next = bank[Math.floor(Math.random() * bank.length)];
  while (currentItem && next.text === currentItem.text) {
    next = bank[Math.floor(Math.random() * bank.length)];
  }
  return next;
}

function loadIdentifyQuestion() {
  state.currentIdentify = randomItem(identifyBank, state.currentIdentify);
  document.getElementById("identify-prompt").textContent = state.currentIdentify.text;

  const options = shuffle(
    techniques.map((item) => ({
      label: `${item.name} / ${item.cn}`,
      value: item.id,
    })),
  );

  renderOptions(document.getElementById("identify-options"), "identify", options);
  setFeedback(
    document.getElementById("identify-feedback"),
    "先选出最合适的 technique，再点“提交答案”。",
  );
}

function loadEffectQuestion() {
  state.currentEffect = randomItem(effectBank, state.currentEffect);
  document.getElementById("effect-prompt").textContent = state.currentEffect.text;

  renderOptions(
    document.getElementById("effect-options"),
    "effect",
    state.currentEffect.choices.map((choice, index) => ({ label: choice, value: index })),
  );

  setFeedback(
    document.getElementById("effect-feedback"),
    "这一题重点不是认手法，而是挑出最准确的 effect 分析。",
  );
}

function loadPassageQuestion() {
  state.currentPassage = randomItem(passageBank, state.currentPassage);
  document.getElementById("passage-prompt").textContent = state.currentPassage.text;

  renderOptions(
    document.getElementById("passage-options"),
    "passage",
    techniques.map((item) => ({ label: `${item.name} / ${item.cn}`, value: item.id })),
    "checkbox",
  );

  setFeedback(
    document.getElementById("passage-feedback"),
    "这题允许多选，试着选出文段里最明显的几个手法。",
  );
}

function markOptions(container, validator) {
  const labels = container.querySelectorAll(".option");
  labels.forEach((label) => {
    const input = label.querySelector("input");
    label.classList.remove("correct", "incorrect");
    const result = validator(input.value, input.checked);
    if (result === "correct") label.classList.add("correct");
    if (result === "incorrect") label.classList.add("incorrect");
  });
}

function handleIdentifyCheck() {
  const selected = document.querySelector('input[name="identify"]:checked');
  const feedback = document.getElementById("identify-feedback");
  const container = document.getElementById("identify-options");

  if (!selected) {
    setFeedback(feedback, "请先选择一个 technique。", "error");
    return;
  }

  const correct = selected.value === state.currentIdentify.answer;
  state.attempts += 1;
  if (correct) state.score += 1;
  updateScore();

  markOptions(container, (value, checked) => {
    if (value === state.currentIdentify.answer) return "correct";
    if (checked && value !== state.currentIdentify.answer) return "incorrect";
    return "";
  });

  const techniqueName = getTechniqueName(state.currentIdentify.answer);
  const message = correct
    ? `<strong>答对了。</strong> ${state.currentIdentify.explanation}`
    : `<strong>这题答案是 ${techniqueName}。</strong> ${state.currentIdentify.explanation}`;

  setFeedback(feedback, message, correct ? "success" : "error");
}

function handleEffectCheck() {
  const selected = document.querySelector('input[name="effect"]:checked');
  const feedback = document.getElementById("effect-feedback");
  const container = document.getElementById("effect-options");

  if (!selected) {
    setFeedback(feedback, "请先选择一个 effect 分析。", "error");
    return;
  }

  const selectedIndex = Number(selected.value);
  const correct = selectedIndex === state.currentEffect.answer;
  state.attempts += 1;
  if (correct) state.score += 1;
  updateScore();

  markOptions(container, (value, checked) => {
    const numericValue = Number(value);
    if (numericValue === state.currentEffect.answer) return "correct";
    if (checked && numericValue !== state.currentEffect.answer) return "incorrect";
    return "";
  });

  const techniqueName = getTechniqueName(state.currentEffect.technique);
  const message = correct
    ? `<strong>答对了。</strong> 这是在分析 ${techniqueName} 的 effect。`
    : `<strong>更好的答案是第 ${state.currentEffect.answer + 1} 项。</strong> 这句话的重点是 ${techniqueName} 如何影响读者。`;

  setFeedback(feedback, message, correct ? "success" : "error");
}

function handlePassageCheck() {
  const selected = Array.from(document.querySelectorAll('input[name="passage"]:checked')).map(
    (input) => input.value,
  );
  const feedback = document.getElementById("passage-feedback");
  const container = document.getElementById("passage-options");

  if (selected.length === 0) {
    setFeedback(feedback, "这题至少要选择一个 technique。", "error");
    return;
  }

  const expected = state.currentPassage.correct;
  const correct =
    selected.length === expected.length && selected.every((item) => expected.includes(item));

  state.attempts += 1;
  if (correct) state.score += 1;
  updateScore();

  markOptions(container, (value, checked) => {
    if (expected.includes(value)) return "correct";
    if (checked && !expected.includes(value)) return "incorrect";
    return "";
  });

  const answerText = expected.map(getTechniqueName).join("、");
  const message = correct
    ? `<strong>判断准确。</strong> ${state.currentPassage.explanation}`
    : `<strong>参考答案：</strong>${answerText}。${state.currentPassage.explanation}`;

  setFeedback(feedback, message, correct ? "success" : "error");
}

function resetScore() {
  state.score = 0;
  state.attempts = 0;
  updateScore();
}

function loadAllQuestions() {
  loadIdentifyQuestion();
  loadEffectQuestion();
  loadPassageQuestion();
}

document.getElementById("identify-check").addEventListener("click", handleIdentifyCheck);
document.getElementById("identify-next").addEventListener("click", loadIdentifyQuestion);
document.getElementById("effect-check").addEventListener("click", handleEffectCheck);
document.getElementById("effect-next").addEventListener("click", loadEffectQuestion);
document.getElementById("passage-check").addEventListener("click", handlePassageCheck);
document.getElementById("passage-next").addEventListener("click", loadPassageQuestion);
document.getElementById("shuffle-all").addEventListener("click", loadAllQuestions);
document.getElementById("reset-score").addEventListener("click", resetScore);

renderTechniqueCards();
updateScore();
loadAllQuestions();
