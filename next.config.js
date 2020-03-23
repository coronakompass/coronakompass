const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    optimizedImages,
    {
      optimizeImagesInDev: true,
      inlineImageLimit: 10 * 1024,
      svgo: { plugins: [{ removeViewBox: false }] },
    },
  ],
]);
