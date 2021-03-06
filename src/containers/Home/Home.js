import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Segment, Container, Header, Grid, Button, Icon, List, Image, Divider } from 'semantic-ui-react';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';

import './Home.css';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.paralax = null;
    this.state = {
    };
  }

  componentDidMount() {
    this.paralax.addEventListener('scroll', (event) => {
      const host = event.target;
      const scrollTop = host.scrollTop;
      this.props.scrollParalax(scrollTop);
    })
  }

  render() {
   return (
    <div ref={ref => this.paralax = ref}
         className="paralax-container">
      <div className="main-float-header">
        <MainHeader blur={this.props.headerBlur} bright={this.props.headerBright} interactive={this.props.headerInteractive} />  
      </div>
      <div style={{
        paddingLeft: '10px'
      }}>
        <MainHeader show={this.props.headerInteractive} interactive={this.props.headerInteractive} noMargin={true} />  
      </div>
        <div className="main-float-content">
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they never thought possible. Let us delight
                  your customers and empower your needs... through pure data analytics.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='/assets/images/wireframe/white-image.png'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src='/assets/images/avatar/large/nan.jpg' />
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have learned how to master the art of doing
              nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
              and worth your attention.
            </p>
            <Button as='a' size='large'>Read More</Button>
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>Case Studies</a>
            </Divider>
            <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really
              true.
              It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
            </p>
            <Button as='a' size='large'>I'm Still Quite Interested</Button>
          </Container>
        </Segment>
        <MainFooter />
        </div>
    </div>
  );
  }
}

HomeComponent.propTypes = {
  headerBlur: propTypes.number,
  headerBright: propTypes.number,
  headerInteractive: propTypes.bool
};

HomeComponent.defaultProps = {
  headerBright: 1,
  headerBlur: 0,
  headerInteractive: true 
}

export default HomeComponent;