/* ============================================
   LOVE JAR - APPLICATION LOGIC (UPDATED)
   Random reasons, hidden counter, multiple mood messages
   ============================================ */

class LoveJarApp {
    constructor() {
        this.reasons = window.appData.reasons || [];
        this.photos = window.appData.photos || [];
        this.moodBoosterMessages = window.appData.moodBoosterMessages || [];
        
        this.currentReasonText = null;
        this.currentPhotoUrl = null;
        this.isInMoodBoosterMode = false;
        
        this.initElements();
        this.initEventListeners();
        this.displayRandomReason();
        this.hideSwipeHintAfterDelay();
        
        // Analytics: Track app opens
        this.trackAppOpen();
    }

    initElements() {
        this.reasonCard = document.getElementById('reasonCard');
        this.reasonText = document.getElementById('reasonText');
        this.cardBackground = document.getElementById('cardBackground');
        this.swipeHint = document.getElementById('swipeHint');
        this.counterText = document.getElementById('counterText');
        
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.moodBtn = document.getElementById('moodBtn');
    }

    initEventListeners() {
        // Card tap/click
        this.reasonCard.addEventListener('click', () => this.nextReason());
        
        // Buttons
        this.nextBtn.addEventListener('click', () => this.nextReason());
        this.prevBtn.addEventListener('click', () => this.prevReason());
        this.moodBtn.addEventListener('click', () => this.triggerMoodBooster());
        
        // Keyboard support
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        
        // Touch swipe support
        let touchStartX = 0;
        this.reasonCard.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });
        this.reasonCard.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > 50) {
                // Swipe left = next, Swipe right = prev
                if (diff > 0) {
                    this.nextReason();
                } else {
                    this.prevReason();
                }
            }
        });
    }

    displayRandomReason() {
        // Get a completely random reason
        const reason = window.appData.getRandomReason();
        const photo = window.appData.getRandomPhoto();
        
        this.currentReasonText = reason;
        this.currentPhotoUrl = photo.url;
        
        // Animate text change
        this.reasonText.style.animation = 'none';
        setTimeout(() => {
            this.reasonText.textContent = reason;
            this.reasonText.style.animation = 'fadeIn 0.5s ease-in-out';
        }, 50);
        
        
       //just use default bg
        
        // Hide counter (she won't know how many there are)
        this.counterText.textContent = "";
    }

    nextReason() {
        if (this.isInMoodBoosterMode) return;
        
        this.displayRandomReason();
        this.hideSwipeHint();
    }

    prevReason() {
        if (this.isInMoodBoosterMode) return;
        
        this.displayRandomReason();
        this.hideSwipeHint();
    }

    triggerMoodBooster() {
        if (this.isInMoodBoosterMode) {
            this.exitMoodBooster();
            return;
        }

        this.isInMoodBoosterMode = true;
        this.hideSwipeHint();
        
        // Disable other controls
        this.nextBtn.disabled = true;
        this.prevBtn.disabled = true;
        
        // Update button state
        this.moodBtn.classList.add('active');
        
        // Get random message and random photo
        const message = window.appData.getRandomMoodBoosterMessage();
        const photo = window.appData.getRandomPhoto();
        
        // Display mood booster content
        this.reasonText.style.animation = 'none';
        setTimeout(() => {
            this.reasonText.textContent = message;
            this.reasonText.style.animation = 'fadeIn 0.5s ease-in-out';
        }, 50);
        
        if (photo && photo.url) {
            this.cardBackground.style.backgroundImage = `url('${photo.url}')`;
        }
        
        // Play subtle animation
        this.playMoodBoosterAnimation();
        
        // Hide counter
        this.counterText.textContent = "";
    }

    exitMoodBooster() {
        this.isInMoodBoosterMode = false;
        
        // Re-enable controls
        this.nextBtn.disabled = false;
        this.prevBtn.disabled = false;
        
        // Update button state
        this.moodBtn.classList.remove('active');
        
        // Return to normal display
        this.displayRandomReason();
    }

    playMoodBoosterAnimation() {
        // Subtle, calming animation
        this.reasonCard.style.animation = 'none';
        this.reasonCard.offsetHeight; // Trigger reflow
        this.reasonCard.style.animation = 'softGlow 1.5s ease-in-out infinite';
    }

    hideSwipeHint() {
        this.swipeHint.classList.add('hidden');
    }

    hideSwipeHintAfterDelay() {
        setTimeout(() => {
            this.hideSwipeHint();
        }, 5000); // Hide after 5 seconds
    }

    handleKeyPress(e) {
        if (this.isInMoodBoosterMode) {
            if (e.key === 'Escape') {
                this.exitMoodBooster();
            }
            return;
        }

        switch(e.key) {
            case 'ArrowRight':
            case ' ':
                this.nextReason();
                break;
            case 'ArrowLeft':
                this.prevReason();
                break;
            case 'Enter':
                this.triggerMoodBooster();
                break;
        }
    }

    trackAppOpen() {
        // Simple local storage tracking
        const today = new Date().toISOString().split('T')[0];
        const openedDays = JSON.parse(localStorage.getItem('loveJarOpenedDays') || '[]');
        
        if (!openedDays.includes(today)) {
            openedDays.push(today);
            localStorage.setItem('loveJarOpenedDays', JSON.stringify(openedDays));
        }
        
        // Track total opens
        const totalOpens = parseInt(localStorage.getItem('loveJarOpens') || '0');
        localStorage.setItem('loveJarOpens', String(totalOpens + 1));
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new LoveJarApp();
});

// Add soft glow animation for mood booster
const style = document.createElement('style');
style.textContent = `
    @keyframes softGlow {
        0%, 100% {
            box-shadow: 
                0 20px 60px rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.3),
                0 0 40px rgba(217, 116, 112, 0);
        }
        50% {
            box-shadow: 
                0 20px 60px rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.3),
                0 0 40px rgba(217, 116, 112, 0.4);
        }
    }

    .btn.active {
        animation: pulse 0.6s ease-out;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);
