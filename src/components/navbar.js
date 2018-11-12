// dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

// user files
import { signout } from '../actions/currentUser';

class NavBar extends Component {

  handleSignOut = (event) => {
    event.preventDefault()
    this.props.signout()
  }


  render(){
    return(
    <Menu inverted vertical size='huge' borderless style={{width: '350px'}}>
      <Dropdown inverted item fluid text='Navigate To: ' style={{width: '200px'}}>
        <Dropdown.Menu inverted>

          <Dropdown.Item as={ Link } name='profile' to='/'>
            <Icon name='recycle' circular fitted color='red' size='large' aria-label='goals'/>
            Main Page
          </Dropdown.Item>

          <Dropdown.Item as={ Link } name='profile' to='/profile'>
            <Icon name='user' circular fitted color='red' size='large' aria-label='profile'/>
            Profile
          </Dropdown.Item>

          <Dropdown.Item as={ Link } name='about' to='/about'>
            <Icon name='info circle' circular fitted color='red' size='large' aria-label='about'/>
            About
          </Dropdown.Item>

          <Dropdown.Item as={ Link } name='signout' onClick={this.handleSignOut} to='/login'>
            <Icon name='sign out' circular fitted color='red' size='large' aria-label='sign out'/>
            Sign Out
          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    </Menu>
    )
  }
}

export default connect(null, { signout } )(NavBar);
