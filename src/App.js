import React from 'react';
import Register from './component/Register';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from './component/Login';
import Logout from './component/Logout';
import AddTask from './component/AddTask';
import Tasks from './component/Tasks';
import './App.scss';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/register" component={Register} /> 
        <Route path="/add-task" component={AddTask} /> 
        <Route path="/tasks" component={Tasks} /> 
        <Route path="/logout" component={Logout} />
      </Switch > 
    </Router>
  );
}

export default App;