const straightLine = [1, 1, 1, 1, 1];
const Letters = {
  A: [straightLine, [1, 0, 1, 0, 0], straightLine],
  B: [straightLine, [1, 0, 1, 0, 1], [0, 1, 0, 1, 0]],
  C: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  D: [straightLine, [1, 0, 0, 0, 1], [0, 1, 1, 1, 0]],
  E: [straightLine, [1, 0, 1, 0, 1], [1, 0, 0, 0, 1]],
  F: [straightLine, [1, 0, 1, 0, 0], [1, 0, 0, 0, 0]],
  G: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1],
  ],
  H: [straightLine, [0, 0, 1, 0, 0], straightLine],
  I: [[1, 0, 0, 0, 1], straightLine, [1, 0, 0, 0, 1]],
  J: [[1, 0, 0, 0, 1], straightLine, [1, 0, 0, 0, 0]],
  K: [straightLine, [0, 0, 1, 0, 0], [1, 1, 0, 1, 1]],
  L: [straightLine, [0, 0, 0, 0, 1], [0, 0, 0, 0, 1]],
  M: [straightLine, [0, 1, 0, 0, 0], straightLine],
  N: [straightLine, [1, 0, 0, 0, 0], [0, 1, 1, 1, 1]],
  O: [straightLine, [1, 0, 0, 0, 1], straightLine],
  P: [straightLine, [1, 0, 1, 0, 0], [1, 1, 1, 0, 0]],
  Q: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 1],
  ],
  R: [straightLine, [1, 0, 1, 0, 0], [0, 1, 0, 1, 1]],
  S: [
    [0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0],
  ],
  T: [[1, 0, 0, 0, 0], straightLine, [1, 0, 0, 0, 0]],
  U: [straightLine, [0, 0, 0, 0, 1], straightLine],
  V: [
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
  ],
  W: [straightLine, [0, 0, 0, 1, 0], straightLine],
  X: [
    [1, 1, 0, 1, 1],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 1, 1],
  ],
  Y: [
    [1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1],
    [1, 1, 0, 0, 0],
  ],
  Z: [
    [1, 0, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 0, 1],
  ],
  0: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  1: [[0, 1, 0, 0, 1], straightLine, [0, 0, 0, 0, 1]],
  2: [
    [1, 0, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 0, 1],
  ],
  3: [
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
  ],
  4: [[1, 1, 1, 0, 0], [0, 0, 1, 0, 0], straightLine],
  5: [
    [1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0],
  ],
  6: [
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0],
  ],
  7: [
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0],
  ],
  8: [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
  ],
  9: [
    [0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  " ": [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  ":": [[0, 1, 0, 1, 0]],
  ")": [
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  "(": [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
  ],
};

let message = prompt("What do you want to say?", "");
let scroll = window.confirm("scroll?");

const htmlCollectionGrid = document.getElementsByClassName(
  "js-calendar-graph-svg"
)[0].children[0].children;

billboard = Array.from(htmlCollectionGrid).filter((elem, index) => index < 53);
verticalRows = Array.from(billboard);

//iterate through all cells and set them to 0
const clearBoard = () => {
  verticalRows.map((row, index) => {
    Array.from(row.children).map((cell, index) => {
      cell.setAttribute("data-level", "0");
    });
  });
};

const writeToBillboard = (message, rowIndex) => {
  clearBoard();
  let currentRow = rowIndex;
  message
    .toUpperCase()
    .split("")
    .map((letter) => Letters[letter])
    .map((letter, index) => {
      letter.map((line, index) => {
        let row = verticalRows[currentRow];
        line.map((pixel, index) => {
          if (currentRow >= 0 && currentRow < 53) {
            Array.from(row.children)[index + 1].setAttribute(
              "data-level",
              line[index] ? "4" : "0"
            );
          }
        });
        //move to next row
        currentRow += 1;
      });
      //skip a line after a letter is complete
      currentRow += 1;
    });
};

const scrollWrite = () => {
  let rowIndex = 53;
  console.log(message);
  let interval = setInterval(() => {
    message
      ? writeToBillboard(message, rowIndex)
      : writeToBillboard(":( refresh to try again", rowIndex);
    //check if rowIndex has extended far enough for all characters
    rowIndex < 0 - message.split("").length * 4
      ? //if true: reset
        (rowIndex = 53)
      : //if false: keep going
        (rowIndex -= 1);
  }, 100);
};

if (message !== null) {
  scroll ? scrollWrite() : writeToBillboard(message, 0);
}
