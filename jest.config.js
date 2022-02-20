module.exports = {
  testEnvironment: "node",
  bail: 2,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.(jsx|ts|tsx|mjs)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "ts", "json", "vue"],
};
