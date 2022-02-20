module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: { version: "3" },
        modules: "auto",
        targets: {
          node: true,
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: ["@babel/transform-runtime"],
};
