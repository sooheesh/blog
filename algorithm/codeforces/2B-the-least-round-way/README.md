# [2B - The least round way](https://codeforces.com/problemset/problem/2/B)

## 1. 문제 해결 방법 
문제 해결 방법 자체는 쉽게 구안해냈다. 왼쪽 맨 위에서 오른쪽 맨 아래로 도달하여 경로를 반환하는 것이다. 그런데 그 경로의 숫자들을 모두 곱했을 때 가능한 0의 개수를 최소화할 수 있는 경로를 구해야하는 것이다. 
0의 개수를 최소화한다는 뜻은 약수 중에 10이 적어야한다는 것이고 10은 약수가 2와 5로 이루어져있으므로 결과적으로 2나 5의 개수를 최소화하면 되는 것이다. (2 OR 5 라고 한 것은 10이 되기 위해선 2에겐 5가 필요하고 5에겐 2가 필요하기 때문에 둘 중에 적은 값이 곧 최소값이되는 것이다)

## 2. Dynamic Programming 동적계획법
다이나믹 프로그래밍을 처음 접해보기 때문에 조금 헤맸다. 아니 이 문제를 이렇게까지 쪼갤 수 있었다니? 처음에는 재귀호출을 해서 모든 경로를 돌았다. 최소값을 저장해뒀다가 그 최소값을 넘어서면 경로를 포기하는 식으로 말이다. 이진트리처럼 경우의 수가 불어나다가 특정 노드에서 수 틀리면 불림을 멈추고 다음으로 넘어가는 식이다. 

아주 잘 작동을 했는데 test case 16번에서 메모리 제한 초과가 떠서 멘붕이 왔다. 메모리 제한/시간 초과 이런거에 익숙하지 않단 말이다.

### 3. 해결
어쨌든 생각의 꼬리 끝에 경우의 수만큼 재귀호출을 하지 않고도 풀 수 있었다. 그냥 좌표 하나씩 루프를 돌면서 2와 5의 개수를 누적하면 된다. 최소화하면서 말이다.

경로 또한 마찬가지로, 현재 셀에서 위와 왼쪽 두 셀을 비교했을 때 어느 방향에서 왔어야 값을 최소화할 수 있는지 확인해서 저장해주면 된다.

### 4. 익셉션 처리
또 한가지 생각하지 못했던 부분은 바로 숫자 0의 존재 여부다. 0으로 곱하면 결과는 0이니까. 무조건 trailing zeros의 개수는 1이 된다.