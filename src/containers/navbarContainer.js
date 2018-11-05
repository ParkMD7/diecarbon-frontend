// dependencies
import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react';

// user files
import NavBar from '../components/navbar'
import Footprint from './footprint'

class NavBarContainer extends Component {
  render(){
    return(
      <Menu size='massive' fixed='top' fluid widths={3}>

        <Menu.Item>
          <Footprint />
        </Menu.Item>

        <Menu.Item>
          <h1>di(e)carbon</h1>
        </Menu.Item>

        <Menu.Item>
          <NavBar />
        </Menu.Item>

      </Menu>
    )
  }
}

export default NavBarContainer;
