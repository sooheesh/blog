

# [2A - Winner](http://codeforces.com/problemset/problem/2/A)


## 1. 문제 해결 방법

* 이건 문제를 잘 읽으면 쉬운 문제. 
```
So, if two or more players have the maximum number of points (say, it equals to m) 
at the end of the game, than wins the one of them who scored at least m points first. 

```
여기서 `wins the one of THEM`과 `AT LEAST m points first`가 핵심인 것 같다.

* 처음에 javascript 정렬 함수 sort()를 사용했더니 자꾸 실패가 떠서 그냥 직접 구현했더니 성공했다.