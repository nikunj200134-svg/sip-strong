# SipStrong - Elite Performance Nutrition Platform

> A modern, high-performance e-commerce platform for premium nutrition supplements built with Next.js 16, React 19, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📦 Features

- **Modern E-Commerce Platform**: Complete product catalog with filtering, search, and comparison
- **Dynamic Product Pages**: Advanced product details with image galleries and nutrition info
- **Shopping Cart**: Persistent cart with localStorage integration
- **User Authentication**: Firebase authentication with login/signup forms
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Advanced Animations**: Framer Motion, GSAP, and scroll animations
- **3D Graphics**: React Three Fiber for immersive visuals
- **Smooth Scrolling**: Lenis scroll for optimized user experience
- **SEO Optimized**: Server-side rendering with Next.js
- **Production-Ready**: Security hardened with error boundaries and logging

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20.x or higher
- **npm** 11.x or higher
- **Firebase Project** (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sipstrong.git
   cd sipstrong
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Fill in your Firebase credentials** in `.env.local`:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app auto-reloads as you edit files.

### Build & Production

Build for production:

```bash
npm run build
npm run start
```

Run linting:

```bash
npm run lint
```

## 📁 Project Structure

```
sipstrong/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── shop/            # Shop & category pages
│   │   ├── product/         # Dynamic product pages
│   │   ├── login/           # Authentication
│   │   └── ...              # Other pages
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── ProductCard.tsx  # Product listing card
│   │   ├── CartDrawer.tsx   # Shopping cart UI
│   │   └── ...              # Other components
│   ├── data/                # Static data
│   │   └── products.ts      # Product database
│   └── types/               # TypeScript types
│       └── cart.ts          # Cart interface
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript config
├── tailwind.config.js       # Tailwind CSS config
├── package.json             # Dependencies & scripts
└── vercel.json              # Vercel deployment config
```

## 🛠 Configuration Files

- **`next.config.ts`** - Image optimization, security headers, API routes
- **`tsconfig.json`** - TypeScript compiler options and path aliases
- **`tailwind.config.js`** - Tailwind CSS customization (colors, fonts, etc.)
- **`postcss.config.mjs`** - PostCSS plugins for Tailwind
- **`vercel.json`** - Vercel deployment configuration

## 🔐 Environment Variables

### Required Variables

All variables prefixed with `NEXT_PUBLIC_` are accessible in the browser.

```env
# Firebase Configuration (Required for authentication)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

See [`.env.example`](.env.example) for all available variables.

⚠️ **Never commit `.env.local`** - It's in `.gitignore` to prevent credential leaks.

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com/import)
3. Add environment variables in project settings
4. Deploy!

→ **See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions**

### Production Readiness Checklist

→ **See [PRODUCTION_CHECKLIST.md](PRODUCTION_CHECKLIST.md) for pre-deployment verification**

### Deployment Report

→ **See [PRODUCTION_DEPLOYMENT_REPORT.md](PRODUCTION_DEPLOYMENT_REPORT.md) for technical details**

## 📚 Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| [Next.js](https://nextjs.org/) | React framework with SSR | 16.1.6 |
| [React](https://react.dev/) | UI library | 19.2.3 |
| [TypeScript](https://www.typescriptlang.org/) | Type safety | 5 |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS | 4.2.1 |
| [Firebase](https://firebase.google.com/) | Authentication & Backend | 12.10.0 |
| [Framer Motion](https://www.framer.com/motion/) | Advanced animations | 12.34.3 |
| [GSAP](https://gsap.com/) | Animation library | 3.14.2 |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) | 3D graphics | 9.5.0 |
| [Lenis](https://lenis.darkroom.engineering/) | Smooth scrolling | 1.3.18 |

## 🎯 Key Pages

- **Home** (`/`) - Hero section with products and testimonials
- **Shop** (`/shop`) - Product catalog with filters
- **Product Details** (`/product/[id]`) - Individual product page
- **Category Pages** (`/shop/[category]`) - Category-specific products
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form
- **Login** (`/login`) - User authentication
- **Training** (`/training`) - Training information

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Production
npm run build            # Build for production
npm run start            # Start production server

# Quality
npm run lint             # Run ESLint
```

## 🐛 Troubleshooting

### Build Fails with "Firebase not configured"
- Verify all `NEXT_PUBLIC_FIREBASE_*` variables are in `.env.local`
- Check that values are not empty strings
- Restart dev server after updating env vars

### Images Not Loading
- Verify Unsplash URLs are HTTPS
- Check image URL format is correct
- Ensure image domain is in `next.config.ts` remote patterns

### Port 3000 Already in Use
```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Kill process on port 3000 (Windows PowerShell)
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force
```

## 📋 TypeScript

This project uses strict TypeScript. All files have proper type definitions.

```bash
# Type check without building
npx tsc --noEmit
```

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- Use TypeScript for type safety
- Follow ESLint rules
- Write descriptive commit messages
- Add comments for complex logic
- Test changes before pushing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Development Team** - Initial development and optimization

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Firebase](https://firebase.google.com/) - Backend services
- [Vercel](https://vercel.com/) - Deployment platform
- [Unsplash](https://unsplash.com/) - Product images

## 📞 Support

For questions or issues:
- 📧 Email: support@sipstrong.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/sipstrong/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/your-username/sipstrong/discussions)

---

**Made with ❤️ by the SipStrong Team**

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
