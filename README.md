This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)


## Getting Started

### Project Requirements:
```bash
npm version: >= 7 .0
node version: >= 16.0
```

### First, to install dependency:


```bash
npm ci
# or
yarn install --frozen-lockfile
```
### OR

```bash
npm i
# or
yarn install
```

Use `npm install` to add new dependencies, and to update dependencies on a project. Usually, you would use it during development after pulling changes that update the list of dependencies but it may be a good idea to use npm ci in this case.

Use `npm ci` if you need a deterministic, repeatable build. For example during continuous integration, automated jobs, etc. and when installing dependencies for the first time, instead of npm install.

### Secondly, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Additional Notes

- PWA: This project is PWA compatible, you just have to include relevant icons in `PWA.js` to enable PWA
- Redux-Toolkit & Redux persist: This project uses `Redux-Toolkit` ( Not `Redux`! ), `Redux-Toolkit` is a modern implementation and contains different methods of code implementation. An example for Redux-persist is on `/example/login` page and `/redux` to test the storage of JWT token from Rakita 
- Cookies: A simple redirection using SSR example can be found in `/example/login`. 
- Global theming: Can be styled under `/constants/theme.js` and applied in `app.js`. Current method of storage for global theming is in `Local Storage`
- GraphQL: Using `@apollo/client` and configured for NextJS. Can configure header and multiple http links in `server/client.js`
- Sitemap: Sitemap.xml is dynamically generated under `/pages/sitemap.xml.js` to allow SEO crawlers to know which URL to crawl

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



References:
- https://tsh.io/blog/ssr-vs-ssg-in-nextjs/
