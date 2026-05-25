/**
 * La Chaparrita Burritos — src/script.js
 * ----------------------------------------
 * 1. Hero video crossfade slideshow (3 scenes, 6s each)
 * 2. Scroll reveal (IntersectionObserver)
 * 3. Mobile nav — auto-close on link click
 * 4. Contact form — inline success/error feedback
 */

/* ============================================================
   1. HERO VIDEO SLIDESHOW
   ============================================================
   Expects:  .hero__video elements with data-scene="0/1/2"
             .hero__video--active   → opacity: 1 (CSS)
             .hero__scene-dot       → progress indicator dots
   Behavior: preloads next video before switch, crossfades every 6s
   ============================================================ */
(function initVideoSlideshow() {
  const videos = Array.from(document.querySelectorAll('.hero__video'));
  const dots   = Array.from(document.querySelectorAll('.hero__scene-dot'));

  if (videos.length < 2) return; // nothing to crossfade

  let current   = 0;
  const SCENE_MS = 6000; // ms per scene

  /** Preload the video at index so it's ready when we switch to it */
  function preload(index) {
    const v = videos[index];
    if (v && v.preload !== 'auto') {
      v.preload = 'auto';
      v.load();
    }
  }

  /** Transition from current → next */
  function switchTo(nextIndex) {
    const prev = videos[current];
    const next = videos[nextIndex];

    // Update dots
    dots.forEach((d, i) => d.classList.toggle('hero__scene-dot--active', i === nextIndex));

    // Crossfade
    next.play().catch(() => {}); // silent fail (autoplay policy)
    next.classList.add('hero__video--active');

    // Remove active from previous after CSS transition completes
    const FADE_MS = 800;
    setTimeout(() => {
      prev.classList.remove('hero__video--active');
    }, FADE_MS);

    current = nextIndex;

    // Preload the one after next
    preload((nextIndex + 1) % videos.length);
  }

  // Preload scene 1 immediately (scene 0 is already loading via autoplay)
  preload(1);

  // Cycle through scenes
  setInterval(() => {
    const next = (current + 1) % videos.length;
    switchTo(next);
  }, SCENE_MS);
})();


/* ============================================================
   2. SCROLL REVEAL
   ============================================================
   Watches elements with: .reveal .reveal-left .reveal-right .reveal-up
   Adds .is-visible when they enter the viewport.
   ============================================================ */
(function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-up'
  );

  if (!targets.length || !('IntersectionObserver' in window)) {
    // Fallback: show all immediately
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => observer.observe(el));
})();


/* ============================================================
   3. MOBILE NAV — AUTO CLOSE
   ============================================================
   Unchecks the CSS checkbox toggle when any nav link is clicked,
   so the menu closes after the user taps a section link.
   ============================================================ */
(function initMobileNavClose() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.querySelectorAll('.nav__links a');

  if (!toggle) return;

  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.checked = false;
    });
  });
})();


/* ============================================================
   4. CONTACT FORM — AJAX SUBMISSION (Formspree)
   ============================================================
   Intercepts the form submit, posts via fetch, shows inline
   success or error feedback without a page reload.
   ============================================================ */
(function initContactForm() {
  const form = document.querySelector('.contact__form');
  if (!form) return;

  // Only intercept if there's a real Formspree action (not placeholder)
  const action = form.getAttribute('action') || '';
  if (action.includes('YOUR_FORM_ID')) return; // not set up yet

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.form__submit');
    const originalLabel = submitBtn.innerHTML;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span style="opacity:.7">Sending…</span>';

    try {
      const data = new FormData(form);
      const res  = await fetch(action, {
        method:  'POST',
        body:    data,
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        showMessage(form, 'success', '🌯 Message sent! We\'ll get back to you soon.');
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        const msg  = json?.errors?.[0]?.message || 'Something went wrong. Try calling us!';
        showMessage(form, 'error', msg);
      }
    } catch {
      showMessage(form, 'error', 'Network error — try calling 323-610-3124 instead.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalLabel;
    }
  });

  function showMessage(form, type, text) {
    // Remove any existing message
    form.querySelector('.form__feedback')?.remove();

    const div = document.createElement('p');
    div.className = 'form__feedback';
    div.setAttribute('role', 'alert');
    div.textContent = text;
    div.style.cssText = `
      padding: .75rem 1rem;
      border-radius: 8px;
      font-size: .9rem;
      font-weight: 600;
      background: ${type === 'success' ? 'rgba(127,148,93,.15)' : 'rgba(220,50,50,.12)'};
      border: 1px solid ${type === 'success' ? 'rgba(127,148,93,.4)' : 'rgba(220,50,50,.35)'};
      color: ${type === 'success' ? '#a0c070' : '#f08080'};
    `;
    form.appendChild(div);
  }
})();