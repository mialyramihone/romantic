
  window.addEventListener('load', function() {
    // Animation de départ immédiate
    const loader = document.querySelector('.loader');
    
    // Disparaît après 3 secondes (ou quand tout est chargé)
    setTimeout(function() {
      document.body.classList.add('loaded');
      
      // Supprime après l'animation
      setTimeout(function() {
        if (loader) loader.remove();
      }, 800);
    }, 3000);
  });
  

document.addEventListener('DOMContentLoaded', function() {
    const heartsContainer = document.querySelector('.floating-hearts');
    const heartCount = 20; // Nombre de cœurs
    
    for (let i = 0; i < heartCount; i++) {
        createHeart(heartsContainer);
    }
    
    function createHeart(container) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '♡';
        
        // Position aléatoire
        const startPositionX = Math.random() * 100;
        const startPositionY = Math.random() * 100;
        
        // Taille aléatoire
        const size = 0.5 + Math.random() * 1.5;
        
        // Animation aléatoire
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 5;
        
        // Appliquer les styles
        heart.style.left = `${startPositionX}%`;
        heart.style.top = `${startPositionY}%`;
        heart.style.fontSize = `${size}em`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
        
        // Opacité aléatoire
        heart.style.opacity = 0.3 + Math.random() * 0.7;
        
        container.appendChild(heart);
    }
});

/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Tu es sur?",
    "Vraiment sur??",
   "Es-tu positif ?",
    "Babe s'il te plaît...",
    "Pensez-y !",
    "Si tu dis non, je serai vraiment triste...",
    "Je serai très triste...",
    "Je serai très très très triste...",
    "D'accord, je vais arrêter de demander...",
    "Je plaisante, dis oui s'il te plaît ! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}