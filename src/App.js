import React  from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import PostDetail from './Components/PostDetail/PostDetail';

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/post-detail/:postid">
            <PostDetail />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
