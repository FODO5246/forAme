// ===== PAGE NAVIGATION FUNCTIONS =====
function goToHome() {
    fadeOutPage(() => {
        window.location.href = 'index.html';
    });
}

function goToSurprise() {
    fadeOutPage(() => {
        window.location.href = 'surprise.html';
    });
}

function goToFlowers() {
    fadeOutPage(() => {
        window.location.href = 'flowers.html';
    });
}

function goToLetter() {
    fadeOutPage(() => {
        window.location.href = 'letter.html';
    });
}

function goToMemories() {
    fadeOutPage(() => {
        window.location.href = 'memories.html';
    });
}

function goToNoPage() {
    fadeOutPage(() => {
        window.location.href = 'no-page.html';
    });
}

function fadeOutPage(callback) {
    document.body.style.opacity = '0.7';
    document.body.style.transition = 'opacity 0.3s';
    setTimeout(callback, 300);
}

// ===== MODAL FUNCTIONS =====
function showGiftModal() {
    const modal = document.getElementById('giftModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        createHeartsBurst();
    }
}

function closeGiftModal() {
    const modal = document.getElementById('giftModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ===== HOME PAGE "ANOTHER CHANCE" FUNCTION =====
function showAnotherChance() {
    const content = document.querySelector('.content');
    if (!content) return;
    
    const originalContent = content.innerHTML;
    
    content.innerHTML = `
        <div class="another-chance-popup">
            <div class="popup-header">
                <h2><i class="fas fa-heart"></i> Another Chance</h2>
                <button class="close-popup" onclick="closeAnotherChance()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="popup-body">
                <div class="popup-message">
                    <p class="popup-text">I promise you'll like it</p>
                    <p class="popup-text">I made it only for you</p>
                </div>
                
                <div class="popup-buttons">
                    <button class="popup-button yes-popup" onclick="goToSurprise()">
                        <i class="fas fa-check"></i> Yes
                    </button>
                    <button class="popup-button no-popup" onclick="closeAnotherChance()">
                        <i class="fas fa-times"></i> No
                    </button>
                </div>
            </div>
        </div>
    `;
    
    if (!document.querySelector('#popup-styles')) {
        const style = document.createElement('style');
        style.id = 'popup-styles';
        style.textContent = `
            .another-chance-popup {
                background-color: rgba(255, 255, 255, 0.98);
                border-radius: var(--radius);
                padding: 30px 20px;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
                border: 2px solid var(--primary);
                width: 100%;
                margin: 0 auto;
                position: relative;
                animation: popupAppear 0.5s ease-out;
            }
            
            @keyframes popupAppear {
                0% {
                    transform: scale(0.9) translateY(30px);
                    opacity: 0;
                }
                100% {
                    transform: scale(1) translateY(0);
                    opacity: 1;
                }
            }
            
            .popup-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 25px;
                padding-bottom: 15px;
                border-bottom: 2px solid var(--primary-light);
            }
            
            .popup-header h2 {
                font-family: 'Dancing Script', cursive;
                font-size: 32px;
                color: var(--primary);
                margin: 0;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .close-popup {
                background: var(--primary-light);
                color: white;
                border: none;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                font-size: 18px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: var(--transition);
                flex-shrink: 0;
            }
            
            .popup-message {
                text-align: center;
                margin-bottom: 30px;
            }
            
            .popup-text {
                font-size: 20px;
                color: var(--text-light);
                margin-bottom: 8px;
                line-height: 1.6;
            }
            
            .popup-buttons {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            
            @media (min-width: 768px) {
                .popup-buttons {
                    flex-direction: row;
                    justify-content: center;
                }
            }
            
            .popup-button {
                padding: 14px 30px;
                font-size: 17px;
                border: none;
                border-radius: 50px;
                cursor: pointer;
                transition: var(--transition);
                font-family: 'Montserrat', sans-serif;
                font-weight: 500;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                width: 100%;
                min-height: 50px;
            }
            
            @media (min-width: 768px) {
                .popup-button {
                    width: auto;
                    min-width: 160px;
                }
            }
            
            .yes-popup {
                background: linear-gradient(135deg, var(--primary), var(--primary-dark));
                color: var(--white);
                box-shadow: 0 6px 20px rgba(255, 107, 139, 0.3);
            }
            
            .no-popup {
                background: transparent;
                color: var(--text-light);
                border: 2px solid #ddd;
            }
        `;
        document.head.appendChild(style);
    }
    
    content.dataset.original = originalContent;
}

function closeAnotherChance() {
    const content = document.querySelector('.content');
    if (!content || !content.dataset.original) return;
    
    content.innerHTML = content.dataset.original;
    delete content.dataset.original;
    reinitializeHomeButtons();
}

function reinitializeHomeButtons() {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    
    if (yesButton) {
        yesButton.onclick = () => goToSurprise();
    }
    
    if (noButton) {
        noButton.onclick = showAnotherChance;
    }
}

// ===== ANIMATION FUNCTIONS =====
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;
    
    const isSlow = container.classList.contains('slow-hearts');
    const isExtra = container.classList.contains('extra-hearts');
    
    for (let i = 0; i < (isExtra ? 15 : 10); i++) {
        setTimeout(() => {
            createHeart(container, isSlow, isExtra);
        }, i * (isSlow ? 400 : 200));
    }
    
    setInterval(() => {
        if (document.hasFocus()) {
            createHeart(container, isSlow, isExtra);
        }
    }, isSlow ? 2500 : 1500);
}

function createHeart(container, isSlow = false, isExtra = false) {
    const heart = document.createElement('div');
    heart.innerHTML = isSlow ? '💔' : '❤️';
    heart.classList.add('heart');
    
    const size = isExtra ? 20 : (isSlow ? 18 : 16);
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`;
    
    const duration = isSlow ? 6 : (isExtra ? 4 : 3);
    heart.style.animation = `floatUp ${duration}s linear forwards`;
    heart.style.opacity = isSlow ? '0.4' : (isExtra ? '0.7' : '0.6');
    
    container.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
        }
    }, duration * 1000);
}

function createHeartsBurst() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createHeart(container);
        }, i * 50);
    }
}

function createFlowerPetals() {
    const container = document.querySelector('.flower-petals');
    if (!container) return;
    
    const petals = ['🌸', '🌺', '🌼', '🌷', '🌹'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createPetal(container, petals);
        }, i * 400);
    }
    
    setInterval(() => {
        if (document.hasFocus() && Math.random() > 0.5) {
            createPetal(container, petals);
        }
    }, 1200);
}

function createPetal(container, petals) {
    const petal = document.createElement('div');
    petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
    petal.classList.add('petal');
    
    const size = Math.random() * 20 + 15;
    petal.style.fontSize = `${size}px`;
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.top = '-50px';
    
    const duration = Math.random() * 6 + 4;
    petal.style.animation = `floatDown ${duration}s linear forwards`;
    
    container.appendChild(petal);
    
    setTimeout(() => {
        if (petal.parentNode) {
            petal.remove();
        }
    }, duration * 1000);
}

// ===== MOBILE OPTIMIZATION FUNCTIONS =====
function checkMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function adjustForMobile() {
    if (checkMobile()) {
        document.body.classList.add('mobile-device');
        
        // Increase tap targets
        const buttons = document.querySelectorAll('button, .choice-button, .nav-button');
        buttons.forEach(btn => {
            if (!btn.classList.contains('modal-header-button')) {
                btn.style.minHeight = '44px';
            }
        });
        
        // Prevent zoom on inputs
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.style.fontSize = '16px';
        });
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Mobile adjustments
    adjustForMobile();
    
    // Initialize animations
    const heartsContainer = document.querySelector('.floating-hearts');
    if (heartsContainer) {
        createFloatingHearts();
    }
    
    if (document.body.classList.contains('flowers-page')) {
        createFlowerPetals();
    }
    
    // Fade in page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Modal handlers
    const giftModal = document.getElementById('giftModal');
    if (giftModal) {
        giftModal.addEventListener('click', function(e) {
            if (e.target === giftModal) {
                closeGiftModal();
            }
        });
    }
    
    // Escape key handlers
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeGiftModal();
        }
    });
    
    // Prevent context menu on interactive elements
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'BUTTON' || e.target.closest('.gift-option')) {
            e.preventDefault();
        }
    });
    
    // Set up the "No" button on home page
    if (document.body.classList.contains('homepage')) {
        const noButton = document.querySelector('.no-button');
        if (noButton) {
            noButton.onclick = showAnotherChance;
        }
    }
    
    // Touch optimization
    if ('ontouchstart' in window) {
        document.documentElement.classList.add('touch-device');
        
        // Add touch feedback
        document.querySelectorAll('button, .choice-button, .nav-button, .gift-option').forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
    }
});
