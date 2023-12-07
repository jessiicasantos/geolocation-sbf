export const distance = (a, b) => {
  const latDiff = b.latitude - a.latitude;
  const longDiff = b.longitude - a.longitude;
  const formula = Math.sqrt(latDiff ** 2 + longDiff ** 2);

  return Math.round(formula * 100 * 100) / 100;
};
