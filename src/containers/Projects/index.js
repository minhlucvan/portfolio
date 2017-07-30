import React, { Component } from 'react';
import {
  Segment,
  Grid
} from 'semantic-ui-react';

import './Projects.css'

class ProjectsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
   return (
    <Segment 
      className="projects__header__bg"
      style={{ 
        padding: '8em 0em' }} vertical>
      <Grid container >
      </Grid>
    </Segment>
    );
  }
}

ProjectsComponent.propTypes = {

};

export default ProjectsComponent;