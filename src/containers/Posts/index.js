import React, { Component } from 'react';
import {
  Segment,
  Grid
} from 'semantic-ui-react';

import './Posts.css';

class PostsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
   return (
      <Segment 
        className="posts__header__bg"
        style={{ 
          padding: '8em 0em' }} vertical>
        <Grid container >
        </Grid>
      </Segment>
    );
  }
}

PostsComponent.propTypes = {

};

export default PostsComponent;