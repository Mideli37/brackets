module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) {
    return false;
  }

  let flag;
  while (flag != bracketsConfig.length) {
    flag = 0;
    for (let i = 0; i < bracketsConfig.length; i++) { //[['(', ')'], ['[', ']'], ['{', '}']]
      if (str.indexOf(bracketsConfig[i].join('')) != -1) {
        str = str.replaceAll(bracketsConfig[i].join(''), '');
      } else flag += 1;
    }
  }
  if (str) return false;
  return true;
};
