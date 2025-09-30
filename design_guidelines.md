# Design Guidelines: Página de Vendas do eBook - Libertação de Redes Sociais

## Design Approach
**Reference-Based**: Modern digital product sales pages (Gumroad, ConvertKit, Notion templates) with mobile-first optimization. Focus on conversion-optimized layouts with strong visual hierarchy and emotional engagement.

## Core Design Principles
1. **Mobile-First Excellence**: Every element optimized for touch and small screens
2. **High Contrast Conversion**: Bold CTAs that stand out at every scroll point
3. **Progressive Disclosure**: Each section reveals value, building desire
4. **Trust Through Design**: Visual credibility signals throughout

## Color Palette

**Primary Brand Colors:**
- Deep Purple: 270 60% 35% (authority, transformation, digital wellness)
- Vibrant Teal: 175 70% 45% (freshness, clarity, mental health)

**Accent & Supporting:**
- Success Green: 145 60% 50% (for positive transformations, CTAs)
- Warning Orange: 25 85% 60% (problem sections, urgency)
- Neutral Dark: 240 8% 15% (text, backgrounds)
- Soft Gray: 240 5% 96% (section backgrounds)

**Dark Mode Alternative:**
- Background: 240 10% 8%
- Card backgrounds: 240 8% 12%
- Maintain primary colors with slightly reduced saturation

## Typography

**Font Families:**
- Headlines: 'Montserrat', sans-serif (Bold 700-800 weights)
- Body: 'Inter', sans-serif (Regular 400, Medium 500)
- Accent/CTAs: 'Poppins', sans-serif (SemiBold 600)

**Hierarchy:**
- Hero H1: text-4xl md:text-5xl lg:text-6xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-bold
- Subheads: text-xl md:text-2xl, font-medium
- Body: text-base md:text-lg, leading-relaxed
- CTAs: text-lg md:text-xl, font-semibold

## Layout System

**Spacing Units**: Consistent use of 4, 8, 12, 16, 20, 24, 32 (p-4, mb-8, py-12, etc.)

**Container Widths:**
- Mobile: px-4 (full width minus 1rem padding)
- Tablet/Desktop: max-w-6xl mx-auto px-6
- Text Content: max-w-3xl for optimal readability

**Section Padding:**
- Mobile: py-12 to py-16
- Desktop: py-20 to py-32
- Hero: min-h-screen with natural flow, not forced 100vh

## Component Library

### Hero Section
- Large 3D mockup image (500x700px minimum) positioned prominently
- Gradient background overlay (purple to teal gradient at 45deg, subtle)
- Headline with emoji 👉 integrated naturally
- Two-line subtitle with breathing room
- Primary CTA button (large, rounded-2xl, shadow-2xl, success green)
- Scroll indicator or trust badge ("Garantia 7 dias" badge)

### Problem Section
- Warning-colored accent (orange tones)
- Three emoji-led bullet points with generous spacing
- Each point in card format with icon, avoiding plain list
- Empathetic closing statement with emphasis

### Solution Section (Ebook Content)
- Grid layout: grid-cols-1 md:grid-cols-2 gap-6
- Feature cards with icons (brain, clock, rocket, lightbulb, chart)
- Each card: icon, bold title, description
- Rounded corners (rounded-2xl), subtle shadows, hover lift effect

### Bonus Section
- Two prominent cards side-by-side on desktop, stacked mobile
- Gift emoji 🎁 integrated into header
- Visual representation (icon or small image) for each bonus
- "GRÁTIS" or "BÔNUS" badge on cards

### Benefits Section
- Four benefit cards in 2x2 grid (mobile: stack)
- Icon + short impactful statement
- Use checkmarks or positive icons
- Light background to create visual break

### Testimonials
- Two testimonial cards with:
  - Avatar placeholder (circular, 60x60px)
  - Name and quote
  - Star rating visual (5 stars)
  - Subtle quotation marks design element

### Guarantee Section
- Shield or badge icon
- Lightning bolt emoji ⚡ in headline
- Large "7 DIAS" text treatment
- High contrast background (teal or purple)
- Reassuring copy with secondary CTA

### FAQ Section
- Accordion/expandable cards (3 questions visible by default)
- Numbered questions (1, 2, 3)
- Clean expand/collapse icons
- Generous padding for touch targets (min-h-14)

### Final CTA Section
- Full-width colored background (gradient or solid purple)
- Repeated hero messaging with urgency
- Large CTA button with glow/shadow effect
- Trust signals below (payment icons, guarantee reminder)

## Images

**Primary Hero Image:**
- 3D eBook mockup (portrait orientation, 500-700px wide)
- Floating/levitating effect with subtle shadow
- Clean background, professional rendering
- Position: Top center on mobile, right side on desktop

**Supporting Images:**
- Planner mockup for bonus section (300x400px)
- Checklist visual for second bonus (300x400px)
- Abstract brain/focus imagery for benefits section (optional, decorative)

**Placement Strategy:**
- Hero: Large mockup dominates above fold
- Bonus cards: Smaller product previews
- Background: Subtle gradient shapes, no distracting patterns

## Animations
- Minimal: Fade-in on scroll for sections (opacity only)
- Hover: Subtle lift (translate-y-1) on cards and buttons
- CTA pulse: Gentle scale animation on primary button (optional)
- No parallax, no complex scroll-driven effects

## Mobile-Specific Optimizations
- Touch targets minimum 44x44px
- Sticky CTA bar at bottom on mobile
- Single column layout below md breakpoint
- Larger text sizes for readability (never below 16px base)
- Simplified navigation (hamburger if needed)
- Collapsible FAQ for vertical space efficiency

## Conversion Optimization Elements
- Multiple CTAs (hero, after problem, after benefits, final)
- Social proof strategically placed after solution section
- Urgency signals subtle but present
- Progress indicators showing value accumulation
- Clear pricing/value proposition at each CTA
- Exit-intent consideration (add sticky footer CTA)