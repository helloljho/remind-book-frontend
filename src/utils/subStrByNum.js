export const subStrByNum = (str, num) => {
  return str.length >= num ? str.substr(0, num) + '...' : str;
};
