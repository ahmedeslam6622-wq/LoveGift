# Love Jar - For Mom
A beautiful, heartfelt PWA that displays 100+ reasons why you love your mother.

## 🎯 What This App Does

- **Display beautiful reasons** - Each tap shows a new reason why you love your mom
- **Random photos** - Each reason paired with a memory photo from your collection
- **Mood booster** - Special "I need you" button for when she's feeling down
- **Works offline** - Once loaded, the app works without internet
- **Installable** - Adds to home screen like a native app

## 🚀 Quick Start

### 1. Test Locally
```bash
# Navigate to project directory
cd love-jar-app

# Start a simple HTTP server
python3 -m http.server 8000
# OR if you have Python 2
python -m SimpleHTTPServer 8000

# Open browser to http://localhost:8000
```

The app should load immediately. Try:
- Tapping the card to see reasons
- Using arrow keys (← / →) to navigate
- Clicking "I need you" button
- Swiping left/right on mobile

### 2. Customize with Your Photos

Edit `js/data.js`:

```javascript
const PHOTOS = [
    {
        id: 1,
        url: "https://your-image-url-here.jpg",
        label: "A warm moment together",
    },
    // Add more photos...
];
```

**Photo Requirements:**
- Vertical orientation (portrait)
- Minimum 1080x1440px
- JPG or PNG format
- Host on: Cloudinary (free), Imgur, Google Drive, or any image hosting

### 3. Add More Reasons

Edit `js/data.js` - the `REASONS` array contains all reasons.

Add your own:
```javascript
const REASONS = [
    "Because you taught me...",
    "Because you always...",
    // Add as many as you want!
];
```

**Tips:**
- Mix heartfelt with sensory memories
- Be specific (mention things only your mom would recognize)
- Include funny quirks
- Aim for variety in tone

### 4. Customize the Mood Booster Message

Edit `js/data.js`:

```javascript
const MOOD_BOOSTER = {
    message: "Your custom message here. Make it personal, warm, and uplifting.",
    photoIndex: 0, // Index of photo to display (0 = first photo)
};
```

### 5. Deploy to GitHub Pages (Free, Instant)

**First time setup:**

1. Create a GitHub account (if you don't have one)
2. Create a new public repository named `love-jar-app`
3. Clone it locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/love-jar-app.git
   cd love-jar-app
   ```

4. Copy all files from your project folder into the cloned repo
5. In the repo settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Branch: `main`, folder: `/ (root)`
   - Save

6. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial Love Jar app"
   git push origin main
   ```

**Your app is now live at:** `https://YOUR-USERNAME.github.io/love-jar-app`

Send this link to your mom. She can:
- Open it on her phone
- Click the menu → "Add to Home Screen" to install it

---

## 📱 For Your Mom

**To install on her phone:**

1. Open the link on her phone
2. Click the browser menu (⋯ or ⋮)
3. Select "Add to home screen" or "Install app"
4. Icon appears on her home screen like any other app

**How to use:**
- **Tap the card** to see a new reason
- **Use arrow buttons** to go back/forward
- **"I need you" button** for a special message when she's sad
- **Works offline** - no internet needed after first load

---

## 🛠️ Technical Details

**File Structure:**
```
love-jar-app/
├── index.html              (Main HTML structure)
├── manifest.json           (PWA configuration)
├── service-worker.js       (Offline functionality)
├── styles/
│   └── main.css           (Warm, accessible design)
├── js/
│   ├── app.js             (Core app logic)
│   ├── data.js            (Reasons + photos)
│   └── service-worker-register.js
└── README.md
```

**No build tools needed** - this is a pure HTML/CSS/JS PWA. Just serve files, that's it.

---

## 📝 Customization Tips

### Change Colors
Edit `styles/main.css` - look for `:root { ... }` at the top:
```css
--color-peach: #F4A998;      /* Change this hex code */
--color-lavender: #E8D5E8;   /* Or this one */
```

### Change Fonts
Edit `index.html` - Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;700&display=swap" rel="stylesheet">
```

Then update `styles/main.css`:
```css
--font-family-serif: 'YourFont', serif;
```

### Adjust Text Size
Edit `styles/main.css`:
```css
--font-size-card: 26px;  /* Reason text size */
--font-size-base: 16px;  /* Button text size */
```

---

## 🐛 Troubleshooting

**App won't load?**
- Check browser console (F12 → Console tab)
- Make sure all files are in correct folders
- Clear browser cache (Ctrl+Shift+Delete)

**Photos not showing?**
- Check image URLs are correct and accessible
- Make sure images are 1080x1440px minimum
- Test URLs in browser directly

**App not working offline?**
- Service worker needs HTTPS (or localhost)
- GitHub Pages provides HTTPS automatically
- Offline mode caches after first visit

**Buttons not working?**
- Check `js/app.js` is loading (check console)
- Make sure `js/data.js` loads before `js/app.js`

---

## 💡 Future Enhancements

Easy additions you can make:

1. **Add voice notes** - Record messages for mom
2. **Share feature** - Let mom email/text reasons to friends
3. **Statistics** - "You've opened this X times"
4. **Seasonal themes** - Different color schemes for holidays
5. **Music** - Play soft background music

Ask Claude for help implementing any of these!

---

## 📞 Need Help?

- **App isn't working?** Check the browser console (F12)
- **Want to add features?** Edit the relevant file and test locally first
- **Deploying issue?** Make sure all files are pushed to GitHub with correct folder structure

---

Built with ❤️ for mom.
