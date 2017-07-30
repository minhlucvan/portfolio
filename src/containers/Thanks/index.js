import React, { Component } from 'react';
import {
  Segment,
  Grid
} from 'semantic-ui-react';

import './Thanks.css'

class ThanksComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
   return (
      <Segment 
        className="thanks__header__bg"
        style={{ 
          padding: '8em 0em' }} vertical>
        <Grid container >
        </Grid>
      </Segment>
    );
  }
}

ThanksComponent.propTypes = {

};

export default ThanksComponent;