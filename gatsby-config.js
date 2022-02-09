module.exports = {
  siteMetadata: {
    siteUrl: "http://www.ctodelpacifico.com/",
    url: "http://www.ctodelpacifico.com/",
    title: "CTO DEL PACIFICO",
    description: "CTO DEL PACIFICO empresa dedicada a la venta de equipo de computo, papeleria para oficina y mucho mas, Hacemos cotizaciones cotizaciones con servicios de redes, camaras, instalacion de equipos de ofina y paginas web.",
    keywords: "cto del pacifico, cto del pacifico acapulco, venta equipo de computo, venta de equipo de computo acapulco, papeleria acapulco, venta de papeleria acapulco",
    image: "images/cto.jpeg",
    titleTemplate: "Acapulco",
    twitterUsername: "@donatto18"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `categorias`,
        path: `./src/pages/categorias`,
      },
      __key: `categorias`,
    },
  ],
};
