# 📸 Image Assets Guide

This folder contains all image assets for the 1SQM website.

## 📁 Folder Structure

```
public/images/
├── board/          # Board of Directors headshots
├── properties/     # Property listings photos
└── hero/           # Hero section backgrounds
```

## 🖼️ Image Specifications

### Board Members (`/images/board/`)

**Required Photos (5):**
- `olutosin-bolaji.jpg` - CEO
- `ibrahim-dantata.jpg` - Executive Chairman
- `amina-sawoe.jpg` - Managing Director
- `chidi-okonkwo.jpg` - Chief Design Officer
- `fatima-bello.jpg` - Chief Investment Officer

**Specs:**
- Aspect ratio: 3:4 (portrait)
- Recommended size: 800x1066px
- Format: JPG or PNG
- Style: Professional headshots, neutral background

---

### Property Listings (`/images/properties/`)

**Required Photos (3):**
- `victoria-heights.jpg` - Residential (Wuye)
- `zenith-medical.jpg` - Institutional (Apo)
- `nile-suites.jpg` - Luxury Co-Living (Maitama)

**Specs:**
- Aspect ratio: 4:3 (landscape)
- Recommended size: 1200x900px
- Format: JPG
- Style: Architectural exterior/interior shots

---

### Hero Section (`/images/hero/`)

**Required Photo:**
- `main-background.jpg` - Hero section background

**Specs:**
- Aspect ratio: 16:9 (landscape)
- Recommended size: 1920x1080px
- Format: JPG
- Style: Luxury real estate or architectural photography

---

## 🔄 How to Use Your Images

### Step 1: Add Your Photos
Place your images in the appropriate folders with the exact filenames listed above.

### Step 2: Images Auto-Load
The website will automatically use your images from these folders instead of placeholder images.

### Step 3: Restart Server (if needed)
If images don't appear immediately:
```bash
# Press Ctrl+C to stop the server, then:
npm run dev
```

---

## ✅ Quick Checklist

- [ ] Add Olutosin BOLAJI photo → `board/olutosin-bolaji.jpg`
- [ ] Add Ibrahim Dantata photo → `board/ibrahim-dantata.jpg`
- [ ] Add Amina Sawoe photo → `board/amina-sawoe.jpg`
- [ ] Add Chidi Okonkwo photo → `board/chidi-okonkwo.jpg`
- [ ] Add Fatima Bello photo → `board/fatima-bello.jpg`
- [ ] Add Victoria Heights photo → `properties/victoria-heights.jpg`
- [ ] Add Zenith Medical photo → `properties/zenith-medical.jpg`
- [ ] Add Nile Suites photo → `properties/nile-suites.jpg`
- [ ] Add Hero background → `hero/main-background.jpg`

---

## 💡 Tips

**Image Quality:**
- Use high-resolution photos (at least 1200px wide)
- Compress images for web (keep under 500KB per image)
- Use tools like TinyPNG.com to compress without quality loss

**File Naming:**
- Always use lowercase
- Use hyphens instead of spaces
- Match the exact filenames listed above

**Fallback:**
- If an image is missing, the website uses Unsplash placeholder images
- No errors will occur if images aren't ready yet

---

## 🚀 After Adding Images

The website will automatically detect and use your images. Visit:
- **Website:** http://localhost:3001

Your custom images will replace the placeholder photos!
