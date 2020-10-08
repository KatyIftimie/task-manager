import React from 'react';
import './App.css';
import Register from './component/Register';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from './component/Login';
import AddTask from './component/AddTask';
import Tasks from './component/Tasks';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register}></Route>
        <Route path="/add-task" component={AddTask}></Route>
        <Route path="/tasks" component={Tasks}></Route>
      </Switch>
    </Router>
  );
}

export default App;
