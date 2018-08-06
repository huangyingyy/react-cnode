import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import List from './component/List/List';
import Detail from './component/Detail/Detail';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={List}/>
          <Route exact path="/detail/:id" component={Detail}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
