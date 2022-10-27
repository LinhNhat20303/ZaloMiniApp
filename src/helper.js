import { func } from "prop-types";

String.prototype.toCurrency = function () {
  const parts = this.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".") + " đ";
};
export function randomString(
  length = 12,
  chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
) {
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

export const toCurrency = (value) => {
  if (value && value !== undefined) {
    value = value.toString();
    return value.toCurrency();
  }
  return null;
};
export function formatCurrency(value) {
  if (value) {
    return value
      .toString()
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return 0;
}
export function trimText(str, wordCount) {
  var strArray = str.split(" ");
  var subArray = strArray.slice(0, wordCount);
  var result = subArray.join(" ");
  return result + "...";
}
export function showStringLength(str, strLength) {
  if (str.length > strLength) {
    str = str.substring(0, strLength);
    return str + "...";
  }
  return str;
}
