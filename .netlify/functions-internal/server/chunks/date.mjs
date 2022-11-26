import { defineEventHandler } from 'h3';

const date = defineEventHandler((event) => {
  return {
    currentDate: new Date().toISOString()
  };
});

export { date as default };
//# sourceMappingURL=date.mjs.map
