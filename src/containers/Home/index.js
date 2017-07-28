import React, { Component } from 'react';
import { Segment, Container, Header, Grid, Button, Icon } from 'semantic-ui-react';

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
   return (
      <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container>
            <Grid.Row>
              <Grid.Column width={6}>
                <img 
                src="https://avatars0.githubusercontent.com/u/11575076?v=4&u=8f79f535af6ffcbe43f0592b8fa071acaa0f1ddb&s=400"
                style={{
                  width: '320px'
                }} />
              </Grid.Column>

                <Grid.Column width={10}>
                  <Header
                    as='h1'
                    content='Hello'
                    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '0em' }} />
                  <p>
                    Hello, and welcome to my website. My name is Kelsey. I'm a full-time mom and aspiring Front-end Web Developer. I love to learn and try new things. In my spare time, when I'm not diving into a new class on Treehouse, I enjoy creating art of all kinds, reading comics, and playing video games.
                  </p>
                <Header
                  as='h2'
                  content='Do whatever you want when you want to.'
                  inverted
                  style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                />
                <Button animated='fade' size="huge" style={{ float: 'right' }}>
                  <Button.Content visible>
                    About Me
                  </Button.Content>
                  <Button.Content hidden>
                    here we go <Icon name="arrow down" />
                  </Button.Content>
                </Button>
              </Grid.Column>
            </Grid.Row>

    </Grid>
      </Segment>    
    );
  }
}

HomeComponent.propTypes = {

};

export default HomeComponent;