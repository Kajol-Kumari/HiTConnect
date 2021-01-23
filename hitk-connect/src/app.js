import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './app.css';
import Home from './components/home/home';
import Navbar from './components/template/navbar/navbar';
function App() {
  return (
    <Fragment>
      <div className="Container">
        <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
