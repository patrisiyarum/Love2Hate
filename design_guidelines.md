# Design Guidelines: Reverse Recommendation System

## Design Approach
**Selected Approach:** Design System (Modern Utility-Focused)  
**Justification:** This is a utility application where clarity, usability, and efficient information display are paramount. The interface needs to guide users through a simple flow: input dislikes → receive suggestions.

**Core Principle:** Playful functionality - maintain a clean, efficient interface with subtle personality through color and typography.

---

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background: 222 47% 11% (deep charcoal)
- Surface: 222 47% 14% (elevated cards)
- Primary: 262 83% 58% (vibrant purple - energetic, creative)
- Primary Hover: 262 83% 52%
- Text Primary: 0 0% 98%
- Text Secondary: 240 5% 65%
- Border: 240 6% 25%
- Success/Suggestion: 142 71% 45% (encouraging green)

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary: 262 83% 58%
- Text Primary: 222 47% 11%
- Text Secondary: 215 16% 47%
- Border: 214 32% 91%

### B. Typography

**Font Families:**
- Primary: 'Inter' (Google Fonts) - clean, modern, excellent readability
- Headings: 'Plus Jakarta Sans' (Google Fonts) - friendly, slightly playful

**Type Scale:**
- Page Title: text-3xl font-bold (Plus Jakarta Sans)
- Section Headers: text-xl font-semibold
- Card Titles: text-lg font-medium
- Body Text: text-base
- Helper Text: text-sm text-secondary

### C. Layout System

**Spacing Primitives:** Consistently use Tailwind units: 2, 4, 6, 8, 12, 16  
- Component padding: p-6 to p-8
- Section gaps: gap-6 to gap-8
- Vertical rhythm: space-y-8 for major sections

**Container:**
- Max width: max-w-4xl
- Centered: mx-auto
- Padding: px-6 lg:px-8

### D. Component Library

**Input Section:**
- Large textarea (min-h-32) with rounded-xl borders
- Placeholder: "Type what you don't like... (e.g., 'spicy food, horror movies, crowded places')"
- Character counter (text-sm text-secondary)
- Primary action button: Large (px-8 py-3), rounded-lg, vibrant gradient from primary to primary-hover
- Button text: "Find What I'd Love Instead ✨"

**Display Sections:**

*Dislikes Summary Card:*
- Rounded-xl surface with subtle border
- Heading: "What You're Not Into" with emoji (🚫)
- Tag-style chips for each dislike (rounded-full, text-sm, background: primary/10, text: primary)
- Flex wrap layout with gap-2

*Suggestions Grid:*
- Heading: "Here's What You Might Love" with emoji (✨)
- Grid: grid-cols-1 md:grid-cols-2 gap-4
- Each suggestion card includes:
  - Icon or emoji at top-left (text-2xl)
  - Suggestion title (text-lg font-semibold)
  - Brief description (text-sm text-secondary, line-clamp-2)
  - "Why you'd like this" section with bullet points
  - Subtle hover effect: transform scale-[1.02] transition-transform

**Cards:**
- Background: Surface color
- Border: 1px subtle border
- Border-radius: rounded-xl
- Padding: p-6
- Shadow: shadow-sm hover:shadow-md transition

**Empty/Loading States:**
- Empty: Centered illustration placeholder with friendly message
- Loading: Animated pulse skeleton in card grid pattern
- Error: Subtle alert banner with retry option

### E. Visual Enhancements

**Micro-interactions:**
- Button: Subtle scale on click (active:scale-95)
- Cards: Gentle hover lift (hover:shadow-md)
- Input focus: Ring-2 ring-primary/50

**Iconography:**
- Use Heroicons (outline style) via CDN
- Icon size: w-5 h-5 for inline, w-6 h-6 for feature icons
- Color: text-secondary, text-primary on hover

**No Hero Image:** This is a focused utility tool - no hero section needed

---

## Layout Structure

**Single-page Application Flow:**

1. **Header** (sticky top-0, backdrop-blur-sm)
   - App title with playful tagline
   - Theme toggle (sun/moon icon)
   - Minimal height: h-16

2. **Main Container** (py-12 space-y-10)
   - Input Section (prominent, top of page)
   - Dislikes Display (conditional, appears after submission)
   - Suggestions Grid (conditional, 2-column on desktop)

3. **Footer** (minimal)
   - Centered, text-sm, text-secondary
   - Simple credit line

**Responsive Breakpoints:**
- Mobile: Full-width cards, single column
- Tablet (md:): 2-column suggestion grid
- Desktop (lg:): Optimal max-width container

---

## Accessibility & Polish

- Maintain WCAG AA contrast ratios
- Focus states: Clear 2px ring on all interactive elements
- Consistent dark mode across all inputs and text areas
- Loading indicators for API calls
- Error messages: Clear, actionable, friendly tone
- Smooth transitions: transition-all duration-200