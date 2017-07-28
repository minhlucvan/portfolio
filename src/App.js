import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout';
import Nav from './components/Nav';
import Routes from './routes';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
