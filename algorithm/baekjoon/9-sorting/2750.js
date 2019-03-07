// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
//
// 입력
// 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 숫자가 주어진다. 이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.
//
// 출력
// 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
//
// 예제 입력 1  복사
// 5
// 5
// 2
// 3
// 4
// 1
// 예제 출력 1  복사
// 1
// 2
// 3
// 4
// 5

import { Sorting } from 'algorithm/baekjoon/9-sorting';

let N = readline();
let numList = [];

for (let i = 0; i < N; i++) {
	numList[i] = readline();
}

numList = Sorting.bubble(numList);
// numList = Sorting.selection(numList);
// numList = Sorting.insertion(numList);
// numList = Sorting.merge(numList);

for (let i = 0; i < N; i++) {
	print(`${numList[i]}\n`);
}