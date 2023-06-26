export const findOjectInArray = (array = [], key, value, subKey) =>
  subKey
    ? array.find((elem) => {
      return elem[key][subKey] === value;
    })
    : array.find((elem) => {
      return elem[key] === value;
    });

export const localeStringToDate = (dateStr = "") => {
  if (dateStr.includes('/')) return new Date(dateStr);

  let arrDate = dateStr.split('.');
  let temp = arrDate[1];
  arrDate[1] = arrDate[0];
  arrDate[0] = temp;

  if (dateStr === "-" || !dateStr) return null;
  return new Date(arrDate.join("."));
};

export const dateToLocaleString = (date, hidden) => {
  let result = date ? new Date(date).toLocaleString() : "-";
  switch (hidden) {
    case "sec":
      return result.substring(0, result.length - 3);
    default:
      return result;

  }
};