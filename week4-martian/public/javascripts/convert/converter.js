const hexaToDec = (hexa) => {
  return String(hexa)
    .split("")
    .reverse()
    .reduce((acc, curr, i) => {
      return (acc += isNaN(Number(curr))
        ? hexaLetterToNum(curr.toUpperCase())
        : curr * Math.pow(16, i));
    }, 0);
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

export { hexaToDec, hexaLetterToNum };
