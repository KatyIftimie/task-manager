import React from 'react';
import './App.css';
import Register from './component/Register';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" />
        <Route path="/register" component={Register}></Route>

      </Switch>
      {/* <h1>Hi</h1> */}
    </Router>
  );
}

export default App;
