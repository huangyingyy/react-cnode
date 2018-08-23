import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import List from './component/List/List';
import Detail from './component/Detail/Detail';
import "./style.css"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/list/:tab/:page"   component={List}></Route> 
          <Route path="/detail/:id" component={Detail}></Route>
          <Redirect exact path="/" to="/list"/>
          <Redirect from="/list" to="/list/all/1"/>
        </Switch>
      </Router>
    );
  }
}

export default App;
