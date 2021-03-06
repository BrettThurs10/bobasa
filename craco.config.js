const path = require(`path`);
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@Components": path.resolve(__dirname, "src/components/*"),
      "@Utils": path.resolve(__dirname, "src/utils/*"),
    },
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
