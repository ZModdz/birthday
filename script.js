function nextSection(sectionId) {
    // Hide current active section
    const current = document.querySelector('.section.active');
    if (current) {
        current.classList.remove('active');
        
        // Wait a tiny bit for fade out before showing next
        setTimeout(() => {
            const next = document.getElementById(sectionId);
            if (next) {
                next.classList.add('active');
            }
        }, 400); // Wait half of the CSS transition time
    }
}

function openLetter() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('open');
}

// Generate magical stars in the background
document.addEventListener("DOMContentLoaded", () => {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 60;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        
        // Randomize position
        star.style.position = 'absolute';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        
        // Randomize size
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        
        // Styling
        star.style.backgroundColor = '#faedcd';
        star.style.borderRadius = '50%';
        star.style.opacity = Math.random();
        
        // Randomize twinkle animation
        const animationDuration = Math.random() * 2 + 1;
        const animationDelay = Math.random() * 2;
        star.style.animation = `twinkle ${animationDuration}s ${animationDelay}s infinite alternate`;
        
        starsContainer.appendChild(star);
    }
});
