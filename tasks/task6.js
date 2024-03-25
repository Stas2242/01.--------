// todo: Сохраните результат шахматной партии в виде двухмерного массива board, называть фигуры можно
// произвольно, например “black queen”.

const board = [
  [
    { name: "a8", innerFigure: 0 },
    { name: "b8", innerFigure: 0 },
    { name: "c8", innerFigure: 0 },
    { name: "d8", innerFigure: 0 },
    { name: "e8", innerFigure: 0 },
    { name: "f8", innerFigure: 0 },
    { name: "g8", innerFigure: 0 },
    { name: "h8", innerFigure: 0 },
  ],
  [
    { name: "a7", innerFigure: 0 },
    { name: "b7", innerFigure: 0 },
    { name: "c7", innerFigure: 0 },
    { name: "d7", innerFigure: 0 },
    { name: "e7", innerFigure: 0 },
    { name: "f7", innerFigure: 0 },
    { name: "g7", innerFigure: 0 },
    { name: "h7", innerFigure: 0 },
  ],
  [
    { name: "a6", innerFigure: 0 },
    { name: "b6", innerFigure: 0 },
    { name: "c6", innerFigure: 0 },
    { name: "d6", innerFigure: 0 },
    { name: "e6", innerFigure: 0 },
    { name: "f6", innerFigure: 0 },
    { name: "g6", innerFigure: 0 },
    { name: "h6", innerFigure: 0 },
  ],
  [
    { name: "a5", innerFigure: 0 },
    { name: "b5", innerFigure: 0 },
    { name: "c5", innerFigure: 0 },
    { name: "d5", innerFigure: 0 },
    { name: "e5", innerFigure: 0 },
    { name: "f5", innerFigure: 0 },
    { name: "g5", innerFigure: 0 },
    { name: "h5", innerFigure: 0 },
  ],
  [
    { name: "a4", innerFigure: 0 },
    { name: "b4", innerFigure: 0 },
    { name: "c4", innerFigure: 0 },
    { name: "d4", innerFigure: 0 },
    { name: "e4", innerFigure: 0 },
    { name: "f4", innerFigure: 0 },
    { name: "g4", innerFigure: 0 },
    { name: "h4", innerFigure: 0 },
  ],
  [
    { name: "a3", innerFigure: 0 },
    { name: "b3", innerFigure: 0 },
    { name: "c3", innerFigure: 0 },
    { name: "d3", innerFigure: 0 },
    { name: "e3", innerFigure: 0 },
    { name: "f3", innerFigure: 0 },
    { name: "g3", innerFigure: 0 },
    { name: "h3", innerFigure: 0 },
  ],
  [
    { name: "a2", innerFigure: 0 },
    { name: "b2", innerFigure: 0 },
    { name: "c2", innerFigure: 0 },
    { name: "d2", innerFigure: 0 },
    { name: "e2", innerFigure: 0 },
    { name: "f2", innerFigure: 0 },
    { name: "g2", innerFigure: 0 },
    { name: "h2", innerFigure: 0 },
  ],
  [
    { name: "a1", innerFigure: 0 },
    { name: "b1", innerFigure: 0 },
    { name: "c1", innerFigure: 0 },
    { name: "d1", innerFigure: 0 },
    { name: "e1", innerFigure: 0 },
    { name: "f1", innerFigure: 0 },
    { name: "g1", innerFigure: 0 },
    { name: "h1", innerFigure: 0 },
  ],
];

const figures = [
  { name: "blackKing", position: board[0][3]},
  { name: "blackQueen", position: board[7][0]},
  { name: "blackBishopOne", position: board[0][2]},
  { name: "blackBishopTwo", position: board[7][6]},
  { name: "blackKnightOne", position: board[2][0],},
  { name: "blackKnightTwo", position: board[2][5]},
  { name: "blackRockOne", position: board[0][0]},
  { name: "blackRockTwo", position: board[0][7]},
  { name: "blackPawnOne", position: board[1][0]},
  { name: "blackPawnTwo", position: board[3][1]},
  { name: "blackPawnThree", position: board[1][3]},
  { name: "blackPawnFour", position: board[1][5]},
  { name: "blackPawnFive", position: board[1][7]},
  { name: "blackPawnSix", position: 0},
  { name: "blackPawnSeven", position: 0},
  { name: "blackPawnEight", position: 0},
  { name: "whiteKing", position: board[6][4]},
  { name: "whiteQueen", position: 0},
  { name: "whiteBishopOne", position: board[1][4]},
  { name: "whiteBishopTwo", position: 0},
  { name: "whiteKnightOne", position: board[3][3]},
  { name: "whiteKnightTwo", position: board[1][6]},
  { name: "whiteRockOne", position: 0},
  { name: "whiteRockTwo", position: 0},
  { name: "blackPawnOne", position: board[6][0]},
  { name: "blackPawnTwo", position: board[6][3]},
  { name: "blackPawnThree", position: board[5][4]},
  { name: "blackPawnFour", position: board[3][4]},
  { name: "blackPawnFive", position: board[4][6]},
  { name: "blackPawnSix", position: board[3][7]},
  { name: "blackPawnSeven", position: 0},
  { name: "blackPawnEight", position: 0},
];

for (let i = 0; i < board.length; i++) {
  for (let x = 0; x < board[i].length; x++) {
    for (let a = 0; a < figures.length; a++) {
      if (figures[a].position != 0 && figures[a].position == board[i][x]) {
        board[i][x].innerFigure = figures[a].name;
      }
    }
  }
}

console.log(board);
