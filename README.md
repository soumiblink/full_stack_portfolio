# Soumi Ghosh - Full-Stack Developer Portfolio

A modern, performant, and accessible portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Performance & SEO
- ✅ Comprehensive SEO meta tags (Open Graph, Twitter Cards)
- ✅ Lazy loading for all major components
- ✅ Code splitting with optimized chunks
- ✅ PWA support with offline capabilities
- ✅ Image optimization and caching strategies
- ✅ Sitemap and robots.txt configuration

### Accessibility
- ✅ ARIA labels and semantic HTML throughout
- ✅ Skip-to-content link for keyboard navigation
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Focus states on all interactive elements
- ✅ Screen reader friendly
- ✅ Form validation with proper labels

### Code Quality
- ✅ Strict TypeScript configuration enabled
- ✅ Error boundaries for graceful error handling
- ✅ Centralized configuration files
- ✅ Type-safe data structures
- ✅ Clean component architecture

### Features
- ✅ Dark/Light theme toggle
- ✅ Responsive design for all devices
- ✅ Smooth scroll navigation
- ✅ Loading states and spinners
- ✅ Toast notifications
- ✅ Contact form with validation

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Theme:** next-themes
- **PWA:** vite-plugin-pwa

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── ThemeToggle.tsx
│   ├── ErrorBoundary.tsx
│   └── SkipToContent.tsx
├── config/             # Configuration files
│   ├── contact.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
├── pages/              # Page components
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Configuration

### Update Personal Information

Edit the configuration files in `src/config/`:

- `contact.ts` - Email, phone, location, social links
- `projects.ts` - Project details and links
- `skills.ts` - Technical skills and expertise
- `experience.ts` - Work experience and achievements

### SEO Configuration

Update meta tags in `index.html`:
- Title, description, keywords
- Open Graph tags
- Twitter Card tags

## 🎨 Customization

### Theme Colors

Modify theme colors in `src/index.css`:
```css
:root {
  --primary: ...;
  --secondary: ...;
  /* etc */
}
```

### Components

All components are modular and can be easily customized or replaced.

## 📊 Build Optimization

- **Code Splitting:** Vendor and UI libraries are split into separate chunks
- **Lazy Loading:** Components load on-demand
- **PWA:** Service worker caches assets for offline use
- **Image Optimization:** Images are cached with appropriate strategies

## 🔒 TypeScript Configuration

Strict mode enabled with:
- `noImplicitAny: true`
- `strictNullChecks: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`

## 📱 PWA Features

- Offline support
- Install to home screen
- Asset caching
- Runtime caching for fonts and images

## 🧪 Testing

```bash
# Run linter
npm run lint
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- Email: soumi4717@gmail.com
- GitHub: [@soumiblink](https://github.com/soumiblink)
- LinkedIn: [Soumi Ghosh](https://linkedin.com/in/soumi-ghosh-7129012a5?)

---

Built with ❤️ by Soumi Ghosh
