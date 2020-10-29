module.exports = {
  // this dirname is because we run tests from project root
  stories: ["../**/*.stories.*"],
  logLevel: "debug",
  addons: [
    "@whitespace/storybook-addon-html/register",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "@storybook/addon-backgrounds",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
  ],
};
