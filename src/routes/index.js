import React from 'react';
import { Route } from 'react-router-dom';
import { TransitionSwitch } from 'react-router-v4-transition';
import Transition from '../components/Transition';
import Home from '../containers/Home'
import Contact from '../containers/Contact'
import Posts from '../containers/Posts'
import Projects from '../containers/Projects'
import Techs from '../containers/Techs'
import Thanks from '../containers/Thanks'

class Routes extends React.Component {
  render() {
    return (
        <div className="pt-perspective"> 
            <TransitionSwitch parallel={true}>
                <Route exact path="/">
                    <Transition>
                        <Home />
                    </Transition>
                </Route>
                <Route path="/projects">
                    <Transition>
                        <Projects />
                    </Transition>
                </Route>
                <Route path="/posts">
                    <Transition>
                        <Posts />
                    </Transition>
                </Route>
                <Route path="/techs">
                    <Transition>
                        <Techs />
                    </Transition>
                </Route>
                <Route path="/contacts">
                    <Transition>
                        <Contact />
                    </Transition>
                </Route>
                <Route path="/thanks">
                    <Transition>
                        <Thanks />
                    </Transition>
                </Route>
                <Route >
                    <Transition>
                        <Home />
                    </Transition>
                </Route>
            </TransitionSwitch>
        </div>
    );
  }
}

export default Routes;