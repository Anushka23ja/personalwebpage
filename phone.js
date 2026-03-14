/**
 * phone.js — Interactive phone mockup for the Side Quests section.
 * Home screen → app screens with smooth transitions.
 */

// ── DATA ─────────────────────────────────────────────────────

var PHONE_FEED_DATA = [
  {
    id: 1,
    image: 'images/feed-bowling.jpg',
    imagePos: 'center 25%',
    tag: '🎳 Seattle',
    caption: '🎳 bowling night with the girls. we did not come to lose.',
    likes: 412,
    time: '2h',
  },
  {
    id: 2,
    image: 'images/feed-hiking.jpg',
    imagePos: 'center 40%',
    tag: '🌲 Washington',
    caption: '🌲 rattlesnake ledge. washington hiking never misses, not once.',
    likes: 312,
    time: '1d',
  },
  {
    id: 3,
    image: 'images/feed-cafe.jpg',
    imagePos: 'center center',
    tag: '☕ Seattle',
    caption: '☕ drip house. iced latte season is a year-round thing in seattle. send more café recs.',
    likes: 247,
    time: '3d',
  },
  {
    id: 4,
    image: 'images/feed-space-needle.jpg',
    imagePos: 'center 30%',
    tag: '📍 Seattle',
    caption: '🏙️ holding up the space needle like it\'s my job. seattle, you never miss.',
    likes: 489,
    time: '5d',
  },
  {
    id: 5,
    image: 'images/feed-green-event.jpg',
    imagePos: 'center bottom',
    tag: '🏅 Seattle',
    caption: '🏃‍♀️ ran my first 5k the day before uw graduation. still can\'t believe i did both in 24 hours.',
    likes: 388,
    time: '1w',
  },
  {
    id: 6,
    image: 'images/feed-extra.jpg',
    imagePos: 'center 20%',
    tag: '💃 ISA',
    caption: '💃 bollywood showcase with the girls. isa uw never disappoints.',
    likes: 341,
    time: '2w',
  },
  {
    id: 7,
    image: 'images/feed-yellowstone.jpg',
    imagePos: 'center center',
    tag: '🌋 Wyoming',
    caption: '🦬 yellowstone. checked this one off the bucket list. the geysers, the bison, the whole thing.',
    likes: 287,
    time: '3w',
  },
  {
    id: 8,
    video: 'images/feed-video.mp4',
    tag: '🌴 Florida',
    caption: '🌴 hello florida!',
    likes: 174,
    time: '4w',
  },
];

var PHONE_APPS_DATA = [
  { name: "Yea's Wok",      emoji: '🍜', color: '#c2622a', url: 'https://yeaswok.lovable.app' },
  { name: 'Pathwiser AI',   emoji: '🗺️', color: '#6d4bac', url: 'https://github.com/Anushka23ja/pathwiser-ai' },
  { name: 'Cover Bot',      emoji: '📝', color: '#2a7ec9', url: 'https://hello34.app.n8n.cloud/workflow/ubVIQ6dOfTXxsRqS?project' },
  { name: 'Sales AI',       emoji: '📊', color: '#1e9c67', url: 'https://clear-insight-app.lovable.app' },
  { name: 'Content Studio', emoji: '🎨', color: '#a020b0', url: 'https://github.com/Anushka23ja/Hearth-Brew/tree/main' },
  { name: 'Wearable ML',    emoji: '⌚', color: '#c97a10', url: 'https://github.com/Anushka23ja/CapstoneProject' },
  { name: 'FileSystem C',   emoji: '🗂️', color: '#4e6080', url: 'https://endeavor-essence-view.lovable.app/' },
  { name: 'Mortgage ML',    emoji: '🏠', color: '#c0304a', url: 'https://colab.research.google.com/drive/1AWMH8QseaydJNNH6G3dMW4RM1G99vpRT?usp=sharing' },
];

var PHONE_TUNES_DATA = [
  { title: 'Pocketful of Sunshine',   artist: 'Natasha Bedingfield', gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B6B 100%)', text: 'PS' },
  { title: 'I Smoked Away My Brains', artist: 'ASAP Rocky',        gradient: 'linear-gradient(135deg, #2C2C2C 0%, #8B0000 100%)', text: 'SA' },
  { title: 'SDP',                     artist: 'Travis Scott',       gradient: 'linear-gradient(135deg, #1a1a2e 0%, #e74c3c 50%, #8b0000 100%)', text: 'SDP' },
  { title: 'The Spins',               artist: 'Mac Miller',         gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)', text: 'TS' },
  { title: 'August',                  artist: 'Taylor Swift',       gradient: 'linear-gradient(135deg, #87CEEB 0%, #4A90E2 50%, #1e3c72 100%)', text: 'AUG' },
  { title: '50/50',                   artist: 'Moneybagg Yo',       gradient: 'linear-gradient(to right, #2ecc71 0%, #2ecc71 50%, #27ae60 50%, #27ae60 100%)', text: '50' },
  { title: 'Stay Ready',              artist: 'Jhené Aiko',         gradient: 'linear-gradient(135deg, #F97316 0%, #FB923C 50%, #FFD700 100%)', text: 'SR' },
  { title: 'Fancy',                   artist: 'Drake',              gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', text: 'FC' },
  { title: 'Can\'t Take My Eyes Off You', artist: 'Frankie Valli', gradient: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%)', text: 'CU' },
  { title: 'Every Breath You Take',   artist: 'The Police',         gradient: 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #1f2937 100%)', text: 'EB' },
];

// ── BUILD CONTENT ────────────────────────────────────────────

function buildPhoneFeed() {
  var container = document.getElementById('pfeed-posts');
  if (!container) return;
  container.innerHTML = PHONE_FEED_DATA.map(function(post) {
    return '<div class="pfeed-post">' +
      '<div class="ppost-header">' +
        '<div class="ppost-avatar" style="background-image:url(\'images/profile-pic.jpg\');background-size:cover;background-position:center"></div>' +
        '<div>' +
          '<div class="ppost-name">officialanushka <svg width="11" height="11" viewBox="0 0 24 24" style="vertical-align:middle" fill="#3b9eff"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9a12.02 12.02 0 00-.382-3.016z" stroke="none"/><path d="M9 12l2 2 4-4" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg></div>' +
          '<div class="ppost-time">' + post.time + ' · ' + post.tag + '</div>' +
        '</div>' +
        '<div class="ppost-more">···</div>' +
      '</div>' +
      (post.video
        ? '<div class="ppost-img ppost-video-wrap"><video class="ppost-video" src="' + post.video + '" autoplay loop muted playsinline></video></div>'
        : post.image
          ? '<div class="ppost-img" style="background-image:url(\'' + post.image + '\');background-size:cover;background-position:' + (post.imagePos || 'center') + '"></div>'
          : '<div class="ppost-img" style="background:' + post.gradient + '"></div>') +
      '<div class="ppost-actions">' +
        '<button class="ppost-heart" id="pheart-' + post.id + '" data-likes="' + post.likes + '" onclick="togglePhoneLike(' + post.id + ')">' +
          '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
        '</button>' +
        '<svg class="ppost-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
        '<svg class="ppost-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>' +
        '<svg class="ppost-icon ppost-bookmark" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>' +
      '</div>' +
      '<div class="ppost-likes" id="plikes-' + post.id + '">' + post.likes.toLocaleString() + ' likes</div>' +
      '<div class="ppost-caption"><strong>officialanushka</strong> <svg width="10" height="10" viewBox="0 0 24 24" style="vertical-align:middle" fill="#3b9eff"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9a12.02 12.02 0 00-.382-3.016z" stroke="none"/><path d="M9 12l2 2 4-4" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg> ' + post.caption + '</div>' +
    '</div>';
  }).join('');
}

function buildPhoneApps() {
  var container = document.getElementById('papp-grid');
  if (!container) return;
  container.innerHTML = PHONE_APPS_DATA.map(function(app) {
    return '<a class="papp-icon" href="' + app.url + '" target="_blank" rel="noopener noreferrer">' +
      '<div class="papp-icon-bg" style="background:' + app.color + '">' +
        '<span class="papp-emoji">' + app.emoji + '</span>' +
      '</div>' +
      '<span class="papp-name">' + app.name + '</span>' +
    '</a>';
  }).join('');
}

function buildPhoneTunes() {
  var container = document.getElementById('ptunes-list');
  if (!container) return;

  var firstSong = PHONE_TUNES_DATA[0];
  var otherSongs = PHONE_TUNES_DATA.slice(1);

  var nowPlaying = '<div class="ptune-now-playing">' +
    '<div class="ptune-featured-art" style="background:' + firstSong.gradient + ';">' +
      '<div class="ptune-featured-text">' + firstSong.text + '</div>' +
    '</div>' +
    '<div class="ptune-featured-info">' +
      '<div class="ptune-featured-label">now playing</div>' +
      '<div class="ptune-featured-title">' + firstSong.title + '</div>' +
      '<div class="ptune-featured-artist">' + firstSong.artist + '</div>' +
      '<div class="ptune-progress-bar"><div class="ptune-progress-fill"></div></div>' +
      '<svg class="ptune-featured-play" width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,.8)" stroke="none"><circle cx="12" cy="12" r="11" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="1.5"/><polygon points="10 8 16 12 10 16 10 8" fill="rgba(255,255,255,.8)"/></svg>' +
    '</div>' +
  '</div>';

  var otherSongsHtml = '<div class="ptune-divider"></div>' +
    '<div class="ptune-label">next up</div>' +
    otherSongs.map(function(t, i) {
      return '<div class="ptune-row">' +
        '<div class="ptune-art" style="background:' + t.gradient + ';">' +
          '<div class="ptune-text">' + t.text + '</div>' +
        '</div>' +
        '<div class="ptune-info">' +
          '<div class="ptune-title">' + t.title + '</div>' +
          '<div class="ptune-artist">' + t.artist + '</div>' +
        '</div>' +
        '<svg class="ptune-play" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="rgba(255,255,255,.5)" stroke="none"/></svg>' +
      '</div>';
    }).join('');

  container.innerHTML = nowPlaying + otherSongsHtml;
}

// ── NAVIGATION ───────────────────────────────────────────────

var _phoneTransitioning = false;

// Switch between app screens via bottom tab bar
function switchPScreen(screen) {
  if (_phoneTransitioning) return;
  _activateScreen(screen);
}

function _activateScreen(screen) {
  document.querySelectorAll('.pscreen').forEach(function(el) {
    el.classList.remove('active');
  });
  document.querySelectorAll('.pnav-btn').forEach(function(el) {
    el.classList.remove('active');
  });
  var screenEl = document.getElementById('pscreen-' + screen);
  var navEl    = document.getElementById('pnav-' + screen);
  if (screenEl) screenEl.classList.add('active');
  if (navEl)    navEl.classList.add('active');
}

// ── HEART LIKES ──────────────────────────────────────────────

var _phoneHearted = {};

function togglePhoneLike(id) {
  var btn    = document.getElementById('pheart-' + id);
  var likesEl = document.getElementById('plikes-' + id);
  if (!btn || !likesEl) return;
  var base = parseInt(btn.getAttribute('data-likes'), 10);

  if (_phoneHearted[id]) {
    delete _phoneHearted[id];
    btn.classList.remove('liked');
    likesEl.textContent = base.toLocaleString() + ' likes';
  } else {
    _phoneHearted[id] = true;
    btn.classList.add('liked', 'heart-pop');
    setTimeout(function() { btn.classList.remove('heart-pop'); }, 300);
    likesEl.textContent = (base + 1).toLocaleString() + ' likes';
  }
}

// ── CLOCK ────────────────────────────────────────────────────

function updatePhoneClock() {
  var now  = new Date();
  var h    = now.getHours();
  var m    = String(now.getMinutes()).padStart(2, '0');
  var str  = h + ':' + m;

  // Status bar time (always visible)
  var statusEl = document.getElementById('phoneTime');
  if (statusEl) statusEl.textContent = str;

  // Home screen large time
  var homeTimeEl = document.getElementById('hwTime');
  if (homeTimeEl) homeTimeEl.textContent = str;

  // Home screen date
  var dateEl = document.getElementById('hwDate');
  if (dateEl) {
    var days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August',
                  'September','October','November','December'];
    dateEl.textContent = days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate();
  }
}

// ── INIT ─────────────────────────────────────────────────────

buildPhoneFeed();
buildPhoneApps();
buildPhoneTunes();
updatePhoneClock();
setInterval(updatePhoneClock, 15000);
