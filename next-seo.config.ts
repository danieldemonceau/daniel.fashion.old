import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const author = publicRuntimeConfig.author;
const domainName = publicRuntimeConfig.domainName;

const config = {
  titleTemplate: `${domainName} | %s`,
  title: `${domainName} | %s`,
  defaultTitle: `${domainName} | %s`,
  noindex: false,
  nofollow: false,
  additionRobotsProps: {
    nosnippet: true,
    notranslate: true,
    noimageindex: true,
    noarchive: true,
    maxSnippet: -1,
    maxImagePreview: "none",
    maxVideoPreview: -1,
  },
  disableGooglebot: false,
  description: `Personal Branding Website of ${author}`,
  canonical: `https://${domainName}/`,
  // additionalLinkTags: "",
  twitter: {
    cardType: "",
    site: "",
    handle: "daniel.demonceau",
  },
  facebook: {
    appId: "",
  },
  openGraph: {
    url: `${domainName}`,
    type: "website",
    title: `${domainName}`,
    description: `Personal Branding Website of ${author}`,
    locale: "en_AU",
    site_name: `${domainName}`,
    profile: {
      firstName: "Daniel",
      lastName: "Demonceau",
      username: "daniel.demonceau",
      gender: "M",
    },
  },
};

export default config;
