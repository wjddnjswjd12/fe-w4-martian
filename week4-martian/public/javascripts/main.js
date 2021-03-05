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

async function startMove(arr) {
  const waitTime = (s) =>
    new Promise((resolve) => setTimeout(() => resolve(), s * 1000));

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      receiveInput.value += arr[i];
      await waitTime(0.5);
    } else {
      receiveInput.value += arr[i];
      movePointer(arr[i]);
      await waitTime(2);
    }
  }
}
