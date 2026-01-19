# Charu Enterprises Landing Page

A modern, responsive landing page for **Charu Enterprises – India**, a leading manufacturer and exporter of precision fence fittings and engineering components since 1969.

## 🎯 Overview

This project showcases Charu Enterprises' manufacturing excellence, global reach, and commitment to quality. The website features information about the company, its products, services, and provides easy ways for customers to get in touch.

**Key Statistics:**
- 55+ Years of Manufacturing Excellence
- 150+ Million Components Exported
- Serving 4+ Continents
- ISO 9001:2015 Certified

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.x** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

### Build & Development
- **Vite** - Fast build tool and dev server
- **ESLint** - Code quality
- **Node.js / npm** - Package management

## 📁 Project Structure

```
src/
├── components/
│   ├── common/              # Reusable components
│   │   ├── InquiryForm.tsx
│   │   └── index.ts
│   ├── home/                # Home page sections
│   │   ├── Hero.tsx
│   │   ├── TrustSection.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ContactSection.tsx
│   │   └── index.ts
│   └── layout/              # Global layout
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── index.ts
├── pages/
│   ├── home/
│   │   ├── page.tsx
│   │   └── data.ts
│   ├── about/
│   │   ├── page.tsx
│   │   └── data.ts
│   ├── contact/
│   │   ├── page.tsx
│   │   └── data.ts
│   └── index.ts
├── data/                    # Global shared data
│   ├── constants.ts
│   ├── badges.ts
│   ├── products.ts
│   └── index.ts
├── App.tsx                  # Main router
├── index.tsx               # Entry point
├── types.ts                # TypeScript interfaces
└── constants.tsx           # App constants

```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd charu-enterprises-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## 🎨 Features

### Pages
- **Home** - Hero section with manufacturing capabilities, trust badges, and call-to-action
- **About Us** - Company history, founders, credentials, and certifications
- **Contact** - Contact information, contact form, and business hours

### Components
- **Header** - Navigation with responsive mobile menu
- **Footer** - Company information, links, and social media
- **Hero Section** - Eye-catching introduction with CTA buttons
- **Inquiry Form** - Contact form with validation
- **Trust Section** - Certification and credibility badges
- **Why Choose Us** - Manufacturing capabilities showcase

### Functionality
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Smooth Navigation** - Page transitions with scroll-to-top
- **Interactive Elements** - Hover effects and transitions
- **Google Drive Integration** - Download catalogue from Google Drive
- **Contact Form** - Easy customer inquiry submission

## 🏗️ Architecture

### Data Organization
- **Page-Colocated Data**: Each page has its own `data.ts` file containing page-specific data
- **Global Data**: Shared data (brand info, badges, products) in `src/data/`
- **Type Safety**: All data structures defined in `types.ts`

### Component Hierarchy
```
App (Router)
├── Header
├── HomePage
│   ├── Hero
│   ├── TrustSection
│   ├── WhyChooseUs
│   └── ContactSection
├── AboutPage
├── ContactPage
└── Footer
```

### Navigation Flow
- Uses React state-based routing
- Smooth scroll-to-top on page transitions
- Back buttons for secondary pages

## 🔧 Configuration

### Environment Setup
- No environment variables required for basic setup
- Vite configuration in `vite.config.ts`
- TypeScript configuration in `tsconfig.json`

### Customization

**Update Company Information:**
- Edit `src/data/constants.ts` for brand name and description
- Update `src/pages/[name]/data.ts` for page-specific content

**Update Google Drive Link:**
- In `src/components/home/Hero.tsx`, replace the URL in the `handleDownload` function

**Styling:**
- All styling uses Tailwind CSS utility classes
- Global styles in component className attributes
- Responsive breakpoints: `sm:`, `md:`, `lg:` prefixes

## 📱 Responsive Design

- **Mobile First Approach** - Optimized for all screen sizes
- **Mobile Menu** - Hamburger navigation for screens below 768px
- **Flexible Layouts** - Grid and flex layouts that adapt to screen size
- **Touch-Friendly** - Larger tap targets and spacing on mobile

## 🎯 Key Features Explained

### 1. Hero Section
- Download catalogue button (opens Google Drive)
- About Us navigation button (redirects to about page)
- Trust badges and company tagline
- Responsive image showcase

### 2. Inquiry Form
- Name, email, phone, company fields
- Message textarea
- Success/error states
- Form validation

### 3. Contact Information
- Multiple office locations
- Phone numbers (India & USA)
- Business hours
- Email contact

### 4. About Page
- Company history and mission
- Founder profiles
- Certifications and awards
- Company details

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This generates an optimized production build in the `dist/` folder.

### Deploy to
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📊 Performance

- **Build Size**: ~242 KB (71.9 KB gzipped)
- **Module Count**: 1716 modules
- **Build Time**: ~2 seconds
- **Lighthouse Score**: Optimized for performance and accessibility

## 🔒 Security

- No sensitive data in frontend
- Safe external links with `target="_blank"`
- Secure form handling
- Content Security Policy ready

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
- Ensure all imports use correct paths
- Check that types are properly exported from `types.ts`

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)

## 📄 License

All rights reserved © 2026 Charu Enterprises – India

## 📞 Contact

For inquiries about this website or Charu Enterprises products:
- **Phone (India):** +91 9830083777
- **Phone (USA):** +1 (346) 433-7572
- **Email:** opmaskara1008@gmail.com

## 👥 Contributing

To contribute to this project:
1. Follow the existing code structure and naming conventions
2. Use TypeScript for type safety
3. Maintain responsive design principles
4. Test on multiple devices
5. Keep commits atomic and well-documented

## 🎉 Future Enhancements

- [ ] Add product catalog with filtering
- [ ] Integrate CMS for content management
- [ ] Add blog/news section
- [ ] Implement multi-language support
- [ ] Add customer testimonials
- [ ] Integrate analytics tracking
- [ ] Add advanced search functionality
- [ ] Implement email notification system

---

**Built with ❤️ for Charu Enterprises – India**
