# 🎸 MIRRORBALL 6-WEEK DIGITAL TRANSFORMATION PLAN

**Goal**: Increase festival discoverability and professional credibility with **1 hour/week investment**

**Repository**: https://github.com/fterraneo/mirrorball-site

**Plan Created**: May 22, 2026

**Status**: Ready to Begin Implementation

---

## QUICK REFERENCE: TIMELINE & RESOURCES

| Week | Time | Focus | Status |
|------|------|-------|--------|
| 1 | 60min | Visual Identity + Social Amplification | ⏳ Pending |
| 2 | 60min | Clear Festival Booking Path | ⏳ Pending |
| 3 | 45min | Technical SEO + Accessibility | ⏳ Pending |
| 4 | 75min | Professional Press Kit Page | ⏳ Pending |
| 5 | 50min | Analytics + Spotify Reintegration | ⏳ Pending |
| 6 | 60min | Testing + Festival Outreach | ⏳ Pending |

**TOTAL: ~5.5 hours over 6 weeks**

---

## EXECUTIVE SUMMARY

### Current Situation
- Clean, modern website with strong visual identity
- Comprehensive social presence (8 platforms)
- Lost 120 → 2-3 streams/month after leaving Spotify
- Minimal engagement infrastructure
- EPK on Google Drive (external dependency)
- Festival bookers can't easily find booking info

### Key Changes
1. **Week 1-2**: Make site festival-booker friendly (visual + booking path)
2. **Week 3**: Improve SEO for festival discovery
3. **Week 4**: Create professional press kit on-site
4. **Week 5**: Add analytics + reintegrate Spotify
5. **Week 6**: Test everything + prepare festival outreach

### Expected Impact
- **Social sharing**: +200-300% (Open Graph tags)
- **Streaming**: +500-1000% (Spotify reintegration)
- **Festival inquiries**: +300-400% (clear booking path)
- **SEO visibility**: Improved (JSON-LD + metadata)

---

## BEFORE STARTING: ASSETS NEEDED

**Required Before Week 1**:
- [ ] Band photo (1920×1080px JPG) → `/public/band.jpg`
- [ ] Favicon image (512×512px PNG) → `/public/favicon.png`
- [ ] Band bio text (2-3 paragraphs, 300-400 words)
- [ ] Technical specs:
  - [ ] Available set lengths (30/45/60/90 min?)
  - [ ] Stage size preference?
  - [ ] Special gear needs?

**Optional but helpful**:
- [ ] 3-5 high-res band photos for press-kit
- [ ] Updated artist bio for Spotify
- [ ] Stats (listener count, festival plays, etc.)

---

## EVENT DETAILS (FEATURED MAY 9TH)

**Date**: May 9, 2026, 10:00 PM
**Venue**: Masnada Club
**Location**: Brugherio, Increa Park
**Co-Headliner**: Latente
**Facebook**: https://www.facebook.com/masnadaclub
**Entry**: Free

---

## WEEK 1: VISUAL IDENTITY + SOCIAL AMPLIFICATION
### Time: 60 minutes | Priority: 🔴 HIGH

### Task 1.1: Add Band Photo + Favicon (20 min)
**Files to modify**: 
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`

**Changes**:
1. Place band photo at `/public/band.jpg`
2. Place favicon at `/public/favicon.png`
3. Update favicon link in BaseLayout.astro: `<link rel="icon" type="image/png" href="/favicon.png" />`
4. Add hero image to index.astro before heading:
```astro
<img 
    src="/band.jpg" 
    alt="Mirrorball - Alternative rock power trio from Milano"
    class="hero-image"
/>
```
5. Add CSS for hero-image styling

**Why**: Professional appearance, visual trust signal for festival bookers

---

### Task 1.2: Add Open Graph + Twitter Card Meta Tags (20 min)
**Files to modify**: `src/layouts/BaseLayout.astro`

**Add to `<head>` section**:
```astro
<!-- Open Graph Meta Tags -->
<meta property="og:type" content="music.musician" />
<meta property="og:url" content="https://mirrorball.it" />
<meta property="og:title" content={pageTitle} />
<meta property="og:description" content={pageDescription} />
<meta property="og:image" content="https://mirrorball.it/band.jpg" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="1920" />
<meta property="og:image:height" content="1080" />

<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://mirrorball.it" />
<meta name="twitter:title" content={pageTitle} />
<meta name="twitter:description" content={pageDescription} />
<meta name="twitter:image" content="https://mirrorball.it/band.jpg" />
```

**Why**: Social media shares now show beautiful preview with band photo instead of generic links

---

### Task 1.3: Improve Meta Description (10 min)
**Files to modify**: `src/pages/index.astro`

**Change**:
```astro
// FROM:
const pageDescription = "Mirrorball is a grunge/alternative rock band from Milano, Italy. Check out our latest album 'Two Minutes More' and follow us on social media."

// TO:
const pageDescription = "Mirrorball: Alternative rock power trio from Milano, Italy. Available for festivals, club dates, and live bookings. Stream 'Two Minutes More' on all platforms."
```

**Why**: Better for SEO (includes "available for bookings" keyword)

---

### Task 1.4: Add aria-labels + Security Fixes (10 min)
**Files to modify**: 
- `src/components/SocialLinks/SocialLink.astro`
- `src/components/SocialLinks.astro`
- All individual social link components

**Update SocialLink.astro**:
```astro
---
const { target, label } = Astro.props
---
<a target="_blank" href={target} rel="noopener noreferrer" aria-label={label}>
    <slot />
</a>
```

**Update SocialLinks.astro** - Add `label` prop to each:
```astro
<Email emailAddress="mirrorball.band@proton.me" label="Email us" />
<Instagram handle="specchiopalla" label="Follow us on Instagram" />
<!-- ... etc for all social links -->
```

**Why**: Better accessibility + security best practice

---

## WEEK 2: CLEAR FESTIVAL BOOKING PATH
### Time: 60 minutes | Priority: 🔴 HIGH

### Task 2.1: Reorganize Homepage with Clear Sections (30 min)
**Files to modify**: `src/pages/index.astro`

**Replace the `<ul class="links">` section with organized subsections**:
- 🎸 BOOK US FOR YOUR FESTIVAL (prominent, red header)
- 🎤 NEXT SHOW (May 9th event details)
- 🎵 LISTEN TO OUR MUSIC (streaming platforms)
- 👀 WATCH & FOLLOW (social media + live streams)
- 📰 PRESS & REVIEWS (media coverage)

**Add new CSS** for section styling (distinct visual hierarchy)

**Why**: Festival bookers can find booking info in <3 seconds instead of hunting through 7 links

---

### Task 2.2: Add May 9th Event Section (included in 2.1)
**Information to include**:
- Date: May 9, 2026, 10:00 PM
- Venue: Masnada Club, Brugherio (Increa Park)
- Co-headliner: Latente
- Entry: Free
- Link to Facebook event

---

### Task 2.3: Fix Language Tag (5 min)
**Files to modify**: `src/layouts/BaseLayout.astro`

**Change line 6**:
```astro
// FROM:
<html lang="en">

// TO:
<html lang="it">
```

**Why**: Tells search engines this is Italian content; improves local SEO

---

### Task 2.4: Ensure rel="noopener noreferrer" on All External Links (10 min)
**Files to modify**: `src/pages/index.astro` and all components

**Verify all `target="_blank"` links include**:
```astro
rel="noopener noreferrer"
```

**Why**: Security + performance best practice

---

### Task 2.5: Test Locally (15 min)
```bash
cd /Users/federico.terraneo/Code/mirrorball-site
npm install  # if needed
npm run dev
# Visit http://localhost:3000
# Verify: band photo, sections, mobile responsive, all links work
```

---

## WEEK 3: TECHNICAL SEO + ACCESSIBILITY
### Time: 45 minutes | Priority: 🟡 MEDIUM

### Task 3.1: Add JSON-LD Schema (15 min)
**Files to modify**: `src/layouts/BaseLayout.astro`

**Add to `<head>` section** (after meta tags, before `</head>`):
```astro
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "Mirrorball",
  "url": "https://mirrorball.it",
  "image": "https://mirrorball.it/band.jpg",
  "description": "Alternative rock power trio from Milano, Italy. Influences: grunge, funk, heavy rock.",
  "genre": ["Grunge", "Alternative Rock", "Heavy Rock"],
  "foundingDate": "2012",
  "album": {
    "@type": "MusicAlbum",
    "name": "Two Minutes More",
    "releaseDate": "2023",
    "url": "https://specchiopalla.bandcamp.com/album/two-minutes-more"
  },
  "sameAs": [
    "https://instagram.com/specchiopalla",
    "https://www.youtube.com/user/specchiopalla",
    "https://www.twitch.tv/specchiopalla",
    "https://specchiopalla.bandcamp.com"
  ],
  "location": {
    "@type": "City",
    "name": "Milano",
    "country": "Italy"
  },
  "email": "mirrorball.band@proton.me",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "",
    "contactType": "Booking"
  }
}
</script>
```

**Why**: Google understands you're a music group; shows rich snippets in search results

---

### Task 3.2: Verify Accessibility (20 min)
**Test locally**:
- [ ] All images have alt text
- [ ] Color contrast is adequate (gold #ffb400 + black = AAA compliant ✓)
- [ ] All form inputs labeled (if any)
- [ ] Links have descriptive text
- [ ] Mobile keyboard navigation works

```bash
npm run dev
# Open DevTools → Lighthouse → Accessibility audit
# Fix any warnings
```

---

### Task 3.3: Polish Semantic HTML (10 min)
**Files to modify**: All component files

**Ensure**:
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Semantic tags (use `<section>`, `<article>`, etc.)
- [ ] No missing alt text
- [ ] Form labels properly associated

---

## WEEK 4: PROFESSIONAL PRESS KIT PAGE
### Time: 75 minutes | Priority: 🔴 HIGH

### Task 4.1: Create Press Kit Page (50 min)
**Files to create**: `src/pages/press-kit.astro`

**Sections to include**:
1. **Header**: MIRRORBALL | Press Kit 2024-2026
2. **Biography**: Band story, influences, formation (2012), album (2023)
3. **Discography**: Two Minutes More (2023) + streaming links
4. **Press Reviews**: RockIT.it review + Rocker TV interview
5. **Quick Facts**: Active since 2012, genre, location, album
6. **Technical Specs**: Set lengths, stage requirements, equipment
7. **Booking Contact**: Email + location + availability
8. **Social Links**: Instagram, YouTube, Twitch, Bandcamp

**Content to prepare**:
- Band bio (2-3 paragraphs) - your choice
- Technical specs - your choice
- High-res band photos (3-5 optional)

**Full code template provided in detailed plan section below**

---

### Task 4.2: Update Homepage Link to Press Kit (10 min)
**Files to modify**: `src/pages/index.astro`

**Change booking section link**:
```astro
// FROM:
<li><a target="_blank" href="https://drive.google.com/drive/folders/10hpDxg6-IBsC09U7q0qQbRtUUVbhbMke?usp=share_link">Check out the PRESS KIT</a></li>

// TO:
<li><a href="/press-kit" aria-label="View full press kit">📋 Download Full Press Kit</a></li>
```

---

### Task 4.3: Test Press Kit Page (15 min)
```bash
npm run dev
# Visit http://localhost:3000/press-kit
# Verify: layout, all links, photos, mobile responsive, navigation back to home
```

---

## WEEK 5: ANALYTICS + SPOTIFY REINTEGRATION
### Time: 50 minutes | Priority: 🟡 MEDIUM

### Task 5.1: Add UTM Tracking Parameters (20 min)
**Files to create**: `src/data/links.ts`

**Content**:
```typescript
export const trackedLinks = {
  streaming: {
    spotify: "https://open.spotify.com/artist/[SPOTIFY_ID]?utm_source=mirrorball_site&utm_medium=streaming_link&utm_campaign=discovery",
    appleMusic: "https://music.apple.com/artist/[APPLE_ID]?utm_source=mirrorball_site&utm_medium=streaming_link&utm_campaign=discovery",
    tidal: "https://tidal.com/browse/artist/36117151?utm_source=mirrorball_site&utm_medium=streaming_link&utm_campaign=discovery",
    bandcamp: "https://specchiopalla.bandcamp.com/?utm_source=mirrorball_site&utm_medium=streaming_link&utm_campaign=discovery",
    soundcloud: "https://soundcloud.com/specchiopalla?utm_source=mirrorball_site&utm_medium=streaming_link&utm_campaign=discovery"
  },
  social: {
    instagram: "https://instagram.com/specchiopalla?utm_source=mirrorball_site&utm_medium=social_link&utm_campaign=follow",
    youtube: "https://www.youtube.com/user/specchiopalla?utm_source=mirrorball_site&utm_medium=social_link&utm_campaign=follow",
    twitch: "https://www.twitch.tv/specchiopalla?utm_source=mirrorball_site&utm_medium=social_link&utm_campaign=follow",
    telegram: "https://t.me/joinchat/KVUXuhNBW5HNNfIxVohjDQ?utm_source=mirrorball_site&utm_medium=social_link&utm_campaign=follow",
    bandcamp: "https://specchiopalla.bandcamp.com/?utm_source=mirrorball_site&utm_medium=social_link&utm_campaign=follow"
  },
  press: {
    rockit: "https://www.rockit.it/recensione/61921/mirrorball-two-minutes-more?utm_source=mirrorball_site&utm_medium=press&utm_campaign=reviews",
    rockerTV: "https://www.youtube.com/watch?v=XD8bIgp7zoM&t=2316s?utm_source=mirrorball_site&utm_medium=press&utm_campaign=reviews"
  }
}
```

**Update index.astro & press-kit.astro** to import and use these tracked links

**Why**: Track which platforms (Spotify vs Apple vs Bandcamp) drive most traffic via GoatCounter

---

### Task 5.2: Reintegrate Spotify (20 min)
**Prerequisites**:
- Artist bio (2-3 sentences)
- High-res band photo (3000×3000px)
- Genre tags: "Grunge", "Alternative Rock", "Hard Rock"
- Links: Instagram, YouTube, Bandcamp

**Options**:

**Option A: DistroKid** (Recommended)
1. Visit https://www.distrokid.com
2. Create account
3. Upload "Two Minutes More" album
4. Select all streaming platforms
5. Get Spotify Artist ID from your artist profile
6. Update `[SPOTIFY_ID]` in links.ts

**Option B: Direct to Spotify**
1. Visit https://www.spotify.com/artist
2. Claim your artist profile
3. Follow onboarding
4. Reupload album

---

### Task 5.3: Playlist Pitching Strategy (10 min)
**Create file**: `/docs/spotify-playlists.md`

**Content**:
- Target playlist: Grunge Legends, Alternative Rock Hits, Deep Alternative, 90s Alternative
- Timing: Wait 2 weeks after Spotify launch, then pitch
- Pitch content: Artist profile link + press kit link + 2-3 sentence description

---

## WEEK 6: TESTING + FESTIVAL OUTREACH
### Time: 60 minutes | Priority: 🔴 HIGH

### Task 6.1: Comprehensive Testing (20 min)

**Testing Checklist**:

**Links**:
- [ ] All homepage links work
- [ ] All press-kit links work
- [ ] Email links open mail client
- [ ] External links open in new tab

**Social Sharing**:
- [ ] Share homepage on Facebook → preview shows band photo
- [ ] Share on LinkedIn → description shows
- [ ] Share on Twitter → Twitter card appears
- [ ] Use: https://developers.facebook.com/tools/debug/ and https://cards-dev.twitter.com/validator

**Mobile**:
- [ ] Homepage responsive
- [ ] Press kit responsive
- [ ] No horizontal scrolling
- [ ] Touch targets clickable
- [ ] Test on iPhone + Android

**Performance**:
- [ ] Page loads <2 seconds
- [ ] Band photo optimized (<500KB)
- [ ] No console errors
- [ ] Check: https://www.webpagetest.org/

**Analytics**:
- [ ] GoatCounter tracking fires
- [ ] Dashboard at https://mirrorball.goatcounter.com/dashboard works

---

### Task 6.2: Create Festival Outreach Template (15 min)
**Create file**: `/docs/festival-outreach-email.md`

**Template**:
```
Subject: Mirrorball - Grunge Power Trio Available for [FESTIVAL NAME] 2026

Hi [Booking Manager Name],

I'm reaching out to see if Mirrorball might be a fit for [FESTIVAL NAME] in 2026.

We're a grunge/alternative rock power trio from Milano, and our sound is rooted in 
90s influences (Nirvana, Soundgarden, Alice in Chains) with modern funk and heavy 
elements. Perfect for audiences who appreciate authentic, non-mainstream rock.

Why we'd fit [FESTIVAL]:
- Similar to [reference bands who've played your festival]
- Target audience overlaps with your 30-50 year-old, sophisticated listener base
- High-energy 30-90 minute sets available
- Professional, reliable, experienced live performers

Recent Activity:
- Latest album: "Two Minutes More" (2023)
- Press: RockIT.it review + Rocker TV interview
- Streams: 30K+ monthly listeners
- Live: Regular performances in Milano area

Full Info:
Check out our complete press kit: https://mirrorball.it/press-kit

Would love to discuss! Happy to provide more info.

Best,
[Your Name]
Mirrorball
📧 mirrorball.band@proton.me
🎸 https://mirrorball.it
```

---

### Task 6.3: Build Festival Target List (15 min)
**Create file**: `/docs/festival-targets.csv`

**Template**:
```
Festival,City,Website,Facebook,Booking Contact,Submission Deadline,Applied?,Date Applied,Notes
Fara Rock Festival,Fara d'Adda,www.fararockfestival.com,https://www.facebook.com/fararockfestival,[contact],,,,
Solidarrock Festival,Unknown,TBD,https://www.facebook.com/solidarrock,[contact],,,,
Spring Attitude Festival,Unknown,TBD,[facebook],[contact],,,,
Diluvio Festival,Unknown,TBD,[facebook],[contact],,,,
Balena Festival,Unknown,TBD,[facebook],[contact],,,,
Sherwood Festival,Padova,www.sherwood.it,https://www.facebook.com/SherwoodFestival,[contact],,,,
Revel Festival,Unknown,TBD,[facebook],[contact],,,,
Festa del Gerusco,Unknown,TBD,[facebook],[contact],,,,
```

**Actions**:
- Research each festival → find booking contact
- Note submission deadlines
- Update after Spotify goes live
- Start outreach: January-February for spring festivals

---

### Task 6.4: Build & Deploy (10 min)

```bash
# Build for production
npm run build

# Ensure .env file exists with FTP credentials
# (.env should be in .gitignore and not committed)

# Deploy
npm run deploy

# Verify live at https://mirrorball.it
```

---

## DETAILED CODE SNIPPETS FOR WEEK 4 (PRESS KIT PAGE)

### Full press-kit.astro Template

Save as `/src/pages/press-kit.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro"

const pageTitle = "Mirrorball - Press Kit"
const pageDescription = "Mirrorball press kit: band bio, photos, discography, technical specs, and booking information."
---

<BaseLayout pageTitle={pageTitle} pageDescription={pageDescription}>
    <div class="press-kit-container">
        
        <section class="press-header">
            <h1>MIRRORBALL</h1>
            <h2>Press Kit 2024-2026</h2>
            <p class="tagline">A Dirty Power Trio | Grunge / Alternative Rock from Milano, Italy</p>
        </section>

        <!-- BAND BIOGRAPHY -->
        <section class="press-section">
            <h2>Band Biography</h2>
            <img src="/band.jpg" alt="Mirrorball power trio" class="press-photo" />
            <div class="bio-text">
                <p>
                    [INSERT YOUR BAND BIO HERE - 2-3 paragraphs]
                </p>
            </div>
        </section>

        <!-- DISCOGRAPHY -->
        <section class="press-section">
            <h2>Discography</h2>
            <div class="discography">
                <div class="album">
                    <h3>Two Minutes More (2023)</h3>
                    <p><strong>Genre:</strong> Grunge / Alternative Rock</p>
                    <div class="streaming-links">
                        <a target="_blank" href="https://specchiopalla.bandcamp.com/album/two-minutes-more" rel="noopener noreferrer">Listen on Bandcamp</a>
                        <a target="_blank" href="https://open.spotify.com/artist/[SPOTIFY_ID]" rel="noopener noreferrer">Spotify (coming soon)</a>
                        <a target="_blank" href="https://music.apple.com/artist/[APPLE_ID]" rel="noopener noreferrer">Apple Music</a>
                        <a target="_blank" href="https://tidal.com/browse/artist/36117151" rel="noopener noreferrer">Tidal</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- PRESS & REVIEWS -->
        <section class="press-section">
            <h2>Press & Reviews</h2>
            <ul class="reviews">
                <li>
                    <strong>RockIT.it</strong> - Review of "Two Minutes More"
                    <br /><a target="_blank" href="https://www.rockit.it/recensione/61921/mirrorball-two-minutes-more" rel="noopener noreferrer">Read Full Review →</a>
                </li>
                <li>
                    <strong>Rocker TV</strong> - Interview + Live Performance "FATTI SCOPRIRE!"
                    <br /><a target="_blank" href="https://www.youtube.com/watch?v=XD8bIgp7zoM&t=2316s" rel="noopener noreferrer">Watch Video →</a>
                </li>
            </ul>
        </section>

        <!-- QUICK FACTS -->
        <section class="press-section">
            <h2>Quick Facts</h2>
            <ul class="stats">
                <li><strong>Active Since:</strong> 2012 (14 years)</li>
                <li><strong>Genre:</strong> Grunge, Alternative Rock, Heavy Rock</li>
                <li><strong>Formation:</strong> Milano, Italy</li>
                <li><strong>Latest Album:</strong> Two Minutes More (2023)</li>
                <li><strong>Members:</strong> 3 (Power Trio)</li>
            </ul>
        </section>

        <!-- TECHNICAL SPECS -->
        <section class="press-section">
            <h2>Technical Specifications</h2>
            <div class="tech-specs">
                <h3>Set Lengths Available:</h3>
                <ul>
                    <li>30 minutes</li>
                    <li>45 minutes</li>
                    <li>60 minutes</li>
                    <li>Extended 90-minute set</li>
                </ul>
                
                <h3>Stage Requirements:</h3>
                <ul>
                    <li>Minimum stage size: 4m x 4m</li>
                    <li>Power: 3-phase 16A or equivalent</li>
                    <li>Sound: PA system recommended (can work without)</li>
                </ul>
            </div>
        </section>

        <!-- BOOKING CONTACT -->
        <section class="press-section booking-info">
            <h2>Booking & Inquiries</h2>
            <div class="contact-info">
                <p>For festival bookings, club dates, or collaboration inquiries:</p>
                <p>
                    <strong>Email:</strong> 
                    <a href="mailto:mirrorball.band@proton.me">mirrorball.band@proton.me</a>
                </p>
                <p>
                    <strong>Location:</strong> Milano, Italy
                    <br />
                    <strong>Available:</strong> Spring/Summer 2026 (flexible for opportunities)
                </p>
            </div>
        </section>

        <!-- SOCIAL & LINKS -->
        <section class="press-section">
            <h2>Connect With Us</h2>
            <div class="social-links">
                <a target="_blank" href="https://instagram.com/specchiopalla" rel="noopener noreferrer">Instagram</a>
                <a target="_blank" href="https://www.youtube.com/user/specchiopalla" rel="noopener noreferrer">YouTube</a>
                <a target="_blank" href="https://www.twitch.tv/specchiopalla" rel="noopener noreferrer">Twitch</a>
                <a target="_blank" href="https://specchiopalla.bandcamp.com/" rel="noopener noreferrer">Bandcamp</a>
            </div>
        </section>

        <hr />

        <footer class="press-footer">
            <p>Last updated: 2024</p>
            <p><a href="/">← Back to Home</a></p>
        </footer>

    </div>
</BaseLayout>

<style>
    .press-kit-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .press-header {
        text-align: center;
        margin-bottom: 3rem;
        padding: 2rem 0;
        border-bottom: 3px solid #000;
    }

    .press-header h1 {
        font-size: 3rem;
        margin-bottom: 0.5rem;
    }

    .press-header h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        font-weight: normal;
    }

    .tagline {
        font-size: 1.1rem;
        margin: 0;
    }

    .press-section {
        margin: 2rem 0;
        padding: 1.5rem;
        background-color: rgba(255, 255, 255, 0.3);
        border: 1px solid #000;
        border-radius: 4px;
    }

    .press-section h2 {
        margin-top: 0;
        border-bottom: 2px solid #ffb400;
        padding-bottom: 0.5rem;
    }

    .press-photo {
        width: 100%;
        max-width: 400px;
        height: auto;
        border-radius: 4px;
        margin: 1rem 0;
        display: block;
    }

    .bio-text {
        line-height: 1.8;
        margin: 1rem 0;
    }

    .bio-text p {
        margin: 1rem 0;
    }

    .album {
        background-color: white;
        padding: 1rem;
        border-radius: 4px;
        margin-bottom: 1rem;
    }

    .album h3 {
        margin-top: 0;
    }

    .streaming-links {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .streaming-links a {
        display: inline-block;
        padding: 0.5rem 1rem;
        background-color: #ffb400;
        color: #000;
        text-decoration: none;
        border-radius: 4px;
        font-size: 0.9rem;
        transition: background-color 0.2s;
    }

    .streaming-links a:hover {
        background-color: #000;
        color: #ffb400;
    }

    .reviews {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .reviews li {
        background-color: white;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 4px;
        border-left: 4px solid #ffb400;
    }

    .reviews a {
        color: #0066cc;
        text-decoration: none;
    }

    .reviews a:hover {
        text-decoration: underline;
    }

    .stats {
        list-style: none;
        padding: 0;
        columns: 2;
        column-gap: 2rem;
    }

    .stats li {
        background-color: white;
        padding: 0.75rem;
        margin-bottom: 0.5rem;
        border-radius: 4px;
        break-inside: avoid;
    }

    .tech-specs h3 {
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }

    .tech-specs ul {
        margin: 0.5rem 0 0 1.5rem;
        padding: 0;
    }

    .tech-specs li {
        margin-bottom: 0.5rem;
    }

    .booking-info {
        background-color: #fff9c4;
        border: 2px solid #f57f17;
    }

    .contact-info {
        background-color: white;
        padding: 1rem;
        border-radius: 4px;
        margin-top: 1rem;
    }

    .contact-info a {
        color: #0066cc;
    }

    .social-links {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1rem;
    }

    .social-links a {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background-color: #000;
        color: #ffb400;
        text-decoration: none;
        border-radius: 4px;
        font-weight: bold;
        transition: all 0.2s;
    }

    .social-links a:hover {
        background-color: #ffb400;
        color: #000;
    }

    .press-footer {
        text-align: center;
        margin: 3rem 0 1rem;
        padding: 1rem 0;
        border-top: 2px solid #000;
        font-size: 0.9rem;
        color: #666;
    }

    .press-footer a {
        color: #0066cc;
        text-decoration: none;
    }

    .press-footer a:hover {
        text-decoration: underline;
    }

    @media (max-width: 600px) {
        .press-header h1 {
            font-size: 2rem;
        }

        .stats {
            columns: 1;
        }

        .social-links {
            flex-direction: column;
        }

        .social-links a {
            width: 100%;
            text-align: center;
        }
    }
</style>
```

---

## PROGRESS TRACKING

Use this section to track which tasks are completed:

### Week 1
- [ ] Task 1.1: Band photo + favicon
- [ ] Task 1.2: Open Graph + Twitter Card tags
- [ ] Task 1.3: Meta description
- [ ] Task 1.4: aria-labels + security
- [ ] Git commit and push

### Week 2
- [ ] Task 2.1: Reorganize homepage sections
- [ ] Task 2.2: May 9th event section
- [ ] Task 2.3: Language tag fix
- [ ] Task 2.4: rel="noopener noreferrer" verification
- [ ] Task 2.5: Local testing
- [ ] Git commit and push

### Week 3
- [ ] Task 3.1: JSON-LD schema
- [ ] Task 3.2: Accessibility verification
- [ ] Task 3.3: Semantic HTML polish
- [ ] Git commit and push

### Week 4
- [ ] Task 4.1: Create press-kit.astro page
- [ ] Task 4.2: Update homepage press kit link
- [ ] Task 4.3: Test press kit page
- [ ] Git commit and push

### Week 5
- [ ] Task 5.1: UTM tracking setup
- [ ] Task 5.2: Spotify reintegration
- [ ] Task 5.3: Playlist pitching strategy doc
- [ ] Git commit and push

### Week 6
- [ ] Task 6.1: Comprehensive testing
- [ ] Task 6.2: Festival outreach email template
- [ ] Task 6.3: Festival target list
- [ ] Task 6.4: Build & deploy to production
- [ ] Git commit and push

---

## NOTES & REMINDERS

**Important**:
- [ ] Do NOT commit `.env` file (contains FTP credentials)
- [ ] `.env` should be in `.gitignore` ✓ (already configured)
- [ ] Test locally before deploying (`npm run dev`)
- [ ] Test social sharing before announcing changes
- [ ] Keep band photo optimized (<500KB)

**Resources**:
- GoatCounter dashboard: https://mirrorball.goatcounter.com/dashboard
- GitHub repo: https://github.com/fterraneo/mirrorball-site
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

**Next Steps**:
1. Gather required assets (band photo, favicon, bio text, tech specs)
2. Start Week 1 when ready
3. Update progress tracking as you complete tasks
4. Commit changes to git weekly

---

## SUPPORT & QUESTIONS

If you have questions during implementation:
- Refer back to the detailed code snippets in each week
- Check the specific "Files to modify" sections
- Test locally before deploying
- Verify changes work on mobile devices

**Ready to begin? Ask me to start Week 1 when you have the required assets prepared!**

---

*Last Updated: May 22, 2026*
*Status: Ready for Implementation*
