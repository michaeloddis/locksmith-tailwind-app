# Locksmith Tailwind App

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-20%2B-339933?logo=nodedotjs&logoColor=white)

An interactive lock-style code generator built with React + TypeScript + Tailwind CSS v4.

You can set:

- Minimum digit
- Maximum digit
- Code length

Then generate a random numeric code where each digit is selected in the configured range.

## Screenshot

![Locksmith App preview](./docs/screenshot.png)

## Features

- Lock-inspired UI with keyboard-friendly numeric controls
- Random code generation based on selected range and length
- Duplicate prevention against recent generated codes (history window of 10)
- Animated digit reveal using Motion (`motion/react`)
- Light/dark/system theme support with persisted preference
- Tailwind v4 + shadcn-style token setup

## Behavior Notes

- Input fields accept numeric values only.
- Increment/decrement is available via arrow buttons and `ArrowUp` / `ArrowDown` keys.
- Default values are:
- `minDigit = 1`
- `maxDigit = 4`
- `codeLength = 5`
- `Code length` has a minimum of `4` in the UI.
- Press `d` (outside form inputs) to toggle light/dark mode.

## Tech Stack

- React 19
- TypeScript 5
- Vite 7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- shadcn/tailwind base styles
- Motion (`motion/react`)
- Lucide React icons
- UUID for generated input IDs

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Type-check and build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript checks without emit
- `npm run format` - Format `ts` and `tsx` files with Prettier

## Project Structure

- `src/main.tsx` - App bootstrap and theme provider wiring
- `src/App.tsx` - Root layout container
- `src/CodeGenerator.tsx` - Main generator UI and state orchestration
- `src/hooks/useCodeGenerator.ts` - Random generation and uniqueness history logic
- `src/components/lock/` - Lock input controls and action buttons
- `src/components/code/` - Generated code visual output
- `src/components/theme-provider.tsx` - Theme state, persistence, and keyboard toggle
- `src/index.css` - Tailwind imports, tokens, and app component styles

## Notes

- The project currently keeps most component styling in `src/index.css`.
- `src/styles.css` remains in the repository as legacy styling tokens/reference.
