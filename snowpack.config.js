/**@type {import('snowpack').SnowpackConfig} */
module.exports = {
  mount: {
    src: {
      url: "/dist",
    },
    public: {
      url: "/",
    },
  },
  plugins: ["@snowpack/plugin-dotenv", "@snowpack/plugin-react-refresh"],
};
