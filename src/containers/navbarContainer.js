// dependencies
import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// user files
import NavBar from './navbar'
import Footprint from './footprint'

class NavBarContainer extends Component {
  render(){
    return(
      <Menu inverted size='massive' fixed='top' fluid widths={3} style={{height: '75px'}}>

        <Menu.Item>
          <Footprint />
        </Menu.Item>

        <Menu.Item>
          <Link to='/' style={{color: 'white'}}>
            <h1>di<span style={{color: 'red'}}>(e)</span>carbon</h1>
          </Link>
        </Menu.Item>

        <Menu.Item >
          <NavBar />
        </Menu.Item>

      </Menu>
    )
  }
}

export default NavBarContainer;
