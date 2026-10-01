function nextSection(sectionId) {
    const current = document.querySelector('.section.active');
    if (current) current.classList.remove('active');
    
    const next = document.getElementById(sectionId);
    if (next) next.classList.add('active');
}

// Generate floating elements
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('floating-elements');
    // Using emojis for bubbles, fish, lemons, cds, notes
    const elements = ['🫧', '🫧', '🐟', '🍋', '🍀', '🎵', '💿', '🫧', '🐠', '☁️', '🎶', '🫧'];
    const numberOfItems = 40;

    for (let i = 0; i < numberOfItems; i++) {
        const el = document.createElement('div');
        el.className = 'floating-item';
        el.textContent = elements[Math.floor(Math.random() * elements.length)];
        
        // Randomize horizontal position
        el.style.left = Math.random() * 100 + 'vw';
        
        // Random duration and delay
        const duration = Math.random() * 15 + 10; // 10s to 25s
        const delay = Math.random() * -30; // Start at different times
        el.style.animationDuration = duration + 's';
        el.style.animationDelay = delay + 's';
        
        // Random size
        const size = Math.random() * 2.5 + 1.5; // 1.5rem to 4rem
        el.style.fontSize = size + 'rem';
        
        // Random rotation speed if wanted (handled in CSS mostly, but we could add more inline styles)
        
        container.appendChild(el);
    }
});
