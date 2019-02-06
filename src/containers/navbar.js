// dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

// user files
import { signout } from '../actions/currentUser';

class NavBar extends Component {

  // NOTE: this function signs a user of out their current session
  handleSignOut = (event) => {
    event.preventDefault()
    this.props.signout()
  }

  render(){
    // console.log('%c navbar Props: ', 'color: green', this.props.user);
    if(!this.props.user.user){
      return (
        <Menu inverted vertical size='massive' borderless style={{width: '350px'}}>
          <Dropdown size='massive' inverted item fluid text='Menu ' style={{width: '200px', color: 'red', 'fontFamily':'Montserrat'}}>
            <Dropdown.Menu inverted>

              <Dropdown.Item as={ Link } name='login' to='/login'>
                <Icon name='signup' circular fitted color='red' size='large' aria-label='about'/>
                Log In
              </Dropdown.Item>

              <Dropdown.Item as={ Link } name='signup' to='/signup'>
                <Icon name='signup' circular fitted color='red' size='large' aria-label='about'/>
                Sign Up
              </Dropdown.Item>

              <Dropdown.Item as={ Link } name='about' to='/about'>
                <Icon name='info circle' circular fitted color='red' size='large' aria-label='about'/>
                About
              </Dropdown.Item>

              <Dropdown.Item as={ Link } name='about' to='/shop'>
                <Icon name='cart' circular fitted color='red' size='large' aria-label='shop'/>
                Shop
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      )
    }

    return(
      <Menu inverted vertical size='massive' borderless style={{width: '350px'}}>
        <Dropdown size='massive' inverted item fluid text='Menu ' style={{width: '200px', color: 'red', 'fontFamily':'Montserrat'}}>
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

            <Dropdown.Item as={ Link } name='about' to='/shop'>
              <Icon name='cart' circular fitted color='red' size='large' aria-label='shop'/>
              Shop
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

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, { signout } )(NavBar);
