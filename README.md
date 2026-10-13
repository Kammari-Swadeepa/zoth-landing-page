# ZOTH Token Sale

A responsive ZOTH token-sale landing page built with Next.js App Router, TypeScript, Tailwind CSS, shadcn-style UI components, Radix Dialog, lucide-react, Framer Motion, TanStack Query, and Sonner.

## Start the application

### Development

1. Install [Node.js 20.9 or later](https://nodejs.org/).
2. From the project root, install the dependencies:

```bash
npm ci
```

3. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The server reloads the page when you make code changes. Press `Ctrl+C` in the terminal to stop it.

### Production preview

Build the application, then start the production server:

```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000).

## Project notes

- The home page composes the announcement banner, navigation, hero and live sale card, partner strip, sale timeline/details, document links, and footer.
- `GET /api/sale` serves the mock sale payload in `src/lib/sale.ts`. Both sale panels load that payload with TanStack Query and display loading and error states.
- The sale countdown updates every second. Wallet and Sonar buttons open placeholder Radix dialogs; no Web3 connection is made.
- The hero uses a short Framer Motion entrance animation and respects reduced-motion preferences.
- The page is designed to stack on narrow screens and reflow for desktop.

## Checks

```bash
npm run lint
npm run build
```

## Deployment

Deploy by importing this repository into Vercel and keeping the default Next.js build settings. This project does not yet have a live deployment URL.
