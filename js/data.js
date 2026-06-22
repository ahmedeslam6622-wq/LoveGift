/* ============================================
   LOVE JAR - REASONS DATABASE
   150+ reasons why Ahmed loves his mom
   ============================================ */

const REASONS = [
    // === WARMTH & UNCONDITIONAL LOVE ===
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
    
    // === STRENGTH & RESILIENCE ===
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
    
    // === LESSONS & WISDOM ===
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
    "Because you handle hard things with grace.",
    "Because you keep going even when it is difficult.",
    "Because you never let your problems become my problems.",
    "Because you are brave when I am scared.",
    "Because you show me how to be strong.",
    "Because you work every day for us.",
    "Because you never ask for help but always give it.",
    "Because you carried me through my worst times.",
    "Because you are my rock.",
    
    // === MEMORIES & MOMENTS ===
    "Because you never break even when life breaks you.",
    "Because I remember your hands comforting me.",
    "Because your presence makes everything okay.",
    "Because of all the mornings you woke up early for us.",
    "Because you were there for my first day of school.",
    "Because you celebrated every moment with me.",
    "Because I have so many happy memories with you.",
    "Because you make ordinary days special.",
    "Because every photo with you is my favorite.",
    "Because of the way you look at me.",
    "Because you see the good in me even when I cannot see it.",
    "Because you taught me honesty matters.",
    "Because you showed me how to treat people.",
    "Because you taught me to stand up for what is right.",
    "Because you taught me that mistakes are okay.",
    "Because you showed me what real love is.",
    "Because you taught me to help others.",
    "Because you taught me that family is everything.",
    "Because you taught me not to give up.",
    "Because you taught me to be myself.",
    
    // === DAILY LOVE ===
    "Because you taught me to respect everyone.",
    "Because you taught me about responsibility.",
    "Because you taught me about hard work.",
    "Because you taught me to be loyal.",
    "Because you taught me to listen.",
    "Because you taught me to be humble.",
    "Because you remember how I like my food.",
    "Because you ask about my day.",
    "Because you worry about me.",
    "Because you check on me.",
    "Because you send me things that remind you of me.",
    "Because you keep photos of me.",
    "Because you talk about me to others.",
    "Because you save things for me.",
    "Because you think of me.",
    "Because you want me to be happy.",
    "Because you are real with me.",
    "Because you do not pretend to be perfect.",
    "Because you admit when you are wrong.",
    "Because you change when you see you were wrong.",
    
    // === HER QUALITIES ===
    "Because you are humble.",
    "Because you are genuine.",
    "Because you are thoughtful.",
    "Because you are generous.",
    "Because you are loyal.",
    "Because you are reliable.",
    "Because you are strong.",
    "Because you are wise.",
    "Because you are loving.",
    "Because you are fair.",
    "Because you are just.",
    "Because you believe things will get better.",
    "Because you keep hope alive.",
    "Because you never lose faith.",
    "Because you inspire me to believe too.",
    "Because you show me it is possible.",
    "Because you prove that good people exist.",
    "Because you make me want to be better.",
    "Because you show me how to live.",
    "Because you teach me by your example.",
    
    // === CONNECTION & GRATITUDE ===
    "Because you are proof that love is real.",
    "Because you know me better than I know myself.",
    "Because you see through me.",
    "Because you accept all of me.",
    "Because you love me anyway.",
    "Because we laugh together.",
    "Because you understand my silence.",
    "Because we are connected in a special way.",
    "Because you get my jokes.",
    "Because I can be myself with you.",
    "Because you never judge me.",
    "Because you gave me life.",
    "Because you made me who I am.",
    "Because you shaped my heart.",
    "Because you built my character.",
    "Because you created my values.",
    "Because you are the reason I am good.",
    "Because I would not be here without you.",
    "Because you chose to love me.",
    "Because you chose to fight for me.",
    "Because you chose me every single day.",
    "Because I am lucky to be your son.",
];

// === MULTIPLE MOOD BOOSTER MESSAGES ===
// One random message appears each time she clicks "I need you"
const MOOD_BOOSTER_MESSAGES = [
    "I am thinking of you right now. You are stronger than you know. I love you so much.",
    "You matter. Your life matters. I am here for you. Always.",
    "This is hard, but you have been through hard things before. You will get through this too.",
    "I see how hard you work. I see your strength. I am proud of you.",
    "You are not alone. I am here. We are here. You are loved.",
    "Take a breath. This moment will pass. You will feel better. I promise.",
    "You deserve to be happy. You deserve good things. You deserve love.",
    "I am so grateful you are my mom. Thank you for everything you do.",
    "You make the world better just by being in it. Thank you for that.",
    "Your kindness matters. Your love matters. You matter so much.",
    "I love you. Not because of what you do, but because of who you are.",
    "You are enough. You have always been enough.",
    "Rest when you need to. Take care of yourself. You deserve that.",
    "I am here. Whatever you need, I am here for you.",
    "You have raised someone who loves you deeply. That is your legacy.",
];

// === PHOTOS ===
// Upload your photos to GitHub and replace the URLs below
// To add a photo: 
// 1. Upload image to GitHub (in a folder or root)
// 2. Click on the image in GitHub
// 3. Right-click → Copy image address
// 4. Paste the URL below

const PHOTOS = [
    {
        id: 1,
        url: "https://github.com/ahmedeslam6622-wq/LoveGift/blob/main/YoungMeWithMom.jpg",
        label: "A warm moment together",
    },
    {
        id: 2,
        url: "https://github.com/ahmedeslam6622-wq/LoveGift/blob/main/BabyMeWithMom.jpg",
        label: "Laughing together",
    },
    {
        id: 3,
        url: "https://github.com/ahmedeslam6622-wq/LoveGift/blob/main/momphoto3.jpeg",
        label: "A quiet moment",
    },
    {
        id: 4,
        url: "https://github.com/ahmedeslam6622-wq/LoveGift/blob/main/momphoto2.jpeg",
        label: "Happy times",
    },
    {
        id: 5,
        url: "https://github.com/ahmedeslam6622-wq/LoveGift/blob/main/momphoto1.jpeg",
        label: "Beautiful memories",
    },
];

// === RANDOM SELECTION FUNCTION ===
function getRandomReason() {
    return REASONS[Math.floor(Math.random() * REASONS.length)];
}

function getRandomPhoto() {
    return PHOTOS[Math.floor(Math.random() * PHOTOS.length)];
}

function getRandomMoodBoosterMessage() {
    return MOOD_BOOSTER_MESSAGES[Math.floor(Math.random() * MOOD_BOOSTER_MESSAGES.length)];
}

// Export for use in app.js
window.appData = {
    reasons: REASONS,
    photos: PHOTOS,
    moodBoosterMessages: MOOD_BOOSTER_MESSAGES,
    getRandomReason: getRandomReason,
    getRandomPhoto: getRandomPhoto,
    getRandomMoodBoosterMessage: getRandomMoodBoosterMessage,
};
