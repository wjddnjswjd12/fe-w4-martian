const _ = {
  $: function (selector, base = document) {
    return base.querySelector(selector);
  },
};

const hexaDecimal = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

export { _, hexaDecimal };
