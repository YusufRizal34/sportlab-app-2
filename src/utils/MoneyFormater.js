export const MoneyFormater = (value, prefix) => {
  if (typeof value === String) value = parseInt(value);
  const moneyFormat = new Intl.NumberFormat(["ban", "id"]).format(value);
  return prefix === undefined
    ? moneyFormat
    : moneyFormat
    ? "Rp. " + moneyFormat
    : "";
};
