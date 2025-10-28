# FiverFlow Product Page

A premium, minimal, dark-themed product page for FiverFlow built with React, TailwindCSS, and Framer Motion.

## 🎨 Design Philosophy

This page follows the high-end, minimalist aesthetic of sites like Vercel and Resend:
- **Dark Theme**: Deep black background (#0A0A0A) with white text
- **Minimal Design**: Clean typography, lots of whitespace, perfect alignment
- **No Visual Clutter**: No emojis, bright gradients, or heavy shadows
- **Subtle Animations**: Tasteful micro-interactions with Framer Motion

## 🏗️ Structure

### Components
All components are modular and located in `/src/components/product/fiverflow/`:

- **Navbar.tsx** - Sticky navigation with dropdown menu
- **HeroSection.tsx** - Full viewport hero with headline and mockup
- **OverviewSection.tsx** - Product description with use case pills
- **FeaturesSection.tsx** - 4 feature cards with monochrome icons
- **StatsSection.tsx** - Animated counters with stats
- **CTASection.tsx** - Final call-to-action
- **Footer.tsx** - Minimal footer with links

### Main Page
- **FiverFlow.tsx** - Main page component with SEO meta tags

## 🚀 Features

### Navigation
- Sticky navbar with backdrop blur on scroll
- Dropdown menu for "More" section
- Social icons (Discord, X) with hover effects
- Responsive design for all screen sizes

### Hero Section
- Large, bold headline with subheadline
- Two CTA buttons: "View Live" (primary) and "Learn more" (secondary)
- Product mockup with subtle glassmorphism effect
- Subtle background elements (very low opacity)

### Features
- 4 feature cards with outline SVG icons
- Hover effects with border color transitions
- Monochrome design (no colors, only white/gray tones)

### Stats
- Animated counters that count up on scroll
- Clean stat cards with hover effects
- Professional metrics display

### Animations
- Fade-in effects on scroll
- Subtle hover transitions
- Smooth micro-interactions
- All animations are restrained (0.15s-0.35s duration)

## 🎯 Content & Copy

### Current Copy
- **Headline**: "FiverFlow — AI automation for freelance workflows"
- **Subheadline**: "Automate client onboarding, task handling and billing with perceptive AI workflows."
- **Features**:
  1. "Automated client onboarding" — "Capture requests, set tasks, and reply automatically."
  2. "Integrated billing" — "Connect Stripe and get paid automatically."
  3. "Actionable analytics" — "Understand revenue, time spent, and conversion."
  4. "Seamless integrations" — "Connect with your favorite tools and platforms."

### How to Update Copy
1. Edit the text content in each component file
2. Update SEO meta tags in `FiverFlow.tsx`
3. Modify feature descriptions in `FeaturesSection.tsx`
4. Update stats in `StatsSection.tsx`

## 🔗 Links & CTAs

### Primary CTA
- **"View Live"** button links to `https://fiverflow.com`
- Opens in new tab with proper security attributes
- Located in Hero and CTA sections

### Secondary Links
- **"Learn more"** button (scrolls to Features section)
- **"Contact / Press"** link in CTA section
- Footer links: Privacy, Terms, Contact

## 🎨 Styling

### Color Palette
- **Background**: #0A0A0A (deep black)
- **Primary Text**: #FAFAFA (white)
- **Secondary Text**: #A6A6A6 (gray)
- **Borders**: rgba(255,255,255,0.04) (subtle white)
- **Accent**: White (used sparingly for CTAs)

### Typography
- **Font**: Inter/Geist (modern sans-serif)
- **Weights**: Bold for headlines, medium for subheadings, regular for body
- **Sizes**: Responsive scaling from mobile to desktop

### Spacing
- Generous whitespace between sections
- Consistent padding and margins
- Perfect alignment and grid systems

## 📱 Responsive Design

- **Mobile**: Stacked layout, adjusted typography
- **Tablet**: 2-column grids where appropriate
- **Desktop**: Full 4-column layouts
- **All breakpoints**: Maintains visual hierarchy

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Focus states on interactive elements
- Keyboard navigation support
- ARIA attributes on dropdowns
- Alt text for images (when added)

## 🔧 Technical Details

### Dependencies
- React 18+
- TailwindCSS 3+
- Framer Motion 11+
- TypeScript

### Performance
- Optimized animations (only animate on scroll into view)
- Efficient re-renders with proper React patterns
- Minimal bundle size with tree-shaking

## 📝 Customization Guide

### Adding New Features
1. Add feature object to `features` array in `FeaturesSection.tsx`
2. Include SVG icon (outline style, monochrome)
3. Add title and description

### Updating Stats
1. Modify `stats` array in `StatsSection.tsx`
2. Update counter animation logic if needed
3. Adjust labels and values

### Changing Colors
1. Update Tailwind classes throughout components
2. Maintain monochrome palette
3. Keep contrast ratios accessible

### Adding Sections
1. Create new component in `/components/product/fiverflow/`
2. Import and add to `FiverFlow.tsx`
3. Follow existing design patterns

## 🚀 Deployment

The page is ready for production deployment:
- All components are optimized
- SEO meta tags included
- Responsive design tested
- Accessibility features implemented
- Performance optimized

## 📞 Support

For questions or modifications:
- Review component structure in `/src/components/product/fiverflow/`
- Check TailwindCSS documentation for styling
- Refer to Framer Motion docs for animations
- Ensure all links point to correct destinations

---

**Built with ❤️ for OpenForge**
