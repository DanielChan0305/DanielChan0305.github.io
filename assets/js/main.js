document.addEventListener("DOMContentLoaded", function () {
  function smoothScrollTo(targetY, duration) {
    const startY = window.scrollY || window.pageYOffset;
    const distance = targetY - startY;
    const startTime = performance.now();

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  function scrollToElement(el) {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const targetY = rect.top + window.scrollY - 16; // small offset from top
    smoothScrollTo(targetY, 800); // slower scroll (800ms)
  }

  // Smooth scrolling for in-page anchors
  document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      let targetId = null;

      if (href.startsWith("/#")) {
        targetId = href.slice(2);
      } else if (href.startsWith("#")) {
        targetId = href.slice(1);
      }

      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      scrollToElement(target);
    });
  });

  // Back-to-top button
  const backToTop = document.createElement("button");
  backToTop.className = "back-to-top";
  backToTop.type = "button";
  backToTop.textContent = "↑ Top";
  document.body.appendChild(backToTop);

  const toggleBackToTop = function () {
    if (window.scrollY > 200) {
      backToTop.classList.add("back-to-top--visible");
    } else {
      backToTop.classList.remove("back-to-top--visible");
    }
  };

  backToTop.addEventListener("click", function () {
    smoothScrollTo(0, 800);
  });

  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop();

  // Floating outline for current page headings
  const outline = document.createElement("nav");
  outline.className = "page-outline";

  const outlineTitle = document.createElement("div");
  outlineTitle.className = "page-outline__title";
  outlineTitle.textContent = "On this page";
  outline.appendChild(outlineTitle);

  const outlineList = document.createElement("ul");
  outlineList.className = "page-outline__list";

  const headings = document.querySelectorAll("h2[id]");
  headings.forEach(function (h) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + h.id;
    a.textContent = h.textContent.replace(/\s*\{#.*$/, "");
    a.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToElement(h);
    });
    li.appendChild(a);
    outlineList.appendChild(li);
  });

  if (outlineList.children.length > 0) {
    outline.appendChild(outlineList);
    document.body.appendChild(outline);
  }
});

