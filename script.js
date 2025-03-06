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

    // Memory Lane Functionality
    const memoryImages = document.querySelectorAll(".memory-img");
    const memoryTextContainer = document.querySelector("#memory-text");
    
    memoryImages.forEach((img) => {
        img.addEventListener("click", function () {
            const memoryText = this.getAttribute("data-memory");
            memoryTextContainer.textContent = memoryText;
        });
    });

    // Slideshow Functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        slides.forEach((slide) => (slide.style.display = "none"));
        slides[slideIndex].style.display = "block";
        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    if (slides.length > 0) {
        showSlides();
    }
});
