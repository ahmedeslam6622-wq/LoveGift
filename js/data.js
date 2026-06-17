/* ============================================
   LOVE JAR - REASONS DATABASE
   100+ heartfelt, unique reasons why Ahmed loves his mom
   ============================================ */

const REASONS = [
    "Because you always smile when you see me.",
    "Because your hugs make everything better.",
    "Because you cook with love in every meal.",
    "Because you listen when I need to talk.",
    "Because you never gave up on me.",
    "Because you taught me to be kind.",
    "Because you work hard for our family.",
    "Because you care about everyone around you.",
    "Because your laugh is my favorite sound.",
    "Because you stay calm when things are difficult.",
    "Because you believe in my dreams.",
    "Because you taught me to be honest.",
    "Because you sacrifice so much for us.",
    "Because you are the strongest person I know.",
    "Because you make our house feel like home.",
    "Because you always have time for me.",
    "Because you taught me right from wrong.",
    "Because you never complain about your hard work.",
    "Because your love is unconditional.",
    "Because you protect me without saying it.",
    "Because you remember everything I tell you.",
    "Because you celebrate my small wins.",
    "Because you comfort me when I am sad.",
    "Because you show me what real strength is.",
    "Because you taught me to respect others.",
    "Because you are patient with me always.",
    "Because you make life better just by being here.",
    "Because you never make me feel bad for mistakes.",
    "Because your tea tastes like love.",
    "Because you are my best example.",
    "Because you taught me the value of family.",
    "Because you smile even on your hard days.",
    "Because you are proud of me.",
    "Because you give without expecting anything back.",
    "Because you are beautiful inside and out.",
    "Because you taught me to never give up.",
    "Because you understand me without words.",
    "Because you are always there when I need you.",
    "Because you make me feel safe.",
    "Because you taught me to love myself.",
    "Because your voice calms me down.",
    "Because you are my hero.",
    "Because you taught me what love really means.",
    "Because you are kind to everyone.",
    "Because you make the best memories with me.",
    "Because you never stop believing in me.",
    "Because you are the person I want to be like.",
    "Because you taught me forgiveness.",
    "Because you always put family first.",
    "Because I see myself in you.",
    "Because you took things from yourself just to give it to me.",
    "Because you are always defending me.",
    "Because you love me more than youself.",
    "Because you love me more than anyone else in the world.",
    "Because you want me to be the best person in the world.",
    "Because you do whatever I want",
    "Because you always believe in me."
];

// === SAMPLE PHOTOS ===
// Replace these with your actual photo URLs
// Format: Use high-quality vertical images (1080x1440px minimum)
const PHOTOS = [
    // Photo 1 - Recent warm memory
    {
        id: 1,
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1080 1440'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F4A998;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23E8D5E8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1080' height='1440' fill='url(%23g1)'/%3E%3Ctext x='50%25' y='50%25' font-size='64' font-family='serif' text-anchor='middle' dominant-baseline='middle' fill='rgba(255,255,255,0.8)'%3EAdd your photo here%3C/text%3E%3C/svg%3E",
        label: "A warm moment together",
    },
    // Photo 2 - Another favorite
    {
        id: 2,
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1080 1440'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E8D9C8;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23D4AF8A;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1080' height='1440' fill='url(%23g2)'/%3E%3Ctext x='50%25' y='50%25' font-size='64' font-family='serif' text-anchor='middle' dominant-baseline='middle' fill='rgba(255,255,255,0.8)'%3EAdd your photo here%3C/text%3E%3C/svg%3E",
        label: "Laughing together",
    },
    // Photo 3
    {
        id: 3,
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1080 1440'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F0D5D5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23E8D5E8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1080' height='1440' fill='url(%23g3)'/%3E%3Ctext x='50%25' y='50%25' font-size='64' font-family='serif' text-anchor='middle' dominant-baseline='middle' fill='rgba(255,255,255,0.8)'%3EAdd your photo here%3C/text%3E%3C/svg%3E",
        label: "A quiet moment",
    },
];

// === SPECIAL MOOD BOOSTER MESSAGE ===
const MOOD_BOOSTER = {
    message: "I'm thinking of you right now. I love you so much. You are stronger than you know, kinder than you think, and more loved than you realize. Take a breath. This will pass. I'm here for you. Always.",
    photoIndex: 0, // Use first photo for mood booster
};

// Export for use in app.js
window.appData = {
    reasons: REASONS,
    photos: PHOTOS,
    moodBooster: MOOD_BOOSTER,
};
