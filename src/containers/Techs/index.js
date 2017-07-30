import React, { Component } from 'react';
import {
  Segment,
  Grid
} from 'semantic-ui-react';

import './Techs.css'


class TechsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
   return (
      <Segment 
        className="techs__header__bg"
        style={{ 
          padding: '8em 0em' }} vertical>
        <Grid container >
        </Grid>
      </Segment>
    );
  }
}

TechsComponent.propTypes = {

};

export default TechsComponent;