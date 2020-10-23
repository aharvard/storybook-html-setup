import { addParameters } from '@storybook/html';
import { withHTML } from '@whitespace/storybook-addon-html/html';

const SOURCE_REGEX = /^\(\) => [`'"](.*)['`"]$/;

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  docs: {
    iframeHeight: '200px',
    transformSource: (src) => {
      const match = SOURCE_REGEX.exec(src);
      return match ? match[1] : src;
    },
  },
});

export const decorators = [withHTML];
