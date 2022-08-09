
import * as fs from 'fs'

export default function Sitemap() {
  return null;
}

export const getServerSideProps = async ({ res }) => {
  //Dynamically generate sitemap.xml for SEO  
  const BASE_URL = "http://localhost:3000"

  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        //Filter pages as required
        "_app.js",
        "_document.js",
        "404.js",
        "example",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });


  const dynamicPaths = [
    /*
    * In a proper app, you can query the backend
    * to obtain dynamic paths and insert into this array
    */
  ]

  const allPaths = [...dynamicPaths, ...staticPaths];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
      .map((url) => {
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
      })
      .join("")}
      </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};