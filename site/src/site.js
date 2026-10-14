(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Scale bars: 15 ticks (major at 0/3/7/14), three segments, a marker on day --m */
  document.querySelectorAll('.sbar').forEach(bar => {
    const m = Number(bar.dataset.marker || 0);
    let html = '';
    for (let d = 0; d <= 14; d++) html += `<span class="tk${[0, 3, 7, 14].includes(d) ? ' mj' : ''}" style="--d:${d}"></span>`;
    html += '<span class="sg s1"></span><span class="sg s2"></span><span class="sg s3"></span>';
    html += `<span class="mk" style="--m:${m}"></span>`;
    if (bar.dataset.sold !== undefined) html += '<span class="sold"><span class="tag-sold">נמכר!</span></span>';
    bar.insertAdjacentHTML('afterbegin', html);
    bar.setAttribute('aria-hidden', 'true');
  });

  /* The marketing bar plays once: the marker travels 0 → 14 and settles into the sold tag */
  const playBar = document.querySelector('.sbar[data-play]');
  if (playBar && !reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { playBar.classList.add('play'); io.disconnect(); }
    }, { threshold: 0.35 });
    io.observe(playBar.closest('section') || playBar);
  }

  /* Header gets a sheet background once the page scrolls */
  const hdr = document.querySelector('.hdr');
  const onScroll = () => hdr && hdr.classList.toggle('scrolled', window.scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile action bar: shows after the hero CTA leaves, hides while the closing section is on screen */
  const abar = document.querySelector('.abar');
  const heroCta = document.getElementById('heroCta');
  const closing = document.getElementById('contact');
  if (abar && heroCta && closing && 'IntersectionObserver' in window) {
    let heroVisible = true, closingVisible = false;
    const sync = () => abar.classList.toggle('on', !heroVisible && !closingVisible);
    new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; sync(); }).observe(heroCta);
    new IntersectionObserver(([e]) => { closingVisible = e.isIntersecting; sync(); }).observe(closing);
  } else if (abar) abar.classList.add('on');

  /* Desktop: clicking the phone number copies it; touch devices dial */
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const notice = document.getElementById('copied');
  let timer;
  document.querySelectorAll('a[href^="tel:"]').forEach(a => {
    a.addEventListener('click', e => {
      if (!fine.matches || !navigator.clipboard) return;
      e.preventDefault();
      navigator.clipboard.writeText('054-4944622').then(() => {
        if (!notice) return;
        notice.textContent = 'המספר הועתק: 054-4944622';
        notice.hidden = false;
        clearTimeout(timer);
        timer = setTimeout(() => { notice.hidden = true; }, 2400);
      }, () => { location.href = a.href; });
    });
  });
})();
