# 리액트 가상 돔이란?

기존의 Jquery는 하나의 변경사항으로 HTML 전체를 다시 계산하고 랜더링해야했는데
리액트의 가상돔은 변경사항만 실제 돔에게 전달해줘서 변경된 부분만 업데이트될 수 있도록 구현된 것.

### 가상돔

- javascript object
- Abstraction over DOM

장점:
- 실제로 업데이트를 직접 조작하지 않아도 리액트에서 알아서해준다.
```
$('#header').html('Hello World');
var header = document.getElementById('header');
header.innerHTML = 'Hello World';
```

위와 같은 chaos/untidy한 코드가 사라진다.
- 서버사이드 랜더링하기도 쉽다.
 