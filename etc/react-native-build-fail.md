# 리액트 네이티브 빌드 실패할 때

### 1. SDK 이슈
Framework Search Path에 Framework 파일들이 존재하는지 확인. 없으면 파일 Path 추가하기.
(node_modules 삭제하면 다시 세팅해줘야함)

### 2. react-native upgrade 하기

### 3. Cleaning Xcode Derived Datas
rm -rf ~/Library/Developer/Xcode/DerivedData/*

### 4. ios/ android/ 디렉토리 삭제
ios, android 빌드 디렉토리 재생성하기
```
rm -rf ios/Build
rm -rf android/Build
react-native upgrade
```

### 5. node_modules 삭제
```
rm -rf node_modules/
npm restart
npm install
```

### 6. Port already in use
$ sudo lsof -i :8081
$ kill -9 <PID>

### 7. Xcode Build System 세팅
```
project settings - shared project settings - build system - legacy build system
```

아래 에러의 경우 
`Command failed: /usr/libexec/PlistBuddy -c Print:CFBundleIdentifier build/Build/Products/Debug-iphonesimulator/Marketit.app/Info.plist
Print: Entry, ":CFBundleIdentifier", Does Not Exist`

```
project settings - Per-User project settings - advanced - build location - custom - relative to workspace - Products - build/Build/Products
```
### 8. Xcode bundle resources 중복 혹은 빠뜨린 것 없는지 확인
```
targets - marketit - build phases - copy bundle resources
```
