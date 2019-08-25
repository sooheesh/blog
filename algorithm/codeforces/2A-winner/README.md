

# [2A - Winner](http://codeforces.com/problemset/problem/2/A)


## 1. 문제 해결 방법

* 이건 문제를 잘 읽으면 쉬운 문제다.
```
So, if two or more players have the maximum number of points (say, it equals to m) 
at the end of the game, than wins the one of them who scored at least m points first. 

```
여기서 `wins the one of THEM`과 `AT LEAST m points first`가 핵심인 것 같다.

* 처음에 javascript 정렬 함수 sort()를 사용했더니 자꾸 실패가 떴다. 알고보니 sort() 함수를 잘못 사용했다는 것을 깨달았다. 

내림차순 정렬할 때 `a < b`와 같이 관계연산자를 사용했을 때:
```
[-1, -2, 0, 1].sort((a, b) => {
    return a < b;
});

> [-1, -2, 0, 1]

```

`b - a`를 사용했을 때:
```
[-1, -2, 0, 1].sort((a, b) => {
    return b - a;
});

> [1, 0, -1, -2]
```

이유는 sort 함수에서 -1, 0, 1 중 하나를 반환해야하는데 관계연산자는 1 아니면 0를 반환하기 때문이다.