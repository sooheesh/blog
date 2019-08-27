var size = Number(readline());

// 1. 입력값을 배열로 정렬
// 2. 한 번씩 순회하면서 0의 개수를 구한다. (2의 배수와 5의 배수의 개수)
// 3. trailing zeros가 가장 적은 경로를 구한다.

var matrix = [];
var line = [];
var num;
var countTwo = 0;
var countFive = 0;
var countTen = 0;
// put the inputs into 'matrix' two dimensional array
for (var i = 0; i < size; i++) {
  line = readline().split(" ");

  // transform the input number into number of twos and fives
  for (var k = 0; k < line.length; k++) {
    num = line[k];
    countTwo = 0;
    countFive = 0;
    countTen = 0;

    while (num % 10 === 0) {
      num = num / 10;
      countTen++;
    }
    while (num % 2 === 0) {
      num = num / 2;
      countTwo++;
    }
    while (num % 5 === 0) {
      num = num / 5;
      countFive++;
    }
    line[k] = {
      2: countTwo,
      5: countFive,
      10: countTen
    }
  }
  matrix.push(line);
}
// print(JSON.stringify(matrix));

var result = [];
goNext([0, 0], "", {2: matrix[0][0][2], 5: matrix[0][0][5], 10: matrix[0][0][10]});
getTheLeastRoundWay();

// 경로를 만드는 재귀함수를 만든다.
function goNext(currentIndex, way, numberOfTwoNFive) {

  if (endOfTheRoute(currentIndex)) {
    result.push({way: way, trailingZeros: calculateTrailingZeros(numberOfTwoNFive)})
    return;
  }
  // 아래쪽 오른쪽으로 이동
  if (canGoDown(currentIndex)) goNext(
    [currentIndex[0] + 1, currentIndex[1]],
    way + "D",
    {
      2: numberOfTwoNFive[2] + matrix[currentIndex[0] + 1][currentIndex[1]][2],
      5: numberOfTwoNFive[5] + matrix[currentIndex[0] + 1][currentIndex[1]][5],
      10: numberOfTwoNFive[10] + matrix[currentIndex[0] + 1][currentIndex[1]][10],
    });
  if (canGoRight(currentIndex)) goNext([currentIndex[0], currentIndex[1] + 1], way + "R", {
    2: numberOfTwoNFive[2] + matrix[currentIndex[0]][currentIndex[1] + 1][2],
    5: numberOfTwoNFive[5] + matrix[currentIndex[0]][currentIndex[1] + 1][5],
    10: numberOfTwoNFive[10] + matrix[currentIndex[0]][currentIndex[1] + 1][10],
  });
}

function endOfTheRoute(currentIndex) {
  return currentIndex[0] === size - 1 && currentIndex[1] === size - 1;
}

function canGoDown(currentIndex) {
  return currentIndex[0] !== size - 1;
}

function canGoRight(currentIndex) {
  return currentIndex[1] !== size - 1;
}

function calculateTrailingZeros(numberOfTwoNFive) {
  // print(JSON.stringify(numberOfTwoNFive));
  var twos = numberOfTwoNFive[2];
  var fives = numberOfTwoNFive[5];
  var tens = numberOfTwoNFive[10];

  if ((twos === 0 || fives === 0) && tens === 0) return 0;
  if (twos > fives) return fives + tens;
  else return twos + tens;
}

function getTheLeastRoundWay() {
  result.sort((a, b) => a.trailingZeros - b.trailingZeros);
  // print(JSON.stringify(result));
  print(result[0].trailingZeros);
  print(result[0].way);
}

// Memory limit exceeded on test 11을 해결해야한다.