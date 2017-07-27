import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <nav className="example-app__menu">
        <Link to="/">Home</Link>
        <Link to="/aTransition">A Transition</Link>
        <Link to="/useRender">Render</Link>
        <Link to="/otherPath">Other Path</Link>
        <Link to="/anotherPath">Another Path</Link>
      </nav>
    );
  }
}

export default Nav;