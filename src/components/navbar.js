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


  // <Menu.Item name='recycle'>
  //   <Icon name='recycle' />
  // </Menu.Item>

//   import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { Menu } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
// import { signout } from '../actions/users'
//
// class NavBar extends Component {
//
//   render() {
//     return (
//         <Menu fixed='top' fluid size='massive'>
//           <Menu.Item header>All Good Things</Menu.Item>
//           <Link to='/'>
//             <Menu.Item name='feed' />
//           </Link>
//           <Link to='/profile'>
//             <Menu.Item name='profile' />
//           </Link>
//           <Link to='/discover'>
//             <Menu.Item name='discover' />
//           </Link>
//           <Menu.Item
//             name='signOut'
//             position='right'
//             onClick={() => this.props.signout()}
//           />
//         </Menu>
//     );
//   }
// }
//
// export default connect(null, { signout } )(NavBar);
