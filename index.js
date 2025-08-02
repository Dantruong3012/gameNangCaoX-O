const cells = document.querySelectorAll(".cell");
const statusPlayer = document.querySelector("#status");
const restartBtn = document.querySelector("#restart");
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

function gameStart() {
  cells.forEach((cell) => {
    cell.addEventListener("click", cellClicked);
  });
  restartBtn.addEventListener("click", restartGame);
  statusPlayer.textContent = `${currentPlayer}'s Turn!`;
  running = true;
}
gameStart();

function cellClicked() {
  const cellindex = this.getAttribute("cellindex"); //dont understand!
  if (options[cellindex] !== "" || !running) {
    // why it needs to be !== and !runnning to get into if?
    return;
  }
  updateCell(this, cellindex); // dont understand at all?
  checkWin();
}

function changePlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  statusPlayer.textContent = `${currentPlayer}'s turn`;
}

function updateCell(cell, cellindex) {
  options[cellindex] = currentPlayer;
  cell.textContent = currentPlayer;
}
function checkWin() {
  let Win = false;
  for (let i = 0; i < winCondition.length; i++) {
    const winner = winCondition[i];
    const winnerA = options[winner[0]]; // giải thích tại sao ở đoạn này đầu tiên phải khai báo một biến winner rồi sau đó chuyển biến winner này vào option rôi trong biến winner được chuyền vào option lại chuyền tiếp số 0 vào ?
    const winnerB = options[winner[1]];
    const winnerC = options[winner[2]];
    if (winnerA !== "" && winnerA == winnerB && winnerB == winnerC) {
      // tại sao ở điều kiện lại có điều kiện winner A không phải là chuỗi rỗng?
      //tai sao can phai co if nay?
      Win = true;
      break;
    } else if (winnerA == "" || winnerB == "" || winnerC == "") {
      //else if nay co tac dung gi?
      continue;
    }
    // 2 cai if cha ben tren va if con ben duoi co y nghia gi trong ham function checkWin?
  }
  if (Win) {
    statusPlayer.textContent = `${currentPlayer} Wins`;
    alert(`Game over ${currentPlayer} wins`);
    running = false;
  } else if (!options.includes("")) {
    // nghia cua doan nay giai thich
    statusPlayer.textContent = `Draw!`;
    alert(`Game over. We are draw!`);
  } else {
    changePlayer(); // day tai sao lai goi ham doi nguoi choi?
  }
}

function restartGame() {
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.textContent = " ";
  });
  statusPlayer.textContent = `${currentPlayer}'s Turn!`;
  options = ["", "", "", "", "", "", "", "", ""];
  running = true;
}
