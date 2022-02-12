module.exports = {
   reactStrictMode: true,
   images: {
      domains: ['media.api-sports.io'],
   },
   async rewrites() {
      return [
        {
          source: "/bear.js",
          destination: "https://cdn.panelbear.com/analytics.js",
        },
      ];
    },
}
