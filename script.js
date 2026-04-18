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
    id: "pathetic-fallacy",
    name: "Pathetic Fallacy",
    cn: "情景烘托 / 借天气写情绪",
    signal: "天气、光线、季节或自然环境明显在映照人物情绪或情节气氛",
    effect: "让场景气氛更强，也暗示人物心情、危险感或转折即将发生",
    purpose: "mirror emotion through the setting",
    stem:
      "The pathetic fallacy reflects the mood of the moment, making the atmosphere feel more emotionally charged.",
  },
  {
    id: "personification",
    name: "Personification",
    cn: "拟人",
    signal: "把非人事物写得像有人的动作、情绪或意图，如 the wind screamed",
    effect: "让画面更生动，也能让环境显得有威胁、温柔或充满生命感",
    purpose: "animate the setting or object",
    stem:
      "The personification gives the object human qualities, making the description more vivid and expressive.",
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
    id: "oxymoron",
    name: "Oxymoron",
    cn: "矛盾修辞",
    signal: "两个意义冲突的词被并列使用，如 deafening silence",
    effect: "制造张力和复杂感，让读者意识到人物或场景并不简单",
    purpose: "highlight conflict or complexity",
    stem:
      "The oxymoron combines opposite ideas, suggesting tension and making the description more thought-provoking.",
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
    id: "juxtaposition",
    name: "Juxtaposition",
    cn: "并置对照",
    signal: "把两个不协调、反差很大的形象或场景紧挨着放在一起",
    effect: "让差异更刺眼，突出矛盾、不公平或情绪反转",
    purpose: "make the contrast feel immediate",
    stem:
      "The juxtaposition places two sharply different ideas side by side, making the contrast feel more immediate and striking.",
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
    id: "extended-metaphor",
    name: "Extended Metaphor",
    cn: "延伸比喻",
    signal: "一个比喻不只出现一次，而是在多句里被持续发展和扩展",
    effect: "让核心观点更完整、更有层次，也让形象持续停留在读者脑中",
    purpose: "develop one image across the whole idea",
    stem:
      "The extended metaphor develops one central image over several lines, making the writer's point more sustained and memorable.",
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
  {
    id: "symbolism",
    name: "Symbolism",
    cn: "象征",
    signal: "具体物件、颜色、动作或形象被赋予更深层意义",
    effect: "让文字有更深层含义，暗示主题、命运、希望、死亡等抽象概念",
    purpose: "suggest a deeper idea beneath the surface",
    stem:
      "The symbol carries a deeper meaning, encouraging the reader to connect the image with a larger idea or theme.",
  },
  {
    id: "semantic-field",
    name: "Semantic Field",
    cn: "语义场",
    signal: "一组词都围绕同一个概念领域，比如战争、疾病、海洋、监狱",
    effect: "统一语气和主题，让某种氛围或观念不断被强化",
    purpose: "build a consistent idea through word choice",
    stem:
      "The semantic field links several words to the same idea, reinforcing the theme and shaping the reader's impression.",
  },
  {
    id: "irony",
    name: "Irony",
    cn: "反讽 / 讽刺性反差",
    signal: "结果、处境或表达与读者预期明显相反",
    effect: "制造讽刺、幽默或批判，也能强调局面的荒谬",
    purpose: "expose contradiction or absurdity",
    stem:
      "The irony highlights the gap between expectation and reality, making the situation seem more absurd or critical.",
  },
  {
    id: "alliteration",
    name: "Alliteration",
    cn: "头韵",
    signal: "相邻或接近的词反复使用同一个开头辅音",
    effect: "增强节奏感和可记忆性，也能强化某种声音或情绪",
    purpose: "add rhythm and emphasis through sound",
    stem:
      "The alliteration gives the phrase a stronger rhythm, helping the description sound more memorable and forceful.",
  },
  {
    id: "assonance",
    name: "Assonance",
    cn: "元音重复",
    signal: "相近词语中反复出现相似的元音音节",
    effect: "让句子听起来更流动、拖长、柔和或 haunting，取决于元音效果",
    purpose: "shape tone through repeated vowel sounds",
    stem:
      "The repeated vowel sound creates a lingering sound pattern, shaping the tone and making the line more musical.",
  },
  {
    id: "sibilance",
    name: "Sibilance",
    cn: "咝音",
    signal: "大量出现 s / sh / soft c 等摩擦音",
    effect: "让声音显得轻、冷、阴森、秘密或像蛇一样滑动",
    purpose: "create atmosphere through hissing sounds",
    stem:
      "The sibilance creates a soft hissing sound, which helps build tension and atmosphere in the description.",
  },
  {
    id: "euphemism",
    name: "Euphemism",
    cn: "委婉语",
    signal: "用更柔和、间接的表达代替直接甚至残酷的说法",
    effect: "弱化冲击力，也能暴露人物回避、虚伪或不愿面对现实",
    purpose: "soften or disguise a harsh truth",
    stem:
      "The euphemism softens the reality of the situation, suggesting discomfort or an attempt to avoid direct language.",
  },
  {
    id: "onomatopoeia",
    name: "Onomatopoeia",
    cn: "拟声",
    signal: "词本身模仿真实声音，如 bang, hiss, crack, buzz",
    effect: "让场景更具体、更有动感，也能增强紧张感或真实感",
    purpose: "bring the sound of the scene to life",
    stem:
      "The onomatopoeia recreates the sound directly, making the moment feel more immediate and vivid for the reader.",
  },
  {
    id: "plosives",
    name: "Plosives",
    cn: "爆破音",
    signal: "反复出现 p / b / d / t / k / g 等爆破辅音",
    effect: "让语气显得更有冲击、更粗暴、更 abrupt，也能突出愤怒或 violence",
    purpose: "add force through harsh consonant sounds",
    stem:
      "The plosive sounds make the line sound sharper and more forceful, increasing the sense of impact or aggression.",
  },
  {
    id: "zoomorphism",
    name: "Zoomorphism",
    cn: "动物化描写",
    signal: "把人写成像动物一样，有动物动作、习性或特征",
    effect: "弱化人物的人性，把他们写得更野蛮、卑微、危险或本能化",
    purpose: "characterise a person through animal traits",
    stem:
      "The zoomorphism gives the person animal-like qualities, shaping the reader's view of them in a more vivid and judgmental way.",
  },
  {
    id: "opinion",
    name: "Opinion",
    cn: "观点表达",
    signal: "明确表达 writer's view，如 I believe, clearly, in my view, unfairly",
    effect: "让立场更清楚，也能引导读者感受到作者的判断和态度",
    purpose: "state the writer's viewpoint directly",
    stem:
      "The clear opinion makes the writer's viewpoint unmistakable, guiding the reader towards a particular judgement.",
  },
];

const identifyBank = [
  {
    source: "Sample Paper 0, Source A",
    title: "Jo Marchant on chronic fatigue syndrome",
    text: [
      "Marchant describes chronic fatigue syndrome as something that steadily shrinks a person's world. Ordinary routines disappear, social life fades, and even moving from room to room becomes exhausting.",
      "When Samantha Miller tries to explain the experience, she says, “It was like being buried alive ... I was trapped.”",
    ],
    answer: "metaphor-simile",
    explanation:
      "The phrase “like being buried alive” is a vivid simile that makes Samantha Miller's suffering feel claustrophobic and extreme.",
  },
  {
    source: "Sample Paper 2, Source A",
    title: "Industrial Manchester extract",
    text: [
      "The writer presents industrial Manchester as a place overwhelmed by factories, smoke and chemical waste. Instead of fresh air or bright daylight, the whole city seems coated in grime.",
      "He explains that “a sort of black smoke covers the city. The sun seen through it is a disc without rays.”",
    ],
    answer: "sensory-imagery",
    explanation:
      "The writer builds a visual image of darkness and pollution, so this is a strong example of sensory imagery.",
  },
  {
    source: "Sample Paper 3, Source B",
    title: "Obesity memoir extract",
    text: [
      "In this memoir, the writer does not describe obesity as a neutral medical condition. Instead, she presents it as something invasive that damages her comfort, confidence and daily life.",
      "She calls it “that dreadful tormenting parasite on health and comfort”.",
    ],
    answer: "metaphor-simile",
    explanation:
      "The writer turns obesity into a “parasite”, which is figurative language used to intensify its negative impact.",
  },
  {
    source: "Sample Paper 4, Source A",
    title: "Polluted London description",
    text: [
      "The description focuses on how smoke, soot and fog combine until the city no longer feels open or breathable. London is shown as hidden inside a heavy layer of pollution.",
      "The writer says the smoke seems to “wrap London in a black cloud”.",
    ],
    answer: "metaphor-simile",
    explanation:
      "A “black cloud” is a metaphorical image that makes the pollution feel oppressive and inescapable.",
  },
  {
    source: "Sample Paper 5, Source A",
    title: "Cycling through the countryside",
    text: [
      "This travel piece presents cycling as a way of entering the landscape slowly and attentively. The route feels calm, spacious and full of detail as the morning light changes the view.",
      "The writer notices how “the first rays of sun streak across the chalk hillside”.",
    ],
    answer: "sensory-imagery",
    explanation:
      "This creates a vivid visual picture of the landscape, so the technique is sensory imagery.",
  },
  {
    source: "Sample Paper 6, Source A",
    title: "Emma Watson HeForShe speech",
    text: [
      "Emma Watson argues that gender equality should not be treated as an issue affecting only one group. She keeps bringing men and women together in the same sentence to stress shared freedom and shared pressure.",
      "For example, she says that “both men and women should feel free to be sensitive ... both men and women should feel free to be strong”.",
    ],
    answer: "repetition",
    explanation:
      "The repeated phrase “both men and women” reinforces the shared message about equality.",
  },
  {
    source: "Sample Paper 6, Source B",
    title: "Emmeline Pankhurst speech",
    text: [
      "Pankhurst attacks the people criticising suffragettes by making them seem savage and unfair. Her comparison is designed to turn the audience against these opponents rather than treat them as reasonable voices.",
      "She says they are “like beasts of prey reproaching the gentler animals”.",
    ],
    answer: "metaphor-simile",
    explanation:
      "The word “like” signals a simile, comparing opponents to predatory animals.",
  },
  {
    source: "Sample Paper 5, Source B",
    title: "Learning to ride a bicycle",
    text: [
      "The memoir sounds personal from the beginning because the writer explains exactly why she wanted to learn. Instead of making a general statement, she frames the experience through her own motivation and feelings.",
      "She says, “I did it from pure natural love of adventure”.",
    ],
    answer: "anecdote",
    explanation:
      "This first-person personal experience works like an anecdotal insight into the writer's motivation.",
  },
  {
    source: "Sample Paper 1, Source A",
    title: "The watercress girl",
    text: [
      "The writer pays close attention to the girl's appearance, showing how poverty is visible even in the clothes she wears during severe weather.",
      "She is described as wearing “a thin cotton gown, with a threadbare shawl wrapped round her shoulders”.",
    ],
    answer: "sensory-imagery",
    explanation:
      "The visual detail of the girl's worn clothing creates a vivid image of hardship, so this is sensory imagery.",
  },
  {
    source: "Sample Paper 1, Source A",
    title: "The watercress girl",
    text: [
      "Poverty has pushed the child out of a normal childhood and into responsibilities far beyond her age. The writer stresses how unnatural this change feels.",
      "He says she had “entirely lost all childish ways, and was, indeed, in thoughts and manner, a woman”.",
    ],
    answer: "contrast",
    explanation:
      "The contrast between a young child and “a woman” highlights how poverty has forced her to grow up too quickly.",
  },
  {
    source: "Sample Paper 2, Source B",
    title: "Modern speech on air pollution",
    text: [
      "The speaker wants the audience to stop treating air pollution as a vague environmental issue. By using measured evidence, the speech turns the topic into a real public-health emergency.",
      "At one point, the speaker states that “air pollution causes around 36,000 deaths each year”.",
    ],
    answer: "facts-statistics",
    explanation:
      "The exact number is factual evidence, so this is a clear example of facts and statistics.",
  },
  {
    source: "Sample Paper 1, Source B",
    title: "Modern article on child poverty",
    text: [
      "The article argues that poverty still shapes educational outcomes in a severe and measurable way. Instead of speaking generally, it places poorer and wealthier pupils side by side.",
      "It states, “Only one in three disadvantaged pupils is hitting the government's GCSE pass target – compared with over 60 percent of their richer peers.”",
    ],
    answer: "facts-statistics",
    explanation:
      "This uses a precise proportion and comparison, so it is clearly facts and statistics.",
  },
  {
    source: "Sample Paper 4, Source B",
    title: "Poole Bay description",
    text: [
      "Unlike the darker urban descriptions elsewhere, this scene presents the bay as lively, bright and attractive. The writer layers several visual details together so the setting feels active in the reader's mind.",
      "He writes that “the town's two piers looked cheerful and dashing, and out at sea the lights of passing ships bobbed and blinked”.",
    ],
    answer: "sensory-imagery",
    explanation:
      "The writer builds a vivid visual scene, so the technique is sensory imagery.",
  },
  {
    source: "Sample Paper 3, Source A",
    title: "Modern blog on body image",
    text: [
      "The writer explains how body shame changes the way a person behaves in public, making them try to take up less space.",
      "She says you have to “fold yourself up like origami”.",
    ],
    answer: "metaphor-simile",
    explanation:
      "The word “like” signals a simile, comparing the person to folded origami to show self-restriction and discomfort.",
  },
  {
    source: "Sample Paper 3, Source B",
    title: "William Banting on corpulence",
    text: [
      "The writer lists the exhausting physical difficulties caused by his weight, making ordinary movement sound laboured and uncomfortable.",
      "He says he must “puff and blow with every slight exertion”.",
    ],
    answer: "sensory-imagery",
    explanation:
      "The phrase lets the reader almost hear the breathing, so it works as sensory imagery.",
  },
  {
    source: "Sample Paper 5, Source A",
    title: "Cycling through the countryside",
    text: [
      "The writer describes cycling as a full sensory experience, not just a physical activity. The sounds of the bicycle become part of the pleasure of the ride.",
      "He writes about “the whirr of the chain” and “the hum of the tyres”.",
    ],
    answer: "onomatopoeia",
    explanation:
      "Words like “whirr” and “hum” imitate sound directly, so this is onomatopoeia.",
  },
  {
    source: "Skill Builder, Source A",
    title: "Storm outside the hospital",
    text: [
      "Mia waited outside the hospital for news, unable to keep still. Above her, the sky grew darker by the minute and cold rain started to hammer the pavement.",
      "The storm seemed to echo her fear, with thunder breaking just as the doors finally opened.",
    ],
    answer: "pathetic-fallacy",
    explanation:
      "The threatening weather mirrors Mia's anxiety, so this is a clear example of pathetic fallacy.",
  },
  {
    source: "Skill Builder, Source B",
    title: "House in the wind",
    text: [
      "The lane was empty, but the old house did not seem still. Its shutters rattled and the roof groaned as the wind pushed against it.",
      "By midnight, the wind was clawing at the windows as if it wanted to be let in.",
    ],
    answer: "personification",
    explanation:
      "The wind is given the human-like action of “clawing”, so the description uses personification.",
  },
  {
    source: "Skill Builder, Source C",
    title: "Silent exam hall",
    text: [
      "No one dared speak as the exam papers were handed out. Hundreds of students sat motionless, but the tension in the room felt almost physical.",
      "It was a deafening silence, the kind that made every cough sound enormous.",
    ],
    answer: "oxymoron",
    explanation:
      "“Deafening silence” combines opposite ideas, so it is an oxymoron.",
  },
  {
    source: "Skill Builder, Source D",
    title: "Broken gate image",
    text: [
      "The prison had been abandoned for years, but one detail remained impossible to ignore. A rusted chain hung split in two across the gate.",
      "For the narrator, that broken chain symbolised freedom arriving after years of control.",
    ],
    answer: "symbolism",
    explanation:
      "The broken chain stands for a deeper idea about freedom, so it functions as symbolism.",
  },
  {
    source: "Skill Builder, Source E",
    title: "War language in sport article",
    text: [
      "The report does not describe the match as a calm contest. Instead, the writer talks about an “attack”, a “defence”, a “battle” in midfield and a final “victory”.",
      "That cluster of terms creates a clear semantic field of warfare.",
    ],
    answer: "semantic-field",
    explanation:
      "Words like “attack”, “battle” and “victory” all belong to war vocabulary, creating a semantic field.",
  },
  {
    source: "Skill Builder, Source F",
    title: "Library renovation",
    text: [
      "The new school library opened with a banner promising 'A Perfect Space for Quiet Study'. Unfortunately, builders were still finishing the corridor outside.",
      "All morning the students revised under the scream of drills and the crash of falling plaster.",
    ],
    answer: "irony",
    explanation:
      "A 'quiet study' space that is full of drilling is the opposite of what we expect, so the situation is ironic.",
  },
  {
    source: "Skill Builder, Source G",
    title: "Fast river description",
    text: [
      "The river was no longer calm after the storm. It rushed between the rocks with a violence that made the bank feel unsafe.",
      "The writer calls it 'the furious, foaming flood'.",
    ],
    answer: "alliteration",
    explanation:
      "The repeated initial 'f' sound in “furious, foaming flood” makes this alliteration.",
  },
  {
    source: "Skill Builder, Source H",
    title: "Snake in the grass",
    text: [
      "Nothing in the garden moved except a narrow shape near the stones. The atmosphere is tense because the writer slows the moment right down.",
      "A snake 'slid silently through the soft grass'.",
    ],
    answer: "sibilance",
    explanation:
      "The repeated 's' sounds create a hiss-like effect, so this is sibilance.",
  },
  {
    source: "Skill Builder, Source I",
    title: "Family conversation",
    text: [
      "The family never says directly that Grandad has died. Everyone circles around the news, speaking carefully as though plain words would be too painful.",
      "His aunt simply says that he 'passed away peacefully in the night'.",
    ],
    answer: "euphemism",
    explanation:
      "“Passed away” is a softer, more indirect way to describe death, so it is a euphemism.",
  },
  {
    source: "Skill Builder, Source J",
    title: "Kitchen fire scene",
    text: [
      "The accident happens in a second. Oil spits from the pan and the room changes from ordinary to dangerous almost instantly.",
      "The writer describes the stove with words like 'crack', 'bang' and 'hiss'.",
    ],
    answer: "onomatopoeia",
    explanation:
      "Words like “bang” and “hiss” imitate sound directly, so this is onomatopoeia.",
  },
  {
    source: "Skill Builder, Source K",
    title: "Violent confrontation",
    text: [
      "The speaker wants the attack to sound brutal rather than graceful. Each movement lands with a hard, percussive force.",
      "He writes of 'punching, battering, breaking' until the victim falls.",
    ],
    answer: "plosives",
    explanation:
      "The repeated hard 'p', 'b' and 'k' sounds create plosive force in the phrase.",
  },
  {
    source: "Skill Builder, Source L",
    title: "Speech on school uniform",
    text: [
      "The article does not hide the writer's judgement. It keeps pushing the reader toward one clear stance about the new rules.",
      "In the opening, the writer says, 'In my view, this policy is unfair, outdated and completely unnecessary.'",
    ],
    answer: "opinion",
    explanation:
      "The phrase “In my view” directly signals the writer's judgement, so this is clear opinion.",
  },
  {
    source: "Skill Builder, Source M",
    title: "Headteacher comparison",
    text: [
      "The narrator wants the headteacher to seem intimidating and hostile rather than calm. Instead of describing him neutrally, she gives him animal traits.",
      "She says he prowled the corridor and barked orders at anyone who was late.",
    ],
    answer: "zoomorphism",
    explanation:
      "Describing a person as prowling and barking gives them animal qualities, which is zoomorphism.",
  },
  {
    source: "Skill Builder, Source N",
    title: "Essay season article",
    text: [
      "The columnist compares Year 11 to surviving a long expedition rather than simply doing homework. The same image keeps returning across the whole paragraph.",
      "Students are told to 'pack energy, ration sleep, climb each deadline and keep walking even when the route gets steep'.",
    ],
    answer: "extended-metaphor",
    explanation:
      "The comparison of exams to an expedition is sustained across several linked images, so it is an extended metaphor.",
  },
];

const effectChoiceBank = [
  {
    source: "Sample Paper 0, Source A",
    title: "Jo Marchant on chronic fatigue syndrome",
    text: [
      "The article explores how invisible illness can leave sufferers feeling isolated and misunderstood. Rather than using clinical language alone, it includes a striking comparison to express the emotional reality.",
      "The patient says, “It was like being buried alive.”",
    ],
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
    text: [
      "The industrial landscape is described through smell, colour and texture so that the environment feels physically polluted rather than abstractly unpleasant.",
      "The writer refers to “fetid, muddy waters, stained with a thousand colours by the factories they pass”.",
    ],
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
    text: [
      "The travel writing celebrates the countryside by slowing down to notice the light and shape of the landscape. The description is meant to make the ride feel open and refreshing.",
      "The writer describes “the first rays of sun streak across the chalk hillside”.",
    ],
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
    text: [
      "Watson argues that restrictive gender roles harm everyone, so she deliberately repeats the same balanced structure instead of separating men and women into opposite groups.",
      "She says that “both men and women should feel free to be sensitive ... both men and women should feel free to be strong”.",
    ],
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
    text: [
      "Pankhurst wants the audience to see the critics of suffragettes as brutal and morally weak. Her comparison turns the conflict into a struggle between aggressors and victims.",
      "She describes those critics as “like beasts of prey reproaching the gentler animals”.",
    ],
    technique: "metaphor-simile",
    choices: [
      "It paints opponents as savage predators, making their criticism seem cruel and hypocritical.",
      "It softens the attack and makes the tone more balanced.",
      "It adds a precise statistic to strengthen the claim.",
    ],
    answer: 0,
  },
  {
    source: "Sample Paper 1, Source A",
    title: "The watercress girl",
    text: [
      "The description of the child's clothing is designed to show poverty in a direct visual way, not as an abstract social issue.",
      "She wears “a thin cotton gown, with a threadbare shawl wrapped round her shoulders”.",
    ],
    technique: "sensory-imagery",
    choices: [
      "It creates a vivid picture of deprivation, encouraging the reader to feel sympathy for the girl.",
      "It makes the weather sound cheerful and welcoming.",
      "It proves with exact data how many poor children existed.",
    ],
    answer: 0,
  },
  {
    source: "Sample Paper 3, Source A",
    title: "Modern blog on body image",
    text: [
      "The writer uses a comparison to show how fat people are made to feel they should physically shrink themselves in public spaces.",
      "She says you have to “fold yourself up like origami”.",
    ],
    technique: "metaphor-simile",
    choices: [
      "It suggests pressure, discomfort and shame, as if the person must make themselves unnaturally small.",
      "It makes the tone light-hearted and playful.",
      "It mainly gives medical evidence about body size.",
    ],
    answer: 0,
  },
  {
    source: "Sample Paper 4, Source A",
    title: "Polluted London description",
    text: [
      "The writer wants London to feel smothered and deathly rather than simply unpleasant. The pollution is compared to something dark and ceremonial.",
      "He says the smoke “shrouds everything in a funeral veil”.",
    ],
    technique: "metaphor-simile",
    choices: [
      "It creates a bleak, death-like atmosphere, making the city feel mournful and oppressive.",
      "It makes the fog sound comforting and protective.",
      "It turns the scene into a humorous exaggeration.",
    ],
    answer: 0,
  },
  {
    source: "Sample Paper 5, Source A",
    title: "Cycling through the countryside",
    text: [
      "The writer includes the sounds of the bike so the journey feels immediate and physical, not just visual.",
      "He describes “the whirr of the chain” and “the hum of the tyres”.",
    ],
    technique: "onomatopoeia",
    choices: [
      "It brings the ride to life through sound, making the movement feel smooth, immersive and satisfying.",
      "It proves the bicycle is broken and dangerous.",
      "It makes the scene feel silent and empty.",
    ],
    answer: 0,
  },
  {
    source: "Sample Paper 2, Source B",
    title: "Modern speech on air pollution",
    text: [
      "The speech tries to convince listeners that air pollution has human consequences, not just environmental ones. To do that, it includes a precise annual death figure.",
      "The speaker states that “air pollution causes around 36,000 deaths each year”.",
    ],
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
    text: [
      "The article criticises unequal education outcomes by placing poorer pupils and richer pupils in a direct numerical comparison. The contrast is made through evidence rather than emotion alone.",
      "It explains that “Only one in three disadvantaged pupils is hitting the government's GCSE pass target – compared with over 60 percent of their richer peers.”",
    ],
    technique: "facts-statistics",
    choices: [
      "It uses evidence to highlight the scale of inequality and make the argument harder to ignore.",
      "It softens the issue by making it sound vague.",
      "It mainly creates a peaceful and reflective mood.",
    ],
    answer: 0,
  },
  {
    source: "Skill Builder, Source A",
    title: "Storm outside the hospital",
    text: [
      "The weather grows darker as Mia waits for life-changing news, so the setting seems to share her emotional state rather than staying neutral.",
      "Thunder cracks overhead just as she sees the hospital doors open.",
    ],
    technique: "pathetic-fallacy",
    choices: [
      "It mirrors her fear and makes the whole scene feel more tense and dramatic.",
      "It gives exact factual evidence about the hospital.",
      "It makes the moment sound cheerful and reassuring.",
    ],
    answer: 0,
  },
  {
    source: "Skill Builder, Source B",
    title: "House in the wind",
    text: [
      "The description makes the house feel menacing by giving natural forces human behaviour instead of describing them plainly.",
      "The wind is said to be 'clawing at the windows'.",
    ],
    technique: "personification",
    choices: [
      "It makes the setting feel alive and threatening, as if the storm is attacking the house.",
      "It removes tension by making the weather sound gentle.",
      "It proves scientifically how strong the wind is.",
    ],
    answer: 0,
  },
  {
    source: "Skill Builder, Source C",
    title: "Silent exam hall",
    text: [
      "The hall is so tense that the writer combines opposite ideas to capture how oppressive the silence feels.",
      "It becomes a 'deafening silence'.",
    ],
    technique: "oxymoron",
    choices: [
      "It suggests the silence is so intense that it feels almost loud, increasing the tension.",
      "It makes the atmosphere calmer and more relaxed.",
      "It introduces a precise statistic to measure the silence.",
    ],
    answer: 0,
  },
  {
    source: "Skill Builder, Source D",
    title: "Broken chain image",
    text: [
      "A split chain hanging from a gate is described not just as an object, but as carrying a larger idea about the narrator's life.",
      "The chain is linked with the idea of freedom after control.",
    ],
    technique: "symbolism",
    choices: [
      "It gives the image a deeper meaning, helping the reader connect it with freedom and release.",
      "It makes the passage sound objective and detached.",
      "It mainly creates humour by making the chain seem silly.",
    ],
    answer: 0,
  },
  {
    source: "Skill Builder, Source E",
    title: "War language in sport article",
    text: [
      "The match report is filled with words like 'attack', 'battle', 'defence' and 'victory', so the same vocabulary field keeps shaping the reader's impression.",
      "The game starts to sound more like warfare than entertainment.",
    ],
    technique: "semantic-field",
    choices: [
      "It reinforces the idea of conflict, making the match feel intense and combative.",
      "It softens the competition and makes it feel casual.",
      "It shows that the writer has forgotten the topic of sport.",
    ],
    answer: 0,
  },
  {
    source: "Skill Builder, Source G",
    title: "Fast river description",
    text: [
      "The repeated initial consonant in 'furious, foaming flood' is used to make the phrase more forceful and memorable.",
      "The writer wants the river to feel energetic and violent.",
    ],
    technique: "alliteration",
    choices: [
      "It adds rhythm and emphasis, helping the river sound more powerful and dramatic.",
      "It makes the description sound hesitant and weak.",
      "It turns the sentence into a calm factual statement.",
    ],
    answer: 0,
  },
  {
    source: "Skill Builder, Source H",
    title: "Snake in the grass",
    text: [
      "The line 'slid silently through the soft grass' repeats hissing sounds to match the movement of the snake.",
      "The sound pattern shapes the atmosphere as much as the meaning does.",
    ],
    technique: "sibilance",
    choices: [
      "It creates a hiss-like sound that makes the scene feel tense, sly and snake-like.",
      "It makes the snake sound friendly and harmless.",
      "It proves exactly how long the grass is.",
    ],
    answer: 0,
  },
  {
    source: "Skill Builder, Source K",
    title: "Violent confrontation",
    text: [
      "The writer piles up hard consonant sounds in 'punching, battering, breaking' to make the violence sound blunt and forceful.",
      "The emphasis is not just on meaning, but on the impact of the sounds themselves.",
    ],
    technique: "plosives",
    choices: [
      "It makes the attack sound harsher and more aggressive through explosive sounds.",
      "It softens the description and makes it sound peaceful.",
      "It creates a comic effect by making the violence feel silly.",
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
      passage: [
        "When I speak about gender equality, I am often treated as if I am speaking only about the rights of women. That is not enough. Equality should matter to every family, every classroom and every workplace because restrictive ideas about gender narrow all of our lives.",
        "I have seen how girls are taught to shrink themselves and how boys are taught to hide parts of themselves in order to appear strong. Many people grow up believing that kindness is weakness, that ambition is unfeminine, or that vulnerability is shameful. Those lessons damage everyone who has to live under them.",
        "I want men to take up this cause so their daughters, sisters and mothers can be free from prejudice, but I also want sons to feel permitted to be vulnerable and human. If men do not have to be aggressive all the time, women will not be forced to be submissive.",
        "That is why I believe both men and women deserve a wider idea of what they can become. As I have said, “both men and women should feel free to be sensitive” and “both men and women should feel free to be strong”.",
        "Equality is not a battle between two sides; it should be a shared freedom for everyone. The more often we repeat that truth, the harder it becomes for old stereotypes to survive unchallenged.",
      ],
      focus: [
        "“both men and women should feel free to be sensitive” and “both men and women should feel free to be strong”",
      ],
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
      passage: [
        "Too often we talk about dirty air as if it is only an environmental inconvenience, something unpleasant but distant. We complain about haze or traffic fumes for a moment, then carry on as though the problem disappears when the smell fades.",
        "In reality, polluted air enters our lungs, worsens illness and shortens lives in towns and cities across the country. Children breathe it on the way to school, older people struggle with it in their homes, and patients with asthma or heart disease carry its effects every day.",
        "This is not a minor issue of comfort or tidiness. It is a national public-health emergency hiding in plain sight, one that affects people who have done nothing to choose it and often have the least power to escape it.",
        "That is why this issue cannot be ignored: air pollution causes around 36,000 deaths each year. When a figure is that high, no responsible government or citizen can pretend the problem is minor.",
        "If we continue to treat these deaths as background noise, we will be choosing delay over action and habit over human life. Clean air should not be a luxury for the few; it should be a basic protection for everyone.",
      ],
      focus: ["air pollution causes around 36,000 deaths each year"],
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
      passage: [
        "Some patients describe chronic fatigue syndrome as a tiredness, but that word is far too weak. Tiredness suggests something ordinary, something relieved by sleep or a quiet day. This illness is far more destructive than that.",
        "It can strip away work, friendship, movement and confidence until a person feels cut off from ordinary life. The simplest activities become negotiations with pain and exhaustion, and even speaking to others can feel like a task that costs too much.",
        "One woman described watching the rest of the world continue without her as she lay in a darkened room, unable to join in family life, unable to plan ahead, unable to trust her own body. The isolation was not just physical but emotional, as though language itself could no longer carry what she felt.",
        "Eventually she explained it in a phrase that is impossible to forget: “It was like being buried alive ... I was trapped.” The image captures not just pain, but the awful sense of being shut in and unable to escape.",
        "That comparison matters because it gives shape to a condition that many outsiders still fail to understand. Instead of a vague complaint, the suffering becomes immediate, claustrophobic and terrifyingly real.",
      ],
      focus: ["“It was like being buried alive ... I was trapped.”"],
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
    {
      source: "Sample Paper 1, Source A",
      sourceTitle: "The watercress girl",
      genre: "19th-century non-fiction",
      topic: "Child poverty",
      technique: "sensory-imagery",
      passage: [
        "The writer presents the young girl not as a statistic but as a child whose poverty can be seen immediately in the details of her appearance. Everything about the description suggests hardship, cold and neglect.",
        "Although the weather is severe, she is dressed in a thin cotton gown, with a threadbare shawl wrapped round her shoulders. Even her shoes do not fit properly, forcing her to shuffle as she walks.",
        "The effect is not simply descriptive. The details make the reader picture a child who has far too little protection against the world around her.",
      ],
      focus: ["a thin cotton gown, with a threadbare shawl wrapped round her shoulders"],
      question: "补全 effect 分析句，说明 imagery 如何让读者更同情这个女孩。",
      helper: "这题练 visual imagery。注意 poverty 如何被“看见”，以及这种细节怎样引发 sympathy。",
      blanks: [
        {
          label: "这些细节让女孩的处境显得更 ______。",
          answers: ["vivid", "clear", "visible"],
        },
        {
          label: "同时突出她生活条件的 ______。",
          answers: ["poverty", "hardship", "deprivation"],
        },
        {
          label: "因此更容易让读者对她产生 ______。",
          answers: ["sympathy", "pity", "concern"],
        },
      ],
      modelAnswer:
        "The imagery makes the girl's poverty feel vivid and visible, highlighting her hardship and encouraging sympathy from the reader.",
    },
    {
      source: "Skill Builder, Source O",
      sourceTitle: "Storm around the old house",
      genre: "Descriptive writing",
      topic: "Atmosphere and tension",
      technique: "personification",
      passage: [
        "By the time the family reached the cottage, evening had almost disappeared. The garden was empty, but the whole place felt as if it were waiting for them in bad temper.",
        "Rain tapped at the roof and the branches dragged themselves across the panes. Nothing in the scene seemed still or restful for even a second.",
        "Then the storm gathered properly. The wind clawed at the shutters and rattled the gate until the house seemed to wince under the noise.",
        "Inside, nobody spoke above a whisper. It felt as though the weather itself were trying to get in.",
      ],
      focus: ["The wind clawed at the shutters"],
      question: "补全 effect 分析句，说明 personification 如何增强这段场景的紧张感。",
      helper: "这题练的是 personification。想一想：weather 被写得像什么？这会让 atmosphere 变得怎样？",
      blanks: [
        {
          label: "拟人让风显得更 ______。",
          answers: ["alive", "human", "active"],
        },
        {
          label: "这会让房子周围的环境显得更 ______。",
          answers: ["threatening", "menacing", "dangerous"],
        },
        {
          label: "因此更能强化整段的 ______。",
          answers: ["tension", "atmosphere", "fear"],
        },
      ],
      modelAnswer:
        "The personification makes the wind seem alive and aggressive, which makes the setting feel more threatening and strengthens the tense atmosphere.",
    },
  ],
  medium: [
    {
      source: "Sample Paper 1, Source B",
      sourceTitle: "Modern article on child poverty",
      genre: "Newspaper article",
      topic: "Education inequality",
      technique: "facts-statistics",
      passage: [
        "In the most deprived communities, success at school is still shaped by family income long before exam day arrives. By the time students sit in an exam hall, many have already spent years coping with disadvantages wealthier pupils never have to think about.",
        "Some revise in quiet bedrooms with tutors and private support. Others attempt homework in overcrowded flats, share devices with siblings, or arrive at school hungry and already exhausted. To pretend those pupils begin from the same starting line is simply dishonest.",
        "Pupils who already face hunger, cramped housing and limited resources are being asked to compete on terms that are plainly unequal. Yet public debate often talks as though effort alone can erase every structural barrier placed in their way.",
        "The numbers make that inequality impossible to miss: only one in three disadvantaged pupils is hitting the government's GCSE pass target, compared with over 60 percent of their richer peers. This is not a small gap but a national failure.",
        "Statistics like these force the issue out of the realm of opinion. They show that child poverty is not only a social problem but an educational one, shaping futures before young people have had a fair chance to choose them.",
      ],
      focus: [
        "only one in three disadvantaged pupils is hitting the government's GCSE pass target, compared with over 60 percent of their richer peers",
      ],
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
      passage: [
        "The river no longer suggests freshness or life. There is no sparkle in it, no sense that it belongs to open country or clean weather. Instead it seems exhausted before it has even left the town behind.",
        "It creeps past the factories carrying the waste of industry, and the water seems corrupted by everything it touches. Smoke hangs above it, refuse gathers at its edges, and every movement of the current appears thick rather than free.",
        "The banks offer no comfort either. Brick, ash and machinery crowd the view, leaving the river trapped inside a landscape built for production rather than beauty. What should be natural has been forced into service.",
        "Its surface is described as “fetid, muddy waters, stained with a thousand colours by the factories they pass”, a phrase that makes the pollution feel visible, foul and deeply unnatural.",
        "The description works because it does not merely tell us the river is dirty. It makes us almost smell the rot, see the strange colours and feel the damage industry has pressed into the environment.",
      ],
      focus: ["“fetid, muddy waters, stained with a thousand colours by the factories they pass”"],
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
      passage: [
        "We had been climbing for some time when the morning finally began to open around us. The effort of the hill slowed everything down so that every change in light seemed noticeable, every sound of wind and tyre clearer than before.",
        "The air felt sharp and clean, and the whole hillside seemed to wake with the light. Below us, hedges and lanes emerged gradually from shadow, as if the landscape were lifting a curtain one fold at a time.",
        "Cycling through that moment felt completely different from travelling in a car. There was time to notice the smell of wet earth, the pale stone of the path and the sudden warmth on our backs as the sun rose higher.",
        "Soon the first rays of sun streaked across the chalk hillside, and beyond it the land spread into a patchwork of green fields. From the saddle, the countryside looked endless, bright and full of promise.",
        "The scene made the ride feel less like exercise and more like an entry into the day itself. What mattered was not speed but the sense of freedom that came from being placed so directly inside the landscape.",
      ],
      focus: ["the first rays of sun streaked across the chalk hillside"],
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
      passage: [
        "We are criticised as if we were the violent force in this struggle, yet those who condemn us have long ignored the suffering and injustice done to women. They speak as if patience were easy for those who have never had to wait outside the door of power.",
        "For years women have been told to petition more softly, to request more politely, to trust that justice will arrive in its own time. Meanwhile the law has continued to treat them as lesser citizens, and society has praised their obedience as though silence were a virtue.",
        "Our opponents speak with the calm confidence of people who have never had to beg for political existence. They ask for order from those denied representation and then call their frustration unreasonable.",
        "It is rather like beasts of prey reproaching the gentler animals. Such language exposes the cruelty and hypocrisy of our opponents far more clearly than any polite reply could do.",
        "The comparison strips away the respectability of their criticism. Instead of sounding noble or measured, they appear predatory, powerful and shamelessly unfair.",
      ],
      focus: ["like beasts of prey reproaching the gentler animals"],
      question:
        "Write one or two sentences explaining the effect of the simile in this extract.",
      helper:
        "这段来自 Sample Paper 6。建议写到 opponents 被写成什么样，以及这会让 suffragettes 显得怎样。",
      requiredKeywords: ["predatory", "aggressive", "victim", "sympathy", "reader", "hypocrisy"],
      threshold: 2,
      modelAnswer:
        "The simile presents the opponents as predatory and cruel, which makes their criticism seem hypocritical. As a result, the reader is pushed to sympathise more strongly with the suffragettes.",
    },
    {
      source: "Skill Builder, Source D",
      sourceTitle: "Broken chain at the gate",
      genre: "Descriptive / reflective writing",
      topic: "Freedom and control",
      technique: "symbolism",
      passage: [
        "The prison had been closed for years, but the entrance had not been repaired. Rust stained the stone, weeds pushed through the cracks, and the gate leaned slightly away from its hinges as if even the building had lost the will to stand straight.",
        "Across the middle hung a chain snapped in one place, its broken ends turned outward. No one had touched it, yet it was the first thing the narrator noticed.",
        "To her, that damaged chain meant more than neglect. It looked like the remains of control itself, something once heavy and certain now split open and left behind.",
        "Standing there, she felt that the place no longer represented confinement. Instead it seemed to point toward release.",
      ],
      focus: ["that damaged chain meant more than neglect"],
      question:
        "Write one or two sentences explaining the effect of the symbolism in this extract.",
      helper:
        "这题练 symbolism。建议写到：broken chain 的 deeper meaning 是什么，以及它怎样影响 reader 对主题的理解。",
      requiredKeywords: ["freedom", "deeper", "control", "reader", "theme", "symbol"],
      threshold: 2,
      modelAnswer:
        "The broken chain acts as a symbol of freedom and release, suggesting that control has finally been broken. This gives the image a deeper meaning and helps the reader connect it to the wider theme of escaping oppression.",
    },
    {
      source: "Sample Paper 3, Source A",
      sourceTitle: "Modern blog on body image",
      genre: "Blog post",
      topic: "Body image and shame",
      technique: "metaphor-simile",
      passage: [
        "The writer reflects on what it feels like to live in a body that is constantly judged. Her argument is not only about size, but about the social pressure to apologise for taking up space.",
        "She explains that when you are watched and judged, you begin to fold yourself up like origami. The image is powerful because it suggests effort, discomfort and the need to become less visible.",
        "Instead of feeling free to exist naturally, the person is made to feel that their body should be reduced and rearranged for other people's comfort.",
      ],
      focus: ["fold yourself up like origami"],
      question:
        "Write one or two sentences explaining the effect of the simile in this extract.",
      helper:
        "这题练 Sample 3。建议写到：writer 为什么会被写成“折起来”，以及这会让 reader 感受到怎样的 social pressure。",
      requiredKeywords: ["small", "pressure", "uncomfortable", "shame", "reader", "society"],
      threshold: 2,
      modelAnswer:
        "The simile suggests that the writer feels forced to make herself unnaturally small, which highlights discomfort and social shame. This helps the reader understand the pressure society places on people who are judged for their bodies.",
    },
  ],
  hard: [
    {
      source: "Sample Paper 4, Source A",
      sourceTitle: "Polluted London description",
      genre: "Travel writing / non-fiction",
      topic: "Urban pollution",
      technique: "metaphor-simile",
      passage: [
        "As evening thickened, the fog did not clear but gathered strength, mixing with the soot pouring from thousands of chimneys. What might elsewhere have settled into softness became in London something darker and more oppressive.",
        "At first the effect was only a dimming of outlines. Then streets, roofs and windows vanished behind it until the city seemed to lose its shape altogether. Lamps burned weakly through the murk, and faces emerged only at the last moment before disappearing again.",
        "There was no sense of open sky above the houses, no promise that a gust of wind might restore the distance. Instead the atmosphere seemed to press downward, making the city feel sealed under its own industry.",
        "The smoke appeared to wrap London in a black cloud, turning the air heavy and the distance blind. It was as if the whole capital had been shut inside its own dirt, unable to breathe or look beyond itself.",
        "The image is memorable because it transforms pollution from a simple weather detail into a suffocating presence. The city is not merely covered by smoke; it feels imprisoned by it.",
      ],
      focus: ["wrap London in a black cloud"],
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
      passage: [
        "I began for no practical reason at all, but from a pure natural love of adventure. The very uselessness of the idea made it more attractive, as if learning to ride would prove something not to others but to myself.",
        "At first the machine looked ungainly and faintly absurd. It wobbled when touched, refused obedience and seemed designed to expose my awkwardness in public. Yet that only sharpened my determination to master it.",
        "The progress was not sudden. Every part of the skill had to be earned separately, and each attempt brought the possibility of bruises, embarrassment and another awkward failure in the dust.",
        "So I learned each movement one by one: first, to pedal; second, to turn; third, to dismount; and fourth, to mount independently. Every small success felt earned, and with each stage the bicycle became less a contraption and more a companion in freedom.",
        "Because the story is told through personal experience, the achievement feels intimate and believable. The reader follows not just the physical lesson but the excitement of discovering courage through persistence.",
      ],
      focus: [
        "from a pure natural love of adventure",
        "first, to pedal; second, to turn; third, to dismount; and fourth, to mount independently",
      ],
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
      passage: [
        "Manchester boasts enormous mills and warehouses, monuments to commerce and production that dominate the skyline with pride. Their scale suggests confidence, wealth and the relentless forward drive of industry.",
        "Wealth, energy and ambition seem to rise from every brick of these huge industrial buildings. The city presents itself as powerful and successful, eager to display what it can manufacture and how quickly it can grow.",
        "Yet that public grandeur is only half the picture. A short distance away, the lives of ordinary workers tell a different story, one not of triumph but of crowding, hardship and neglect.",
        "Beside these palaces of industry stand wretched dwellings, cramped and miserable places where the workers themselves must live. The nearness of the two scenes makes the city's prosperity look harshly uneven.",
        "The contrast is disturbing because the buildings are not far apart. Wealth and poverty exist almost side by side, forcing the reader to see industrial success as something built upon deep social inequality.",
      ],
      focus: ["palaces of industry", "wretched dwellings"],
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
    {
      source: "Skill Builder, Source N",
      sourceTitle: "Year 11 as an expedition",
      genre: "Magazine article",
      topic: "Exams and pressure",
      technique: "extended-metaphor",
      passage: [
        "By spring, Year 11 no longer feels like an ordinary school term. It becomes an expedition, and every student is expected to keep moving whether they feel ready or not.",
        "Teachers speak like guides preparing a team for difficult ground. They tell students to pack energy, ration sleep, climb each deadline and keep walking even when the route gets steep.",
        "Some days feel like progress across open ground, but others feel like slipping backwards with a bag full of pressure on your shoulders. Even the smallest success can seem like reaching a checkpoint rather than a finish line.",
        "The metaphor continues because exam season is not one single moment of panic. It is a long journey made of effort, setbacks and stubbornness.",
      ],
      focus: ["pack energy, ration sleep, climb each deadline and keep walking"],
      question:
        "Analyse the effect of the extended metaphor in this extract. Write an exam-style response.",
      helper:
        "这题练 extended metaphor。注意写 sustained image、journey/challenge、reader understanding 这几个方向。",
      requiredKeywords: [
        "journey",
        "challenge",
        "sustained",
        "pressure",
        "reader",
        "determination",
        "memorable",
      ],
      threshold: 3,
      modelAnswer:
        "The extended metaphor presents exam season as a long and demanding journey, which helps the reader understand how sustained the pressure feels. Because the image is developed across several linked details, the challenge seems more vivid, memorable and demanding, while also suggesting determination is needed to get through it.",
    },
    {
      source: "Sample Paper 5, Source A",
      sourceTitle: "Cycling through the countryside",
      genre: "Magazine article",
      topic: "Cycling and freedom",
      technique: "onomatopoeia",
      passage: [
        "The writer contrasts urban stress with the rhythm of cycling through open countryside. Instead of traffic and pressure, the bike journey is defined by controlled movement and small repeated sounds.",
        "As the route opens out, he notices not only the landscape but the mechanics of the ride itself. The whirr of the chain and the hum of the tyres become part of the pleasure of moving forward.",
        "These sounds are not harsh or disruptive. They help make the journey feel smooth, focused and almost meditative, as if the bike and rider are working in complete harmony.",
        "Because of that, the ride seems less like effort and more like freedom carried by sound and motion together.",
      ],
      focus: ["The whirr of the chain and the hum of the tyres"],
      question:
        "Analyse the effect of the sound imagery in this extract. Write an exam-style response.",
      helper:
        "这题练 Sample 5。可以写 sound effect、smooth movement、immersion、freedom 这些方向。",
      requiredKeywords: [
        "sound",
        "movement",
        "smooth",
        "immersive",
        "reader",
        "freedom",
        "cycling",
      ],
      threshold: 3,
      modelAnswer:
        "The sound imagery makes the cycling experience feel immediate and immersive, helping the reader hear the smooth rhythm of the ride. This suggests freedom and harmony, so the journey seems calm, controlled and deeply enjoyable rather than tiring.",
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

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderParagraphs(element, content) {
  const paragraphs = (Array.isArray(content) ? content : String(content).split(/\n\s*\n/))
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br />")}</p>`)
    .join("");

  element.innerHTML = paragraphs;
}

function applyHighlights(text, phrases = []) {
  let escapedText = escapeHtml(text);

  [...phrases]
    .filter(Boolean)
    .sort((left, right) => right.length - left.length)
    .forEach((phrase) => {
      const escapedPhrase = escapeHtml(phrase);
      escapedText = escapedText.replaceAll(
        escapedPhrase,
        `<mark class="passage-highlight">${escapedPhrase}</mark>`,
      );
    });

  return escapedText.replace(/\n/g, "<br />");
}

function renderHighlightedParagraphs(element, content, phrases = []) {
  const paragraphs = (Array.isArray(content) ? content : String(content).split(/\n\s*\n/))
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${applyHighlights(paragraph, phrases)}</p>`)
    .join("");

  element.innerHTML = paragraphs;
}

function formatAnswerList(items) {
  return `
    <div class="answer-list">
      ${items.map((item) => `<p>${item}</p>`).join("")}
    </div>
  `;
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
  renderParagraphs(document.getElementById("identify-prompt"), state.currentIdentify.text);

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
  renderParagraphs(document.getElementById("effect-prompt"), state.currentEffect.text);
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
  renderHighlightedParagraphs(
    document.getElementById("written-passage"),
    state.currentWritten.passage,
    state.currentWritten.focus,
  );
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
    : `<strong>答错了。</strong> 正确答案是 ${techniqueName}。${state.currentIdentify.explanation}`;

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
  const correctChoice = state.currentEffect.choices[state.currentEffect.answer];
  const message = correct
    ? `<strong>答对了。</strong> 这道题是在分析 ${techniqueName} 的作用。`
    : `<strong>答错了。</strong> 正确答案是第 ${state.currentEffect.answer + 1} 项：${correctChoice} 重点是写出 ${techniqueName} 如何影响读者。`;

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
    : `<strong>答错了，你答对了 ${correctCount} / ${results.length} 个空。</strong> 正确答案已经放在下方，可以直接对照修改。`;

  setFeedback(document.getElementById("written-feedback"), message, correct ? "success" : "error");
  modelAnswer.className = "model-answer visible";
  modelAnswer.innerHTML = `
    <strong>${correct ? "参考答案" : "正确答案"}</strong>
    ${formatAnswerList(
      state.currentWritten.blanks.map(
        (blank, index) => `${index + 1}. ${blank.label.replace("______", blank.answers[0])}`,
      ),
    )}
    <p>${state.currentWritten.modelAnswer}</p>
  `;
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
    : `<strong>答错了。</strong> 你目前只提到 ${matched.length} 个关键概念，建议补上 ${missing.slice(0, 3).join(", ")} 这类 effect 词。下方有正确答案可直接对照。`;

  setFeedback(feedback, message, correct ? "success" : "error");
  modelAnswer.className = "model-answer visible";
  modelAnswer.innerHTML = `
    <strong>${correct ? "参考答案" : "正确答案"}：</strong>${state.currentWritten.modelAnswer}
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
