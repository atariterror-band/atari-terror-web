// Atari Terror tracks from Part 3: Final Warning and Part2: Attention!.
const tracks = [
  ...[
    ['Eve', 'Part 3: Final Warning'],
    ['Ghost of the Bloodbath', 'Part 3: Final Warning'],
    ['Bright Sun', 'Part 3: Final Warning'],
    ['Mother', 'Part 3: Final Warning'],
    ['Insane', 'Part 3: Final Warning'],
    ['Oh My God', 'Part 3: Final Warning'],
    ['Stuck to the Tit', 'Part 3: Final Warning'],
    ['Great Pain', 'Part 3: Final Warning'],
    ['Cereal Killer', 'Part 3: Final Warning'],
    ['Dance Machine', 'Part 3: Final Warning'],
    ['This Is the Day', 'Part 3: Final Warning'],
    ['The Wicked Hand', 'Part 3: Final Warning'],
    ['The Beginning', 'Part2: Attention!'],
    ['Attention!', 'Part2: Attention!'],
    ['Wonderful Underground', 'Part2: Attention!'],
    ['Motofoko', 'Part2: Attention!'],
    ['Chosen One', 'Part2: Attention!'],
    ['Only', 'Part2: Attention!'],
    ['Airbag Death', 'Part2: Attention!'],
    ['Fight for Your Country', 'Part2: Attention!'],
    ['Honey Honey', 'Part2: Attention!'],
    ['Sweetest Pie', 'Part2: Attention!'],
    ['Sky Burning', 'Part2: Attention!'],
    ['Carramba', 'Part2: Attention!'],
    ['War', 'Part2: Attention!'],
    ['Bleeding Tree', 'Part2: Attention!']
  ].map(([title, album]) => ({ title, album }))
];
const selectedSongs = new Set();
const archetypes = [
  { name: 'REZAVÝ PROROK', faction: 'NOČNÍ SIGNÁL · HLÍDAČ', quote: '„Drží směr, i když se okolní svět rozpadá.“', description: 'Zrozená z hluku a neústupnosti. Nečeká na povolení — ukáže cestu a jde první.', symbol: '✦' },
  { name: 'POPÍLEČNÝ VLK', faction: 'ŽHAVÁ SMEČKA · PRŮZKUMNÍK', quote: '„Nikdy nevíš, odkud přijde další výboj.“', description: 'Rychlá, instinktivní a věrná vlastní partě. Změní směr dřív, než ji stačíš přečíst.', symbol: '〄' },
  { name: 'ŽELEZNÁ VĚŠTKYNĚ', faction: 'ČERNÝ OBZOR · STRÁŽKYNĚ', quote: '„Ticho je jen zvuk, který ještě nezačal.“', description: 'Čte stopy v chaosu a vidí konec dřív než ostatní začátek.', symbol: '⌁' },
  { name: 'DÍTĚ ZÁŘE', faction: 'SIGNÁL 0 · NÁLEZ', quote: '„Malé tělo. Signál, který nejde přeslechnout.“', description: 'Zvědavá bytost s nečekaně silným hlasem. Svět bere jako místo, které se dá znovu postavit.', symbol: '✳' },
  { name: 'STARÝ KOV', faction: 'PRVNÍ LINKA · PAMĚTNÍK', quote: '„Každá jizva má svůj vlastní refrén.“', description: 'Pamatuje si všechno a pořád stojí. Když promluví, ostatní na chvíli ztichnou.', symbol: '⟁' },
  { name: 'NOČNÍ POUTNICE', faction: 'BEZ SIGNÁLU · SAMOTÁŘKA', quote: '„Světla města jsou jen další hvězdy.“', description: 'Sama si určuje směr a vrací se jen pro ty, kteří za to stojí.', symbol: '☾' },
  { name: 'HLUKOVÝ ANDĚL', faction: 'ČERVENÁ VLNA · VYSLANEC', quote: '„Ne všechno, co hoří, chce být zachráněno.“', description: 'Přináší zmatek, ale taky změnu. Za sebou nechává svět o něco opravdovější.', symbol: '⚡' },
  { name: 'BETONOVÝ KRÁL', faction: 'TVRDÝ ZÁKLAD · VELITEL', quote: '„Když dojde místo, postavím další zeď.“', description: 'Vytrvalost proměnil v nástroj. Vydrží déle než problém, který mu stojí v cestě.', symbol: '◈' }
];
const communitySamples = [
  { name: 'HROMOVÁ NYMFA', handle: '@nika_riot', faction: 'ŽHAVÁ SMEČKA', symbol: '✦', accent: '#f25742', backdrop: '#251918', head: '#51312d', face: 'M430 430 Q600 360 770 430 L800 660 710 790 600 770 490 790 400 660Z', horns: 'M430 430 445 190 555 410M770 430 755 190 645 410' },
  { name: 'BETONOVÝ KRÁL', handle: '@michal_noise', faction: 'TVRDÝ ZÁKLAD', symbol: '◈', accent: '#ffd21a', backdrop: '#252319', head: '#49483e', face: 'M420 420 L780 420 815 660 720 800 600 775 480 800 385 660Z', horns: 'M430 430 455 190 555 410M770 430 745 190 645 410' },
  { name: 'NOČNÍ POUTNICE', handle: '@sara_v', faction: 'BEZ SIGNÁLU', symbol: '☾', accent: '#d3a0e8', backdrop: '#1e1826', head: '#41374b', face: 'M425 435 Q600 350 775 435 L805 650 Q780 770 600 790 Q420 770 395 650Z', horns: 'M430 440 455 200 555 420M770 440 745 200 645 420' },
  { name: 'DÍTĚ ZÁŘE', handle: '@tonda_013', faction: 'SIGNÁL 0', symbol: '✳', accent: '#92d9c6', backdrop: '#172321', head: '#354a43', face: 'M440 440 Q600 385 760 440 L790 650 710 770 600 750 490 770 410 650Z', horns: 'M445 440 485 235 565 420M755 440 715 235 635 420' }
];
const screens = [...document.querySelectorAll('[data-screen]')];
const stepLinks = [...document.querySelectorAll('[data-step-link]')];
const songList = document.getElementById('song-list');
let currentVibe = 'chaos';
const vibeLabels = { chaos: 'CHAOS', klid: 'KLID', kontrola: 'KONTROLA', boj: 'BOJ', noc: 'NOC', den: 'DEN', jedno: 'JE MI TO JEDNO' };
const sigilNames = { '✦': 'JISKRA', '〄': 'VÝBOJ', '⌁': 'TICHÝ SIGNÁL', '✳': 'ZÁŘE', '⟁': 'PAMĚŤ', '☾': 'NOC', '⚡': 'BOUŘE', '◈': 'ZÁKLAD' };
let generated = archetypes[0];
let generationCount = 0;
let activeScreen = null;
let previousScreen = 'songs';
const galleryKey = 'at-creatures-gallery-v1';
const communityStatsKey = 'at-creatures-community-stats-v1';
const demoTrackPicks = { 'Eve': 68, 'Insane': 54, 'Mother': 47, 'Chosen One': 42, 'Airbag Death': 36, 'Ghost of the Bloodbath': 31, 'Bright Sun': 28 };
const demoCardPoints = { 'sample-0': 83, 'sample-1': 69, 'sample-2': 57, 'sample-3': 44 };
const introFaceLandmarks = [
  // Ordered as left eye, right eye, nose, mouth, left temple, right temple, crown.
  // Each source artwork is mapped independently so the facial features stay aligned.
  [[.36,.43],[.64,.43],[.50,.59],[.50,.76],[.20,.46],[.80,.46],[.50,.17]],
  [[.36,.53],[.64,.53],[.50,.69],[.50,.81],[.18,.55],[.82,.55],[.50,.15]],
  [[.36,.61],[.64,.61],[.50,.72],[.50,.84],[.16,.62],[.84,.62],[.50,.13]]
];
const creatureArtworkPaths = [
  'assets/creature-result-01.jpg',
  'assets/creature-result-02.jpg',
  'assets/creature-result-03.jpg',
  'assets/creature-result-04.jpg',
  'assets/creature-result-05.jpg'
];
const creatureArtworkCache = [];
let artworkDeck = [];
let lastArtworkIndex = -1;
function cacheCreatureArtwork(image, index) {
  if (!image.complete || !image.naturalWidth || creatureArtworkCache[index]) return;
  const canvas = document.createElement('canvas');
  canvas.width = Math.min(900, image.naturalWidth);
  canvas.height = Math.min(900, image.naturalHeight);
  const context = canvas.getContext('2d');
  if (!context) return;
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  try { creatureArtworkCache[index] = canvas.toDataURL('image/jpeg', 0.88); } catch { return; }
  if (generated?.artworkIndex === index && activeScreen === 'result') {
    generated.artworkData = creatureArtworkCache[index];
    document.getElementById('creature-art').innerHTML = creaturePortraitSvg(generated);
  }
}
const creatureArtworkImages = creatureArtworkPaths.map((path, index) => {
  const image = new Image();
  image.addEventListener('load', () => cacheCreatureArtwork(image, index));
  image.src = new URL(path, document.baseURI).href;
  return image;
});
function nextArtworkIndex() {
  if (!artworkDeck.length) {
    artworkDeck = creatureArtworkPaths.map((_, index) => index).filter(index => index !== lastArtworkIndex);
    for (let index = artworkDeck.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [artworkDeck[index], artworkDeck[swapIndex]] = [artworkDeck[swapIndex], artworkDeck[index]];
    }
  }
  lastArtworkIndex = artworkDeck.shift() ?? 0;
  return lastArtworkIndex;
}
function getCreatureArtworkData(index) {
  const image = creatureArtworkImages[index];
  if (creatureArtworkCache[index]) return creatureArtworkCache[index];
  if (image?.complete) cacheCreatureArtwork(image, index);
  return creatureArtworkCache[index] || '';
}

function startIntroFaceLoop() {
  const canvas = document.getElementById('intro-face');
  const gl = canvas?.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: true });
  if (!canvas || !gl || !Array.isArray(window.INTRO_FACE_DATA)) return;

  const vertexSource = `
    attribute vec2 position;
    varying vec2 uv;
    void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }
  `;
  const fragmentSource = `
    precision highp float;
    varying vec2 uv;
    uniform sampler2D fromFace;
    uniform sampler2D toFace;
    uniform float progress;
    uniform float clock;
    uniform float fromGreen;
    uniform float toGreen;
    uniform float fromWarm;
    uniform float toWarm;
    uniform vec2 fromMarks[7];
    uniform vec2 toMarks[7];
    float smoothMorph(float value, float start, float end) {
      float x = clamp((value - start) / (end - start), 0.0, 1.0);
      return x * x * (3.0 - 2.0 * x);
    }
    float noseProgress() { return smoothMorph(progress, 0.0, 0.54); }
    float midfaceProgress() { return smoothMorph(progress, 0.16, 0.78); }
    float outerProgress() { return smoothMorph(progress, 0.36, 1.0); }
    float featureProgress(int i) {
      // The nose gets its own first phase; eyes and mouth follow, then the head contour.
      if (i == 2) return noseProgress();
      return i < 4 ? midfaceProgress() : outerProgress();
    }
    float falloff(vec2 p, vec2 center, float radius) {
      vec2 d = (p - center) / vec2(1.0, 1.0);
      return exp(-dot(d,d)/(radius*radius));
    }
    vec2 sourceFlow(vec2 p) {
      vec2 flow = vec2(0.0);
      for (int i=0; i<7; i++) {
        float localT = featureProgress(i);
        vec2 mid = mix(fromMarks[i], toMarks[i], localT);
        float radius = i < 2 ? 0.16 : (i == 6 ? 0.25 : 0.20);
        flow += (toMarks[i] - fromMarks[i]) * 1.28 * localT * falloff(p, mid, radius);
      }
      float faceBreath = sin(progress * 3.14159265) * 0.018;
      vec2 centered = p - vec2(0.5, 0.53);
      flow += centered * faceBreath * (0.7 + 0.3 * sin(clock * 0.42)) * smoothMorph(progress, 0.0, 0.78);
      vec2 noseCenter = mix(fromMarks[2], toMarks[2], noseProgress());
      float noseBulge = sin(noseProgress() * 3.14159265) * falloff(p, noseCenter, 0.19) * 0.24;
      flow += (p - noseCenter) * noseBulge;
      return flow;
    }
    vec2 targetFlow(vec2 p) {
      vec2 flow = vec2(0.0);
      for (int i=0; i<7; i++) {
        float localT = featureProgress(i);
        vec2 mid = mix(fromMarks[i], toMarks[i], localT);
        float radius = i < 2 ? 0.16 : (i == 6 ? 0.25 : 0.20);
        flow += (toMarks[i] - fromMarks[i]) * 1.28 * (1.0 - localT) * falloff(p, mid, radius);
      }
      float faceBreath = sin(progress * 3.14159265) * 0.018;
      vec2 centered = p - vec2(0.5, 0.53);
      flow += centered * faceBreath * (0.7 + 0.3 * sin(clock * 0.42)) * (1.0 - smoothMorph(progress, 0.0, 0.78));
      vec2 noseCenter = mix(fromMarks[2], toMarks[2], noseProgress());
      float noseBulge = sin(noseProgress() * 3.14159265) * falloff(p, noseCenter, 0.19) * 0.24;
      flow -= (p - noseCenter) * noseBulge;
      return flow;
    }
    float midfaceMask(vec2 p) {
      float localT = midfaceProgress();
      float eyeLeft = falloff(p, mix(fromMarks[0], toMarks[0], localT), 0.19);
      float eyeRight = falloff(p, mix(fromMarks[1], toMarks[1], localT), 0.19);
      float mouth = falloff(p, mix(fromMarks[3], toMarks[3], localT), 0.20);
      return max(max(eyeLeft, eyeRight), mouth);
    }
    float noseMask(vec2 p) {
      return falloff(p, mix(fromMarks[2], toMarks[2], noseProgress()), 0.17);
    }
    vec4 greenPalette(vec4 source, float active) {
      float high = max(source.r, max(source.g, source.b));
      float low = min(source.r, min(source.g, source.b));
      float chroma = high - low;
      float luminance = dot(source.rgb, vec3(0.299, 0.587, 0.114));
      float coloredInk = smoothstep(0.07, 0.20, chroma);
      vec3 deepGreen = vec3(0.025, 0.13, 0.045);
      vec3 acidGreen = vec3(0.68, 0.91, 0.20);
      vec3 green = mix(deepGreen, acidGreen, smoothstep(0.08, 0.82, luminance));
      vec3 rgb = mix(source.rgb, green, coloredInk * active * 0.96);
      return vec4(rgb, source.a);
    }
    vec4 warmBluePalette(vec4 source, float active) {
      float high = max(source.r, max(source.g, source.b));
      float low = min(source.r, min(source.g, source.b));
      float chroma = high - low;
      float luminance = dot(source.rgb, vec3(0.299, 0.587, 0.114));
      float coloredInk = smoothstep(0.07, 0.20, chroma);
      vec3 deepBlue = vec3(0.025, 0.10, 0.34);
      vec3 orange = vec3(0.98, 0.29, 0.035);
      vec3 yellow = vec3(1.0, 0.80, 0.12);
      vec3 palette = mix(deepBlue, orange, smoothstep(0.08, 0.48, luminance));
      palette = mix(palette, yellow, smoothstep(0.43, 0.82, luminance));
      vec3 rgb = mix(source.rgb, palette, coloredInk * active * 0.97);
      return vec4(rgb, source.a);
    }
    void main() {
      vec2 uvA = clamp(uv - sourceFlow(uv), 0.001, 0.999);
      vec2 uvB = clamp(uv + targetFlow(uv), 0.001, 0.999);
      vec4 a = warmBluePalette(greenPalette(texture2D(fromFace, uvA), fromGreen), fromWarm);
      vec4 b = warmBluePalette(greenPalette(texture2D(toFace, uvB), toGreen), toWarm);
      float blend = mix(outerProgress(), midfaceProgress(), midfaceMask(uv));
      blend = mix(blend, noseProgress(), noseMask(uv));
      vec3 rgb = mix(a.rgb, b.rgb, blend);
      float alpha = mix(a.a, b.a, blend);
      gl_FragColor = vec4(rgb * alpha, alpha);
    }
  `;
  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { gl.deleteShader(shader); return null; }
    return shader;
  };
  const vertex = compile(gl.VERTEX_SHADER, vertexSource);
  const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertex || !fragment) return;
  const program = gl.createProgram();
  gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
  gl.useProgram(program);
  const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  const textures = [];
  const faces = window.INTRO_FACE_DATA.map((src, index) => new Promise(resolve => {
    const image = new Image();
    image.onload = () => {
      const texture = gl.createTexture(); gl.activeTexture(gl.TEXTURE0 + index); gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image); textures[index] = texture; resolve(true);
    };
    image.onerror = () => resolve(false); image.src = src;
  }));
  Promise.all(faces).then(loaded => {
    if (loaded.some(ok => !ok)) return;
    gl.uniform1i(gl.getUniformLocation(program, 'fromFace'), 0);
    gl.uniform1i(gl.getUniformLocation(program, 'toFace'), 1);
    const fromMarks = gl.getUniformLocation(program, 'fromMarks[0]');
    const toMarks = gl.getUniformLocation(program, 'toMarks[0]');
    const progressLoc = gl.getUniformLocation(program, 'progress');
    const clockLoc = gl.getUniformLocation(program, 'clock');
    const fromGreenLoc = gl.getUniformLocation(program, 'fromGreen');
    const toGreenLoc = gl.getUniformLocation(program, 'toGreen');
    const fromWarmLoc = gl.getUniformLocation(program, 'fromWarm');
    const toWarmLoc = gl.getUniformLocation(program, 'toWarm');
    const turn = document.querySelector('.organism-turn');
    const morphDuration = 3900;
    const holdDuration = 0;
    const cycleDuration = morphDuration + holdDuration;
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.round(canvas.clientWidth * ratio));
      const height = Math.max(1, Math.round(canvas.clientHeight * ratio));
      if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; gl.viewport(0, 0, width, height); }
    };
    const draw = now => {
      resize();
      const time = now / 1000;
      const cycle = time * 1000 / cycleDuration;
      const step = Math.floor(cycle);
      const phase = cycle - step;
      const aIndex = step % textures.length;
      const bIndex = (aIndex + 1) % textures.length;
      const progress = Math.min(1, phase * cycleDuration / morphDuration);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, textures[aIndex]);
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, textures[bIndex]);
      gl.uniform1f(progressLoc, progress); gl.uniform1f(clockLoc, time);
      gl.uniform1f(fromGreenLoc, aIndex === 1 ? 1 : 0);
      gl.uniform1f(toGreenLoc, bIndex === 1 ? 1 : 0);
      gl.uniform1f(fromWarmLoc, aIndex === 2 ? 1 : 0);
      gl.uniform1f(toWarmLoc, bIndex === 2 ? 1 : 0);
      const glMarks = points => points.flatMap(([x,y]) => [x, 1-y]);
      gl.uniform2fv(fromMarks, new Float32Array(glMarks(introFaceLandmarks[aIndex])));
      gl.uniform2fv(toMarks, new Float32Array(glMarks(introFaceLandmarks[bIndex])));
      gl.clearColor(0,0,0,0); gl.clear(gl.COLOR_BUFFER_BIT); gl.drawArrays(gl.TRIANGLES, 0, 6);
      const yaw = Math.sin(time * .42 + Math.sin(time * .13)) * 7;
      const pitch = Math.sin(time * .36 + Math.sin(time * .11 + 1)) * 10;
      const roll = Math.sin(time * .29 + Math.sin(time * .09)) * 2.2;
      const driftX = Math.sin(time * .31 + Math.sin(time * .09)) * 5;
      const driftY = Math.sin(time * .27 + Math.sin(time * .08 + 1)) * 6;
      if (turn) turn.style.transform = `perspective(900px) translate3d(${driftX.toFixed(2)}px,${driftY.toFixed(2)}px,0) rotateY(${yaw.toFixed(2)}deg) rotateX(${pitch.toFixed(2)}deg) rotateZ(${roll.toFixed(2)}deg)`;
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  });
}

function renderTracks() {
  songList.innerHTML = tracks.map((track, index) => `
    <div class="song-item">
      <button class="song-row" type="button" data-track-index="${index}" aria-pressed="false">
        <span class="song-index">${String(index + 1).padStart(2, '0')}</span>
        <span class="song-title">${track.title}</span>
        <span class="song-album">${track.album}</span>
        <span class="song-mark" aria-hidden="true">+</span>
      </button>
      <a class="song-spotify" href="${spotifySearchUrl(track)}" target="_blank" rel="noopener noreferrer" aria-label="Otevřít ${track.title} na Spotify">SPOTIFY ↗</a>
    </div>`).join('');
  songList.addEventListener('click', event => {
    const button = event.target.closest('[data-track-index]');
    if (!button) return;
    const index = Number(button.dataset.trackIndex);
    if (selectedSongs.has(index)) selectedSongs.delete(index);
    else if (selectedSongs.size < 5) selectedSongs.add(index);
    renderSongSelection();
  });
  renderSongSelection();
}
function spotifySearchUrl(track) {
  return `https://open.spotify.com/search/${encodeURIComponent(`Atari Terror ${track.title}`)}`;
}
function renderSongSelection() {
  document.getElementById('song-count').textContent = selectedSongs.size;
  songList.querySelectorAll('[data-track-index]').forEach(button => {
    const active = selectedSongs.has(Number(button.dataset.trackIndex));
    button.setAttribute('aria-pressed', String(active));
    button.querySelector('.song-mark').textContent = active ? '✓' : '+';
  });
}
function goTo(name) {
  if (name === 'gallery') previousScreen = activeScreen && activeScreen !== 'gallery' ? activeScreen : 'songs';
  if (name === 'result' && activeScreen !== 'gallery') generateCreature(false);
  document.getElementById('landing-screen').hidden = true;
  document.getElementById('return-home').hidden = false;
  document.getElementById('app-shell').hidden = false;
  document.querySelector('.site-footer').hidden = false;
  document.querySelector('.steps').hidden = name === 'gallery';
  document.querySelector('.app-heading').hidden = name === 'gallery';
  activeScreen = name;
  screens.forEach(screen => {
    const active = screen.dataset.screen === name;
    screen.hidden = !active;
    screen.classList.toggle('is-visible', active);
  });
  const order = ['songs', 'identity', 'result'];
  stepLinks.forEach(button => {
    const index = order.indexOf(button.dataset.stepLink);
    const target = order.indexOf(name);
    button.classList.toggle('is-active', index === target);
    button.classList.toggle('is-done', index < target);
    button.setAttribute('aria-current', index === target ? 'step' : 'false');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function returnHome() {
  document.getElementById('landing-screen').hidden = false;
  document.getElementById('app-shell').hidden = true;
  document.querySelector('.site-footer').hidden = true;
  document.getElementById('return-home').hidden = true;
  activeScreen = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function getChoice(name) { return document.querySelector(`input[name="${name}"]:checked`)?.value || ''; }
function generateCreature(reroll) {
  const age = getChoice('age') || 'mladá krev';
  const presentation = getChoice('presentation') || 'maskulinní';
  const vibeSeed = currentVibe === 'jedno' ? 0 : currentVibe.length;
  const seed = [...selectedSongs].reduce((sum, value) => sum + value, 0) + age.length + presentation.length + vibeSeed + generationCount;
  const songProfiles = [...selectedSongs].map(index => ({ ...tracks[index], ...(window.AT_SONG_PROFILES?.[tracks[index].title] || {}) }));
  const votes = new Map();
  songProfiles.forEach(profile => votes.set(profile.archetype, (votes.get(profile.archetype) || 0) + 1));
  const highestVote = Math.max(0, ...votes.values());
  const winners = [...votes].filter(([, count]) => count === highestVote).map(([index]) => index);
  const archetypeIndex = songProfiles.length ? winners[(seed + (reroll ? 1 : 0)) % winners.length] : (seed + (reroll ? 1 : 0)) % archetypes.length;
  const artworkIndex = nextArtworkIndex();
  generated = { ...archetypes[archetypeIndex], archetypeIndex, artworkIndex, artworkData: getCreatureArtworkData(artworkIndex), songProfiles, id: globalThis.crypto?.randomUUID?.() || `card-${Date.now()}-${Math.random().toString(16).slice(2)}` };
  if (reroll) generationCount += 1;
  if (!reroll) recordTrackPicks(songProfiles);
  document.getElementById('creature-class').textContent = generated.faction;
  document.getElementById('result-title').innerHTML = generated.name.replace(' ', '<br><em>') + '</em>';
  document.getElementById('creature-quote').textContent = generated.quote;
  const readings = [...new Set(songProfiles.map(profile => profile.reading))].slice(0, 2);
  document.getElementById('creature-desc').textContent = [generated.description, ...readings].join(' ');
  const interpretation = document.getElementById('song-interpretation');
  interpretation.hidden = !songProfiles.length;
  interpretation.textContent = songProfiles.length
    ? `Výtvarné motivy: ${songProfiles.map(profile => profile.spark).join(' · ')}${songProfiles.some(profile => profile.lyricBasis === 'title-only') ? ' · U některých vybraných skladeb se text na zdroji nezobrazil; jejich motiv je odvozený z názvu.' : ''}`
    : '';
  document.getElementById('creature-code').textContent = `AT—${String(seed + generationCount).padStart(3, '0')}`;
  document.getElementById('tag-age').textContent = age.toUpperCase();
  document.getElementById('tag-presentation').textContent = presentation.toUpperCase();
  document.getElementById('tag-vibe').textContent = vibeLabels[currentVibe] || currentVibe.toUpperCase();
  document.getElementById('tag-sigil').textContent = `ZNAK SMEČKY · ${generated.symbol} ${sigilNames[generated.symbol] || 'SIGNÁL'}`;
  document.getElementById('result-origin').textContent = selectedSongs.size
    ? `Inspirace: ${[...selectedSongs].map(index => tracks[index].title).join(' · ')}`
    : 'Vygenerováno bez výběru skladeb';
  document.getElementById('creature-art').innerHTML = creaturePortraitSvg(generated);
  renderCurrentCardVote();
  document.getElementById('feedback').textContent = '';
}
// Each result uses a freshly selected, full painted creature artwork from the commissioned visual pool.
function creaturePortraitSvg(creature = generated) {
  const index = Number.isInteger(creature.artworkIndex) ? creature.artworkIndex : 0;
  const source = creature.artworkData || creatureArtworkCache[index] || new URL(creatureArtworkPaths[index] || creatureArtworkPaths[0], document.baseURI).href;
  return `<svg class="creature-illustration generated-gallery-art" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900" role="img" aria-label="Ilustrace bytosti ${creature.name}"><image href="${source}" x="0" y="0" width="900" height="900" preserveAspectRatio="xMidYMid slice"/></svg>`;
}
function cardSvg() {
  const title = generated.name;
  const age = getChoice('age').toUpperCase();
  const pres = getChoice('presentation').toUpperCase();
  const quote = generated.quote.replace(/[“”]/g, '&quot;');
  const palette = ['#d84a38', '#d4b63f'];
  const sigilName = sigilNames[generated.symbol] || 'SIGNÁL';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500"><defs><linearGradient id="cardbg" x2="0" y2="1"><stop stop-color="#27231f"/><stop offset="1" stop-color="#11100f"/></linearGradient></defs><rect width="1200" height="1500" fill="url(#cardbg)"/><path d="M36 36h1128v1428H36z" fill="none" stroke="#d4b63f" stroke-width="3"/><path d="M57 57h1086v1386H57z" fill="none" stroke="#e7d9b9" stroke-opacity=".24" stroke-width="1"/><svg x="116" y="78" width="968" height="1035" viewBox="0 0 900 900">${creaturePortraitSvg(generated).replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg><path d="M90 1130h1020" stroke="${palette[0]}" stroke-width="3"/><text x="600" y="1162" text-anchor="middle" fill="#d4b63f" font-size="15" font-family="Arial" letter-spacing="5">ZNAK SMEČKY</text><circle cx="600" cy="1205" r="31" fill="#171512" stroke="#d4b63f" stroke-width="2"/><text x="600" y="1219" text-anchor="middle" fill="#f1e6cd" font-size="38" font-family="Georgia,serif">${generated.symbol}</text><text x="600" y="1254" text-anchor="middle" fill="#c2b8a5" font-size="13" font-family="Arial" letter-spacing="4">${sigilName}</text><text x="600" y="1312" text-anchor="middle" fill="#f1e6cd" font-size="57" font-family="Georgia,serif" font-weight="bold" letter-spacing="2">${title}</text><text x="600" y="1355" text-anchor="middle" fill="#d4b63f" font-size="20" font-family="Arial" letter-spacing="4">${generated.faction}</text><text x="600" y="1402" text-anchor="middle" fill="#c2b8a5" font-size="18" font-family="Georgia,serif">${quote}</text><text x="600" y="1456" text-anchor="middle" fill="#898174" font-size="15" font-family="Arial" letter-spacing="4">${age} · ${pres} · AT—${String(generationCount + 1).padStart(3, '0')}</text></svg>`;
}
function downloadSvg(name, svg = cardSvg()) {
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url; anchor.download = name; anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function readGallery() {
  try { return JSON.parse(localStorage.getItem(galleryKey) || '[]'); }
  catch { return []; }
}
function readCommunityStats() {
  try {
    const stats = JSON.parse(localStorage.getItem(communityStatsKey) || '{}');
    return { songPicks: stats.songPicks || {}, cardPoints: stats.cardPoints || {}, votedCards: Array.isArray(stats.votedCards) ? stats.votedCards : [] };
  } catch { return { songPicks: {}, cardPoints: {}, votedCards: [] }; }
}
function writeCommunityStats(stats) {
  try { localStorage.setItem(communityStatsKey, JSON.stringify(stats)); return true; }
  catch { return false; }
}
function recordTrackPicks(songProfiles) {
  if (!songProfiles.length) return;
  const stats = readCommunityStats();
  songProfiles.forEach(track => { stats.songPicks[track.title] = (stats.songPicks[track.title] || 0) + 1; });
  writeCommunityStats(stats);
  renderTrending();
}
function getCardPointState(id) {
  const stats = readCommunityStats();
  return { points: Math.max(0, (demoCardPoints[id] || 0) + (stats.cardPoints[id] || 0)), voted: stats.votedCards.includes(id) };
}
function toggleCardPoint(id) {
  if (!id) return;
  const stats = readCommunityStats();
  const hasVoted = stats.votedCards.includes(id);
  stats.cardPoints[id] = (stats.cardPoints[id] || 0) + (hasVoted ? -1 : 1);
  if (hasVoted) stats.votedCards = stats.votedCards.filter(cardId => cardId !== id);
  else stats.votedCards.push(id);
  writeCommunityStats(stats);
  renderGallery();
  renderCommunityGallery();
  renderTrending();
  renderCurrentCardVote();
}
function getCommunityCards() {
  const localCards = readGallery().map(card => ({ ...card, id: String(card.id), type: 'saved' }));
  const sampleCards = communitySamples.map((card, sampleIndex) => ({ ...card, id: `sample-${sampleIndex}`, type: 'sample', sampleIndex }));
  return [...localCards, ...sampleCards];
}
function cardArtworkMarkup(card, className = '') {
  return card.type === 'saved'
    ? `<img class="${className}" src="data:image/svg+xml;charset=utf-8,${encodeURIComponent(card.svg)}" alt="Karta fanouškovské bytosti ${card.name}">`
    : `<span class="${className} community-sample-art" data-sample-index="${card.sampleIndex}" role="img" aria-label="Ilustrace bytosti ${card.name}"></span>`;
}
function cardVoteMarkup(card, className = 'community-card-vote') {
  const { points, voted } = getCardPointState(card.id);
  return `<button class="${className}" type="button" data-vote-card="${card.id}" aria-pressed="${voted}" aria-label="${voted ? 'Odebrat plusový bod' : 'Přidat plusový bod'} kartě ${card.name}"><span class="vote-plus">${voted ? '✓' : '+'}</span><span>${voted ? 'BOD PŘIDÁN' : 'PŘIDAT BOD'}</span><b>${points}</b></button>`;
}
function updateGalleryCount() {
  document.getElementById('gallery-count').textContent = readGallery().length;
}
function renderCommunityGallery() {
  const cards = getCommunityCards();
  document.getElementById('community-gallery-grid').innerHTML = cards.map(card => `
    <article class="community-card">
      <button class="community-card-view" type="button" data-community-card="${card.id}" aria-label="Zobrazit kartu ${card.name}">
        ${cardArtworkMarkup(card)}
        ${card.type === 'sample' ? `<span class="community-sample-sigil" aria-label="Znak smečky ${card.symbol}">${card.symbol}</span>` : ''}
        <span class="community-sample-caption"><strong>${card.name}</strong><small>${card.faction}${card.handle ? ` · ${card.handle}` : ''}</small></span>
      </button>
      ${cardVoteMarkup(card)}
    </article>`).join('');
}
function renderCurrentCardVote() {
  const button = document.getElementById('like-current-card');
  if (!button || !generated?.id) return;
  const { points, voted } = getCardPointState(generated.id);
  button.dataset.voteCard = generated.id;
  button.setAttribute('aria-pressed', String(voted));
  button.setAttribute('aria-label', `${voted ? 'Odebrat plusový bod' : 'Přidat plusový bod'} kartě ${generated.name}`);
  button.querySelector('span').textContent = voted ? 'BOD PŘIDÁN' : 'LÍBÍ SE MI';
  document.getElementById('current-card-votes').textContent = points;
}
function renderTrending() {
  const stats = readCommunityStats();
  const trackRanks = tracks.map(track => ({ ...track, picks: (demoTrackPicks[track.title] || 0) + (stats.songPicks[track.title] || 0) }))
    .filter(track => track.picks > 0).sort((a,b) => b.picks-a.picks || a.title.localeCompare(b.title)).slice(0,6);
  const maxPicks = Math.max(1, ...trackRanks.map(track => track.picks));
  const trackList = document.getElementById('trending-tracks');
  if (trackList) trackList.innerHTML = trackRanks.map((track,index) => `
    <li class="trending-track"><span class="trend-rank">${String(index+1).padStart(2,'0')}</span><div class="trending-track-info"><strong>${track.title}</strong><small>${track.album}</small><span class="trend-meter"><i style="width:${Math.round(track.picks/maxPicks*100)}%"></i></span></div><span class="trend-count">${track.picks} výběrů</span></li>`).join('');
  const cards = getCommunityCards().map(card => ({ ...card, points: getCardPointState(card.id).points }))
    .sort((a,b) => b.points-a.points || a.name.localeCompare(b.name)).slice(0,4);
  const cardList = document.getElementById('trending-cards');
  if (cardList) cardList.innerHTML = cards.map(card => `
    <article class="trending-card"><button class="trending-card-open" type="button" data-community-card="${card.id}" aria-label="Otevřít kartu ${card.name}">${cardArtworkMarkup(card,'trending-card-thumb')}<span class="trending-card-name"><strong>${card.name}</strong><small>${card.faction}</small></span></button>${cardVoteMarkup(card,'trend-card-vote')}</article>`).join('');
}
function openCommunityCard(id) {
  const card = getCommunityCards().find(item => item.id === id);
  if (!card) return;
  const dialog = document.getElementById('preview-dialog');
  const isSample = card.type === 'sample';
  dialog.classList.toggle('community-gallery-lightbox', isSample);
  document.getElementById('dialog-content').innerHTML = isSample
    ? `<div class="community-lightbox-art" data-sample-index="${card.sampleIndex}" role="img" aria-label="Ilustrace bytosti ${card.name}"></div><p class="community-lightbox-caption">ATARI TERROR CREATURES</p>`
    : `<img class="community-lightbox" src="data:image/svg+xml;charset=utf-8,${encodeURIComponent(card.svg)}" alt="Karta fanouškovské bytosti ${card.name}">`;
  dialog.showModal();
}
function renderGallery() {
  const gallery = readGallery();
  const grid = document.getElementById('gallery-grid');
  document.getElementById('gallery-empty').hidden = gallery.length > 0;
  grid.innerHTML = gallery.map(card => `
    <article class="gallery-card" data-card-id="${card.id}">
      <img src="data:image/svg+xml;charset=utf-8,${encodeURIComponent(card.svg)}" alt="Karta bytosti ${card.name}">
      <div class="gallery-card-actions">${cardVoteMarkup(card,'gallery-card-vote')}<button type="button" data-download-saved="${card.id}">STÁHNOUT ↓</button><button type="button" data-delete-saved="${card.id}" aria-label="Odebrat kartu ${card.name}">ODEBRAT ×</button></div>
    </article>`).join('');
  updateGalleryCount();
}
function saveCurrentCard() {
  const gallery = readGallery();
  const card = {
    id: generated.id || (globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`),
    name: generated.name,
    faction: generated.faction,
    symbol: generated.symbol,
    sigilName: sigilNames[generated.symbol] || 'SIGNÁL',
    svg: cardSvg(),
    createdAt: new Date().toISOString()
  };
  if (gallery.some(item => item.id === card.id)) {
    document.getElementById('feedback').textContent = 'Tahle karta už je v galerii uložená.';
    return;
  }
  gallery.unshift(card);
  try {
    localStorage.setItem(galleryKey, JSON.stringify(gallery.slice(0, 30)));
    updateGalleryCount();
    renderCommunityGallery();
    renderTrending();
    document.getElementById('feedback').textContent = 'Karta byla uložená do galerie.';
  } catch {
    document.getElementById('feedback').textContent = 'Kartu se nepodařilo uložit. Úložiště prohlížeče je plné.';
  }
}
renderTracks();
startIntroFaceLoop();
updateGalleryCount();
renderCommunityGallery();
renderTrending();
document.getElementById('start-app').addEventListener('click', () => goTo('songs'));
document.getElementById('brand-home').addEventListener('click', event => { event.preventDefault(); returnHome(); });
document.getElementById('return-home').addEventListener('click', returnHome);
document.getElementById('unknown-song').addEventListener('click', () => {
  const track = tracks[Math.floor(Math.random() * tracks.length)];
  window.open(spotifySearchUrl(track), '_blank', 'noopener,noreferrer');
});
document.querySelectorAll('[data-next]').forEach(button => button.addEventListener('click', () => goTo(button.dataset.next)));
document.querySelectorAll('[data-back]').forEach(button => button.addEventListener('click', () => goTo(button.dataset.back)));
document.querySelectorAll('[data-step-link]').forEach(button => button.addEventListener('click', () => {
  const name = button.dataset.stepLink;
  if (name === 'result' && !screens.find(item => item.dataset.screen === 'result').classList.contains('is-visible')) return;
  goTo(name);
}));
document.getElementById('skip-songs').addEventListener('click', () => { selectedSongs.clear(); renderSongSelection(); goTo('identity'); });
document.querySelectorAll('[data-vibe]').forEach(button => button.addEventListener('click', () => {
  currentVibe = button.dataset.vibe;
  document.querySelectorAll('[data-vibe]').forEach(option => { const active = option === button; option.classList.toggle('is-selected', active); option.setAttribute('aria-pressed', String(active)); });
}));
document.getElementById('reroll').addEventListener('click', () => generateCreature(true));
document.getElementById('download-card').addEventListener('click', () => downloadSvg('at-creature-karta.svg'));
document.getElementById('save-card').addEventListener('click', saveCurrentCard);
document.getElementById('open-gallery').addEventListener('click', () => { renderGallery(); goTo('gallery'); });
document.addEventListener('click', event => {
  const voteButton = event.target.closest('[data-vote-card]');
  if (voteButton) { toggleCardPoint(voteButton.dataset.voteCard); return; }
  const cardButton = event.target.closest('[data-community-card]');
  if (cardButton) openCommunityCard(cardButton.dataset.communityCard);
});
document.getElementById('close-gallery').addEventListener('click', () => goTo(previousScreen));
document.getElementById('gallery-grid').addEventListener('click', event => {
  const downloadButton = event.target.closest('[data-download-saved]');
  const deleteButton = event.target.closest('[data-delete-saved]');
  if (downloadButton) {
    const card = readGallery().find(item => item.id === downloadButton.dataset.downloadSaved);
    if (card) downloadSvg(`at-creature-${card.name.toLowerCase().replaceAll(' ', '-')}.svg`, card.svg);
  }
  if (deleteButton) {
    const updated = readGallery().filter(item => item.id !== deleteButton.dataset.deleteSaved);
    localStorage.setItem(galleryKey, JSON.stringify(updated));
    renderGallery();
    renderCommunityGallery();
    renderTrending();
  }
});
document.getElementById('share-card').addEventListener('click', async () => {
  const feedback = document.getElementById('feedback');
  try {
    if (navigator.share) await navigator.share({ title: `Moje AT bytost: ${generated.name}`, text: generated.quote, url: location.href });
    else if (navigator.clipboard) { await navigator.clipboard.writeText(`${generated.name} — ${generated.quote} ${location.href}`); feedback.textContent = 'Odkaz a jméno zkopírovány.'; }
    else feedback.textContent = 'Sdílení není v tomto prohlížeči dostupné.';
  } catch (error) { if (error.name !== 'AbortError') feedback.textContent = 'Sdílení se nepodařilo.'; }
});
document.querySelectorAll('[data-output]').forEach(button => button.addEventListener('click', () => {
  const dialog = document.getElementById('preview-dialog');
  const content = document.getElementById('dialog-content');
  if (button.dataset.output === 'logo') { downloadSvg('at-creature-znak.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800"><rect width="800" height="800" fill="#10100f"/><path d="M400 65 690 400 400 735 110 400Z" fill="none" stroke="#ffd21a" stroke-width="8"/><path d="M400 100 650 400 400 700 150 400Z" fill="none" stroke="#ffd21a" stroke-opacity=".4" stroke-width="2"/><text x="400" y="455" text-anchor="middle" fill="#ffd21a" font-size="185" font-family="Arial" font-weight="bold">${generated.symbol}</text></svg>`); return; }
  const art = generated.artworkData || new URL(creatureArtworkPaths[generated.artworkIndex] || creatureArtworkPaths[0], document.baseURI).href;
  if (button.dataset.output === 'poster') {
    content.innerHTML = `<div class="poster-preview"><div class="poster-sheet"><img src="${art}" alt="Ilustrace bytosti ${generated.name} na plakátu"><div class="poster-topline"><span>ATARI TERROR</span><span>AT CREATURES</span></div><div class="poster-bottom"><strong>${generated.name}</strong><span>${generated.faction}</span></div><span class="poster-price">30 Kč</span></div><p class="preview-note">Náhled plakátu · tisk za 30 Kč</p></div>`;
  } else if (button.dataset.output === 'shirt') {
    content.innerHTML = `<div class="shirt-preview"><div class="shirt-stage"><svg class="shirt-silhouette" viewBox="0 0 420 460" role="img" aria-label="Černé tričko"><path d="M128 44 172 25Q210 64 248 25l44 19 84 49-47 82-44-25v269H135V150l-44 25-47-82Z" fill="#20201d" stroke="#777166" stroke-width="5"/><path d="M172 25Q210 85 248 25M135 150v269m164-269v269" fill="none" stroke="#4a4841" stroke-width="4"/></svg><img class="shirt-print" src="${art}" alt="Potisk bytostí ${generated.name} na tričku"></div><div class="shirt-order"><p class="eyebrow">TVŮJ MOTIV · ČERNÉ TRIČKO</p><h3>${generated.name}</h3><p>Ukázka potisku na hrudi. Objednávka otevře předobjednávkový prototyp e-shopu.</p><a class="primary-button" href="../at-shop-preview/product.html?id=tee-men">OBJEDNAT TRIČKO <span>↗</span></a></div></div>`;
  } else {
    const discountCode = 'CREATURE10';
    const qrTarget = `https://shop.atariterror.com/?coupon=${discountCode}`;
    const qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&format=svg&data=${encodeURIComponent(qrTarget)}`;
    content.innerHTML = `<div class="ticket-preview"><p class="eyebrow">ATARI TERROR · FAN PASS</p><div class="ticket-art"><img src="${art}" alt="Ilustrace bytosti ${generated.name} na fanouškovské vstupence"><div><span>AT CREATURES</span><strong>${generated.name}</strong><small>${generated.faction}</small></div></div><div class="ticket-qr-block"><img class="ticket-qr" src="${qrImage}" alt="QR kód s odkazem na e-shop a slevovým kódem ${discountCode}"><div><p class="eyebrow">SLEVA NA MERCH</p><strong>−10 %</strong><p>Zadej kód <b>${discountCode}</b> v košíku.</p></div></div><p class="preview-note">Ukázková vstupenka a sleva · QR kód vede na e-shop; uplatnění slevy zatím není v e-shopu aktivní.</p></div>`;
  }
  dialog.showModal();
}));
document.getElementById('dialog-close').addEventListener('click', () => document.getElementById('preview-dialog').close());
document.getElementById('preview-dialog').addEventListener('click', event => { if (event.target === event.currentTarget) event.currentTarget.close(); });
document.getElementById('preview-dialog').addEventListener('close', event => event.currentTarget.classList.remove('community-gallery-lightbox'));
