const techniques = [
  {
    id: "rhetorical-questions",
    name: "Rhetorical Questions",
    cn: "反问",
    signal: "提出问题但并不期待真正的回答",
    effect: "引导读者思考，制造压力，强调问题的重要性或荒谬性",
    purpose: "push the audience to reflect and feel urgency",
    stem:
      "The rhetorical question makes the reader pause and reflect, encouraging them to agree with the writer's viewpoint.",
  },
  {
    id: "personal-pronouns",
    name: "Personal Pronouns",
    cn: "人称代词",
    signal: "使用 we, you, our, us 等直接把作者和读者联系起来",
    effect: "拉近距离，让读者觉得自己也和这个问题有关",
    purpose: "create involvement and shared responsibility",
    stem:
      "The personal pronouns create a direct connection with the audience, making them feel personally involved in the issue.",
  },
  {
    id: "repetition",
    name: "Repetition",
    cn: "重复",
    signal: "词、短语或结构被反复使用",
    effect: "强化重点，使观点更难被忽略，也更有节奏感",
    purpose: "hammer home the central idea",
    stem:
      "By repeating the phrase, the writer emphasises the point and makes it stay in the reader's mind.",
  },
  {
    id: "rule-of-three",
    name: "Rule of Three",
    cn: "三项排比",
    signal: "三个并列词语或短语连续出现",
    effect: "形成节奏和冲击力，让表达更完整、更有说服力",
    purpose: "build momentum and make the message sound polished",
    stem:
      "The rule of three gives the sentence rhythm and force, making the writer's message sound more memorable and convincing.",
  },
  {
    id: "emotive-language",
    name: "Emotive Language",
    cn: "情绪化语言",
    signal: "使用带有强烈感情态度的词，如 cruel, heartbreaking, terrified",
    effect: "激发同情、愤怒、担忧或震惊，推动读者站到作者一边",
    purpose: "trigger an emotional response from the audience",
    stem:
      "The emotive language creates a strong emotional reaction, encouraging the reader to sympathise with the writer's position.",
  },
  {
    id: "facts-statistics",
    name: "Facts and Statistics",
    cn: "事实与数据",
    signal: "出现百分比、数字、研究、调查结果等具体证据",
    effect: "增加可信度，让观点显得客观、有依据、值得信任",
    purpose: "add authority and credibility",
    stem:
      "The statistic adds authority to the argument, making the point sound factual and difficult to dismiss.",
  },
  {
    id: "imperatives",
    name: "Imperatives",
    cn: "祈使句",
    signal: "用命令式动词，如 imagine, stop, act, remember",
    effect: "直接推动读者采取行动，增强语气和号召力",
    purpose: "command attention and urge the audience to act",
    stem:
      "The imperative gives the sentence a commanding tone, pushing the reader towards action.",
  },
  {
    id: "hyperbole",
    name: "Hyperbole",
    cn: "夸张",
    signal: "明显不真实地放大程度、数量或感受",
    effect: "强化情绪和程度，抓住注意力，让问题显得极端",
    purpose: "heighten the intensity of the message",
    stem:
      "The hyperbole exaggerates the situation to stress how serious or overwhelming it feels.",
  },
  {
    id: "anecdote",
    name: "Anecdote",
    cn: "个人经历 / 小故事",
    signal: "用一个简短具体的经历、场景或人物故事开头或支撑论点",
    effect: "让内容更真实可感，也更容易让读者产生共鸣",
    purpose: "humanise the issue and make it relatable",
    stem:
      "The anecdote makes the issue feel real and personal, helping the reader connect emotionally with the message.",
  },
  {
    id: "contrast",
    name: "Contrast",
    cn: "对比",
    signal: "把两个相反的状态、场景或观点放在一起比较",
    effect: "突出差异，强调问题的严重性或变化的必要性",
    purpose: "highlight the gap between what is and what should be",
    stem:
      "The contrast highlights the difference between the two situations, making the writer's point seem sharper and more striking.",
  },
  {
    id: "metaphor-simile",
    name: "Metaphor / Simile",
    cn: "比喻 / 明喻",
    signal: "把事物比作另一种形象，常出现 like / as，或直接转化成新形象",
    effect: "让抽象感受变得生动具体，强化读者脑海中的画面和情绪",
    purpose: "make the idea vivid, memorable and emotionally striking",
    stem:
      "The figurative language creates a vivid comparison, helping the reader picture the experience more clearly.",
  },
  {
    id: "sensory-imagery",
    name: "Sensory Imagery",
    cn: "感官描写 / 意象",
    signal: "通过视觉、听觉、触觉等细节让读者像看见或听见场景一样",
    effect: "营造氛围，让场景更有沉浸感，也能强化情绪反应",
    purpose: "immerse the reader in the setting or feeling",
    stem:
      "The sensory imagery helps the reader picture the scene vividly, strengthening the atmosphere and emotional impact.",
  },
];

const identifyBank = [
  {
    source: "Sample Paper 0, Source A",
    title: "Jo Marchant on chronic fatigue syndrome",
    text: "“It was like being buried alive ... I was trapped.”",
    answer: "metaphor-simile",
    explanation:
      "The phrase “like being buried alive” is a vivid simile that makes Samantha Miller's suffering feel claustrophobic and extreme.",
  },
  {
    source: "Sample Paper 2, Source A",
    title: "Industrial Manchester extract",
    text: "“a sort of black smoke covers the city. The sun seen through it is a disc without rays.”",
    answer: "sensory-imagery",
    explanation:
      "The writer builds a visual image of darkness and pollution, so this is a strong example of sensory imagery.",
  },
  {
    source: "Sample Paper 3, Source B",
    title: "Obesity memoir extract",
    text: "“that dreadful tormenting parasite on health and comfort”",
    answer: "metaphor-simile",
    explanation:
      "The writer turns obesity into a “parasite”, which is figurative language used to intensify its negative impact.",
  },
  {
    source: "Sample Paper 4, Source A",
    title: "Polluted London description",
    text: "“wrap London in a black cloud”",
    answer: "metaphor-simile",
    explanation:
      "A “black cloud” is a metaphorical image that makes the pollution feel oppressive and inescapable.",
  },
  {
    source: "Sample Paper 5, Source A",
    title: "Cycling through the countryside",
    text: "“the first rays of sun streak across the chalk hillside”",
    answer: "sensory-imagery",
    explanation:
      "This creates a vivid visual picture of the landscape, so the technique is sensory imagery.",
  },
  {
    source: "Sample Paper 6, Source A",
    title: "Emma Watson HeForShe speech",
    text: "“both men and women should feel free to be sensitive ... both men and women should feel free to be strong”",
    answer: "repetition",
    explanation:
      "The repeated phrase “both men and women” reinforces the shared message about equality.",
  },
  {
    source: "Sample Paper 6, Source B",
    title: "Emmeline Pankhurst speech",
    text: "“like beasts of prey reproaching the gentler animals”",
    answer: "metaphor-simile",
    explanation:
      "The word “like” signals a simile, comparing opponents to predatory animals.",
  },
  {
    source: "Sample Paper 5, Source B",
    title: "Learning to ride a bicycle",
    text: "“I did it from pure natural love of adventure”",
    answer: "anecdote",
    explanation:
      "This first-person personal experience works like an anecdotal insight into the writer's motivation.",
  },
  {
    source: "Sample Paper 2, Source B",
    title: "Modern speech on air pollution",
    text: "“air pollution causes around 36,000 deaths each year”",
    answer: "facts-statistics",
    explanation:
      "The exact number is factual evidence, so this is a clear example of facts and statistics.",
  },
  {
    source: "Sample Paper 1, Source B",
    title: "Modern article on child poverty",
    text: "“Only one in three disadvantaged pupils is hitting the government’s GCSE pass target – compared with over 60 percent of their richer peers.”",
    answer: "facts-statistics",
    explanation:
      "This uses a precise proportion and comparison, so it is clearly facts and statistics.",
  },
  {
    source: "Sample Paper 4, Source B",
    title: "Poole Bay description",
    text: "“the town’s two piers looked cheerful and dashing, and out at sea the lights of passing ships bobbed and blinked”",
    answer: "sensory-imagery",
    explanation:
      "The writer builds a vivid visual scene, so the technique is sensory imagery.",
  },
];

const effectChoiceBank = [
  {
    source: "Sample Paper 0, Source A",
    title: "Jo Marchant on chronic fatigue syndrome",
    text: "“It was like being buried alive.”",
    technique: "metaphor-simile",
    choices: [
      "It creates a vivid and suffocating image, making the reader understand how trapped and desperate she felt.",
      "It gives exact scientific proof that her illness was medically recognised.",
      "It makes the tone playful and light-hearted.",
    ],
    answer: 0,
  },
  {
    source: "Sample Paper 2, Source A",
    title: "Industrial Manchester extract",
    text: "“fetid, muddy waters, stained with a thousand colours by the factories they pass”",
    technique: "sensory-imagery",
    choices: [
      "It makes the pollution feel vivid, dirty and physically unpleasant to the reader.",
      "It keeps the description neutral and emotionally detached.",
      "It proves the writer's point with hard numerical evidence.",
    ],
    answer: 0,
  },
  {
    source: "Sample Paper 5, Source A",
    title: "Cycling through the countryside",
    text: "“the first rays of sun streak across the chalk hillside”",
    technique: "sensory-imagery",
    choices: [
      "It helps the reader picture the landscape clearly and shares the writer's sense of beauty and freedom.",
      "It suggests the countryside is dangerous and threatening.",
      "It mainly adds authority through formal evidence.",
    ],
    answer: 0,
  },
  {
    source: "Sample Paper 6, Source A",
    title: "Emma Watson HeForShe speech",
    text: "“both men and women should feel free to be sensitive ... both men and women should feel free to be strong”",
    technique: "repetition",
    choices: [
      "It reinforces the idea that equality should benefit everyone, not just one gender.",
      "It makes the speech sound uncertain and hesitant.",
      "It shifts attention away from the main argument.",
    ],
    answer: 0,
  },
  {
    source: "Sample Paper 6, Source B",
    title: "Emmeline Pankhurst speech",
    text: "“like beasts of prey reproaching the gentler animals”",
    technique: "metaphor-simile",
    choices: [
      "It paints opponents as savage predators, making their criticism seem cruel and hypocritical.",
      "It softens the attack and makes the tone more balanced.",
      "It adds a precise statistic to strengthen the claim.",
    ],
    answer: 0,
  },
  {
    source: "Sample Paper 2, Source B",
    title: "Modern speech on air pollution",
    text: "“air pollution causes around 36,000 deaths each year”",
    technique: "facts-statistics",
    choices: [
      "It adds authority by supporting the argument with evidence.",
      "It encourages action through direct command.",
      "It makes the tone more playful.",
    ],
    answer: 0,
  },
  {
    source: "Sample Paper 1, Source B",
    title: "Modern article on child poverty",
    text: "“Only one in three disadvantaged pupils is hitting the government’s GCSE pass target – compared with over 60 percent of their richer peers.”",
    technique: "facts-statistics",
    choices: [
      "It uses evidence to highlight the scale of inequality and make the argument harder to ignore.",
      "It softens the issue by making it sound vague.",
      "It mainly creates a peaceful and reflective mood.",
    ],
    answer: 0,
  },
];

const writtenBanks = {
  easy: [
    {
      source: "Sample Paper 6, Source A",
      sourceTitle: "Emma Watson HeForShe speech",
      genre: "Speech",
      topic: "Gender equality",
      technique: "repetition",
      passage:
        "“both men and women should feel free to be sensitive” and “both men and women should feel free to be strong”",
      question: "补全 effect 分析句，说明 repetition 如何强化 Emma Watson 的观点。",
      helper: "这段来自 Sample Paper 6。注意 repetition 常和 emphasis、shared message、inclusion 有关。",
      blanks: [
        {
          label: "重复的短语会 ______ 她的核心观点。",
          answers: ["emphasise", "reinforce", "highlight"],
        },
        {
          label: "同时让听众觉得 equality 是关于 ______ 的。",
          answers: ["everyone", "both genders", "men and women"],
        },
        {
          label: "因此更容易让观众 ______ 她的主张。",
          answers: ["agree with", "support", "accept"],
        },
      ],
      modelAnswer:
        "The repetition emphasises Watson's central message and makes gender equality feel inclusive, encouraging the audience to agree that it should benefit everyone.",
    },
    {
      source: "Sample Paper 2, Source B",
      sourceTitle: "Modern speech on air pollution",
      genre: "Speech",
      topic: "Pollution and public health",
      technique: "facts-statistics",
      passage:
        "“air pollution causes around 36,000 deaths each year”",
      question: "补全 effect 分析句，说明 facts and statistics 在这段讲话中的作用。",
      helper: "这段来自 Sample Paper 2。想 authority、credibility、convincing 这些词。",
      blanks: [
        {
          label: "这个数字让作者的话更有 ______。",
          answers: ["authority", "credibility", "evidence"],
        },
        {
          label: "这会让问题显得更加 ______。",
          answers: ["serious", "urgent", "real"],
        },
        {
          label: "从而让读者更难 ______ 这个论点。",
          answers: ["dismiss", "ignore"],
        },
      ],
      modelAnswer:
        "The statistic adds authority and credibility, making the problem seem serious and difficult for the reader to dismiss.",
    },
    {
      source: "Sample Paper 0, Source A",
      sourceTitle: "Jo Marchant on chronic fatigue syndrome",
      genre: "Newspaper article",
      topic: "Illness and suffering",
      technique: "metaphor-simile",
      passage:
        "“It was like being buried alive ... I was trapped.”",
      question: "补全 effect 分析句，说明 figurative language 如何帮助读者理解她的痛苦。",
      helper: "这段来自 Sample Paper 0。想 vivid、trapped、suffocating 这些方向。",
      blanks: [
        {
          label: "这个比喻让她的经历变得更 ______。",
          answers: ["vivid", "clear", "memorable"],
        },
        {
          label: "它强调她感到非常 ______。",
          answers: ["trapped", "helpless", "suffocated"],
        },
        {
          label: "因此读者更容易对她产生 ______。",
          answers: ["sympathy", "concern"],
        },
      ],
      modelAnswer:
        "The figurative language makes her suffering feel vivid and claustrophobic, highlighting how trapped she felt and encouraging sympathy from the reader.",
    },
  ],
  medium: [
    {
      source: "Sample Paper 1, Source B",
      sourceTitle: "Modern article on child poverty",
      genre: "Newspaper article",
      topic: "Education inequality",
      technique: "facts-statistics",
      passage:
        "“Only one in three disadvantaged pupils is hitting the government’s GCSE pass target – compared with over 60 percent of their richer peers.”",
      question:
        "Write one or two sentences explaining the effect of the statistic in this extract.",
      helper:
        "这段来自 Sample Paper 1。建议写到：数据如何突出 inequality，以及为什么它让观点更可信。",
      requiredKeywords: ["evidence", "inequality", "credible", "convincing", "reader", "serious"],
      threshold: 2,
      modelAnswer:
        "The statistic makes the inequality feel precise and undeniable, showing a clear gap between poorer and richer pupils. This adds credibility to the argument and encourages the reader to see child poverty as a serious educational problem.",
    },
    {
      source: "Sample Paper 2, Source A",
      sourceTitle: "Industrial Manchester extract",
      genre: "Literary non-fiction",
      topic: "Industrial pollution",
      technique: "sensory-imagery",
      passage:
        "“fetid, muddy waters, stained with a thousand colours by the factories they pass”",
      question:
        "Write one or two sentences explaining the effect of the sensory imagery in this extract.",
      helper:
        "这段来自 Sample Paper 2。建议写到：画面有多具体，以及这种画面让污染显得多恶心或危险。",
      requiredKeywords: ["vivid", "pollution", "dirty", "unpleasant", "reader", "atmosphere"],
      threshold: 2,
      modelAnswer:
        "The sensory imagery makes the pollution feel vivid, filthy and unnatural. This helps the reader picture the damage clearly and creates a disturbing atmosphere around the industrial setting.",
    },
    {
      source: "Sample Paper 5, Source A",
      sourceTitle: "Cycling through the countryside",
      genre: "Magazine article",
      topic: "Cycling and landscape",
      technique: "sensory-imagery",
      passage:
        "“the first rays of sun streak across the chalk hillside” and the land becomes “a patchwork of green fields”",
      question:
        "Write one or two sentences explaining the effect of the descriptive imagery.",
      helper:
        "这段来自 Sample Paper 5。想一想：reader 能看到什么？writer 对 cycling 的感受是什么？",
      requiredKeywords: ["picture", "landscape", "beauty", "freedom", "reader", "vivid"],
      threshold: 2,
      modelAnswer:
        "The imagery allows the reader to picture the countryside vividly and share the writer's sense of natural beauty. This helps cycling seem peaceful, freeing and deeply enjoyable.",
    },
    {
      source: "Sample Paper 6, Source B",
      sourceTitle: "Emmeline Pankhurst speech",
      genre: "Speech",
      topic: "Votes for women",
      technique: "metaphor-simile",
      passage:
        "“like beasts of prey reproaching the gentler animals”",
      question:
        "Write one or two sentences explaining the effect of the simile in this extract.",
      helper:
        "这段来自 Sample Paper 6。建议写到 opponents 被写成什么样，以及这会让 suffragettes 显得怎样。",
      requiredKeywords: ["predatory", "aggressive", "victim", "sympathy", "reader", "hypocrisy"],
      threshold: 2,
      modelAnswer:
        "The simile presents the opponents as predatory and cruel, which makes their criticism seem hypocritical. As a result, the reader is pushed to sympathise more strongly with the suffragettes.",
    },
  ],
  hard: [
    {
      source: "Sample Paper 4, Source A",
      sourceTitle: "Polluted London description",
      genre: "Travel writing / non-fiction",
      topic: "Urban pollution",
      technique: "metaphor-simile",
      passage:
        "“a dense fog combines with the volume of smoke and soot issuing from thousands of chimneys to wrap London in a black cloud”",
      question:
        "Analyse the effect of the metaphorical description. Write a compact exam-style effect response in your own words.",
      helper: "这段来自 Sample Paper 4。Hard 阶段不提供句型，你要自己写出 atmosphere、oppression 和 reader effect。",
      requiredKeywords: [
        "dark",
        "oppressive",
        "suffocating",
        "reader",
        "atmosphere",
        "pollution",
        "trapped",
      ],
      threshold: 3,
      modelAnswer:
        "The metaphor of London being wrapped in a black cloud creates a suffocating and oppressive image of the city. This makes the reader feel how inescapable the pollution is and helps build a bleak atmosphere.",
    },
    {
      source: "Sample Paper 5, Source B",
      sourceTitle: "Learning to ride a bicycle",
      genre: "Memoir",
      topic: "Learning a new skill",
      technique: "anecdote",
      passage:
        "“I did it from pure natural love of adventure” and then learned, “first, to pedal; second, to turn; third, to dismount; and fourth, to mount independently.”",
      question:
        "Analyse the effect of the writer's personal account. Write an exam-style response.",
      helper: "这段来自 Sample Paper 5。可以从 personal achievement、determination、inspiration 这些方向入手。",
      requiredKeywords: [
        "personal",
        "real",
        "determination",
        "achievement",
        "reader",
        "inspiring",
        "challenge",
      ],
      threshold: 3,
      modelAnswer:
        "The personal account makes the experience feel authentic and shows the writer's determination clearly. This encourages the reader to admire her achievement and see learning to cycle as challenging but inspiring.",
    },
    {
      source: "Sample Paper 2, Source A",
      sourceTitle: "Industrial Manchester extract",
      genre: "Literary non-fiction",
      topic: "Class and pollution",
      technique: "contrast",
      passage:
        "The city contains “huge palaces of industry” beside “wretched dwellings”.",
      question:
        "Analyse the effect of the contrast in this extract. Write an exam-style response.",
      helper: "这段来自 Sample Paper 2。建议自己写出 social inequality、power difference 和 reader response。",
      requiredKeywords: [
        "contrast",
        "inequality",
        "rich",
        "poor",
        "reader",
        "difference",
        "unfair",
      ],
      threshold: 3,
      modelAnswer:
        "The contrast between the 'palaces' and the 'wretched dwellings' highlights the extreme gap between wealth and poverty. This makes the inequality feel unfair and striking, encouraging the reader to criticise the society being described.",
    },
  ],
};

const state = {
  score: 0,
  attempts: 0,
  currentIdentify: null,
  currentEffect: null,
  currentWritten: null,
  currentDifficulty: "easy",
  activeTab: "study",
};

const techniqueGrid = document.getElementById("technique-grid");
const effectTable = document.getElementById("effect-table");
const scoreValue = document.getElementById("score-value");
const writtenAnswerZone = document.getElementById("written-answer-zone");
const modelAnswer = document.getElementById("model-answer");

function shuffle(array) {
  const copy = [...array];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function getTechniqueName(id) {
  const match = techniques.find((item) => item.id === id);
  return match ? `${match.name} / ${match.cn}` : id;
}

function randomItem(bank, currentItem) {
  if (bank.length === 1) return bank[0];
  let next = bank[Math.floor(Math.random() * bank.length)];
  while (currentItem && next.passage === currentItem.passage && next.text === currentItem.text) {
    next = bank[Math.floor(Math.random() * bank.length)];
  }
  return next;
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
            <span class="tag">GCSE Core</span>
          </header>
          <div class="mini-list">
            <div class="mini-block">
              <strong>怎么判断</strong>
              <span>${item.signal}</span>
            </div>
            <div class="mini-block">
              <strong>常见 effect</strong>
              <span>${item.effect}</span>
            </div>
            <div class="mini-block">
              <strong>writer purpose</strong>
              <span>${item.purpose}</span>
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

function renderEffectTable() {
  effectTable.innerHTML = techniques
    .map(
      (item) => `
        <article class="effect-row">
          <div>
            <strong>${item.name}</strong>
            <span>${item.cn}</span>
          </div>
          <p>${item.effect}</p>
          <p>${item.purpose}</p>
        </article>
      `,
    )
    .join("");
}

function renderOptions(container, name, options) {
  container.innerHTML = options
    .map(
      (option, index) => `
        <label class="option">
          <input type="radio" name="${name}" value="${option.value ?? index}" />
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

function markOptions(container, validator) {
  container.querySelectorAll(".option").forEach((label) => {
    const input = label.querySelector("input");
    label.classList.remove("correct", "incorrect");
    const result = validator(input.value, input.checked);
    if (result === "correct") label.classList.add("correct");
    if (result === "incorrect") label.classList.add("incorrect");
  });
}

function switchTab(tabName) {
  state.activeTab = tabName;
  document.querySelectorAll(".tab-button").forEach((button) => {
    const active = button.dataset.tab === tabName;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });

  document.querySelectorAll(".tab-panel").forEach((panel) => {
    const active = panel.id === `${tabName}-panel`;
    panel.classList.toggle("active", active);
    panel.hidden = !active;
  });
}

function loadIdentifyQuestion() {
  state.currentIdentify = randomItem(identifyBank, state.currentIdentify);
  document.getElementById("identify-source").textContent = `${state.currentIdentify.source} · ${state.currentIdentify.title}`;
  document.getElementById("identify-prompt").textContent = state.currentIdentify.text;

  renderOptions(
    document.getElementById("identify-options"),
    "identify",
    shuffle(
      techniques.map((item) => ({
        label: `${item.name} / ${item.cn}`,
        value: item.id,
      })),
    ),
  );

  setFeedback(
    document.getElementById("identify-feedback"),
    "先判断语言特征，再选出最合适的 technique。",
  );
}

function loadEffectQuestion() {
  state.currentEffect = randomItem(effectChoiceBank, state.currentEffect);
  document.getElementById("effect-source").textContent = `${state.currentEffect.source} · ${state.currentEffect.title}`;
  document.getElementById("effect-prompt").textContent = state.currentEffect.text;
  renderOptions(
    document.getElementById("effect-options"),
    "effect",
    state.currentEffect.choices.map((choice, index) => ({ label: choice, value: index })),
  );

  setFeedback(
    document.getElementById("effect-feedback"),
    "这一题考的是 best effect analysis，不只是认 technique。",
  );
}

function renderEasyInputs(item) {
  writtenAnswerZone.innerHTML = `
    <div class="fill-grid">
      ${item.blanks
        .map(
          (blank, index) => `
            <label class="fill-card">
              <span>${blank.label}</span>
              <input
                class="fill-input"
                type="text"
                data-blank-index="${index}"
                placeholder="输入关键词或短语"
              />
            </label>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderOpenResponse(difficulty) {
  const placeholder =
    difficulty === "medium"
      ? "写 1-2 句 effect 分析。尽量写出 emphasis + reader effect。"
      : "自己组织一条更像考试答案的 effect response。";

  writtenAnswerZone.innerHTML = `
    <label class="textarea-wrap">
      <textarea id="written-response" rows="6" placeholder="${placeholder}"></textarea>
    </label>
  `;
}

function loadWrittenQuestion() {
  const bank = writtenBanks[state.currentDifficulty];
  state.currentWritten = randomItem(bank, state.currentWritten);

  document.getElementById("written-genre-tag").textContent = state.currentWritten.genre;
  document.getElementById("written-topic-tag").textContent = state.currentWritten.topic;
  document.getElementById("written-source").textContent =
    `${state.currentWritten.source} · ${state.currentWritten.sourceTitle}`;
  document.getElementById("written-passage").textContent = state.currentWritten.passage;
  document.getElementById("written-question").textContent = state.currentWritten.question;
  document.getElementById("written-helper").textContent = state.currentWritten.helper;
  modelAnswer.innerHTML = "";
  modelAnswer.className = "model-answer";

  if (state.currentDifficulty === "easy") {
    renderEasyInputs(state.currentWritten);
  } else {
    renderOpenResponse(state.currentDifficulty);
  }

  setFeedback(
    document.getElementById("written-feedback"),
    state.currentDifficulty === "easy"
      ? "Easy 阶段先把 effect 关键词补完整。"
      : "先自己写，再看系统提示和参考答案。",
  );
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
    : `<strong>答案是 ${techniqueName}。</strong> ${state.currentIdentify.explanation}`;

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
    ? `<strong>答对了。</strong> 这道题是在分析 ${techniqueName} 的作用。`
    : `<strong>更好的答案是第 ${state.currentEffect.answer + 1} 项。</strong> 重点是写出 ${techniqueName} 如何影响读者。`;

  setFeedback(feedback, message, correct ? "success" : "error");
}

function checkEasyWritten() {
  const inputs = Array.from(writtenAnswerZone.querySelectorAll(".fill-input"));
  const results = inputs.map((input, index) => {
    const userAnswer = normalize(input.value);
    const accepted = state.currentWritten.blanks[index].answers;
    const isCorrect = accepted.some((answer) => userAnswer.includes(normalize(answer)));
    input.classList.toggle("input-correct", isCorrect);
    input.classList.toggle("input-incorrect", !isCorrect);
    return isCorrect;
  });

  const correctCount = results.filter(Boolean).length;
  const correct = correctCount === results.length;
  state.attempts += 1;
  if (correct) state.score += 1;
  updateScore();

  const message = correct
    ? `<strong>补全正确。</strong> 你已经抓到了这类 effect 的核心表达。`
    : `<strong>你答对了 ${correctCount} / ${results.length} 个空。</strong> 继续留意 effect 常用词，比如 urgency、authority、sympathy、action。`;

  setFeedback(document.getElementById("written-feedback"), message, correct ? "success" : "error");
  modelAnswer.className = "model-answer visible";
  modelAnswer.innerHTML = `<strong>参考答案：</strong>${state.currentWritten.modelAnswer}`;
}

function checkOpenWritten() {
  const textarea = document.getElementById("written-response");
  const feedback = document.getElementById("written-feedback");
  const response = normalize(textarea.value);

  if (!response) {
    setFeedback(feedback, "请先输入你的 effect 分析。", "error");
    return;
  }

  const matched = state.currentWritten.requiredKeywords.filter((keyword) =>
    response.includes(normalize(keyword)),
  );
  const missing = state.currentWritten.requiredKeywords.filter(
    (keyword) => !matched.includes(keyword),
  );
  const correct = matched.length >= state.currentWritten.threshold;

  state.attempts += 1;
  if (correct) state.score += 1;
  updateScore();

  const message = correct
    ? `<strong>方向对了。</strong> 你提到了 ${matched.length} 个关键概念：${matched.join(", ")}。`
    : `<strong>还可以更完整。</strong> 你已经提到 ${matched.length} 个关键概念，建议再补上 ${missing.slice(0, 3).join(", ")} 这类 effect 词。`;

  setFeedback(feedback, message, correct ? "success" : "error");
  modelAnswer.className = "model-answer visible";
  modelAnswer.innerHTML = `
    <strong>参考答案：</strong>${state.currentWritten.modelAnswer}
    <br />
    <span class="model-note">可用关键词：${state.currentWritten.requiredKeywords.join(", ")}</span>
  `;
}

function handleWrittenCheck() {
  if (state.currentDifficulty === "easy") {
    checkEasyWritten();
    return;
  }

  checkOpenWritten();
}

function setDifficulty(difficulty) {
  state.currentDifficulty = difficulty;
  document.querySelectorAll(".difficulty-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.difficulty === difficulty);
  });
  loadWrittenQuestion();
}

function resetScore() {
  state.score = 0;
  state.attempts = 0;
  updateScore();
}

function bindEvents() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.tab));
  });

  document.getElementById("identify-check").addEventListener("click", handleIdentifyCheck);
  document.getElementById("identify-next").addEventListener("click", loadIdentifyQuestion);
  document.getElementById("effect-check").addEventListener("click", handleEffectCheck);
  document.getElementById("effect-next").addEventListener("click", loadEffectQuestion);
  document.getElementById("written-check").addEventListener("click", handleWrittenCheck);
  document.getElementById("written-next").addEventListener("click", loadWrittenQuestion);
  document.getElementById("reset-score").addEventListener("click", resetScore);

  document.querySelectorAll(".difficulty-button").forEach((button) => {
    button.addEventListener("click", () => setDifficulty(button.dataset.difficulty));
  });
}

renderTechniqueCards();
renderEffectTable();
updateScore();
loadIdentifyQuestion();
loadEffectQuestion();
loadWrittenQuestion();
bindEvents();
