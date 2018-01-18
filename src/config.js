export default {
  apiUrl: 'http://yoursite.com/api/',
};
const siteConfig = {
  siteName: 'ZFLARE',
  siteIcon: 'ion-flash',
  footerText: 'ZFlare',
};

const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault',
};
const language = 'english';
const AlgoliaSearchConfig = {
  appId: '',
  apiKey: '',
};
const Auth0Config = {
  domain: 'zflare.auth0.com',
  clientID: 'nvixH20qeWSiAFIeeI75e5Oc9sBkQr7P', //
  options: {
    auth: {
      autoParseHash: true,
      redirect: false,
    },
    languageDictionary: {
      title: 'Isomorphic',
      emailInputPlaceholder: 'demo@gmail.com',
      passwordInputPlaceholder: 'demodemo',
    },
    icon: '',
    theme: {
      labeledSubmitButton: true,
      logo: 'https://s3.amazonaws.com/redqteam.com/logo/isomorphic.png',
      primaryColor: '#E14615',
      authButtons: {
        connectionName: {
          displayName: 'Log In',
          primaryColor: '#b7b7b7',
          foregroundColor: '#000000',
          icon: undefined,
        },
      },
    },
  },
};
const firebaseConfig = {
  apiKey: "AIzaSyAxrhp6j7LWCFXHQEMKzNeYwbhkjETAdkA",
  authDomain: "zflare-5b23e.firebaseapp.com",
  databaseURL: "https://zflare-5b23e.firebaseio.com",
  projectId: "zflare-5b23e",
  storageBucket: "",
  messagingSenderId: "22177765282"
};
const googleConfig = {
  apiKey: '', //
};
const mapboxConfig = {
  tileLayer: '',
  maxZoom: '',
  defaultZoom: '',
  center: [],
};
const youtubeSearchApi = 'AIzaSyAyxTGFWlwC7xQocubhJhNmcv5Z5_h0j04';
export {
  siteConfig,
  themeConfig,
  language,
  AlgoliaSearchConfig,
  Auth0Config,
  firebaseConfig,
  googleConfig,
  mapboxConfig,
  youtubeSearchApi,
};
