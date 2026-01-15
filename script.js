const themeBtn = document.getElementById("themeBtn");
const sections = document.querySelectorAll(".fade-in");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
            section.classList.add("show");
        }
    });
});
