# React + Vite Project

## 📋 Overview

This is a React application built with Vite, offering a modern, fast development experience with Hot Module Replacement (HMR) and essential ESLint configurations.

## 🚀 Prerequisites

- Node.js (v16+ recommended)
- npm (v8+) or Yarn

## 🔧 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/riva211/OpalLanding.git
cd OpalLanding
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using Yarn:
```bash
yarn install
```

## 📜 Available Scripts

### Development Server
Start the development server with Hot Module Replacement:
```bash
npm run dev
```
- Opens the application at `http://localhost:5173`
- Supports Hot Module Replacement for instant updates

### Build for Production
Create a production-ready build:
```bash
npm run build
```
- Compiles and minifies the application
- Outputs to the `dist/` directory

### Linting
Run ESLint to check for code quality:
```bash
npm run lint
```

### Preview Production Build
Test the production build locally:
```bash
npm run preview
```


## 🔌 Vite Plugins

This project supports two official Vite React plugins:

### @vitejs/plugin-react
- Uses Babel for Fast Refresh
- Provides extensive React support
- Included by default

### @vitejs/plugin-react-swc
- Utilizes SWC for faster compilation
- Alternative to Babel
- Can be switched in `vite.config.js`

## 🛠 Recommended Extensions

- ESLint
- Prettier
- React Developer Tools

## 🐛 Troubleshooting

- Ensure Node.js and npm are up to date
- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies if issues persist

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [ESLint Configuration](https://eslint.org/docs/user-guide/configuring/)

