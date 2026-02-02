// PROGRESS BAR ANIMATION
window.addEventListener("load", () => {
    document.querySelectorAll(".bar-fill").forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
    });
});

// SOCIAL TEAM ANIMATION
window.addEventListener("load", () => {
  // Animate team cards
  document.querySelectorAll(".team-box").forEach((card, i) => {
    setTimeout(() => card.classList.add("show"), i * 300);
  });
  
  // Animate the right section
  setTimeout(() => {
    const teamRight = document.querySelector(".team-right");
    if (teamRight) teamRight.classList.add("show");
  }, 900);
});

// TELE CALLER CARD INTERACTION
const cards = document.querySelectorAll(".team-card");
cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
    });
});

// VIDEO CARDS DESKTOP TILT
document.querySelectorAll('.cards').forEach(card => {
    if (window.innerWidth > 1024) {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * 10;
            const rotateY = ((x / rect.width) - 0.5) * -10;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            const cards = document.querySelectorAll('.cards');
            const index = Array.from(cards).indexOf(card);
            let transform = '';
            
            if (index === 0) transform = 'rotate(-10deg) translateY(40px)';
            else if (index === 1) transform = 'rotate(-4deg)';
            else if (index === 2) transform = 'rotate(6deg)';
            else if (index === 3) transform = 'rotate(12deg) translateY(40px)';
            
            card.style.transform = transform;
        });
    }
});

// GRAPHIC CARDS ANIMATION
const graphicCards = document.querySelectorAll(".graphic-card");
graphicCards.forEach((card, index) => {
  setTimeout(() => {
    card.classList.add("show");
  }, index * 150);
});

// WEBSITE TEAM CODE RAIN (Desktop only)
function createCodeRain() {
    if (window.innerWidth < 1024) return;
    
    const codeRain = document.getElementById('codeRain');
    const chars = '01{}[]();.<>/?+=*-_';
    
    // Clear existing lines
    codeRain.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
        const codeLine = document.createElement('div');
        codeLine.className = 'code-line';
        
        // Generate random code
        let code = '';
        const codeLength = 15;
        for (let j = 0; j < codeLength; j++) {
            code += chars[Math.floor(Math.random() * chars.length)];
        }
        
        codeLine.textContent = code;
        codeLine.style.left = Math.random() * 100 + '%';
        
        const animationDuration = (Math.random() * 8 + 8) + 's';
        codeLine.style.animationDuration = animationDuration;
        codeLine.style.animationDelay = Math.random() * 3 + 's';
        
        const fontSize = (Math.random() * 4 + 9) + 'px';
        codeLine.style.fontSize = fontSize;
        
        codeRain.appendChild(codeLine);
    }
}

// Initialize code rain on desktop
if (window.innerWidth >= 1024) {
    createCodeRain();
}

// Handle resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 1024) {
            createCodeRain();
        }
    }, 250);
});