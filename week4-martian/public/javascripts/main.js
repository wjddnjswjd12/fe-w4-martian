import { hexaToDec, numToASCII } from "./convert/converter.js";
import { _ } from "./utils.js";
import { movePointer } from "./roulette.js";

const sendInput = _.$(".input2");
const receiveInput = _.$(".input1");
const sendToEarthBtn = _.$(".send__earth");
const interpreteBtn = _.$(".interprete");
const interpreteDiv = _.$(".section__interpreted");

sendToEarthBtn.addEventListener("click", () => {
  startMove(sendInput.value.split(""));
});

interpreteBtn.addEventListener("click", () => {
  interpreteDiv.innerHTML = receiveInput.value
    .split(" ")
    .map((v) => numToASCII(hexaToDec(v)))
    .join("");
});

function startMove(arr) {
  const delay = (i, s) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        receiveInput.value += i;
        movePointer(i);
        resolve();
      }, s * 1000);
    });
  };
  let p = Promise.resolve();
  for (let i of arr) {
    if (i === " ") {
      p = p.then(() => delay(i, 0.5));
    } else {
      p = p.then(() => delay(i, 2));
    }
  }
}
