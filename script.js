const questions = [
  {
    id: "evening",
    title: "Какой вечер ощущается как “ты”?",
    hint: "Выбирай сцену, в которой есть твоя энергия.",
    options: [
      {
        text: "ноутбук, чай и десять открытых вкладок",
        scores: { intellect: 3, control: 2, rebuild: 1, quiet: 1 },
      },
      {
        text: "пустой город, наушники и холодный воздух",
        scores: { cinematic: 3, distance: 2, dark: 1, quiet: 1 },
      },
      {
        text: "мягкий свет, фильм и nobody text me",
        scores: { soft: 3, dream: 2, quiet: 2 },
      },
      {
        text: "красиво собраться даже без повода",
        scores: { luxe: 3, control: 2, romantic: 1 },
      },
      {
        text: "спонтанно исчезнуть и никому не отвечать",
        scores: { distance: 3, dark: 2, chaos: 1 },
      },
      {
        text: "шумный бар и один идеальный взгляд",
        scores: { romantic: 3, luxe: 1, dramatic: 2 },
      },
    ],
  },
  {
    id: "misread",
    title: "Что в тебе люди чаще всего чувствуют неправильно?",
    hint: "Это вопрос про то, как тебя читают не до конца.",
    options: [
      {
        text: "думают, что я холодная, хотя я просто выборочная",
        scores: { distance: 3, control: 1, quiet: 1 },
      },
      {
        text: "думают, что я мягкая, хотя я всё контролирую",
        scores: { control: 3, luxe: 1, soft: 1 },
      },
      {
        text: "думают, что я уверенная, хотя я часто в расфокусе",
        scores: { rebuild: 2, chaos: 2, dream: 1 },
      },
      {
        text: "думают, что мне всё равно, хотя я чувствую слишком много",
        scores: { romantic: 2, cinematic: 2, soft: 1 },
      },
      {
        text: "думают, что я спокойная, хотя внутри cinematic breakdown",
        scores: { cinematic: 3, dark: 1, dramatic: 2 },
      },
      {
        text: "думают, что я сложная, хотя я просто не для всех",
        scores: { distance: 2, luxe: 1, dark: 1, romantic: 1 },
      },
    ],
  },
  {
    id: "badPhase",
    title: "Какая у тебя энергия в плохой период?",
    hint: "Здесь самый точный ответ часто не самый красивый.",
    options: [
      {
        text: "исчезаю и делаю вид, что меня нет",
        scores: { distance: 3, quiet: 2, dark: 1 },
      },
      {
        text: "становлюсь ещё красивее и ещё тише",
        scores: { luxe: 2, distance: 2, soft: 1, control: 1 },
      },
      {
        text: "ухожу в хаос и импульсивность",
        scores: { chaos: 3, dramatic: 2, rebuild: 1 },
      },
      {
        text: "работаю слишком много, чтобы ничего не чувствовать",
        scores: { control: 3, intellect: 2, quiet: 1 },
      },
      {
        text: "становлюсь саркастичной и колючей",
        scores: { dark: 2, distance: 2, dramatic: 1 },
      },
      {
        text: "романтизирую грусть вместо того, чтобы что-то менять",
        scores: { dream: 3, romantic: 2, soft: 1 },
      },
    ],
  },
  {
    id: "currentVersion",
    title: "Какая версия тебя сейчас ближе всего?",
    hint: "Это про твою фазу, а не про идеальную картинку.",
    options: [
      {
        text: "я собираю себя заново",
        scores: { rebuild: 4, quiet: 1, control: 1 },
      },
      {
        text: "я устала, но хочу быть красивой даже в этом",
        scores: { soft: 2, dream: 2, romantic: 1, cinematic: 1 },
      },
      {
        text: "я хочу больше контроля и меньше шума",
        scores: { control: 4, quiet: 1, luxe: 1 },
      },
      {
        text: "я слишком долго была удобной",
        scores: { dark: 1, distance: 2, rebuild: 2, dramatic: 1 },
      },
      {
        text: "я хочу исчезнуть из старой жизни",
        scores: { dark: 2, rebuild: 2, cinematic: 1, distance: 1 },
      },
      {
        text: "я хочу стать дороже внутренне и внешне",
        scores: { luxe: 4, control: 1, romantic: 1 },
      },
    ],
  },
  {
    id: "beautyType",
    title: "Какой тип красоты тебе ближе?",
    hint: "Не про макияж. Про ощущение от себя.",
    options: [
      {
        text: "собранная и дорогая",
        scores: { luxe: 4, control: 2 },
      },
      {
        text: "небрежная, будто случайно идеальная",
        scores: { soft: 2, dream: 2, romantic: 1 },
      },
      {
        text: "тёмная и напряжённая",
        scores: { dark: 4, dramatic: 2 },
      },
      {
        text: "мягкая и тихая",
        scores: { soft: 4, quiet: 2 },
      },
      {
        text: "интеллектуальная и холодная",
        scores: { intellect: 3, distance: 2, control: 1 },
      },
      {
        text: "странная, но притягательная",
        scores: { cinematic: 2, dramatic: 2, dream: 1, dark: 1 },
      },
    ],
  },
  {
    id: "defense",
    title: "Как ты чаще всего защищаешься?",
    hint: "Самый неприятный вопрос — обычно самый полезный.",
    options: [
      {
        text: "отдаляюсь раньше, чем ко мне приблизятся",
        scores: { distance: 4, dark: 1 },
      },
      {
        text: "делаю всё сама и не прошу помощи",
        scores: { control: 3, intellect: 1, quiet: 1 },
      },
      {
        text: "шучу, когда больно",
        scores: { dramatic: 2, chaos: 1, cinematic: 1 },
      },
      {
        text: "говорю “всё нормально”, когда вообще не нормально",
        scores: { quiet: 2, soft: 1, rebuild: 2 },
      },
      {
        text: "становлюсь слишком рациональной",
        scores: { intellect: 4, control: 1 },
      },
      {
        text: "исчезаю и потом возвращаюсь как ни в чём не бывало",
        scores: { dark: 2, chaos: 2, distance: 1 },
      },
    ],
  },
  {
    id: "phrase",
    title: "Какая фраза звучит как ты?",
    hint: "Выбирай не лучшую. Выбирай ту, в которой ты узнаёшь себя.",
    options: [
      {
        text: "я не для всех, и это нормально",
        scores: { distance: 2, luxe: 1, control: 1 },
      },
      {
        text: "мне нужно меньше шума и больше смысла",
        scores: { quiet: 2, intellect: 2, control: 1 },
      },
      {
        text: "я хочу быть мягкой, но не слабой",
        scores: { soft: 3, rebuild: 1, romantic: 1 },
      },
      {
        text: "я больше не хочу жить на черновик",
        scores: { rebuild: 4, dramatic: 1 },
      },
      {
        text: "я хочу, чтобы моя жизнь ощущалась красивой изнутри",
        scores: { dream: 2, soft: 1, romantic: 2, cinematic: 1 },
      },
      {
        text: "мне пора стать версией себя, которую я всё время откладываю",
        scores: { rebuild: 3, luxe: 1, control: 1, cinematic: 1 },
      },
    ],
  },
];

const profiles = [
  {
    key: "soft-distance-muse",
    title: "Soft Distance Muse",
    subtitle: "мягкость, которую не все заслуживают",
    archetype: "Архетип — выборочная муза",
    moodline: "Ты выглядишь деликатно, но живёшь на точной дистанции.",
    description:
      "Ты не холодная — ты просто не разбрасываешь доступ к себе. В тебе много мягкости, но она открывается только там, где есть точность, вкус и уважение к твоим границам. Люди считывают в тебе тишину, хотя на самом деле это очень тщательно выбранная близость.",
    palette: [
      { color: "#efe3ff", name: "veil lilac" },
      { color: "#d4c7f9", name: "powder dusk" },
      { color: "#8a88a8", name: "muted smoke" },
      { color: "#23263a", name: "midnight slate" },
    ],
    films: ["Lost in Translation", "Her", "In the Mood for Love"],
    music: ["Lana Del Rey — Mariners Apartment Complex", "Cigarettes After Sex — Apocalypse", "The xx — Angels"],
    style: ["тонкий трикотаж", "длинные пальто", "серебро и холодный жемчуг"],
    phrase: "Я не холодная. Я просто не для всех.",
    archetypeText:
      "Ты создаёшь впечатление спокойствия, но твоя реальная сила — в фильтре. Ты умеешь быть нежной, не становясь доступной. Твоё главное качество — мягкая недосягаемость.",
    weights: { distance: 3.2, soft: 2.8, quiet: 1.8, control: 1.2, romantic: 1.2 },
  },
  {
    key: "quiet-luxury-control",
    title: "Quiet Luxury Control",
    subtitle: "дорогая собранность без лишнего шума",
    archetype: "Архетип — собранная стратегиня",
    moodline: "Ты хочешь не сиять громко, а ощущаться дорого и точно.",
    description:
      "Ты не про хаотичную харизму. Ты про выстроенную силу. В тебе чувствуется контроль, вкус и желание убрать всё лишнее — в вещах, в людях, в рутине и в себе. Твоя эстетика работает через качество, структуру и спокойную уверенность.",
    palette: [
      { color: "#f4ebdf", name: "cashmere cream" },
      { color: "#d6c2a3", name: "soft camel" },
      { color: "#7a6f67", name: "stone taupe" },
      { color: "#1f2230", name: "ink navy" },
    ],
    films: ["A Single Man", "The Talented Mr. Ripley", "Carol"],
    music: ["Sade — No Ordinary Love", "Rhye — Open", "Sevdaliza — Human"],
    style: ["идеальный жакет", "структурированные сумки", "чистая база без шума"],
    phrase: "Мне нужно меньше шума и больше смысла.",
    archetypeText:
      "Ты строишь ощущение себя через дисциплину, качество и вкус. Твой вайб не кричит — он фиксирует присутствие. Твоё самое сильное качество — внутренняя дороговизна без показной роскоши.",
    weights: { luxe: 3.1, control: 3.2, intellect: 1.4, quiet: 1.6, distance: 0.8 },
  },
  {
    key: "beautiful-burnout",
    title: "Beautiful Burnout",
    subtitle: "усталость, которую ты превращаешь в кадр",
    archetype: "Архетип — романтик выживания",
    moodline: "Ты умеешь делать красиво даже там, где внутри уже слишком много шума.",
    description:
      "В тебе есть странная смесь усталости и эстетики. Ты не всегда справляешься, но почти всегда умеешь превратить своё состояние в настроение, образ или сюжет. Люди могут видеть в тебе просто красивую меланхолию, но под ней часто скрывается попытка не рассыпаться прямо сейчас.",
    palette: [
      { color: "#f7d9e7", name: "faded rose" },
      { color: "#cda8ba", name: "dust mauve" },
      { color: "#7f6d7d", name: "bruise plum" },
      { color: "#1f1b28", name: "after midnight" },
    ],
    films: ["Black Swan", "Priscilla", "The Virgin Suicides"],
    music: ["Phoebe Bridgers — Kyoto", "Ethel Cain — American Teenager", "Lorde — Liability"],
    style: ["слишком красивый кардиган", "винтажные ленты", "мягкий гранж"],
    phrase: "Я хочу, чтобы моя жизнь ощущалась красивой изнутри.",
    archetypeText:
      "Ты умеешь выживать через эстетику. Когда тебе тяжело, ты интуитивно создаёшь вокруг себя кадр, атмосферу и форму. Это и защита, и талант одновременно.",
    weights: { dream: 2.8, romantic: 2.6, soft: 1.6, cinematic: 2.2, chaos: 1.2 },
  },
  {
    key: "late-night-rebuild",
    title: "Late Night Rebuild",
    subtitle: "собираю себя заново, но уже красивее",
    archetype: "Архетип — ночной реконструктор",
    moodline: "Ты находишься в фазе внутренней сборки и уже не хочешь жить по-старому.",
    description:
      "Ты не в точке “всё хорошо”. Ты в точке, где старая версия тебя уже не устраивает, а новая ещё только собирается. В тебе много внимания к себе, к новой траектории и к тому, чтобы больше не жить на черновик. Это очень кинематографичная, но взрослая фаза.",
    palette: [
      { color: "#d9ddff", name: "moon paper" },
      { color: "#b6c0ef", name: "cold porcelain" },
      { color: "#6e769d", name: "blue graphite" },
      { color: "#171b2d", name: "night edit" },
    ],
    films: ["Frances Ha", "Lady Bird", "Past Lives"],
    music: ["Mitski — A Pearl", "FKA twigs — Cellophane", "The Japanese House — Saw You In A Dream"],
    style: ["идеальная рубашка", "большие наушники", "серый, синий и молочный"],
    phrase: "Я больше не хочу жить на черновик.",
    archetypeText:
      "Ты сейчас не столько “про эстетику”, сколько про новую редакцию себя. Но именно поэтому твой стиль ощущается сильнее — он становится частью внутреннего редизайна.",
    weights: { rebuild: 3.6, cinematic: 1.8, quiet: 1.4, control: 1.6, dream: 1.1 },
  },
  {
    key: "cold-romantic",
    title: "Cold Romantic",
    subtitle: "чувствую много, показываю мало",
    archetype: "Архетип — закрытый романтик",
    moodline: "В тебе живёт сильная чувственность, но она всегда под замком.",
    description:
      "Ты не любишь быть прозрачной. В тебе много чувства, но оно почти всегда проходит через фильтр, дистанцию и красивую самооборону. Ты можешь казаться сдержанной, хотя внутри у тебя куда больше нежности и напряжения, чем видно снаружи.",
    palette: [
      { color: "#f2e4ef", name: "ice rose" },
      { color: "#c4b6d9", name: "frost orchid" },
      { color: "#61708a", name: "cold steel" },
      { color: "#161c2a", name: "deep blue black" },
    ],
    films: ["Call Me by Your Name", "Portrait of a Lady on Fire", "Decision to Leave"],
    music: ["BANKS — Waiting Game", "Lykke Li — I Follow Rivers", "Arctic Monkeys — I Wanna Be Yours"],
    style: ["тёмный шёлк", "строгие линии", "одна деталь, которая режет воздух"],
    phrase: "Я чувствую слишком много, чтобы быть простой.",
    archetypeText:
      "Твоё главное напряжение — между глубиной чувства и нежеланием показывать его без отбора. Ты выглядишь собранно, но твоя внутренняя эстетика всегда немного про электричество под кожей.",
    weights: { romantic: 2.9, distance: 2.2, dark: 1.4, cinematic: 1.6, soft: 1.2 },
  },
  {
    key: "cinematic-overthinker",
    title: "Cinematic Overthinker",
    subtitle: "всё слишком тонко ощущается, поэтому всё выглядит как сцена",
    archetype: "Архетип — интеллектуальный драматург",
    moodline: "Ты проживаешь себя не линейно, а как монтаж из тонких кадров и мыслей.",
    description:
      "Ты умеешь замечать атмосферу, подтекст и напряжение даже там, где другие просто живут день. Поэтому твоя эстетика не в вещах, а в ощущении. Тебя цепляют детали, свет, тайминг, недосказанность и люди, в которых есть внутренний сюжет.",
    palette: [
      { color: "#e6e8f7", name: "fog screen" },
      { color: "#c5cbe9", name: "misted periwinkle" },
      { color: "#7f88a8", name: "film grain blue" },
      { color: "#1d2136", name: "editing room" },
    ],
    films: ["Chungking Express", "Eternal Sunshine of the Spotless Mind", "Aftersun"],
    music: ["The 1975 — Somebody Else", "Bon Iver — Holocene", "Japanese Breakfast — Kokomo, IN"],
    style: ["очки, которые делают лицо умнее", "слои, текстуры, оттенки синего", "одежда как кадр"],
    phrase: "Я всё чувствую чуть тоньше, чем мне удобно.",
    archetypeText:
      "Ты создаёшь себя через внимание к атмосфере, подтексту и невысказанному. Это не просто overthinking — это твой способ ощущать мир как кинематографичную систему знаков.",
    weights: { cinematic: 3.2, intellect: 2.2, quiet: 1.2, dramatic: 1.4, dream: 1.3 },
  },
  {
    key: "dark-feminine-static",
    title: "Dark Feminine Static",
    subtitle: "напряжение, магнетизм и немного опасной тишины",
    archetype: "Архетип — тёмный магнит",
    moodline: "Ты нравишься людям ещё до того, как они понимают, почему.",
    description:
      "Ты не про уютную читаемость. В тебе есть сила, напряжение и ощущение, что ты всегда держишь что-то важное при себе. Твоя эстетика работает через контраст — тишина и взгляд, строгость и электричество, закрытость и сильное притяжение.",
    palette: [
      { color: "#d8b6cf", name: "plum dust" },
      { color: "#8b6582", name: "dark mauve" },
      { color: "#3c3048", name: "static violet" },
      { color: "#15131d", name: "obsidian bloom" },
    ],
    films: ["Gone Girl", "Closer", "The Love Witch"],
    music: ["Sevdaliza — Shahmaran", "FKA twigs — Two Weeks", "Deftones — Cherry Waves"],
    style: ["резкие силуэты", "сливовый и чёрный", "магнитический минимализм"],
    phrase: "Я не обязана быть понятной, чтобы быть притягательной.",
    archetypeText:
      "Ты держишь форму через напряжение, контроль и закрытую харизму. В тебе мало мягкой очевидности, зато много силы, которую считывают до слов.",
    weights: { dark: 3.2, dramatic: 2.2, distance: 1.3, luxe: 1.2, control: 1.1 },
  },
  {
    key: "soft-chaos-dreamer",
    title: "Soft Chaos Dreamer",
    subtitle: "нежность, импульсивность и попытка жить красиво даже в сбое",
    archetype: "Архетип — хаотичный dream-girl",
    moodline: "Ты одновременно хочешь и тишины, и новой жизни прямо сейчас.",
    description:
      "Ты не всегда собрана, но в этом и есть твой живой магнетизм. В тебе много движения, импульса, внутреннего шума и красивой мечты о другой версии себя. Ты можешь сбиваться, путаться и всё равно оставаться человеком, у которого есть очень узнаваемая атмосфера.",
    palette: [
      { color: "#ffe5f2", name: "cotton blush" },
      { color: "#f5c7d7", name: "soft static pink" },
      { color: "#a6b5ff", name: "blue wish" },
      { color: "#2a2741", name: "violet night" },
    ],
    films: ["Marie Antoinette", "20th Century Women", "The Worst Person in the World"],
    music: ["Clairo — Bags", "Charli xcx — party 4 u", "Lorde — Supercut"],
    style: ["ленты, большие свитеры, balletcore с сбоем", "несовпадающие детали", "сладость плюс нерв"],
    phrase: "Я хочу исчезнуть из старой жизни красиво.",
    archetypeText:
      "Ты живёшь между мечтой и сбоем. Именно поэтому твоя эстетика никогда не выглядит вылизанной — она выглядит живой, немного ускользающей и очень человеческой.",
    weights: { chaos: 2.9, dream: 2.8, soft: 1.6, rebuild: 1.3, dramatic: 1.4 },
  },
];

const answerState = new Array(questions.length).fill(null);
let currentStep = -1;

const startBtn = document.getElementById("startBtn");
const introState = document.getElementById("introState");
const questionState = document.getElementById("questionState");
const questionTitle = document.getElementById("questionTitle");
const questionHint = document.getElementById("questionHint");
const stepPill = document.getElementById("stepPill");
const optionsGrid = document.getElementById("optionsGrid");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const resultPanel = document.getElementById("resultPanel");
const quizPanel = document.getElementById("quizPanel");
const restartBtn = document.getElementById("restartBtn");
const copyBtn = document.getElementById("copyBtn");
const toast = document.getElementById("toast");

startBtn.addEventListener("click", startQuiz);
backBtn.addEventListener("click", goBack);
nextBtn.addEventListener("click", goNext);
restartBtn.addEventListener("click", restartQuiz);
copyBtn.addEventListener("click", copySummary);

function startQuiz() {
  currentStep = 0;
  introState.classList.add("hidden");
  questionState.classList.remove("hidden");
  resultPanel.classList.add("hidden");
  renderQuestion();
  quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestion() {
  const question = questions[currentStep];
  questionTitle.textContent = question.title;
  questionHint.textContent = question.hint;
  stepPill.textContent = `Question ${currentStep + 1}`;
  progressFill.style.width = `${((currentStep + 1) / questions.length) * 100}%`;
  progressText.textContent = `${currentStep + 1} / ${questions.length}`;

  optionsGrid.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-card";
    button.type = "button";
    button.innerHTML = `<div class="option-text">${option.text}</div>`;

    if (answerState[currentStep] === index) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      answerState[currentStep] = index;
      renderQuestion();
    });

    optionsGrid.appendChild(button);
  });

  backBtn.disabled = currentStep === 0;
  nextBtn.disabled = answerState[currentStep] === null;
  nextBtn.textContent = currentStep === questions.length - 1 ? "Узнать мою версию" : "Дальше";
}

function goBack() {
  if (currentStep > 0) {
    currentStep -= 1;
    renderQuestion();
  }
}

function goNext() {
  if (answerState[currentStep] === null) return;

  if (currentStep < questions.length - 1) {
    currentStep += 1;
    renderQuestion();
    return;
  }

  const result = calculateResult();
  renderResult(result);
}

function calculateResult() {
  const scoreMap = {};

  answerState.forEach((answerIndex, questionIndex) => {
    const option = questions[questionIndex].options[answerIndex];
    Object.entries(option.scores).forEach(([key, value]) => {
      scoreMap[key] = (scoreMap[key] || 0) + value;
    });
  });

  let winner = profiles[0];
  let winnerScore = -Infinity;

  profiles.forEach((profile) => {
    let profileScore = 0;

    Object.entries(profile.weights).forEach(([key, weight]) => {
      profileScore += (scoreMap[key] || 0) * weight;
    });

    if (profileScore > winnerScore) {
      winner = profile;
      winnerScore = profileScore;
    }
  });

  return {
    profile: winner,
    answers: {
      misread: questions[1].options[answerState[1]].text,
      badPhase: questions[2].options[answerState[2]].text,
      currentVersion: questions[3].options[answerState[3]].text,
    },
  };
}

function renderResult(result) {
  const { profile, answers } = result;

  document.getElementById("resultTitle").textContent = profile.title;
  document.getElementById("resultSubtitle").textContent = profile.subtitle;
  document.getElementById("resultDescription").textContent = profile.description;
  document.getElementById("identityName").textContent = profile.title;
  document.getElementById("identityArchetype").textContent = profile.archetype;
  document.getElementById("identityMoodline").textContent = profile.moodline;
  document.getElementById("phraseText").textContent = `“${profile.phrase}”`;
  document.getElementById("archetypeText").textContent = profile.archetypeText;
  document.getElementById("misreadLine").textContent = answers.misread;
  document.getElementById("badPhaseLine").textContent = answers.badPhase;
  document.getElementById("currentVersionLine").textContent = answers.currentVersion;

  renderPalette(profile.palette);
  renderSimpleList("filmsList", profile.films);
  renderSimpleList("musicList", profile.music);
  renderSimpleList("styleList", profile.style);
  renderIdentityChips(profile);
  applyIdentityGradient(profile.palette);

  resultPanel.classList.remove("hidden");
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderPalette(palette) {
  const paletteRow = document.getElementById("paletteRow");
  const paletteNames = document.getElementById("paletteNames");

  paletteRow.innerHTML = "";
  paletteNames.innerHTML = "";

  palette.forEach((item) => {
    const dot = document.createElement("div");
    dot.className = "palette-dot";
    dot.style.background = item.color;
    paletteRow.appendChild(dot);

    const chip = document.createElement("div");
    chip.className = "palette-name";
    chip.textContent = item.name;
    paletteNames.appendChild(chip);
  });
}

function renderSimpleList(id, items) {
  const list = document.getElementById(id);
  list.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function renderIdentityChips(profile) {
  const identityChips = document.getElementById("identityChips");
  identityChips.innerHTML = "";

  ["palette", "films", "music", "style"].forEach((item) => {
    const chip = document.createElement("div");
    chip.className = "identity-chip";
    chip.textContent = item;
    identityChips.appendChild(chip);
  });
}

function applyIdentityGradient(palette) {
  const card = document.getElementById("identityCard");
  card.style.setProperty("--card-start", palette[0].color);
  card.style.setProperty("--card-mid", palette[1].color);
  card.style.setProperty("--card-end", palette[3].color);
}

function restartQuiz() {
  for (let i = 0; i < answerState.length; i++) {
    answerState[i] = null;
  }

  currentStep = -1;
  questionTitle.textContent = "Готова узнать свою версию?";
  questionHint.textContent = "Отвечай не “как надо”, а как по ощущениям.";
  stepPill.textContent = "Intro";
  progressFill.style.width = "0%";
  progressText.textContent = `0 / ${questions.length}`;
  introState.classList.remove("hidden");
  questionState.classList.add("hidden");
  resultPanel.classList.add("hidden");
  backBtn.disabled = true;
  nextBtn.disabled = true;
  nextBtn.textContent = "Дальше";
  quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function copySummary() {
  const resultTitle = document.getElementById("resultTitle").textContent;
  const resultSubtitle = document.getElementById("resultSubtitle").textContent;
  const resultDescription = document.getElementById("resultDescription").textContent;
  const phrase = document.getElementById("phraseText").textContent;
  const archetype = document.getElementById("archetypeText").textContent;

  const films = Array.from(document.querySelectorAll("#filmsList li")).map((li) => `- ${li.textContent}`).join("\n");
  const music = Array.from(document.querySelectorAll("#musicList li")).map((li) => `- ${li.textContent}`).join("\n");
  const style = Array.from(document.querySelectorAll("#styleList li")).map((li) => `- ${li.textContent}`).join("\n");

  const text = `${resultTitle}\n${resultSubtitle}\n\n${resultDescription}\n\nФраза: ${phrase}\n\nАрхетип:\n${archetype}\n\nФильмы:\n${films}\n\nМузыка:\n${music}\n\nСтиль:\n${style}`;

  navigator.clipboard.writeText(text).then(() => showToast("Summary copied"));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add("hidden"), 1700);
}
