import { hexaToDec, numToASCII } from "./convert/converter.js";
import { _ } from "./utils.js";

let testing = "";
let arr = [];
_.$(".input2").addEventListener("change", (e) => {
  testing = e.target.value;
  arr = testing.split(" ");
  _.$(".input1").value = testing;
});

_.$(".interprete").addEventListener("click", () => {
  _.$(".section__interpreted").innerHTML = arr
    .map((v) => numToASCII(hexaToDec(v)))
    .join("");
});
