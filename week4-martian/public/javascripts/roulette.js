import { _, hexaDecimal } from "./utils.js";

//시작위치를 정하기 위해 좀 쉽게 하려고 0쪽으로 살짝 돌린 상태에서 시작하는걸로 했습니다.
const rouletteState = {
  startDeg: 11.25,
  currentDeg: 11.25,
  currentIndex: 0,
};

const movePointer = (letter) => {
  if (letter === " ") return;
  const pointer = _.$(".inner__pie");
  let nextIndex = Number(letter)
    ? Number(letter)
    : hexaDecimal.findIndex((element) => element === letter.toUpperCase());

  let diff = nextIndex - rouletteState.currentIndex;
  let diffAbs = Math.abs(diff);
  if (diffAbs <= 7) {
    if (diff < 0) {
      //현재위치 기준 왼쪽으로 이동 ;
      pointer.style.transition = "0.2s ease-in-out";
      pointer.style.transform = `rotate(${
        rouletteState.currentDeg - 22.5 * diffAbs
      })`;
    } else {
      //현재위치 기준 오른쪽으로 이동
      pointer.style.transition = "0.2s ease-in-out";
      pointer.style.transform = `rotate(${
        rouletteState.currentDeg + 22.5 * diffAbs
      }deg)`;
    }
  } else if (diffAbs > 7) {
    if (diff < 0) {
      //오른쪽으로 이동
      pointer.style.transition = "0.2s ease-in-out";
      pointer.style.transform = `rotate(${
        rouletteState.currentDeg + 22.5 * (hexaDecimal.length - diffAbs)
      })`;
    } else {
      pointer.style.transition = "0.2s ease-in-out";
      pointer.style.transform = `rotate(${
        rouletteState.currentDeg - 22.5 * (hexaDecimal.length - diffAbs)
      }deg)`;
    }
  }
};

export { movePointer };

// 그니까 써보자면.. 만약 nextIdx-currIdx의 절댓값이 7보다 작거나 같을때,
// nextIdx-currIdx가 음수라면 왼쪽으로 양수라면 오른쪽으로겠지?

// nextIdx-currIdx의 절댓값이 7보다 클때
// nextIdx-currIdx가 양수이면 왼쪽 음수이면 오른쪽? 아어려워아ㅏㅏㅏㅏㅏㅏㅏㅏ
