/** @type {import('next').NextConfig} */
const author = "Daniel Demonceau";
module.exports = {
  reactStrictMode: true,
  env: {},
  publicRuntimeConfig: {
    // Will be available on both server and client
    author: author,
    domainName: "daniel.fashion",
    keywords: `${author}, Software Developer, Software Engineer, GIS Developer, GIS Engineer, Software Architect, Daniel Fashion`,
  },
};
