/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(size) {
  var solution; //fixme
  var brd = new Board({n: size});
  console.log('brd is ', brd);
  findNRooksSolutionHelper(brd, 0, size, function(brd) { return solution = brd.rows(); });
  console.log('Single solution for ' + size + ' rooks:', JSON.stringify(solution));
  return solution;
};

// Can remove end parameter
var findNRooksSolutionHelper = function(board, row, end, callback) {
  // for every square on the board:
  if (row === board.get('n')) {
    return callback(board);
  }
  for (var col = 0; col < board.get('n'); col++) {
    board.togglePiece(row, col); // testing hardcoding values
    if (!board.hasAnyRooksConflicts()) {
      var tempBoard = findNRooksSolutionHelper(board, row + 1, end, callback);
      if (tempBoard) {
        return tempBoard;
      }
    }
    board.togglePiece(row, col);
  }
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(size) {
  var solutionCount = 0; //fixme
  var brd = new Board({n: size});
  findNRooksSolutionHelper(brd, 0, size, function(brd) { solutionCount++; });
  console.log('Number of solutions for ' + size + ' rooks:', solutionCount);
  return solutionCount;
};

var findNQueensSolutionHelper = function(board, row, end, callback) {
  // for every square on the board:
  if (row === board.get('n')) {
    return callback(board);
  }
  for (var col = 0; col < board.get('n'); col++) {
    board.togglePiece(row, col); // testing hardcoding values
    if (!board.hasAnyQueensConflicts()) {
      var tempBoard = findNQueensSolutionHelper(board, row + 1, end, callback);
      if (tempBoard) {
        return tempBoard;
      }
    }
    board.togglePiece(row, col);
  }
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(size) {
  var brd = new Board({n: size});
  var solution = brd.rows();
  findNQueensSolutionHelper(brd, 0, size, function(brd) { return solution = brd.rows(); });
  console.log('Single solution for ' + size + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(size) {
  var solutionCount = 0; //fixme
  var brd = new Board({n: size});
  findNQueensSolutionHelper(brd, 0, size, function(brd) { solutionCount++; });
  console.log('Number of solutions for ' + size + ' queens:', solutionCount);
  return solutionCount;
};
