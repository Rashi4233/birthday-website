document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("welcome").style.display = "block";
});

function nextSection(sectionId) {
    let sections = document.querySelectorAll(".section");
    
    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}
