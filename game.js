let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let O = document.querySelector("#Oscore");
let X = document.querySelector("#Xscore");

let Oscore = 0;
let Xscore = 0;
let p;
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

box.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box clicked");
    // console.log(box);
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    winGame();
  });
});

function winGame() {
  for (patterns of winPatterns) {
    // console.log(patterns[0], patterns[1], patterns[2]);
    let posval1 = box[patterns[0]].innerText;
    let posval2 = box[patterns[1]].innerText;
    let posval3 = box[patterns[2]].innerText;
    if ((posval1 != "", posval2 != "", posval3 != "")) {
      if (posval1 === posval2 && posval2 === posval3) {
        p = document.createElement("p");
        p.id = "winpara";
        p.innerText = `Hurray! ${posval1} Win The Game`;
        document.body.appendChild(p);
        disabledBox();
        if (posval1 === "O") {
          Oscore++;
          O.textContent = Oscore;
        } else {
          Xscore++;
          X.textContent = Xscore;
        }
      }
    }
  }
}

function disabledBox() {
  for (let boxes of box) {
    boxes.disabled = true;
  }
}
function enableBox() {
  for (let boxes of box) {
    boxes.disabled = false;
    boxes.innerText = "";
  }
}
resetBtn.addEventListener("click", () => {
  turnO = true;
  enableBox();
  p.remove();
});
