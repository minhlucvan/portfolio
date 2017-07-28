import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

class Nav extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Menu fixed='top' pointing secondary size='mini'>
        <Menu.Item header position='right' as="a" href="//github.com/minhlucvan/portfolio">
            <img src="http://minhlv.ga/css/images/logo.png" 
                 alt="minhlucvan's Portfolio"
                 title="minhlucvan's Portfolio" />
        </Menu.Item>
        <Container>
          <Menu.Item as={NavLink} to="/home" activeClass="active">Home</Menu.Item>
          <Menu.Item as={NavLink} to="/projects" activeClass="active">Projects</Menu.Item>
          <Menu.Item as={NavLink} to="/posts" activeClass="active">Posts</Menu.Item>
          <Menu.Item as={NavLink} to="/techs" activeClass="active">Techs</Menu.Item>
          <Menu.Item as={NavLink} to="/contacts" activeClass="active">Contacts</Menu.Item>
          <Menu.Item as={NavLink} to="/thanks" activeClass="active">Thanks</Menu.Item>
          
          <Menu.Item position='right' as="a" href="//github.com/minhlucvan/portfolio">
            <div>
              <img style={{ width: '20px' }} 
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlXXVoCwPXhwhyjw1SFBKRFgXUjiA8T3UPJcJWwMFwF2bS4sm3" 
                 alt="fork me on github"
                 title="fork me on github" />
                 <span style={{ 
                    color: 'gray',
                    lineHeight: '20px',
                    verticalAlign: 'bottom' }}>
                   &nbsp;&nbsp;Fork me on Github
                 </span>   
            </div>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Nav;