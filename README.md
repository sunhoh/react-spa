# Router, Route 컴포넌트를 구현

```jsx
<Router>
  <Route path="/" component={<Home />} />
  <Route path="/about" component={<About />} />
</Router>
```

## We should do,

- [x] webpack, babel를 이용해서 react 구현
- [x] `react-router-dom`의 `<Router>`와 `<Route>` 컴포넌트 직접 구현
- [x] 최소한의 push 기능을 가진 useRouter Hook을 작성한다 페이지로 이동 기능
- [x] 뒤로가기/앞으로가기 버튼을 이용해 페이지를 이동기능

## Install

```sh
npm install

npm run build

server -s ${빌드 파일 경로 설정}
```
