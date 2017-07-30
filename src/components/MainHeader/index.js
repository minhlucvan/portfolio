import React, { Component } from 'react';
import { Segment, Container, Header, Grid, Button, Icon } from 'semantic-ui-react';
import  scrollTo from 'scroll-to'; 
import propTypes from 'prop-types';

import './MainHeader.css';

class MainHeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.clockRef = null;
    const timeState = this._getTimeState();
    this.state = {
      ...timeState
    };
  }

  _getTimeState(){
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const hr = ((h >= 12 ? h - 12 : h)*30) - 180;
    const mr = ((m*6) + - 180 );
    const sr = ((s*6) + - 180 );
    return{
      hourRotate: hr,
      minuteRotate: mr,
      secondRotate: sr
    };
  }

  scrollToAboutMe = () => {
    scrollTo(500, 1200, {
      ease: 'out-bounce',
      duration: 1500
    });
  }

  render() {
   return (
      <Segment 
          className="home__header__bg"
          style={{ 
            filter: `blur(${this.props.blur}px) brightness(${this.props.bright})`,
            zIndex: this.props.interactive?'999':'-1',
            visibility: this.props.show?'visible':'hidden',
           }} vertical>
        <Grid container >
          <Grid.Row>
              <div id="workspace" style={{
                height: '492px'
              }}>
                <div className="clock">
                  <div className="top"></div>
                  <div className="right"></div>
                  <div className="bottom"></div>
                  <div className="left"></div>
                  <div className="center"></div>
                  <div className="hour"
                    style={{
                      transform: 'rotate('+this.state.hourRotate+'deg)'
                    }}>
                  </div>
                  <div className="minute" 
                    style={{
                      transform: 'rotate('+this.state.minuteRotate+'deg)'
                    }}></div>
                  <div className="second"
                    style={{
                      transform: 'rotate('+this.state.secondRotate+'deg)'
                    }}></div>
                </div>

                <div id="shelf">
                  <ul>

                    <li className="ipad"></li>

                    <li className="books">
                      <span></span>
                      <span><i></i></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                  </ul>
                  <div></div>
                </div>
                
                <div className="actions">
                  <Button secondary animated='vertical' size="huge" style={{
                    width: '152px',
                    height: '57px',
                    padding: '25px',
                    textAlign: 'center'
                  }}
                  onClick={this.scrollToAboutMe}>
                    <Button.Content hidden>About Me</Button.Content>
                    <Button.Content visible style={{  margin: '-20px 0px 0px 30px' }}>
                      <Icon name='eye' size="large" />
                    </Button.Content>
                  </Button>
                </div>

                <div className="desk">
                  <div className="table">
                    <div className="right-tb">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    

                    <span className="mouse"></span>

                    <span className="cup"><i></i></span>
                    
                    <span className="router">
                      <ul>
                        <li><i></i></li>
                        <li></li>
                      </ul>
                    </span>
                    
                    <div className="imac">
                      <span className="imac__sceen">
                        <span className="imac__right_panel">
                            <span className="imac__title">Minh Luc Van</span>
                            <span className="imac__subtitle">Full Nack Developer</span>
                        </span>
                      </span>
                      <span className="note">Yep!</span>
                    </div>

                    <span className="bk-screen">
                      <i></i>
                    </span>

                    <span className="iphone"></span>

                  </div>

                  <div className="chair">
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    <i className="shadows"></i>
                  </div>
                  
                  <div className="trash"><i className="shadows"></i></div>
                
                </div>

              </div>
          </Grid.Row>
        </Grid>
   </Segment>   
    );
  }
}


MainHeaderComponent.propTypes = {
  blur: propTypes.number,
  bright: propTypes.number,
  noMargin: propTypes.bool,
  show: propTypes.bool
};

MainHeaderComponent.defaultProps = {
  blur: 0,
  bright: 1,
  noMargin: false,
  show: true
}

export default MainHeaderComponent;