module.exports = {
  i18n: {
    locales: ['en', 'de'], // Define the locales, e.g., 'en' for English and 'de' for German
    defaultLocale: 'en',   // Set the default locale
    localeDetection: true, // Enable or disable automatic locale detection based on user preferences
  },
  reactStrictMode: false,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  output: "standalone",
};
