// const nextJest = require("next/jest");
import * as nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|scss|less)$": "identity-obj-proxy",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
