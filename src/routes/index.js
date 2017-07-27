import React from 'react';
import { Route } from 'react-router-dom';
import { TransitionSwitch } from 'react-router-v4-transition';
import Transition from '../components/Transition';
import Home from '../containers/Home'
import Contact from '../containers/Contact'

class Routes extends React.Component {
  render() {
    return (
    <TransitionSwitch parallel={true}>
      <Route exact path="/">
          <Transition>home path</Transition>
      </Route>
      <Route path="/otherPath">
          <Transition>other path</Transition>
      </Route>
      <Route path="/">
          <Transition>other home</Transition>
      </Route>
      <Route path="/anotherPath">
          <Transition>another path</Transition>
      </Route>
    </TransitionSwitch>
    );
  }
}

export default Routes;