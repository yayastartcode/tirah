# Horizone - Hotel Booking App

A modern hotel booking application built with Vite, React, and Tailwind CSS v4.

## Tech Stack

- **Vite** - Next Generation Frontend Tooling (v5.x)
- **React** - JavaScript library for building user interfaces (v18.x)
- **Tailwind CSS** - Utility-first CSS framework (v4.x)
- **Lucide React** - Icon library

## Latest Setup (2025-2026)

This project uses the latest versions:
- Tailwind CSS v4 with CSS-first configuration
- @tailwindcss/vite plugin for seamless integration
- No tailwind.config.js needed - all config in CSS

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Features

- Responsive hotel booking interface
- Interactive tabs for different countries
- Favorite/wishlist functionality
- Authentication modal (Login/Signup)
- Toast notifications
- Filter buttons for property types
- Search functionality
- Newsletter subscription

## Project Structure

```
horizone-react/
├── public/
├── src/
│   ├── components/
│   │   ├── AuthModal.jsx
│   │   ├── DiscoverSection.jsx
│   │   ├── ExploreSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MostVisitedSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── PartnersSection.jsx
│   │   ├── PromoSection.jsx
│   │   ├── Toast.jsx
│   │   └── TrendingSection.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## Tailwind CSS v4 Configuration

Tailwind CSS v4 uses a CSS-first approach. Configuration is done directly in the CSS file using `@theme` directive:

```css
@import "tailwindcss";

@theme {
  --font-sans: 'Inter', sans-serif;
}
```

The Vite plugin handles everything automatically with automatic content detection.
