import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RouteHandler } from 'react-router';
import TransitionGroup from 'react-transition-group/TransitionGroup';

class Layout extends Component {
  render() {
    var name = this.context.router.getCurrentPath();
    return (
      <div>
      	<Link to="home">
      		home
        </Link>
        <br />
        <Link to="about">
      		about
        </Link>
      	<hr />
          layout
      </div>
    );
  }
}
Layout.contextTypes = {
};
