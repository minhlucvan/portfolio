import React, { Component } from 'react';
import {
  Segment,
  Grid
} from 'semantic-ui-react';

import './Contact.css'

class ContactComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <Segment 
        className="contact__header__bg"
        style={{ 
          padding: '8em 0em' }} vertical>
        <Grid container >
        </Grid>
      </Segment>
    );
  }
}

ContactComponent.propTypes = {

};

export default ContactComponent;