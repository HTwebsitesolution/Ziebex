# Ziebex Website

A modern, responsive website for Ziebex - Global Consultancy Excellence, built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, clean design inspired by professional consultancy websites
- 📱 Fully responsive layout for all devices
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and transitions
- 🎯 SEO-friendly structure
- ♿ Accessible components

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Inter & Poppins** - Google Fonts

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
ziebex/
├── src/
│   ├── components/
│   │   ├── TopBar.jsx      # Top contact bar
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Features.jsx    # Services/Features section
│   │   ├── About.jsx       # About section
│   │   ├── Process.jsx     # How we work section
│   │   ├── CTA.jsx         # Call-to-action section
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles & Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```js
colors: {
  primary: '#2563eb',
  secondary: '#0ea5e9',
  accent: '#f59e0b',
  // ... more colors
}
```

### Content

Update the content in each component file located in `src/components/`.

## License

ISC
