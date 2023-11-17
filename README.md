# Jason | SaberXDev : PokeSquad Web App

A simple Next.Js 13 application for building your random squad of Pokemons from Gen 1 to 3 because they are the only
REAL Pokemon to ever exist...

Just kidding! If you would like to include the most recent Gen Pokemons, simply repliacte this codebase and edit the `randomId` variable in `Pokemon.tsx` to return a random integer up to the current total number of Pokemons available across all generations. Voila!

The codebase features a hybrid of the latest app routing architecture along with page directory naming conventions via exports per app component.

\*\*Note: Typescript's `expect error` comment is implemented at `_app.tsx` as a temporary workaround for builds failing with React server components. This will be updated in the future once I have time to hunt down the new documentations for proper syntax rewrites.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
