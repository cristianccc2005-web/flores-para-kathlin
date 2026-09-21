(() => {
  "use strict";
  const app = document.getElementById("app");
  const letter = document.getElementById("letter");
  const petals = document.querySelector(".petals");
  const open = document.getElementById("open");
  const bloom = document.getElementById("bloom");

  if (!app || !letter || !petals || !open || !bloom) return;

  open.addEventListener("click", () => {
    const visible = letter.classList.toggle("show");
    open.textContent = visible ? "💌 Cerrar mi carta" : "💌 Abrir mi carta";
    if (visible) letter.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  bloom.addEventListener("click", () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    for (let i = 0; i < 24; i++) {
      const p = document.createElement("span");
      p.className = "petal";
      p.textContent = i % 3 === 0 ? "🌻" : "🌼";
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${2.8 + Math.random() * 2.5}s`;
      p.style.animationDelay = `${Math.random() * 0.9}s`;
      petals.appendChild(p);
      window.setTimeout(() => p.remove(), 6500);
    }
  });
})();
