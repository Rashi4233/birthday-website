document.addEventListener("DOMContentLoaded", () => {
    let currentSection = 0;
    const sections = document.querySelectorAll(".section");

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = i === index ? "block" : "none";
        });
    }

    // ✅ Start Button
    document.getElementById("start-btn").addEventListener("click", () => {
        currentSection = 1;
        showSection(currentSection);
    });

    // ✅ Next Button
    document.querySelectorAll(".next-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            if (currentSection < sections.length - 1) {
                currentSection++;
                showSection(currentSection);
            }
        });
    });

    // ✅ Memory Click to Show Text
    document.querySelectorAll(".memory").forEach(memory => {
        memory.addEventListener("click", () => {
            document.querySelectorAll('.memory').forEach(mem => mem.classList.remove('show-text'));
            memory.classList.add('show-text');
            if (!memory.querySelector('.memory-text')) {
                const text = document.createElement('div');
                text.className = 'memory-text';
                text.innerText = memory.querySelector('.memory-img').getAttribute('data-memory');
                memory.appendChild(text);
            }
        });
    });

    // ✅ Favorite Song
    const songSelect = document.getElementById('song-select');
    const audioPlayer = document.getElementById('audio-player');

    songSelect.addEventListener('change', () => {
        audioPlayer.src = songSelect.value;
        audioPlayer.play();
    });

    // ✅ Interactive Cake
    const cake = document.getElementById('cake');
    const wishText = document.getElementById('wish-text');

    cake.addEventListener('click', () => {
        wishText.style.display = 'block';
        cake.innerHTML = '🎉';
    });

    showSection(currentSection);
});
