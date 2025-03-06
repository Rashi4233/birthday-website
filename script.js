document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll(".section");
    let currentSection = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.classList.toggle("active", i === index);
        });
    }

    document.getElementById("nextButton").addEventListener("click", function() {
        if (currentSection < sections.length - 1) {
            currentSection++;
            showSection(currentSection);
        }
    });

    document.getElementById("prevButton").addEventListener("click", function() {
        if (currentSection > 0) {
            currentSection--;
            showSection(currentSection);
        }
    });

    showSection(currentSection);

    // Memory Lane - Show text on click
    document.querySelectorAll(".memory-card").forEach(card => {
        card.addEventListener("click", function() {
            let memoryText = this.querySelector(".memory-text");
            if (memoryText.style.display === "block") {
                memoryText.style.display = "none";
            } else {
                document.querySelectorAll(".memory-text").forEach(text => text.style.display = "none");
                memoryText.style.display = "block";
            }
        });
    });

    // Slideshow Functionality
    let slideIndex = 0;
    let slides = document.querySelectorAll(".slideshow img");

    function showSlides() {
        slides.forEach((slide, i) => {
            slide.style.display = i === slideIndex ? "block" : "none";
        });
        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 3000);
    }

    if (slides.length > 0) {
        showSlides();
    }
});
