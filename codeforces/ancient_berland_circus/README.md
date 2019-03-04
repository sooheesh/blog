

# [1C - Ancient Berland Circus](http://codeforces.com/problemset/problem/1/C)


## 1. 문제 해결 방법 구상

* 우선 **[정다각형](https://ko.wikipedia.org/wiki/정다각형)** 이라는 단어에서 힌트를 얻었다. 정다각형은 원에 내접한다는 사실! 
그러므로 주어진 3개의 좌표점으로 원의 중심(외심)을 구하면 정다각형의 크기를 짐작할 수 있다.


* 이제 원의 크기를 구했으니 다음으로는 몇 다각형인지를 구해야한다. 최대한 작은 넓이의 다각형을 구해야한댔으니 구해야 할 **다각형의 한 변의 길이는 최대한 커야한다.** 제공된 세 꼭지점으로 어떻게 구할 수 있을까? 
원의 중심점과 각 세 꼭지점을 연결해보니 원이 피자조각처럼 3개로 나뉜다. 이 3개의 피자조각의 비율의 최대공약수를 구하면 최대공약수 비율만큼으로 자른 피자조각으로 원을 채우면 세 꼭지점과 모두 내접한다!


## 2. 수학적 접근

[삼각형 넓이 관련 공식](https://doza.pro/art/math/geometry/ko/area-triangle) 을 적용해보면서 [온라인 Geometric 툴](https://www.math10.com/en/geometry/geogebra/geogebra.html)을 이용해 다각형을 실제로 그려보고 공식이 맞는지 확인할 수 있었다.

* 삼각형 외접원의 반지름을 통해 삼각형 넓이 구하는 공식  
![daum_equation_1551663506201](https://user-images.githubusercontent.com/24663059/53705701-b32bef80-3e69-11e9-83d4-274ad109abc5.png)

* 두 점 사이의 거리  
![daum_equation_1551667491937](https://user-images.githubusercontent.com/24663059/53709343-25590000-3e7b-11e9-93e5-871580f96f44.png)

* 헤론 공식에 의한 삼각형 넓이  
![daum_equation_1551663352716](https://user-images.githubusercontent.com/24663059/53705644-54667600-3e69-11e9-966e-8af242d7af8f.png)

* 삼각형 내접원의 반지름 공식  
![daum_equation_1551663036004](https://user-images.githubusercontent.com/24663059/53705583-ee79ee80-3e68-11e9-8f41-52fa9983b016.png)

* 세 변의 길이를 알 때 사이각 구하기  
![fe20170507015609sunflower](https://user-images.githubusercontent.com/24663059/53707943-79acb180-3e74-11e9-9029-66b4d3310800.png)  
![daum_equation_1551668282608](https://user-images.githubusercontent.com/24663059/53708023-cc866900-3e74-11e9-8143-08eca9fdde6b.png)  

* 두 변의 길이와 그 사이각을 알 때 삼각형의 넓이  
![daum_equation_1551670734015](https://user-images.githubusercontent.com/24663059/53709301-d9a65680-3e7a-11e9-8944-714cb26475f4.png)

