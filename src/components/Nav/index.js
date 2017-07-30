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

import './Nav.css';

class Nav extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Menu fixed='top' size='mini' className="nav-red" color={'black'} inverted>
        <Menu.Item header position='right' as="a" href="//github.com/minhlucvan/portfolio">
            <img src="http://minhlv.ga/css/images/logo.png" 
                 alt="minhlucvan's Portfolio"
                 title="minhlucvan's Portfolio" />
        </Menu.Item>
        <Container>
          <Menu.Item as={NavLink} to="/home">Home</Menu.Item>
          <Menu.Item as={NavLink} to="/projects">Projects</Menu.Item>
          <Menu.Item as={NavLink} to="/posts">Posts</Menu.Item>
          <Menu.Item as={NavLink} to="/techs">Techs</Menu.Item>
          <Menu.Item as={NavLink} to="/contacts">Contacts</Menu.Item>
          <Menu.Item as={NavLink} to="/thanks">Thanks</Menu.Item>
          
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