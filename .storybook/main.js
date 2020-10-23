module.exports = {
  // this dirname is because we run tests from project root
  stories: ["../**/*.stories.*"],
  logLevel: "debug",
  addons: [
    "@storybook/addon-controls",
    "@whitespace/storybook-addon-html/register",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-backgrounds",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
  ],
};
