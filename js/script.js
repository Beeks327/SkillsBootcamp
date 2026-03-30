// Dark / Light mode toggle
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll(".fade-in");

function fadeInOnScroll() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll(); // run on load
