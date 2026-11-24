'use strict';

const el = id => document.getElementById(id);
const make = (tag, value) => {
  const node = document.createElement(tag);
  if (value !== undefined) node.textContent = value;
  return node;
};

const menu = document.querySelector('.nav-toggle');
function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  el('nav').classList.toggle('open', open);
}
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menu.focus();
  }
});
matchMedia('(min-width: 681px)').addEventListener('change', () => setMenu(false));

document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => dialog.querySelector('video')?.pause());
});
document.querySelector('[data-open-reel]')?.addEventListener('click', () => {
  el('reelDialog').showModal();
  el('reelPlayer').play().catch(() => {});
});

const search = document.querySelector('[data-filter]');
search?.addEventListener('input', () => {
  const words = search.value.toLowerCase().trim().split(/\s+/);
  let count = 0;
  document.querySelectorAll('[data-filteritem]').forEach(link => {
    link.hidden = !words.every(word => link.dataset.filteritem.includes(word));
    if (!link.hidden) count++;
  });
  document.querySelector('[data-empty]').hidden = count > 0;
});
const cue = el('cueFrame');
cue?.addEventListener('input', () => {
  const frame = Number(cue.value);
  const elapsed = 71 * 24 + frame;
  const double = n => String(n).padStart(2, '0');
  el('cueTc').value = ['00', double(Math.floor(elapsed / 1440)), double(Math.floor(elapsed / 24) % 60), double(elapsed % 24)].join(':');
  el('playhead').style.left = 'calc(' + frame / 71 * 100 + '% - ' + frame / 71 * 3 + 'px)';
  el('cueText').textContent = frame < 36 ? 'The subject walks. Track alongside them.' : frame === 36 ? 'Last drum hit. The feet stop. Let the camera settle.' : frame < 54 ? 'Hold the silence on the subject. The listener has yet to respond.' : 'The next word lands. Cut to the listener as their gaze lifts.';
});

if (el('frames')) {
  const shots = window.shotArchive;
  const linked = new Map();
  let localVideoUrl;
  el('localClips').addEventListener('change', event => {
    for (const file of event.target.files) {
      for (const shot of shots) if (shot.filename.toLowerCase() === file.name.toLowerCase()) linked.set(shot.id, file);
    }
    el('localStatus').textContent = linked.size + ' of ' + shots.length + ' original clips linked for this visit.';
    showShots();
  });
  el('shotDialog').addEventListener('close', () => {
    if (localVideoUrl) URL.revokeObjectURL(localVideoUrl);
    localVideoUrl = undefined;
    el('shotDetails').replaceChildren();
  });
  function inspect(shot) {
    el('shotDialogTitle').textContent = 'Shot ' + shot.id + ' / ' + shot.title;
    const image = make('img');
    image.src = 'assets/frames/' + shot.id + '.webp';
    image.alt = shot.action;
    const fields = make('dl');
    for (const [key, value] of [['Edit duration', shot.duration + ' seconds'], ['Action', shot.action], ['Camera', shot.camera], ['Production direction', shot.prompt]]) {
      fields.append(make('dt', key), make('dd', value));
    }
    if (linked.has(shot.id)) {
      const video = make('video');
      video.controls = true;
      video.playsInline = true;
      video.poster = image.src;
      localVideoUrl = URL.createObjectURL(linked.get(shot.id));
      video.src = localVideoUrl;
      el('shotDetails').replaceChildren(video, fields);
    } else el('shotDetails').replaceChildren(image, fields);
    el('shotDialog').showModal();
  }
  function showShots() {
    const words = el('shotSearch').value.toLowerCase().trim().split(/\s+/);
    const matches = shots.filter(shot => words.every(word => [shot.id,shot.title,shot.action,shot.camera].join(' ').toLowerCase().includes(word)));
    el('shotCount').textContent = matches.length ? matches.length + ' of ' + shots.length + ' frames' : 'No matching shots. Try a number, location or action.';
    el('frames').replaceChildren(...matches.map(shot => {
      const card = make('button');
      card.className = 'frame-card';
      const image = make('img');
      image.src = 'assets/frames/' + shot.id + '.webp';
      image.alt = '';
      image.loading = 'lazy';
      card.append(image, make('span', 'SHOT ' + shot.id + ' / ' + shot.duration + ' S' + (linked.has(shot.id) ? ' / MP4' : '')), make('b', shot.title));
      card.addEventListener('click', () => inspect(shot));
      return card;
    }));
  }
  el('shotSearch').addEventListener('input', showShots);
  showShots();
}

if (el('cutSelect')) {
  const shots = window.shotArchive;
  const selector = el('cutSelect');
  shots.slice(0,-1).forEach((shot,i) => {
    const label = shot.id + ' / ' + shots[i+1].id + ' · ' + shot.title + ' to ' + shots[i+1].title;
    selector.add(new Option(label, String(i)));
  });
  selector.value = String(Math.max(0, shots.findIndex(shot => shot.id === '020')));
  function renderCut() {
    const i = Number(selector.value);
    const figures = [shots[i],shots[i+1]].map((shot,side) => {
      const figure = make('figure');
      const label = make('span', side ? 'Incoming · first frame' : 'Outgoing · last frame');
      label.className = 'eyebrow';
      const image = make('img');
      image.src = 'assets/cuts/' + shot.id + (side ? '-in' : '-out') + '.webp';
      image.alt = (side ? 'First' : 'Last') + ' decoded frame of shot ' + shot.id + ', ' + shot.title;
      const caption = make('figcaption');
      caption.append(make('h3',shot.id + ' / ' + shot.title),make('p',shot.action.replace(/^Shot [^:]+:\s*/,'')),make('p',shot.camera));
      figure.append(label, image, caption);
      return figure;
    });
    el('cutPair').replaceChildren(...figures);
    el('prevCut').disabled = i === 0;
    el('nextCut').disabled = i === shots.length - 2;
  }
  for (const [id,step] of [['prevCut',-1],['nextCut',1]]) {
    el(id).addEventListener('click', () => {
      selector.selectedIndex += step;
      renderCut();
    });
  }
  selector.addEventListener('change', renderCut);
  renderCut();
}

const presets = {
  platform: [
    'PL-021', 'Nia face and coat, Jo red cuff, platform master, previous approved exit frame',
    'Nia and her sister Jo at a morning train platform. Natural light falls from screen left.',
    'Medium profile. Nia faces right, jaw tight, a folded letter in her right hand. Jo waits beyond the near pillar.',
    'On the release of the last sung vowel, Nia loosens her grip and holds the letter out. Jo hesitates, then reaches.',
    'Track right at hand height until the cuff clears the pillar. Ease to a stop as their hands meet.',
    'Hold the red cuff and envelope near the right third. The next reverse begins on Jo closing her fingers.',
    'Letter in Nia’s right hand, red cuff on Jo’s left wrist. Train stays screen right. Preserve the coat, morning light and platform axis.'
  ],
  glass: ["DNC-17 / placement 30", "Running start frame, woman and man cast sheets", "Barefoot dancers on a reflective eclipse stage with fixed gold pillars.", "Wide rear three-quarter view. Both runners lean forward near the lower left.", "On the double count they push off the floor and sprint diagonally away.", "Lock the wide camera so the floor seams measure their progress.", "They pass the first pillar and keep running into depth.", "Black tank and trousers on her, black long sleeves and trousers on him. Both barefoot. Same fixed pillars, light and floor seams."],
  empty: Array(8).fill('')
};
const labels = ['Shot ID', 'Approved references', 'Subject and setting', 'Opening frame and performance', 'Musical cue and visible action', 'Camera path and motivation', 'Exit frame and next cut', 'Continuity locks'];
if (el('shotInputs')) {
  const fields = labels.map((label, index) => {
    const wrap = make('label', label);
    const field = make(index === 0 ? 'input' : 'textarea');
    field.id = 'field-' + index;
    field.value = presets.glass[index];
    field.addEventListener('input', update);
    wrap.append(field);
    el('shotInputs').append(wrap);
    return field;
  });
  let type = 'still', prompts = {}, timing = '', ready = false;
  const seconds = value => Number(value.toFixed(2)) + ' s';
  function update() {
    const [id, refs, subject, opening, action, camera, exit, locks] = fields.map(field => field.value.trim());
    const input = ['edit','head','tail'].map(name => el(name));
    const [edit,head,tail] = input.map(node => node.valueAsNumber);
    const valid = input.every(node => Number.isFinite(node.valueAsNumber) && node.validity.valid) && edit > 0;
    const model = el('model').value;
    const upper = model === 'o1' ? 10 : 15;
    const legal = model === 'v2' ? [5,10] : Array.from({length:upper - 2}, (_,i) => i + 3);
    const required = Math.round((edit + head + tail) * 100) / 100;
    const duration = valid ? legal.find(n => n >= required) : undefined;
    timing = !valid ? 'Enter a positive edit length and nonnegative handles in tenths of a second.' :
      !duration ? 'This edit and its handles need ' + seconds(required) + '. Split at a motivated cut or choose a supported model that can fit the take.' :
      seconds(duration) + ' source for a ' + seconds(edit) + ' edit and ' + seconds(head + tail) + ' of handles.' +
      (duration > required ? ' Keep the extra ' + seconds(duration-required) + ' for trimming.' : '') +
      (model === 'v3' ? ' Check whether this duration requires multi-shot mode for the selected 3.0 variant.' : '');
    el('renderLength').textContent = timing;
    ready = fields.every(field => field.value.trim()) && Boolean(duration);
    const p = s => s || '[complete this field]';
    prompts.still = ['Opening keyframe · ' + p(id), 'Approved visual references: ' + p(refs), p(subject), p(opening), 'Continuity: ' + p(locks), 'Compose for the intended movement: ' + p(camera) + ' Depict the opening instant only. Deliver one independent 1920 × 1080 frame.'].join('\n\n');
    prompts.motion = ['Image-to-video · ' + p(id) + (duration ? ' · ' + seconds(duration) : ''), 'Start on the approved key still. ' + p(subject), 'Opening: ' + p(opening), 'Performance: ' + p(action), 'Camera: ' + p(camera), 'Frame for the cut: ' + p(exit), 'Preserve: ' + p(locks), 'References: ' + p(refs), duration ? 'Allow ' + seconds(head) + ' before the usable action and ' + seconds(tail) + ' after the edit. One continuous take.' : 'Resolve the source duration before submitting.'].join('\n\n');
    el('promptText').textContent = prompts[type];
    el('saveCard').disabled = !ready;
    el('copyPrompt').disabled = !ready;
    el('labMessage').textContent = ready ? '' : 'Complete the shot fields and choose a legal source duration to export.';
  }
  el('preset').addEventListener('change', event => {
    presets[event.target.value].forEach((v,i) => fields[i].value = v);
    update();
  });
  ['edit','head','tail','model'].forEach(id => el(id).addEventListener('input', update));
  document.querySelectorAll('[data-prompt]').forEach(button => button.addEventListener('click', () => {
    type = button.dataset.prompt;
    document.querySelectorAll('[data-prompt]').forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
    update();
  }));
  el('copyPrompt').addEventListener('click', async () => {
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(prompts[type]);
      else {
        const tmp = make('textarea');
        tmp.value = prompts[type]; document.body.append(tmp); tmp.select();
        const copied = document.execCommand('copy'); tmp.remove(); el('copyPrompt').focus();
        if (!copied) throw Error();
      }
      el('labMessage').textContent = 'Prompt copied.';
    } catch { el('labMessage').textContent = 'Select the prompt text to copy it, or save the shot card.'; }
  });
  el('saveCard').addEventListener('click', () => {
    if (!ready) return;
    const contents = ['# Shot card · ' + fields[0].value, 'Model: ' + el('model').selectedOptions[0].textContent, timing, '## Key still', prompts.still, '## Motion', prompts.motion].join('\n\n');
    const link = make('a');
    link.download = (fields[0].value.replace(/[^a-z0-9_-]/gi,'-').slice(0,80) || 'production') + '-shot-card.md';
    link.href = URL.createObjectURL(new Blob([contents], {type:'text/markdown;charset=utf-8'}));
    document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    el('labMessage').textContent = 'Shot card exported with both prompts.';
  });
  update();
}

el('visitCue')?.addEventListener('click', () => { location.hash = el('jumpCue').value; });
