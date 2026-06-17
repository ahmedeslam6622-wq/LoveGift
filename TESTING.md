# Love Jar App - Local Testing Checklist

## ✅ Before Deploying to GitHub

### 1. Start Local Server
```bash
cd love-jar-app
python3 -m http.server 8000
```
Open: **http://localhost:8000**

### 2. Visual Design Check
- [ ] Card displays centered on screen ✓
- [ ] Text is large and readable (22px+ on mobile)
- [ ] Colors are warm and comforting ✓
- [ ] No clutter or distracting elements ✓
- [ ] Buttons are easy to tap (48px minimum) ✓

### 3. Functionality Test

**Basic Navigation:**
- [ ] Tap card → next reason appears
- [ ] Click left arrow → previous reason
- [ ] Click right arrow → next reason
- [ ] Keyboard arrows work (← / →)
- [ ] Space/Enter navigates
- [ ] Swiping works on mobile

**Mood Booster Button:**
- [ ] Click "❤️ I need you" button
- [ ] Special message appears
- [ ] Different photo displays
- [ ] Glow animation activates
- [ ] Counter changes to "💝 You are loved"
- [ ] Click again to return to normal

**Counter:**
- [ ] Shows current position (e.g., "5 of 50")
- [ ] Updates when navigating
- [ ] Shows "💝 You are loved" in mood booster mode

### 4. Content Check
- [ ] All 50+ reasons display without errors
- [ ] No typos or formatting issues
- [ ] Reasons are personal and specific ✓
- [ ] Mix of heartfelt, sensory, and funny ✓

### 5. Mobile Experience
- [ ] App works on phone screen width
- [ ] Text doesn't overflow or get cut off
- [ ] Buttons are easy to tap
- [ ] Landscape mode doesn't break layout
- [ ] Smooth animations, not choppy

### 6. Performance
- [ ] App loads in < 2 seconds
- [ ] No console errors (F12 → Console tab)
- [ ] Animations are smooth
- [ ] No lag when tapping

### 7. Offline Test
- [ ] Open app in browser
- [ ] Go offline (disconnect internet)
- [ ] App still works perfectly
- [ ] Photos still display
- [ ] Navigation still works

### 8. Installation Test (PWA)
**On mobile:**
- [ ] Open in browser
- [ ] Click menu (⋯ or ⋮)
- [ ] See "Add to home screen" option
- [ ] Tap it
- [ ] Icon appears on home screen
- [ ] App launches from icon
- [ ] Works like native app

### 9. Customization Check

Before deploying, customize:
- [ ] Add your actual reasons to `js/data.js`
- [ ] Add your photos to `js/data.js`
- [ ] Update mood booster message
- [ ] (Optional) Change colors in `styles/main.css`
- [ ] (Optional) Update fonts

### 10. Browser Compatibility
Test in:
- [ ] Chrome/Chromium (Android)
- [ ] Safari (iOS)
- [ ] Firefox
- [ ] Edge

---

## 🎯 Quality Checklist

**Amazement Factor:**
- Does the app feel warm and emotional? ✓
- Will it actually make your mom smile? ✓
- Is it intuitive without instructions? ✓
- Does it feel special, not generic? ✓

---

## 📋 Final Before Deploy

```bash
# 1. Stop local server (Ctrl+C)
# 2. Review all files one more time
# 3. Make sure reasons are personalized
# 4. Verify photos are correct
# 5. Clear any test/placeholder data
```

Then follow **GITHUB_SETUP.md** to deploy! 🚀

---

## 🔍 Debugging Tips

**Nothing shows up:**
1. Open browser console (F12)
2. Check for red errors
3. Verify `js/data.js` loaded correctly
4. Make sure `js/app.js` runs (check console logs)

**Reasons not appearing:**
1. Check `js/data.js` - make sure `REASONS` array isn't empty
2. Verify no syntax errors in JSON/JS
3. Hard refresh (Ctrl+F5)

**Photos not loading:**
1. Check image URLs are correct
2. Test URLs directly in browser
3. Make sure CORS allows image loading
4. Use Cloudinary/Imgur if having issues

**Buttons not responding:**
1. Check console for JavaScript errors
2. Make sure `js/app.js` fully loaded
3. Try hard refresh
4. Test in different browser

---

You're all set! Once this checklist is complete, your mom's app is ready. 💕
