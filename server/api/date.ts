export default defineEventHandler((event) => {
  return {
    currentDate: new Date().toISOString(),
  };
});
