
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
    // Hide the current content
    const content = document.querySelector('.content');
    if (!content) return;
    
    // Save the original content
    const originalContent = content.innerHTML;
    
    // Create the "Another Chance" popup
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
    
    // Add styles for the popup if not already added
    if (!document.querySelector('#popup-styles')) {
        const style = document.createElement('style');
        style.id = 'popup-styles';
        style.textContent = `
            .another-chance-popup {
                background-color: rgba(255, 255, 255, 0.98);
                border-radius: var(--radius);
                padding: 40px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
                border: 2px solid var(--primary);
                max-width: 500px;
                margin: 0 auto;
                position: relative;
                animation: popupAppear 0.5s ease-out;
            }
            
            @keyframes popupAppear {
                0% {
                    transform: scale(0.8) translateY(50px);
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
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 2px solid var(--primary-light);
            }
            
            .popup-header h2 {
                font-family: 'Dancing Script', cursive;
                font-size: 42px;
                color: var(--primary);
                margin: 0;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .close-popup {
                background: var(--primary-light);
                color: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: var(--transition);
            }
            
            .close-popup:hover {
                background: var(--primary);
                transform: rotate(90deg);
            }
            
            .popup-message {
                text-align: center;
                margin-bottom: 40px;
            }
            
            .popup-text {
                font-size: 22px;
                color: var(--text-light);
                margin-bottom: 10px;
                line-height: 1.6;
            }
            
            .popup-buttons {
                display: flex;
                justify-content: center;
                gap: 30px;
                flex-wrap: wrap;
            }
            
            .popup-button {
                padding: 16px 45px;
                font-size: 18px;
                border: none;
                border-radius: 50px;
                cursor: pointer;
                transition: var(--transition);
                font-family: 'Montserrat', sans-serif;
                font-weight: 500;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                min-width: 160px;
                position: relative;
                overflow: hidden;
            }
            
            .popup-button::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                transition: 0.5s;
            }
            
            .popup-button:hover::before {
                left: 100%;
            }
            
            .yes-popup {
                background: linear-gradient(135deg, var(--primary), var(--primary-dark));
                color: var(--white);
                box-shadow: 0 8px 25px rgba(255, 107, 139, 0.3);
            }
            
            .yes-popup:hover {
                transform: translateY(-5px);
                box-shadow: 0 12px 30px rgba(255, 107, 139, 0.4);
            }
            
            .no-popup {
                background: transparent;
                color: var(--text-light);
                border: 2px solid #ddd;
            }
            
            .no-popup:hover {
                background-color: #f8f8f8;
                transform: translateY(-5px);
                border-color: var(--primary-light);
                color: var(--primary);
            }
        `;
        document.head.appendChild(style);
    }
    
    // Store original content for restoration
    content.dataset.original = originalContent;
}

function closeAnotherChance() {
    const content = document.querySelector('.content');
    if (!content || !content.dataset.original) return;
    
    // Restore original content
    content.innerHTML = content.dataset.original;
    delete content.dataset.original;
    
    // Reinitialize event listeners for the restored buttons
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

// ===== FLOWERS PAGE FUNCTIONS =====
function bloomFlower(flowerElement) {
    // Animate the flower
    flowerElement.style.transform = 'scale(1.5) rotate(15deg)';
    flowerElement.style.transition = 'transform 0.3s';
    
    // Create flower particles
    createFlowerParticles(flowerElement);
    
    // Reset after animation
    setTimeout(() => {
        flowerElement.style.transform = '';
    }, 300);
}

function createFlowerParticles(sourceElement) {
    const rect = sourceElement.getBoundingClientRect();
    const particlesContainer = document.querySelector('.flower-petals') || document.body;
    
    const particles = ['🌸', '🌺', '🌼', '🌷', '🌹', '💮', '🏵️'];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
            particle.style.position = 'fixed';
            particle.style.fontSize = `${Math.random() * 20 + 15}px`;
            particle.style.left = `${rect.left + rect.width / 2}px`;
            particle.style.top = `${rect.top + rect.height / 2}px`;
            particle.style.zIndex = '9999';
            particle.style.pointerEvents = 'none';
            particle.style.opacity = '0.8';
            
            // Random animation
            const angle = Math.random() * Math.PI * 2;
            const distance = 80 + Math.random() * 80;
            const duration = 1 + Math.random() * 2;
            
            particle.style.transition = `all ${duration}s ease-out`;
            
            particlesContainer.appendChild(particle);
            
            // Trigger animation
            setTimeout(() => {
                particle.style.left = `${rect.left + rect.width / 2 + Math.cos(angle) * distance}px`;
                particle.style.top = `${rect.top + rect.height / 2 + Math.sin(angle) * distance}px`;
                particle.style.opacity = '0';
                particle.style.transform = `rotate(${Math.random() * 360}deg)`;
            }, 10);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
            }, duration * 1000);
        }, i * 100);
    }
}

// ===== MEMORIES PAGE FUNCTIONS =====
function openMemory(memoryId) {
    const modal = document.getElementById('memoryModal');
    const title = document.getElementById('memoryTitle');
    const content = document.getElementById('memoryContent');
    
    if (!modal || !title || !content) return;
    
    const memories = {
        1: {
            title: "First Look",
            content: `
                <div style="text-align: center;">
                    <div style="font-size: 60px; color: #ff6b8b; margin-bottom: 20px;">💖</div>
                    <h3 style="color: #ff6b8b; margin-bottom: 15px;">The First Time I Saw You</h3>
                    <p style="line-height: 1.8; margin-bottom: 20px;">
                        I remember it like it was yesterday. Your smile lit up the entire room, 
                        and in that moment, I knew something special was beginning.
                    </p>
                </div>
            `
        },
        2: {
            title: "Special Moment",
            content: `
                <div style="text-align: center;">
                    <div style="font-size: 60px; color: #ff6b8b; margin-bottom: 20px;">✨</div>
                    <h3 style="color: #ff6b8b; margin-bottom: 15px;">Unforgettable Moments</h3>
                    <p style="line-height: 1.8; margin-bottom: 20px;">
                        Every moment with you feels like a precious gift. Whether we're laughing, 
                        talking, or just being together, these are the memories I treasure most.
                    </p>
                </div>
            `
        },
        3: {
            title: "Joyful Times",
            content: `
                <div style="text-align: center;">
                    <div style="font-size: 60px; color: #ff6b8b; margin-bottom: 20px;">😊</div>
                    <h3 style="color: #ff6b8b; margin-bottom: 15px;">Laughter and Joy</h3>
                    <p style="line-height: 1.8; margin-bottom: 20px;">
                        Your laugh is my favorite sound in the world. It's contagious and beautiful, 
                        and it makes every day brighter.
                    </p>
                </div>
            `
        },
        4: {
            title: "Bright Days",
            content: `
                <div style="text-align: center;">
                    <div style="font-size: 60px; color: #ff6b8b; margin-bottom: 20px;">☀️</div>
                    <h3 style="color: #ff6b8b; margin-bottom: 15px;">You Are My Sunshine</h3>
                    <p style="line-height: 1.8; margin-bottom: 20px;">
                        No matter how cloudy the day, you always bring sunshine into my life. 
                        Your presence makes everything better.
                    </p>
                </div>
            `
        }
    };
    
    const memory = memories[memoryId] || memories[1];
    
    title.textContent = memory.title;
    content.innerHTML = memory.content;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    createMemorySparkles();
}

function closeMemoryModal() {
    const modal = document.getElementById('memoryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function createMemorySparkles() {
    const container = document.querySelector('.memory-sparkles');
    if (!container) return;
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.classList.add('sparkle');
            sparkle.style.fontSize = `${Math.random() * 20 + 15}px`;
            sparkle.style.left = `${Math.random() * 100}vw`;
            sparkle.style.top = '100vh';
            
            const duration = Math.random() * 4 + 2;
            sparkle.style.animation = `sparkleFloat ${duration}s linear forwards`;
            
            container.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.remove();
                }
            }, duration * 1000);
        }, i * 150);
    }
}

// ===== ANIMATION FUNCTIONS =====
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;
    
    // Check if it's the slow hearts version (for no-page)
    const isSlow = container.classList.contains('slow-hearts');
    const isExtra = container.classList.contains('extra-hearts');
    
    // Initial hearts
    for (let i = 0; i < (isExtra ? 20 : 15); i++) {
        setTimeout(() => {
            createHeart(container, isSlow, isExtra);
        }, i * (isSlow ? 500 : 300));
    }
    
    // Continuous hearts
    setInterval(() => {
        if (document.hasFocus()) {
            createHeart(container, isSlow, isExtra);
        }
    }, isSlow ? 3000 : 2000);
}

function createHeart(container, isSlow = false, isExtra = false) {
    const heart = document.createElement('div');
    heart.innerHTML = isSlow ? '💔' : '❤️';
    heart.classList.add('heart');
    
    const size = isExtra ? (Math.random() * 25 + 20) : (Math.random() * 20 + 15);
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`;
    
    const duration = isSlow ? (Math.random() * 8 + 6) : (isExtra ? 4 : (Math.random() * 6 + 4));
    heart.style.animation = `floatUp ${duration}s linear forwards`;
    heart.style.opacity = isSlow ? '0.4' : (isExtra ? '0.8' : '0.7');
    
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
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createHeart(container);
        }, i * 50);
    }
}

function createFlowerPetals() {
    const container = document.querySelector('.flower-petals');
    if (!container) return;
    
    const petals = ['🌸', '🌺', '🌼', '🌷', '🌹', '💮', '🏵️'];
    
    // Initial petals
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createPetal(container, petals);
        }, i * 500);
    }
    
    // Continuous petals
    setInterval(() => {
        if (document.hasFocus() && Math.random() > 0.5) {
            createPetal(container, petals);
        }
    }, 1500);
}

function createPetal(container, petals) {
    const petal = document.createElement('div');
    petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
    petal.classList.add('petal');
    
    const size = Math.random() * 25 + 20;
    petal.style.fontSize = `${size}px`;
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.top = '-50px';
    
    const duration = Math.random() * 8 + 6;
    petal.style.animation = `floatDown ${duration}s linear forwards`;
    
    container.appendChild(petal);
    
    setTimeout(() => {
        if (petal.parentNode) {
            petal.remove();
        }
    }, duration * 1000);
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize floating hearts based on page type
    const heartsContainer = document.querySelector('.floating-hearts');
    if (heartsContainer) {
        createFloatingHearts();
    }
    
    // Initialize flower petals on flowers page
    if (document.body.classList.contains('flowers-page')) {
        createFlowerPetals();
        
        // Make flowers interactive
        const flowers = document.querySelectorAll('.flower');
        flowers.forEach(flower => {
            flower.addEventListener('click', function() {
                bloomFlower(this);
            });
        });
    }
    
    // Extra hearts for memories page
    if (document.body.classList.contains('memories-page')) {
        // Already handled by createFloatingHearts with extra-hearts class
    }
    
    // Fade in page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Modal close handlers
    const modal = document.getElementById('giftModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeGiftModal();
            }
        });
    }
    
    const memoryModal = document.getElementById('memoryModal');
    if (memoryModal) {
        memoryModal.addEventListener('click', function(e) {
            if (e.target === memoryModal) {
                closeMemoryModal();
            }
        });
    }
    
    // Escape key handlers
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeGiftModal();
            closeMemoryModal();
        }
    });
    
    // Prevent context menu on interactive elements
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'BUTTON' || 
            e.target.closest('.memory-card') || 
            e.target.closest('.gift-option') ||
            e.target.classList.contains('flower')) {
            e.preventDefault();
        }
    });
    
    // Set up the "No" button on home page to show "Another Chance" popup
    if (document.body.classList.contains('homepage')) {
        const noButton = document.querySelector('.no-button');
        if (noButton) {
            noButton.onclick = showAnotherChance;
        }
    }
});
