module.exports = {
  pwa: {
    workboxOptions: {
      navigateFallback: "index.html",
      exclude: [/_redirects/],
    },
  },
};
