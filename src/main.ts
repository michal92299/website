import './style.css';

document.querySelector<HTMLSpanElement>('#year')!.textContent = String(new Date().getFullYear());

// A subtle entrance effect, disabled for people who prefer reduced motion.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll<HTMLElement>('.card').forEach((card, index) => {
    card.style.setProperty('--delay', `${index * 90}ms`);
    card.classList.add('card-ready');
  });
}
