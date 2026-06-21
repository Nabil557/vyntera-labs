// ═══════════════════════════════════════════════════════════
// NAVBAR UNDERLINE ANIMATION
// Menganimasi underline navbar yang smooth saat ganti page
// ═══════════════════════════════════════════════════════════

function setActiveNavLink() {
  const navLinks = document.querySelectorAll(".nav-links a");

  // Get current page filename more robustly
  let currentPage = window.location.pathname.split("/").pop();

  // If empty or root, it's index.html
  if (!currentPage || currentPage === "") {
    currentPage = "index.html";
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    // Remove active from all links first
    link.classList.remove("active");

    // Check if current page matches the link href
    if (href === currentPage) {
      link.classList.add("active");
    } else if (currentPage === "index.html" && href === "index.html") {
      link.classList.add("active");
    }
  });
}

// Set active link saat halaman load - run multiple times to ensure it works
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setActiveNavLink);
} else {
  setActiveNavLink();
}

window.addEventListener("load", setActiveNavLink);

// Also set active on page visibility change (for back button, etc)
document.addEventListener("visibilitychange", setActiveNavLink);

// Fallback: run after 100ms to ensure DOM is ready
setTimeout(setActiveNavLink, 100);
