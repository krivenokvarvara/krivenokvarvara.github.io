const state = {
  shortened: false,
  seed: 0,
};

const categoryMap = {
  date: {
    core: {
      soft: 'Я не хочу продолжать это общение в романтическом формате.',
      firm: 'Я не хочу продолжать это знакомство.',
      cold: 'Продолжать это общение я не хочу.',
      formal: 'Не планирую продолжать это общение в личном формате.'
    },
    follow: 'Моё решение не изменилось. Продолжать это общение я не буду.',
    warnings: [
      '«Сейчас не время» — часто оставляет ложную надежду.',
      '«Давай просто иногда общаться» — создаёт лазейку, если ты не хочешь продолжения.',
      'Слишком длинные объяснения дают человеку пространство спорить с твоим решением.'
    ]
  },
  ex: {
    core: {
      soft: 'Я не хочу возвращаться в это общение.',
      firm: 'Я не хочу возобновлять контакт.',
      cold: 'Возвращаться к этому я не собираюсь.',
      formal: 'Не планирую возобновлять личное общение.'
    },
    follow: 'Позиция та же. Я не хочу возвращаться к этому общению и прошу это уважать.',
    warnings: [
      '«Когда-нибудь позже» почти всегда считывается как надежда.',
      '«Я просто запутался(ась)» звучит как временная пауза, а не отказ.',
      'Извинения на полстраницы смягчают границу сильнее, чем тебе нужно.'
    ]
  },
  friend: {
    core: {
      soft: 'Я не смогу встретиться / присоединиться.',
      firm: 'Я не смогу в этом участвовать.',
      cold: 'Я не приду.',
      formal: 'У меня не получится присоединиться.'
    },
    follow: 'Ответ не изменился. Я не смогу присоединиться.',
    warnings: [
      '«Я постараюсь» — плохая формулировка, если ты уже знаешь, что не пойдёшь.',
      '«Посмотрим ближе к делу» создаёт ожидание и новые сообщения.',
      'Слишком много оправданий делает простой отказ неловким и тяжёлым.'
    ]
  },
  recruiter: {
    core: {
      soft: 'Спасибо за предложение. На текущем этапе я не планирую продолжать процесс.',
      firm: 'Спасибо за предложение. Я не буду продолжать этот процесс.',
      cold: 'Продолжать процесс я не планирую.',
      formal: 'Благодарю за предложение. Принял(а) решение не двигаться дальше по этой вакансии.'
    },
    follow: 'Спасибо. Моё решение финальное, в процесс я не иду.',
    warnings: [
      '«Пока что неактуально» может привести к повторному пушу через неделю.',
      '«Возможно, позже» оставляет лишнюю дверцу, если ты не хочешь продолжения.',
      'Слишком тёплый тон иногда превращает отказ в бесконечную переписку.'
    ]
  },
  client: {
    core: {
      soft: 'Спасибо за интерес. Я не смогу взять это в работу.',
      firm: 'Я не беру этот проект.',
      cold: 'Этот проект я не возьму.',
      formal: 'Благодарю за обращение. В работу этот запрос не беру.'
    },
    follow: 'Позиция не изменилась: в работу этот проект я не беру.',
    warnings: [
      '«Сейчас завал, но потом вернёмся» — зовёт клиента написать снова.',
      '«Могу попробовать» опасно, если ты уже не хочешь этим заниматься.',
      'Слишком мягкий отказ часто приводит к торгу по цене или срокам.'
    ]
  },
  money: {
    core: {
      soft: 'Я не могу одолжить деньги.',
      firm: 'Одолжить деньги я не смогу.',
      cold: 'Деньги я не одалживаю.',
      formal: 'Я не смогу помочь деньгами.'
    },
    follow: 'Ответ тот же: деньгами я помочь не смогу.',
    warnings: [
      '«Сейчас нет, но позже может быть» провоцирует повторную просьбу.',
      'Слишком подробные объяснения открывают дорогу к уговорам.',
      'Оправдания вместо границы делают отказ слабее.'
    ]
  },
  freework: {
    core: {
      soft: 'Бесплатно я такие задачи не беру.',
      firm: 'Я не работаю бесплатно.',
      cold: 'Бесплатно я это делать не буду.',
      formal: 'На безвозмездной основе этот объём работы я не беру.'
    },
    follow: 'Позиция та же: бесплатно я это не делаю.',
    warnings: [
      '«Если совсем быстро» звучит как готовность уступить.',
      '«Один раз можно» часто превращается в повторяющийся паттерн.',
      'Слишком мягкий тон приглашает к торгу и обесцениванию твоей работы.'
    ]
  },
  relative: {
    core: {
      soft: 'Я не смогу это взять на себя.',
      firm: 'Я не буду это на себя брать.',
      cold: 'Этим я заниматься не буду.',
      formal: 'Я не смогу включиться в это и брать это на себя.'
    },
    follow: 'Решение то же: на себя это я не беру.',
    warnings: [
      '«Я подумаю» затягивает ситуацию и делает выход тяжелее.',
      '«Мне неудобно отказать» люди считывают как шанс тебя дожать.',
      'Длинные семейные объяснения редко работают лучше короткой границы.'
    ]
  },
  general: {
    core: {
      soft: 'Мне это не подходит.',
      firm: 'Я не смогу на это согласиться.',
      cold: 'Нет, я в это не вхожу.',
      formal: 'Благодарю за предложение, но это мне не подходит.'
    },
    follow: 'Позиция не изменилась. Я на это не согласен(а).',
    warnings: [
      'Размытые формулировки почти всегда порождают уточнения и споры.',
      'Лишние оправдания делают отказ слабее.',
      'Если ты не хочешь оставлять шанс — не используй неопределённые слова вроде «может быть».'
    ]
  }
};

const openings = {
  soft: ['Спасибо за сообщение.', 'Спасибо, что написал(а).', 'Понимаю твой запрос.'],
  firm: ['Скажу прямо.', 'Чтобы не тянуть, скажу сразу.', 'Сразу обозначу позицию.'],
  cold: ['', 'Сразу по сути.', 'Коротко.'],
  formal: ['Благодарю за обращение.', 'Спасибо за сообщение.', 'Благодарю за предложение.']
};

const supportLines = {
  soft: {
    hope: 'Не хочу оставлять ложную надежду.',
    guilt: 'Говорю это прямо, чтобы не обещать лишнего.',
    conflict: 'Стараюсь сказать это спокойно и честно.',
    pressure: 'Сразу обозначаю это ясно, чтобы не возвращаться к теме позже.'
  },
  firm: {
    hope: 'Не хочу оставлять двойных сигналов.',
    guilt: 'Мне важнее сказать честно, чем тянуть неудобный разговор.',
    conflict: 'Скажу это спокойно и без лишней драмы.',
    pressure: 'Формулирую это прямо, чтобы не создавать повода к торгу.'
  },
  cold: {
    hope: 'Надежду на продолжение я оставлять не хочу.',
    guilt: 'Оправдываться за это решение я не буду.',
    conflict: 'Разворачивать спор на эту тему я не хочу.',
    pressure: 'Обсуждать это повторно я не планирую.'
  },
  formal: {
    hope: 'Не хочу оставлять неверное впечатление о возможности продолжения.',
    guilt: 'Считаю корректным обозначить это заранее и прямо.',
    conflict: 'Предпочитаю обозначить позицию спокойно и однозначно.',
    pressure: 'Фиксирую это сразу, чтобы избежать дальнейших недоразумений.'
  }
};

const excuseLines = [
  'Сейчас у меня нет на это ресурса.',
  'Это не тот формат, в который я готов(а) сейчас входить.',
  'На это у меня сейчас нет ни времени, ни внутреннего ресурса.',
  'Я не смогу включиться в это так, как от меня ожидается.'
];

const doorLines = {
  yes: {
    soft: 'Если что-то изменится, я напишу отдельно.',
    firm: 'Если ситуация когда-то изменится, я сообщу сам(а).',
    cold: 'Если что-то изменится, я сообщу отдельно.',
    formal: 'Если обстоятельства изменятся, я сам(а) вернусь с сообщением.'
  },
  no: {
    soft: 'Прошу отнестись к этому как к окончательному решению.',
    firm: 'Это окончательное решение.',
    cold: 'Это не тема для дальнейшего обсуждения.',
    formal: 'Прошу считать это финальным решением.'
  }
};

const voiceStarts = [
  'Слушай, скажу честно.',
  'Скажу прямо, чтобы не тянуть.',
  'Я лучше скажу это нормально и без странных пауз.',
  'Коротко и по-человечески.'
];

function pick(arr) {
  state.seed += 1;
  return arr[state.seed % arr.length];
}

function getValue(id) {
  return document.getElementById(id).value.trim();
}

function getChecked(id) {
  return document.getElementById(id).checked;
}

function normalizeTone() {
  const tone = document.getElementById('tone').value;
  const extraDirect = getChecked('extraDirect');
  if (!extraDirect) return tone;
  if (tone === 'soft') return 'firm';
  if (tone === 'firm') return 'cold';
  return tone;
}

function buildContextPrefix(who, request) {
  const parts = [];
  if (who) parts.push(`Насчёт ${who}`);
  if (request) parts.push(`и просьбы «${request}»`);
  if (!parts.length) return '';
  return `${parts.join(' ')} — `;
}

function buildCore(category, tone) {
  return categoryMap[category].core[tone];
}

function buildNormalText(data) {
  const opener = pick(openings[data.tone]).trim();
  const contextPrefix = buildContextPrefix(data.who, data.request);
  const support = supportLines[data.tone][data.avoid];
  const core = buildCore(data.category, data.tone);
  const excuse = data.canLie ? ` ${pick(excuseLines)}` : '';
  const door = doorLines[data.door][data.tone];
  const contextNote = data.context ? ` ${compressContext(data.context)}` : '';

  return joinSentences([
    opener,
    `${contextPrefix}${core}`,
    support + excuse,
    contextNote,
    door
  ]);
}

function buildShortText(data) {
  const core = buildCore(data.category, data.tone);
  const boundary = data.door === 'no'
    ? (data.tone === 'soft' ? 'Надежду оставлять не хочу.' : 'Это финальное решение.')
    : 'Если что-то изменится, я напишу отдельно.';

  return joinSentences([
    core,
    boundary
  ]);
}

function buildFirmText(data) {
  const hardestTone = data.tone === 'formal' ? 'formal' : 'cold';
  const core = buildCore(data.category, hardestTone);
  const follow = categoryMap[data.category].follow;
  const line = data.avoid === 'pressure'
    ? 'Дальше обсуждать это я не хочу.'
    : 'Пояснять это дальше не вижу смысла.';

  return joinSentences([
    'Скажу максимально прямо.',
    core,
    follow,
    line
  ]);
}

function buildFollowText(data) {
  const base = categoryMap[data.category].follow;
  const add = data.avoid === 'pressure'
    ? 'Повторно возвращаться к этой теме я не буду.'
    : 'Прошу не уговаривать и не спорить с этим решением.';

  return joinSentences([base, add]);
}

function buildVoiceText(data) {
  const core = buildCore(data.category, data.tone);
  const voiceStart = pick(voiceStarts);
  const soft = data.tone === 'cold'
    ? 'Я не хочу делать вид, что тут есть пространство для другого ответа.'
    : 'Не хочу тянуть, смягчать или создавать лишние ожидания.';
  const door = doorLines[data.door][data.tone];

  return joinSentences([
    voiceStart,
    core,
    soft,
    door
  ]);
}

function compressContext(context) {
  const clean = context.replace(/\s+/g, ' ').trim();
  if (!clean) return '';
  return `Из твоего описания считывается главное: ${clean.slice(0, 120)}${clean.length > 120 ? '…' : ''}`;
}

function joinSentences(parts) {
  return parts
    .filter(Boolean)
    .map(part => part.trim())
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function maybeShorten(text) {
  if (!state.shortened) return text;
  const pieces = text.split('. ');
  return pieces.slice(0, Math.min(2, pieces.length)).join('. ').trim();
}

function renderWarnings(category) {
  const list = document.getElementById('warningsList');
  list.innerHTML = '';
  categoryMap[category].warnings.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

function generate() {
  const data = {
    category: document.getElementById('category').value,
    tone: normalizeTone(),
    who: getValue('who'),
    request: getValue('request'),
    context: getValue('context'),
    avoid: document.getElementById('avoid').value,
    door: document.getElementById('door').value,
    canLie: getChecked('canLie')
  };

  const shortText = maybeShorten(buildShortText(data));
  const normalText = maybeShorten(buildNormalText(data));
  const firmText = maybeShorten(buildFirmText(data));
  const followText = maybeShorten(buildFollowText(data));
  const voiceText = maybeShorten(buildVoiceText(data));

  document.getElementById('shortText').textContent = shortText;
  document.getElementById('normalText').textContent = normalText;
  document.getElementById('firmText').textContent = firmText;
  document.getElementById('followText').textContent = followText;
  document.getElementById('voiceText').textContent = voiceText;

  renderWarnings(data.category);

  document.getElementById('emptyState').classList.add('hidden');
  document.getElementById('results').classList.remove('hidden');
}

function copyText(id) {
  const text = document.getElementById(id).textContent.trim();
  navigator.clipboard.writeText(text).then(() => showToast('Скопировано'));
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add('hidden'), 1800);
}

document.getElementById('generateBtn').addEventListener('click', generate);
document.getElementById('colderBtn').addEventListener('click', () => {
  const tone = document.getElementById('tone');
  if (tone.value === 'soft') tone.value = 'firm';
  else if (tone.value === 'firm') tone.value = 'cold';
  generate();
});
document.getElementById('shorterBtn').addEventListener('click', () => {
  state.shortened = true;
  generate();
  state.shortened = false;
});

document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => copyText(btn.dataset.copy));
});

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('context').value = 'Человек пишет уже не первый раз. Я хочу ответить спокойно, но так, чтобы меня не уговаривали дальше.';
  document.getElementById('request').value = 'встретиться на выходных';
  document.getElementById('who').value = 'человек, с которым не хочу продолжать общение';
  generate();
});
