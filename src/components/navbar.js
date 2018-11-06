// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

// user files
import { signout } from '../actions/currentUser';

const NavBar = () => {
  return(
  <Menu vertical size='huge' justified="true">
    <Dropdown item fluid text='Navigate To: '>
      <Dropdown.Menu>

        <Dropdown.Item as={ Link } name='profile' to='/'>
          <Icon name='recycle' circular fitted color='black' size='large' aria-label='goals'/>
          Main Page
        </Dropdown.Item>

        <Dropdown.Item as={ Link } name='profile' to='/profile'>
          <Icon name='user' circular fitted color='black' size='large' aria-label='profile'/>
          Profile
        </Dropdown.Item>

        <Dropdown.Item as={ Link } name='about' to='/about'>
          <Icon name='info circle' circular fitted color='black' size='large' aria-label='about'/>
          About
        </Dropdown.Item>

        <Dropdown.Item as={ Link } name='signout' to='/signout'>
          <Icon name='sign out' circular fitted color='black' size='large' aria-label='sign out'/>
          Sign Out
        </Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  </Menu>
  )
}

export default connect(null, { signout } )(NavBar);
