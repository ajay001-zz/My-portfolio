# Modern Portfolio Website

A sleek, modern portfolio website built with Next.js 16, React, Tailwind CSS, and Framer Motion. Features advanced animations, responsive design, and an intuitive user interface.

## Features

- **Modern Design System**: Dark theme with glassmorphism effects and gradient accents
- **Smooth Animations**: Page transitions, scroll-triggered animations, and interactive elements
- **Responsive Layout**: Mobile-first design that works seamlessly on all devices
- **Interactive Components**: Filterable projects, smooth form validation, and scroll spy navigation
- **Performance Optimized**: Code splitting, lazy loading, and efficient rendering
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support
- **SEO Friendly**: Metadata, viewport configuration, and semantic structure

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with server-side rendering
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready animation library
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Flexible form validation
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Utilities**: [clsx](https://github.com/lukeed/clsx) - Conditional className utility
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── Navigation.tsx      # Header with navigation and scroll spy
│   ├── Hero.tsx            # Hero section with CTA
│   ├── About.tsx           # About section with skills
│   ├── Experience.tsx      # Work experience timeline
│   ├── Services.tsx        # Services offered
│   ├── Projects.tsx        # Portfolio with filters
│   ├── Contact.tsx         # Contact form with validation
│   ├── Footer.tsx          # Footer with links
│   ├── Button.tsx          # Reusable button component
│   ├── Badge.tsx           # Reusable badge component
│   ├── ScrollAnimations.tsx # Scroll animation utilities
│   └── ParallaxScroll.tsx  # Parallax scroll effects
├── hooks/
│   └── useScrollSpy.ts     # Hook for scroll spy navigation
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.ts          # Next.js configuration
└── postcss.config.js       # PostCSS configuration
```

## Design System

### Color Palette
- **Background**: `#0a0e27` - Deep navy background
- **Foreground**: `#f5f5f5` - Light text color
- **Primary**: `#3b82f6` - Blue for primary actions
- **Secondary**: `#06b6d4` - Cyan for secondary elements
- **Accent**: `#8b5cf6` - Purple for highlights
- **Muted**: `#1e293b` - Gray for backgrounds
- **Muted Foreground**: `#94a3b8` - Gray for text

### Typography
- **Display Font**: Space Mono - Used for logos and headings
- **Body Font**: Inter - Used for body text and descriptions

### Animations
- `fade-in` - Fade in animation
- `slide-in-up` - Slide up animation
- `slide-in-down` - Slide down animation
- `pulse-glow` - Pulsing glow effect
- `float` - Floating animation

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd modern-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

Edit the content in each component:
- **Navigation.tsx**: Update name/logo
- **Hero.tsx**: Update greeting and headline
- **About.tsx**: Update bio and skills
- **Experience.tsx**: Add your work experience
- **Services.tsx**: Update services offered
- **Projects.tsx**: Add your projects
- **Contact.tsx**: Update contact information
- **Footer.tsx**: Update social links

### Customize Colors

Edit the CSS variables in `app/globals.css`:
```css
:root {
  --background: #0a0e27;
  --foreground: #f5f5f5;
  --primary: #3b82f6;
  --secondary: #06b6d4;
  --accent: #8b5cf6;
  /* ... */
}
```

### Modify Animations

Update animation settings in `tailwind.config.ts` under the `keyframes` section.

## Components Documentation

### Navigation
Fixed header with scroll effects, mobile menu, and scroll spy highlighting.

### Hero
Landing section with animated background gradients and CTA buttons.

### About
Biography, skills grid, and key highlights in card layout.

### Experience
Timeline of work experiences with highlights and date ranges.

### Services
4-column service cards with icons and feature lists.

### Projects
Filterable project grid with tags, links, and hover effects.

### Contact
Contact form with validation, success states, and social links.

### Footer
Footer with quick links, social icons, and copyright information.

## Performance Tips

1. **Image Optimization**: Use Next.js `Image` component for automatic optimization
2. **Code Splitting**: Components are automatically code-split by Next.js
3. **Caching**: Static pages are automatically cached for faster loading
4. **Minification**: Production build automatically minifies CSS and JavaScript

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [https://vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

### Deploy to Other Platforms

The project can be deployed to any platform that supports Node.js:

```bash
npm run build
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to submit a pull request.

## Support

If you have any questions or need help, feel free to open an issue or contact me directly.
