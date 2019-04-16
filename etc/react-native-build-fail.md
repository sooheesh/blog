# 리액트 네이티브 빌드 실패할 때

### 1. SDK 이슈 (.Framework 파일을 못 찾아서)
Framework Search Path에 Framework 파일들이 존재하는지 확인. 없으면 파일 Path 추가하기.
(node_modules 삭제하면 다시 세팅해줘야함)

### 2. react-native upgrade 하기 (버전 충돌 때문)

### 3. Cleaning Xcode Derived Datas(이전 빌드로 인한 캐시 제거해주기...)
rm -rf ~/Library/Developer/Xcode/DerivedData/*

### 4. ios/build android/build 디렉토리 삭제 (빌드 다시하기)
ios, android 빌드 디렉토리 재생성하기
```
rm -rf ios/Build
rm -rf android/Build
react-native upgrade
```

### 5. node_modules 삭제 (패키저 충돌)
```
rm -rf node_modules/
npm restart
npm install
```

### 6. Port already in use (포트 이미 사용 중)
```
sudo lsof -i :8081
kill -9 <PID>
```

### 7. Xcode Build System 세팅 (Xcode 빌드 시스템 문제)
```
project settings - shared project settings - build system - legacy build system
```

### 8. 아래 에러의 경우 (빌드 시 Products 파일 경로 문제... build/Build/Products에서 찾고 있음)
`Command failed: /usr/libexec/PlistBuddy -c Print:CFBundleIdentifier build/Build/Products/Debug-iphonesimulator/Marketit.app/Info.plist
Print: Entry, ":CFBundleIdentifier", Does Not Exist`

```
project settings - Per-User project settings - advanced - build location - custom - relative to workspace - Products - build/Build/Products
```
### 9. Xcode bundle resources (중복 혹은 누락한 것 없는지 확인)
```
targets - marketit - build phases - copy bundle resources
```
