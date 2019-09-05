var size = parseInt(readline());

var matrix = [];
var column;
var row;
var zeroPosition = null;
for (column = 0; column < size; column++) {
  matrix.push(readline().split(" ").map(n => parseInt(n)));

  for (row = 0; row < size; row++) if (matrix[column][row] === 0) zeroPosition = [column, row];
}

function factorize(prime, num) {
  if (num === 0) return 0;
  var count = 0;
  while (num % prime === 0) {num /= prime; count++}
  return count;
}

var accMatrix = [];
var accPath = [];
var path = "";
function accumulate(prime) {

  for (column = 0; column < size; column++) {
    accMatrix[column] = [];
    accPath[column] = [];

    for (row = 0; row < size; row++) {
      accMatrix[column][row] = factorize(prime, matrix[column][row]);

      if (column - 1 >= 0 && row - 1 >= 0) {
        if (accMatrix[column - 1][row] < accMatrix[column][row - 1]) {
          accMatrix[column][row] += accMatrix[column - 1][row];
          accPath[column][row] = "D";
        } else {
          accMatrix[column][row] += accMatrix[column][row - 1];
          accPath[column][row] = "R";
        }
      } else if (column - 1 >= 0) {
        accMatrix[column][row] += accMatrix[column - 1][row];
        accPath[column][row] = "D";
      } else if (row - 1 >= 0) {
        accMatrix[column][row] += accMatrix[column][row - 1];
        accPath[column][row] = "R";
      } else {
        accPath[column][row] = "";
      }
    }
  }

  path = "";
  for (column = size - 1; column >= 0;) for (row = size - 1; row >= 0;) {
    if (column === 0 && row === 0) {column--; row--;}
    else {
      path = accPath[column][row] + path;
      if (accPath[column][row] === "D") column--;
      else row--;
    }
  }

  return [accMatrix[size - 1][size - 1], path]
}

var twos = accumulate(2);
var fives = accumulate(5);
var best = twos[0] <= fives[0] ? twos : fives;
var i = 0;
function getPathWith(coordinates) {
  path = "";
  for (i = 0; i < coordinates[0]; i++) path += "D";
  for (i = 0; i < size - 1; i++) path += "R";
  for (i = coordinates[0]; i < size - 1; i++) path += "D";
  return path;
}

if (zeroPosition !== null && best[0] > 1) best = [1, getPathWith(zeroPosition)]

print(best[0]);
print(best[1]);