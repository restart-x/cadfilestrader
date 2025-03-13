function viewPDF(pdfUrl) {
  window.open(pdfUrl, "_blank"); // Open link in new tab
}

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links li a");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("nav-active");
    });
  }

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // Active page underline logic
  navItems.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active-link");
    }
  });
});

function openWhatsApp(productName) {
  var phone = "919635639444"; // Tumhara WhatsApp number
  var message = "Hi, I'm interested in " + productName;
  var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

function openLightbox(imgSrc) {
  document.getElementById("lightbox-img").src = imgSrc;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Har product image pe click karne se wahi image zoom hogi
if (document.querySelectorAll(".product img")) {
  document.querySelectorAll(".product img").forEach(img => {
    img.addEventListener("click", function() {
      openLightbox(this.src);
    });
  });
}

// Lightbox ke bahar click karne se close ho jayega
document.getElementById("lightbox").addEventListener("click", function(event) {
  if (event.target === this) {
    closeLightbox();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-links li a");

  navItems.forEach(link => {
    if (link.pathname === window.location.pathname) {
      link.classList.add("active-link");
    }
  });
});
