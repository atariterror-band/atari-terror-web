(() => {
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll(".carousel-slide")];
  const dots = [...carousel.querySelectorAll("[data-slide-to]")];
  const track = carousel.querySelector(".carousel-track");
  const toggle = carousel.querySelector("[data-toggle]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const firstSlideClone = slides[0].cloneNode(true);
  firstSlideClone.setAttribute("aria-hidden", "true");
  firstSlideClone.inert = true;
  firstSlideClone.setAttribute("aria-label", "Opakování první položky carouselu");
  track.append(firstSlideClone);

  let activeIndex = 0;
  let moving = false;
  let timer = null;
  let hovered = false;
  let focused = false;
  let manuallyPaused = false;

  function render() {
    track.style.transform = `translateX(-${activeIndex * 100}%)`;
    slides.forEach((slide, index) => {
      const active = index === activeIndex;
      slide.setAttribute("aria-hidden", String(!active));
      slide.inert = !active;
    });
    dots.forEach((dot, index) => {
      const active = index === activeIndex;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", String(active));
    });
  }

  function stopTimer() {
    window.clearInterval(timer);
    timer = null;
  }

  function syncTimer() {
    stopTimer();
    if (manuallyPaused || hovered || focused || document.hidden || reducedMotion.matches) return;
    timer = window.setInterval(() => {
      activeIndex = (activeIndex + 1) % slides.length;
      render();
    }, 3000);
  }

  function show(index) {
    const destination = (index + slides.length) % slides.length;
    if (destination === activeIndex || moving) return;
    activeIndex = destination;
    moving = true;
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === activeIndex;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", String(active));
    });
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === activeIndex;
      slide.setAttribute("aria-hidden", String(!active));
      slide.inert = !active;
    });
    track.style.transform = `translateX(-${(activeIndex === 0 ? slides.length : activeIndex) * 100}%)`;
    syncTimer();
  }

  track.addEventListener("transitionend", (event) => {
    if (event.target !== track || event.propertyName !== "transform") return;
    if (activeIndex === 0) {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      track.getBoundingClientRect();
      track.style.transition = "";
    }
    moving = false;
  });

  carousel.querySelector("[data-next]").addEventListener("click", () => show(activeIndex + 1));
  dots.forEach((dot) => dot.addEventListener("click", () => {
    const targetIndex = Number(dot.dataset.slideTo);
    if (targetIndex !== activeIndex) show(activeIndex + 1);
  }));

  toggle.addEventListener("click", () => {
    manuallyPaused = !manuallyPaused;
    toggle.textContent = manuallyPaused ? "▶" : "Ⅱ";
    toggle.setAttribute("aria-label", manuallyPaused ? "Spustit automatický posun" : "Pozastavit automatický posun");
    syncTimer();
  });

  carousel.addEventListener("mouseenter", () => { hovered = true; syncTimer(); });
  carousel.addEventListener("mouseleave", () => { hovered = false; syncTimer(); });
  carousel.addEventListener("focusin", () => { focused = true; syncTimer(); });
  carousel.addEventListener("focusout", (event) => {
    if (!carousel.contains(event.relatedTarget)) {
      focused = false;
      syncTimer();
    }
  });
  document.addEventListener("visibilitychange", syncTimer);
  reducedMotion.addEventListener?.("change", syncTimer);

  render();
  syncTimer();
})();
