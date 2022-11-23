export const MoneyFormater = (angka, prefix) => {
  if (typeof angka === String) angka = parseInt(angka);
  const moneyFormat = new Intl.NumberFormat(["ban", "id"]).format(angka);
  return prefix === undefined
    ? moneyFormat
    : moneyFormat
    ? "Rp. " + moneyFormat
    : "";
};
