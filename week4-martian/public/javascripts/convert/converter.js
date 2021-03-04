const hexaToDec = (hexa) => {
  return String(hexa)
    .split("")
    .reverse()
    .map((v) =>
      isNaN(Number(v)) ? Number(hexaLetterToNum(v.toUpperCase())) : Number(v)
    )
    .map((num, i) => num * Math.pow(16, i))
    .reduce((a, b) => a + b);
};

const hexaLetterToNum = (char) => {
  switch (char) {
    case "A":
      return 10;
    case "B":
      return 11;
    case "C":
      return 12;
    case "D":
      return 13;
    case "E":
      return 14;
    case "F":
      return 15;
  }
};

const numToASCII = (num) => {
  return String.fromCharCode(num);
};

export { hexaToDec, hexaLetterToNum, numToASCII };
