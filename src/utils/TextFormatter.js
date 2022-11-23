export const TextFormatter = (text = "", lengthSpec) => {
  if (typeof text === Number) text = text.toString();
  let newText = text;
  if (text.length > lengthSpec) newText = text.slice(0, lengthSpec);
  if (newText.charAt(newText.length - 1) === " ") {
    newText.slice(0, -1);
  }
  return newText;
};
