import { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './app.css';

import Main from './components/main/main';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Main />
    </div>
  </BrowserRouter>
   
  );
}

export default App;
