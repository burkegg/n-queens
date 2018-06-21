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
  findSolutionHelper(brd, 0, size, function(brd) { return solution = brd.rows(); });
  console.log('Single solution for ' + size + ' rooks:', JSON.stringify(solution));
  return solution;
};

// Can remove end parameter
var findSolutionHelper = function(board, row, end, callback) {
  // for every square on the board:
  console.log('incoming board ', board.rows());
  if (row === board.get('n')) {
    return callback(board);
  }
  for (var col = 0; col < board.get('n'); col++) {
    board.togglePiece(row, col); // testing hardcoding values
    console.log('toggled once: ', board.rows());
    if (!board.hasAnyRooksConflicts()) {
      var tempBoard = findSolutionHelper(board, row + 1, end, callback);
      if (tempBoard) {
        return tempBoard;
      }
    }
    board.togglePiece(row, col);
  }
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
