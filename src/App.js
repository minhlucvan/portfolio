import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Nav from './components/Nav';
import Routes from './routes';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
