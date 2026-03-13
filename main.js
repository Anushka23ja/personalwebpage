/**
 * main.js — Reads from data.js and builds the entire portfolio page.
 * You should not need to edit this file.
 * Edit data.js instead!
 */

// ── Color helper ──────────────────────────────────────────────
const COLOR = {
  mint:  { bg: 'var(--mint)',  fg: 'var(--mint-dark)'  },
  sky:   { bg: 'var(--sky)',   fg: 'var(--sky-dark)'   },
  lilac: { bg: 'var(--lilac)', fg: 'var(--lilac-dark)' },
  peach: { bg: 'var(--peach)', fg: 'var(--peach-dark)' },
  lemon: { bg: 'var(--lemon)', fg: 'var(--lemon-dark)' },
};
function c(color){ return COLOR[color] || COLOR.mint; }

// ── NAV ──────────────────────────────────────────────────────
function buildNav(){
  document.querySelector('.ac-fullname').textContent = PORTFOLIO.name;
  document.querySelector('.ac-initials').textContent = PORTFOLIO.initials;
}

// ── HERO ─────────────────────────────────────────────────────
function buildHero(){
  document.querySelector('.hero-title').innerHTML = PORTFOLIO.heroTagline;
  document.querySelector('.hero-desc').textContent = PORTFOLIO.heroDesc;

  // Photo
  const photoEl = document.querySelector('.hero-photo');
  if (PORTFOLIO.heroImage) {
    photoEl.innerHTML = `<img src="${PORTFOLIO.heroImage}" alt="${PORTFOLIO.name}" />`;
  } else {
    photoEl.innerHTML = `<div class="hero-photo-placeholder">${PORTFOLIO.initials}</div>`;
  }
}

// ── EXPERIENCE ───────────────────────────────────────────────
function buildExperience(){
  const container = document.getElementById('tab-experience');
  container.innerHTML = `<div class="tab-line-nums">${
    PORTFOLIO.experience.map((e, i) => {
      const col = c(e.color);
      const num = String(i+1).padStart(2,'0');
      const connector = i < PORTFOLIO.experience.length-1
        ? `<div class="exp-connector"></div>` : '';
      return `
        <div class="exp-entry">
          <div class="exp-left">
            <span class="ln">${num}</span>
            <div class="exp-timeline-dot" style="background:${col.fg}"></div>
          </div>
          <div class="exp-content">
            <div class="exp-header">
              <span class="exp-role-t">${e.role}</span>
              <span class="exp-badge" style="background:${col.bg};color:${col.fg}">${e.date}</span>
            </div>
            <div class="exp-company-t">${e.company}</div>
            <p class="exp-desc-t">${e.desc}</p>
            <div class="exp-stack">${e.stack.map(s=>`<span class="es-tag">${s}</span>`).join('')}</div>
          </div>
        </div>${connector}`;
    }).join('')
  }</div>`;
}

// ── EDUCATION ────────────────────────────────────────────────
function buildEducation(){
  const container = document.getElementById('tab-education');
  container.innerHTML = `<div class="edu-grid">${
    PORTFOLIO.education.map(ed => {
      const col = c(ed.color);
      const gpa = ed.gpa ? `<div class="edu-gpa">${ed.gpa}</div>` : '';
      return `
        <div class="edu-card" style="border-top:3px solid ${col.fg}">
          <div class="edu-icon" style="background:${col.bg}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${col.fg}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div class="edu-degree">${ed.degree}</div>
          <div class="edu-school">${ed.school}</div>
          <div class="edu-year">${ed.year}</div>
          ${gpa}
          <div class="edu-tags" style="margin-top:.75rem">${ed.tags.map(t=>`<span class="es-tag">${t}</span>`).join('')}</div>
        </div>`;
    }).join('')
  }</div>`;
}

// ── SKILLS TAB ───────────────────────────────────────────────
function buildSkillsTab(){
  const container = document.getElementById('tab-skills');
  container.innerHTML = `<div class="skills-tab-grid">${
    PORTFOLIO.skills.map(g => {
      const col = c(g.color);
      return `
        <div class="stg-group">
          <div class="stg-label" style="color:${col.fg}">${g.label}</div>
          <div class="stg-chips">${g.items.map(i=>`<span class="stg-chip" style="background:${col.bg};color:${col.fg}">${i}</span>`).join('')}</div>
        </div>`;
    }).join('')
  }</div>`;
}

// ── CERTIFICATIONS ───────────────────────────────────────────
function buildCerts(){
  const container = document.getElementById('tab-achievements');
  const checkIcon = (col) => `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${col.fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/>
    </svg>`;
  container.innerHTML = `<div class="ach-list">${
    PORTFOLIO.certifications.map(cert => {
      const col = c(cert.color);
      return `
        <div class="ach-item">
          <div class="ach-icon" style="background:${col.bg}">${checkIcon(col)}</div>
          <div>
            <div class="ach-title">${cert.title}</div>
            <div class="ach-sub">${cert.sub}</div>
          </div>
        </div>`;
    }).join('')
  }</div>`;
}

// ── PROJECTS ─────────────────────────────────────────────────
const CATEGORY_LABELS = {
  all:         { label: "All",          pill: "all"   },
  ai:          { label: "AI Agents",    pill: "mint"  },
  programming: { label: "Programming",  pill: "sky"   },
  data:        { label: "Data Analysis",pill: "lemon" },
  design:      { label: "UX / UI",      pill: "lilac" },
  research:    { label: "Research",     pill: "peach" },
};

function buildProjects(){
  const usedCats = ['all', ...new Set(PORTFOLIO.projects.map(p => p.category))];
  const filterRow = document.getElementById('proj-filters');
  filterRow.innerHTML = usedCats.map((cat, i) => {
    const info = CATEGORY_LABELS[cat] || { label: cat, pill: 'all' };
    return `<button class="pill ${info.pill} ${i===0?'active':''}" onclick="setFilter('${cat}',this)">${info.label}</button>`;
  }).join('');

  const grid = document.getElementById('proj-grid');
  grid.innerHTML = PORTFOLIO.projects.map(p => {
    const col = c(p.color);
    const thumbContent = p.image
      ? `<img src="${p.image}" alt="${p.title}" loading="lazy" />`
      : `<div class="proj-thumb-placeholder" style="background:linear-gradient(135deg,${col.bg},${col.fg}22)">
           ${p.title.substring(0,2).toUpperCase()}
         </div>`;
    const links = p.links.map(l =>
      `<a class="proj-link" href="${l.url}" target="_blank" onclick="event.stopPropagation()">${l.label}</a>`
    ).join('');
    const tags = p.tags.map((t, i) =>
      `<span class="p-tag ${i===0 ? p.color : 'gray'}">${t}</span>`
    ).join('');

    return `
      <div class="proj-card" data-cat="${p.category}">
        <div class="proj-thumb" style="position:relative">${thumbContent}</div>
        <div class="proj-body">
          <div class="proj-tags">${tags}</div>
          <div class="proj-name">${p.title}</div>
          <div class="proj-impact">${p.date}</div>
          <p class="proj-desc">${p.desc}</p>
          <div class="proj-footer">${links}</div>
        </div>
      </div>`;
  }).join('');

  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('click', function(e){
      if (e.target.closest('a')) return;
      const firstLink = card.querySelector('.proj-link');
      if (firstLink && firstLink.href && firstLink.href !== '#' && firstLink.href !== window.location.href) {
        window.open(firstLink.href, '_blank');
      }
    });
  });
}

// ── ABOUT OVERLAY ─────────────────────────────────────────────
function buildAboutOverlay(){
  const body = document.getElementById('about-panel-body');
  const stats = PORTFOLIO.stats.map(s =>
    `<div class="panel-stat"><div class="panel-stat-num">${s.num}</div><div class="panel-stat-lbl">${s.label}</div></div>`
  ).join('');
  const bio = PORTFOLIO.aboutBio.map(p => `<p>${p}</p>`).join('');
  const tags = PORTFOLIO.interests.map(i => `<span class="panel-tag">${i}</span>`).join('');

  body.innerHTML = `
    <div class="panel-avatar">
      <div class="panel-avatar-ring" style="width:180px;height:180px"></div>
      <div class="panel-avatar-ring" style="width:280px;height:280px"></div>
      <div class="panel-avatar-initials">${PORTFOLIO.initials}</div>
    </div>
    <div class="panel-name">${PORTFOLIO.name}</div>
    <div class="panel-role">${PORTFOLIO.roles}</div>
    <div class="panel-stat-row">${stats}</div>
    <div class="panel-divider"></div>
    <div class="panel-section-label">Bio</div>
    <div class="panel-bio">${bio}</div>
    <div class="panel-divider"></div>
    <div class="panel-section-label">Details</div>
    <div class="panel-info-row">
      <div class="panel-info-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      </div>
      <span class="panel-info-key">Education</span>
      <span class="panel-info-val">${PORTFOLIO.education_short}</span>
    </div>
    <div class="panel-info-row">
      <div class="panel-info-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      </div>
      <span class="panel-info-key">Location</span>
      <span class="panel-info-val">${PORTFOLIO.location}</span>
    </div>
    <div class="panel-info-row">
      <div class="panel-info-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--mint-dark)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      </div>
      <span class="panel-info-key">Availability</span>
      <span class="panel-info-val" style="color:var(--mint-dark)">● ${PORTFOLIO.availability}</span>
    </div>
    <div class="panel-divider"></div>
    <div class="panel-section-label">Interests</div>
    <div class="panel-tag-row">${tags}</div>
    <div style="margin-top:2rem">
      <a href="ChouguleAnushka_Resume (6).pdf" target="_blank" class="btn btn-dark" onclick="closeAbout()" style="width:100%;justify-content:center;">Download Resume →</a>
    </div>`;
}

// ── ABOUT SECTION ────────────────────────────────────────────
function buildAboutSection(){
  const photoWrap = document.querySelector('.about-photo-wrap');
  if (PORTFOLIO.aboutImage) {
    photoWrap.innerHTML = `<img src="${PORTFOLIO.aboutImage}" alt="${PORTFOLIO.name}" />`;
  } else {
    photoWrap.innerHTML = `<div class="about-photo-placeholder">photo goes here</div>`;
  }
}

// ── CONTACT ──────────────────────────────────────────────────
function buildContact(){
  const col = document.getElementById('contact-links');
  col.innerHTML = PORTFOLIO.contactLinks.map(l => `
    <a class="contact-link-row" href="${l.url}" target="_blank">
      <div class="cl-icon" style="background:${l.bg}20">${l.icon}</div>
      <div>
        <div class="cl-name">${l.label}</div>
        <div class="cl-handle">${l.handle}</div>
      </div>
      <span class="cl-arrow">↗</span>
    </a>`
  ).join('');
}

// ── FOOTER ───────────────────────────────────────────────────
function buildFooter(){
  document.getElementById('footer-name').textContent = PORTFOLIO.name;
}

// ── FEATURED ──────────────────────────────────────────────────
function buildFeatured(){
  const grid = document.getElementById('featured-grid');

  let featured = PORTFOLIO.featured;

  let html = '';

  // TikTok (left, tall) — featured[0]
  if (featured[0]) {
    const item = featured[0];
    html += `
      <a href="${item.url}" target="_blank" class="featured-card fc-tiktok1 fc-tiktok-bg">
        <div class="fc-media" style="background-image: url('${item.thumbnail || 'images/video-placeholder.jpg'}'); background-size: cover; background-position: center;">
          <div class="fc-badge">${item.platform}</div>
          <div class="fc-overlay">
            <div class="fc-overlay-title">${item.title}</div>
            <div class="fc-overlay-desc">${item.description}</div>
            <div class="fc-overlay-link">View Video →</div>
          </div>
        </div>
        <div class="fc-footer">
          <span class="fc-footer-source">${item.handle}</span>
          <span class="fc-footer-arrow">↗</span>
        </div>
      </a>
    `;
  }

  // Instagram (middle, tall) — featured[1]
  if (featured[1]) {
    const item = featured[1];
    html += `
      <a href="${item.url}" target="_blank" class="featured-card fc-tiktok2 fc-insta-bg">
        <div class="fc-media" style="background-image: url('${item.thumbnail || 'images/video-placeholder.jpg'}'); background-size: cover; background-position: center;">
          <div class="fc-badge">
            ${item.verified ? `${item.platform} <span style="display:inline-flex;align-items:center;margin-left:4px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="#3b82f6"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></span>` : item.platform}
          </div>
          <div class="fc-overlay">
            <div class="fc-overlay-title">${item.overlayTitle || item.title}</div>
            <div class="fc-overlay-desc">${item.overlaySubtitle || item.description}</div>
            <div class="fc-overlay-link">View Post →</div>
          </div>
        </div>
        <div class="fc-footer" style="background: linear-gradient(to right, #a78bfa, #7c3aed); color: white;">
          <span class="fc-footer-source">${item.handle}</span>
          <span class="fc-footer-arrow">↗</span>
        </div>
      </a>
    `;
  }

  // Instagram duplicate (right, tall) — featured[1] shown again with accent color footer
  if (featured[1]) {
    const item = featured[1];
    html += `
      <a href="${item.url}" target="_blank" class="featured-card fc-insta fc-insta-bg">
        <div class="fc-media" style="background-image: url('${item.thumbnail || 'images/video-placeholder.jpg'}'); background-size: cover; background-position: center;">
          <div class="fc-badge">
            ${item.verified ? `${item.platform} <span style="display:inline-flex;align-items:center;margin-left:4px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="#3b82f6"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></span>` : item.platform}
          </div>
          <div class="fc-overlay">
            <div class="fc-overlay-title">${item.overlayTitle || item.title}</div>
            <div class="fc-overlay-desc">${item.overlaySubtitle || item.description}</div>
            <div class="fc-overlay-link">View Post →</div>
          </div>
        </div>
        <div class="fc-footer" style="background: linear-gradient(to right, #a78bfa, #7c3aed); color: white;">
          <span class="fc-footer-source">${item.handle}</span>
          <span class="fc-footer-arrow">↗</span>
        </div>
      </a>
    `;
  }

  // Article (bottom left) — featured[2]
  if (featured[2]) {
    const item = featured[2];
    html += `
      <a href="${item.url}" target="_blank" class="featured-card fc-article fc-article-bg">
        <div class="fc-media" style="display: flex; align-items: center; justify-content: center;">
          <div class="fc-overlay">
            <div class="fc-overlay-title">${item.title}</div>
            <div class="fc-overlay-desc">${item.description}</div>
            <div class="fc-overlay-link">Read Article →</div>
          </div>
        </div>
        <div class="fc-footer">
          <span class="fc-footer-source">${item.platform}</span>
          <span class="fc-footer-arrow">↗</span>
        </div>
      </a>
    `;
  }

  // More coming soon (bottom middle)
  html += `
    <div class="featured-card fc-more fc-more-bg">
      <div class="fc-more-inner">
        <div class="fc-more-plus">+</div>
        <div class="fc-more-label">More coming soon</div>
      </div>
    </div>
  `;

  // Stat card (bottom right)
  html += `
    <div class="featured-card fc-stat fc-stat-bg">
      <div class="fc-stat-inner">
        <div class="fc-stat-num">3+</div>
        <div class="fc-stat-desc">Features across platforms</div>
      </div>
    </div>
  `;

  grid.innerHTML = html;
}

// ── VIDEO MODAL ────────────────────────────────────────────────
function addVideoModal() {
  if (!document.getElementById('video-modal')) {
    const modalHTML = `
      <div id="video-modal" class="video-modal">
        <div class="video-modal-backdrop" onclick="closeVideoModal()"></div>
        <div class="video-modal-content">
          <button class="video-modal-close" onclick="closeVideoModal()">×</button>
          <div id="video-modal-body" class="video-modal-body"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', function() {
      const videoUrl = this.dataset.videoUrl;
      const index = this.dataset.index;
      openVideoModal(videoUrl, index);
    });
  });
}

function openVideoModal(videoUrl, index) {
  const modal = document.getElementById('video-modal');
  const modalBody = document.getElementById('video-modal-body');

  let embedCode = '';

  if (videoUrl.includes('tiktok.com')) {
    const videoId = videoUrl.split('/video/')[1]?.split('?')[0] || '';
    embedCode = `
      <iframe
        src="https://www.tiktok.com/embed/${videoId}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video-iframe">
      </iframe>
    `;
  } else if (videoUrl.includes('instagram.com')) {
    embedCode = `
      <iframe
        src="${videoUrl}embed/"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video-iframe">
      </iframe>
    `;
  }

  modalBody.innerHTML = embedCode;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  document.getElementById('video-modal-body').innerHTML = '';
}

// ── INTERACTIONS ─────────────────────────────────────────────
window.openAbout = function(){
  document.getElementById('aboutOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
};
window.closeAbout = function(){
  document.getElementById('aboutOverlay').classList.remove('open');
  document.body.style.overflow = '';
};
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAbout(); });

window.switchTab = function(name, btn){
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
};

window.setFilter = function(cat, btn){
  document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.proj-card').forEach(c => {
    c.classList.toggle('hidden', cat !== 'all' && c.dataset.cat !== cat);
  });
};

// ── SCROLL ANIMATIONS ────────────────────────────────────────
function initScrollAnimations(){
  const fadeObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.proj-card, .ach-item, .edu-card').forEach(el => fadeObs.observe(el));

  const skillsGrid = document.getElementById('skillsGrid');
  if (skillsGrid){
    const skillObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.querySelectorAll('.skill-bar-fill').forEach(b => b.classList.add('go'));
          skillObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    skillObs.observe(skillsGrid);
  }
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildHero();
  buildExperience();
  buildEducation();
  buildSkillsTab();
  buildCerts();
  buildProjects();
  buildAboutOverlay();
  buildAboutSection();
  buildFeatured();
  buildContact();
  buildFooter();
  initScrollAnimations();
});