export const CreditCardFormatter = (value) => {
  const first = value.slice(0, 3);
  const second = value.slice(3, 6);
  const third = value.slice(6, 9);
  const format = `${first}-${second}-${third}`;
  return format;
};
