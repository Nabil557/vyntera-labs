// ═══════════════════════════════════════════════════════════
// NAVBAR UNDERLINE ANIMATION
// Menganimasi underline navbar yang smooth saat ganti page
// ═══════════════════════════════════════════════════════════

function setActiveNavLink() {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    // Check if current page matches the link href
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Set active link saat halaman load
document.addEventListener("DOMContentLoaded", setActiveNavLink);
window.addEventListener("load", setActiveNavLink);
