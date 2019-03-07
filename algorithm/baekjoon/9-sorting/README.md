# [정렬 알고리즘](https://www.acmicpc.net/step/9)

## 1. 버블 정렬
다음과 같이 차례대로 다음 수와 비교하여 자리를 바꾼다. 마지막 아이템에 도달했을 때 그 수는 고정이 된다. 고정된 아이템을 제외하고 다시 반복한다.

![](https://cdn-images-1.medium.com/max/800/1*ZQmdM7My9QIhvxj98hrweg.gif)

```
static bubble = list => {

  let unFixed = list.length - 1;
  let tmp;

  for (let i = unFixed; i > 0; i--) {
    for (let k = 0; k < i; k++) {
      if (list[k] > list[k+1]) {
        tmp = list[k];
        list[k] = list[k+1];
        list[k+1] = tmp;
      }
    }
  }

  return list;
}
```

<details>
<summary>상세</summary>
<p>

```
3 7 4 5 1
```

#### 1번째 loop
* `3` `7` 4 5 1 (3과 7 비교)  
▷ `3 7 4 5 1`  

* 3 `7` `4` 5 1 (7과 4 비교)  
▷ `3 4 7 5 1`  

* 3 4 `7` `5` 1 (7과 5 비교)  
▷ `3 4 5 7 1`  

* 3 4 5 `7` `1` (7과 1 비교)  
▷ `3 4 5 1 7`  

* 고정: `7`

#### 2번째 loop
* `3` `4` 5 1 (3과 4 비교)  
▷ `3 4 5 1 7`  

* 3 `4` `5` 1 (4과 5 비교)  
▷ `3 4 5 1 7`  

* 3 4 `5` `1` (5과 1 비교)  
▷ `3 4 1 5 7`  

* 고정: `5 7`

#### 3번째 loop
* `3` `4` 1 (3과 4 비교)  
▷ `3 4 1 5 7`  

* 3 `4` `1` (4과 1 비교)  
▷ `3 1 4 5 7`  

* 고정: `4 5 7`

#### 4번째 loop
* 3 1 (3과 1 비교)  
▷ `1 3 4 5 7`  

* 결과  
`1 3 4 5 7`

</p>
</details>



## 2. 선택 정렬
모든 수를 검사해서 최소값을 찾는다. 최소값을 찾으면 아이템을 첫번째 자리에 있는 아이템과 바꿔준다.
첫 번째 아이템은 고정된다. 고정된 아이템을 제외하고 반복한다.

![](https://cdn-images-1.medium.com/max/800/1*to7gYwi5_bkZhx-1kSB0Lg.gif)

```
static selection = list => {

  let tmp, minIdx;
  for (let k = 0; k < list.length - 1; k++) {
    minIdx = k;
    for (let i = k + 1; i < list.length; i++) {
      if (list[minIdx] > list[i]) {
        minIdx = i;
      }
    }
    tmp = list[k];
    list[k] = list[minIdx];
    list[minIdx] = tmp;
  }

  return list;
}
```

<details>
<summary>상세</summary>
<p>

```
3 7 4 5 1
```

#### 1번째 loop
* 3 7 4 5 `1` (최소값: 1)  
`1 7 4 5 3`  

* 고정: `1` 7 4 5 3

#### 2번째 loop
* 7 4 5 `3` (최소값: 3)  
`1 3 4 5 7`  

* 고정: `1 3` 4 5 7

#### 3번째 loop
* `4` 5 7 (최소값: 4)  
`1 3 4 5 7`  

* 고정: `1 3 4` 5 7

#### 4번째 loop
* `5` 7 (최소값: 5)  
`1 3 4 5 7`  

* 결과  
`1 3 4 5 7`

</p>
</details>

## 3. 삽입 정렬
목록 중 비교 기준으로 삼을 아이템을 저장해둔다. 기준아이템보다 하위에 있는 아이템들을 하나씩 기준아이템과 비교한다.
기준아이템보다 작은 아이템이 나올 때까지 한 칸씩 오른쪽으로 이동시켜준다. 기준아이템을 현재 위치에 넣어준다.

![](https://cdn-images-1.medium.com/max/800/1*IK3Q4NBRLthllMINV3OxpQ.gif)

```
static insertion = list => {

  let item, position;
  for (let i = 1; i < list.length; i++) {
    item = list[i];
    position = i;
    while(position && item < list[position-1]) {
      list[position] = list[--position];
    }
    list[position] = item;
  }

  return list;

}
```

<details>
<summary>상세</summary>
<p>

```
3 7 4 5 1
```

#### 1번째 loop
기준 아이템: 3 `7` 4 5 1 


* 3과 `7` 비교  
▷ `3 _ 4 5 1`  
(변동사항이 없기 때문에 현재 위치에 `7`을 넣어준다.)  

* 결과  
`3 7 4 5 1`

#### 2번째 loop
기준 아이템: 3 7 `4` 5 1  

* 7와 `4` 비교  
▷ `3 _ 7 5 1`  

* 3과 `4` 비교    
▷ `3 _ 7 5 1`  
(변동사항이 없기 때문에 현재 위치에 `4`을 넣어준다.)

* 결과  
`3 4 7 5 1`

#### 3번째 loop
기준 아이템: 3 4 7 `5` 1  

* 7과 `5` 비교  
▷ `3 4 _ 7 1`  

* 4와 `5` 비교  
▷ `3 4 _ 7 1`  
(변동사항이 없기 때문에 현재 위치에 `5`을 넣어준다.)  

* 결과  
`3 4 5 7 1`

#### 4번째 loop
기준 아이템: 3 4 5 7 `1`  

* 7과 `1` 비교  
▷ `3 4 5 _ 7`  

* 5와 `1` 비교  
▷ `3 4 _ 5 7`  

* 4와 `1` 비교  
▷ `3 _ 4 5 7`  

* 3와 `1` 비교   
▷ `_ 3 4 5 7`  
(더 이상 비교할 아이템 없기 때문에 현재 위치에 `1`을 넣어준다.)

* 결과  
`1 3 4 5 7`

</p>
</details>

## 4. 병합 정렬
리스트를 반으로 쪼개는 것을 반복하여 아이템을 분리시킨다. 분리 후 병합한다.
쪼개기 전과 쪼갠 후 분리하는 과정은 재귀호출을 통해서 반복할 수 있다.  

![](https://gmlwjd9405.github.io/images/algorithm-merge-sort/merge-sort-concepts.png)  

```
static merge = list => {

    let [left, right, sorted] = [0, list.length-1, []];

    divide(list, left, right);

    function divide (list, left, right) {

        if (left < right) {
            let mid = Math.floor((left + right) / 2);
            // console.log('mid',  mid);
            // console.log('divide(list, left, mid)', left, mid);
            divide(list, left, mid);
            // console.log('divide(list, mid+1, right)', mid+1, right);
            divide(list, mid+1, right);
            // console.log('mergeCore left, mid, right', left, mid, right);
            mergeCore(list, left, mid, right);
        }
    }

    function mergeCore (list, left, mid, right) {

        let [leftItem, rightItem, sortedIdx] = [left, mid+1, left];

        while(leftItem <= mid && rightItem <= right) {
            if (list[leftItem] < list[rightItem]) {
                sorted[sortedIdx++] = list[leftItem++];
            } else {
                sorted[sortedIdx++] = list[rightItem++];
            }
        }

        while(leftItem <= mid) {
            sorted[sortedIdx++] = list[leftItem++];
        }

        while(rightItem <= right) {
            sorted[sortedIdx++] = list[rightItem++];
        }
        // console.log(list, sorted);

        for (let i = left; i <= right; i++) {
            list[i] = sorted[i];
        }
        // console.log(list, sorted);

    }

    return list;
}
```

<details>
<summary>상세</summary>
<p>

![](https://gmlwjd9405.github.io/images/algorithm-merge-sort/merge-sort-ccode.png)

</p>
</details>

### 출처  
https://medium.com/@fiv3star/정렬알고리즘-sorting-algorithm-정리-8ca307269dc7
