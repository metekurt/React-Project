import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Detail from './detail';
import Create from './create';
import SearchPage from "./SearchPage";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

class App extends Component {
  render = () => {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/create" component={Create} />
          </header>
        </div>
      </Router>
    );
  };
}
export default App;
