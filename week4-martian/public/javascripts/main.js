import { hexaToDec, numToASCII } from "./convert/converter.js";
import { _ } from "./utils.js";
import { movePointer } from "./movePointer.js";

let testing = "";
let arr = [];

_.$(".input2").addEventListener("change", (e) => {
  testing = e.target.value;
  arr = testing.split("");
  movePointer(arr[0]);
  //test겸 하나 돌려보기
});

_.$(".interprete").addEventListener("click", () => {
  _.$(".section__interpreted").innerHTML = arr
    .map((v) => numToASCII(hexaToDec(v)))
    .join("");
});
