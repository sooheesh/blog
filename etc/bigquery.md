# Firebase analytics & Bigquery & Data Studio & GC(Google Cloud) Logging & GC Pub/Sub 사용기

## Firebase analytics
앱의 가입 프로세스의 이탈율을 측정하기 위해서 시작되었다. 솔루션을 사용해서 유저 이벤트를 수집했다.

## Bigquery
Firebase analytics 대시보드만으로는 내가 수집한 custom 데이터들을 보기가 쉽지 않아서 Firebase analytics와 Bigquery DB를 연동했다.

이 때 firebase_ID라는 데이터셋에 데이터가 쌓이는데 특이하게도 실시간으로 발생하는 이벤트는 event_intraday_DATETIME라는 임시 테이블에 쌓였다가 하루에 한 번씩 실제 테이블인 event_DATETIME에 로드가 되었다.

## Data Studio
이제 내가 원하는 raw 데이터들이 준비되었고 이 데이터를 visualizing하면 된다. 회사에서 원래 redash를 사용했는데 redash 서버를 회사에서 직접 관리하고 있었고 자주 서버가 죽거나 제대로 작동하지 않는 문제가 있었다.
그래서 다른 서비스를 알아보면서 bigquery와의 연동성 또한 고려해서 찾다보니 구글의 data studio를 사용하게 되었다. bigquery 혹은 mysql 등과 연결을 통해서 데이터 소스를 가져올 수 있었는데

문제는 내가 보여주려는 최종 데이터 형태는 가공이 필요했다. 일별로 user_pseudo_id별로 이벤트 플로우를 가져와서 가입시도 여부를 파악하기 위해 코드 작성이 필요했다.
그런데 data studio는 맞춤 쿼리 기능까지만 제공하고 스크립트 언어 사용을 지원하지 않았다.(redash는 제공해줌)

## Google Cloud Function
스크립트 언어를 작성할 수 있는 서버리스 서비스를 찾아보다가 찾은 것. 여기다가 코드 작성하고 하면 된다. 

이제 데이터 가공 문제는 해결되었지만 이 함수를 자동으로 호출해주는 스케줄러가 필요했다.

## Google Cloud Scheduler
구글이 제공해주는 서버리스 crontab 스케줄러 서비스. 몇가지의 설정만으로 간단하게 동작한다. 
그러나 이걸로는 뭔가 만족스럽지 않다. crontab을 설정하려고 보니 하루에 두번? 한번? 언제 호출하지? 고민을하게 되었고 실제로 Firebase analytics가 임시 테이블(event_intraday)에 쌓아둔 데이터를 event_ 로 로드하는 시점에  
함수를 작동시키고 싶었다.   

## Google Cloud Logging && Pub Sub
그렇게 알게 된 것이 이 것이다. 처음에 pub sub(메시지 큐???)이란 것이 너무 생소하게 다가왔지만 공식 유튭 튜토리얼을 통해서 대충 파악이 가능했다. 참고하길 바란다.

Logging을 통해서 bigquery 테이블에 발생한 이벤트들에 대한 로그를 볼 수 있는데 특정 필터를 설정해두면 그 필터에 부합하는 로그가 발생하면 싱크(?!)라는 훅같은 걸 설정 할 수 있다.

해당 싱크(?)에 만들어 놓은 pubsub 주제를 설정해두면 이 훅이 pubsub으로 전달이된다. 그리고 그 주제를 구독하고 있는 구독(?)을 만들 수 있다. 이 구독은 구독 중인 주제에 훅이 들어오는 것을 구독하고 있다가 원하는 동작을 트리거하게 할 수 있다.

구독을 만들지 않고도 google cloud functions가 주제를 감시하게끔 설정도 가능하지만 functions는 nodejs, go, python만 지원하기도 하고 코드 버전 관리를 위해서 새로운 레파지토리를 만드는 것이 일단은 귀찮으므로 (나중에 심심하면 세팅할 것)
기존 관리중인 api 서버에서 데이터가공을 하는 코드를 넣고 구독이 http api 호출을 하도록 설정해두었다.

##정리

Firebase analytics event -> event data beeing inserted into bigquery temporary table -> (once a day) been inserted into bigquery table -> Logging에 log가 쌓임 -> Pub/Sub 주제 호출 -> 주제를 구독하고 있던 구독에게 메시지가 전달됨 -> http api 호출 -> 데이터 가공 후 bigquery 테이블(A)에 insert   

Data Studio에서 A 데이터 소스 연결 -> Visualize with Graphs

하지만 결국 이 프로세스들이 너무 번거로워서 redash 서버 문제를 해결하게 될 것 같다.
