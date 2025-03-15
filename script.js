document.addEventListener("DOMContentLoaded", function () {
    let currentSection = 0;
    const sections = document.querySelectorAll(".section");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");
    
    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = i === index ? "block" : "none";
        });
    }

    // ✅ Start button to go to next section
    document.getElementById("start-btn").addEventListener("click", function () {
        currentSection = 1; // Go to Memory Lane section
        showSection(currentSection);
    });

    nextBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            if (currentSection < sections.length - 1) {
                currentSection++;
                showSection(currentSection);
            }
        });
    });

    prevBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            if (currentSection > 0) {
                currentSection--;
                showSection(currentSection);
            }
        });
    });

    showSection(currentSection);
});
