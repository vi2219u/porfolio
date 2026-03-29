# Custom Next.js Portfolio

A creative, modern, and striking personal portfolio website built with Next.js (App Router), Tailwind CSS v4, and Framer Motion. This project avoids generic layouts and introduces asymmetric elements, glassmorphism, and smooth micro-interactions.

## Features
- **Next.js 15+ App Router**: Fast, SEO-friendly, and modern architecture.
- **Tailwind CSS v4**: Beautiful, responsive, and custom design system.
- **Framer Motion**: Smooth scroll-triggered animations and hover effects.
- **Dark/Light Mode**: Seamlessly integrated theme toggling using `next-themes`.
- **Responsive Design**: Works perfectly across mobile, tablet, and desktop devices.
- **Clean Code**: Highly modular structure focusing on best practices.

## Prerequisites
- Node.js 18.x or later
- npm (Node Package Manager)

## Getting Started

1. **Clone the repository** or download the source code.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Folder Structure
- `src/app/` - Main App Router pages and global layouts
- `src/components/ui/` - Reusable layout components (Navbar, Footer)
- `src/components/sections/` - Content sections (Hero, About, Projects, Contact)
- `src/components/ThemeProvider.tsx` - Configuration for dark/light mode context

## Deployment
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Go to Vercel and create a new project.
3. Import your GitHub repository.
4. Keep the default settings (Next.js preset) and click **Deploy**.
5. Your custom portfolio will be live in seconds!
