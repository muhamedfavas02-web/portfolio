# Product Requirements Document (PRD)

## Project Title
**Muhamed Favas - Personal Portfolio Website**

## 1. Introduction & Background
Muhamed Favas is an aspiring AI Content Creator and Marketer based in Kottakkal, Kerala, India. With a background in accounting combined with advanced expertise in AI video production, prompt engineering, and cinematic storytelling, he creates visual digital content for brands and businesses. 

The goal of this project is to build a premium, highly engaging, and visually stunning single-page portfolio website that showcases his unique skill set, services, projects, certifications, and testimonial evidence, while making it easy for prospective clients or partners to contact him.

---

## 2. Objectives & Success Metrics
* **Visual Wow Factor**: The site must feel premium, modern, and aligned with cutting-edge artificial intelligence and cinematic creativity.
* **Lead Generation**: Make it effortless for users to contact Favas via a contact form, direct email, phone, or social media links.
* **Responsive Design**: Flawless performance and aesthetics on mobile devices, tablets, and desktops.
* **Speed & Performance**: High loading speed (near-instantaneous) with optimized media assets, clean code, and zero heavy external dependencies unless required.

---

## 3. Target Audience
* Brands and businesses looking for AI-powered visual advertisements.
* Marketing agencies seeking prompt engineering and cinematic video creators.
* Social media managers seeking engaging reels and promotions.
* Collaborators in the emerging AI technology space.

---

## 4. Key Features & Page Structure

### 4.1. Navigation Bar (Sticky/Header)
* **Logo/Brand**: "MUHAMED FAVAS" (or stylized "MF")
* **Links**: Home, About, Services, Skills, Portfolio, Testimonials, Contact
* **Design**: Glassmorphism backdrop-blur, sliding hover indicator, and responsive mobile hamburger menu.

### 4.2. Hero Section
* **Content**: 
  * Main Headline: "MUHAMED FAVAS"
  * Subheadline/Role: "AI Content Creator & Cinematic Storyteller"
  * Visual: Premium portrait photo (or high-quality AI creative avatar) with glowing gradient borders.
  * CTA Buttons: "View Work" (scrolls to Portfolio) and "Contact Me" (scrolls to Contact).
* **Aesthetics**: Floating geometric particles, dark ambient grid background, dynamic typing effect for key skills.

### 4.3. About Me Section
* **Content**:
  * Professional bio highlighting Kerala roots, University of Calicut background, transition from analytical accounting to creative AI video production.
  * Highlight metrics/stats cards: "Analytical Mindset", "Emerging AI Tech", "Cinematic Visuals".

### 4.4. Services Section
* **Content**: 6 interactive service cards:
  1. AI Content Creation
  2. AI Video Production
  3. Prompt Engineering
  4. Social Media Content Creation
  5. Brand Advertisement
  6. Documentary & Travel Videos
* **Aesthetics**: Glassmorphism cards with glowing borders on hover, customized service-specific icons (SVG).

### 4.5. Skills Section
Divided into three distinct tabs or visual groupings:
1. **Technical Skills**: Interactive progress bars or badges (AI Content Creation, Prompt Engineering, Cinematic Storytelling, etc.).
2. **AI Tools**: Interactive grid of logo cards for ChatGPT, Gemini, Claude, Seedance, OpenArt, Higgsfield, ElevenLabs, OmniFlash, Nano Banana.
3. **Certifications**: Card showing "AI Content Creation & Marketing" (In Progress).

### 4.6. Portfolio Section
* **Filtering**: Dynamic tabs to filter projects: "All", "Commercials", "Travel & Docs", "Reels & Socials".
* **Cards**:
  * 6 realistic mock project cards representing categories:
    * AI Commercial Advertisements
    * Product Commercials
    * Travel Videos
    * Historical Documentary Videos
    * Social Media Reels
    * Brand Promotional Videos
  * Each card includes: Large preview image, category badge, project title, short description, hover-zoom animation, and a "View Project" action button triggering a media lightbox/modal.

### 4.7. Testimonials Section
* **Content**: 3 detailed reviews showing 5-star ratings and positive client feedback.
* **Component**: A modern glass card testimonial slider (carousel) with manual chevron controls and automatic transition.

### 4.8. Contact Section
* **Left Column**: Contact details (Email, Phone, Location) and interactive social icons (LinkedIn, Instagram, YouTube, Facebook).
* **Right Column**: Fully-validated HTML5 contact form (Name, Email, Subject, Message) with visual focus rings and a floating submit button.

### 4.9. Footer Section
* **Content**: Quick links, social media icons, copyright statement, and a subtle "Back to Top" button.

---

## 5. Design System & Tech Stack
* **Technology**: Vanilla HTML5, CSS3 Custom Properties (variables), and Vanilla JavaScript (ES6+).
* **Colors (Dark-Sci-Fi theme)**:
  * Background: Deep space gray/black (`#0a0b10` to `#12131a`)
  * Primary Accent: Violet/Neon Purple (`#8b5cf6` / `hsl(263, 90%, 60%)`)
  * Secondary Accent: Cyber Cyan (`#06b6d4` / `hsl(189, 94%, 43%)`)
  * Neutral Text: White/Off-white (`#f8fafc`) and Muted Gray (`#94a3b8`)
* **Typography**: Font family `Outfit` (Primary headings) and `Inter` (Body text) via Google Fonts.
* **Interactions**: Smooth scrolling, glassmorphism (`backdrop-filter: blur()`), glowing drop shadows, hover scale-up, and fade-in animations on scroll.
