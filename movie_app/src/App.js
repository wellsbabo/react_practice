import {
  BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./routes/Home";
import React from "react";
import Detail from "./routes/Detail";


function App() {
  return (
    <Router>
      {/* 한번에 Detail과 Home 두개의 Route를 랜더링하지 않고 선택된 하나만 랜더링하기 위해 <Switch> 추가 (원하면 두개의 Route 동시 랜더링도 가능 */}
      <Switch>
        <Route path="/hello">
            <h1>Hello</h1>
        </Route>
        {/* 여기서 id는 나중에 파라미터로 가져올때 그 파라미터의 변수명이 된다 */}
        <Route path="/movie/:id">
            <Detail/>
        </Route>

        {/*현재는 5버전 사용중, react-router-dom 6버전부터 표기법 변경됨*/}
        <Route path="/">
            <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// Routes의 역할은 Route를 찾는 것. Route는 URL의 뒷부분, 즉 가리키는 위치를 말함.
// 그리고 Route를 찾으면 그 안에 있는 컴포넌트를 랜더링한다
// react-router-dom 6버전부터 Switch -> Routes로 변경
