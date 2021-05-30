import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from "./components/homePage";
import Detail from "./components/detailPage";

class App extends Component{
  render() {
    return(
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/detail/:id" component={Detail}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
