import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './app.css';
import Main from './components/main/main';
function App() {
  return (
    <Fragment>
      <div className="Container">
        <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
        </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
