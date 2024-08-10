// jest.config.cjs
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["vue", "js", "ts", "json"],
  testMatch: ["**/tests/**/*.spec.[jt]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
