import { hexaToDec, numToASCII } from "./convert/converter.js";
import { _ } from "./utils.js";
import { movePointer } from "./movePointer.js";

let testing = "";
let arr = [];

_.$(".send__earth").addEventListener("click", () => {
  testing = _.$(".input2").value;
  arr = testing.split("");
  startMove();
});

//수정예정
// _.$(".interprete").addEventListener("click", () => {
//   _.$(".section__interpreted").innerHTML = arr
//     .map((v) => numToASCII(hexaToDec(v)))
//     .join("");
// });

async function startMove() {
  const waitTwoSec = () =>
    new Promise((resolve) => setTimeout(() => resolve(), 2000));

  for (let i = 0; i < arr.length; i++) {
    movePointer(arr[i]);
    const res = await waitTwoSec();
  }
}
