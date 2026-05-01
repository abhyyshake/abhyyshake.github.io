document.addEventListener("DOMContentLoaded", () => {
  // Mark the current page in the navbar (works for GitHub Pages routes like "/" vs "/index.html").
  const normalizePath = (p) => {
    if (!p) return "/index.html";
    if (p.endsWith("/")) return `${p}index.html`;
    return p;
  };

  const currentPath = normalizePath(window.location.pathname);
  document.querySelectorAll("header.navbar nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#")) return;

    try {
      const targetPath = normalizePath(new URL(href, window.location.href).pathname);
      if (targetPath === currentPath) {
        a.classList.add("is-active");
        a.setAttribute("aria-current", "page");
      }
    } catch {
      // Ignore malformed hrefs.
    }
  });

  const rotImages = document.querySelectorAll('.rot-img');

  if (rotImages.length > 0) {
    let index = 0;
    setInterval(() => {
      rotImages[index].classList.remove('active');
      index = (index + 1) % rotImages.length;
      rotImages[index].classList.add('active');
    }, 4500); // Change image every 4.5 seconds
  }
});
