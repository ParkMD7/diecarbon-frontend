// dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Menu, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

// user files
import { signout } from '../actions/currentUser'

const NavBar = () => {
  return(
  <Menu vertical size='big' justified>
    <Dropdown item text='Navigate To: '>
      <Dropdown.Menu>

        <Link to='/'>
          <Dropdown.Item>
            <Icon name='recycle' circular fitted color='olive' size='big' aria-label='goals'/>
          </Dropdown.Item>
        </Link>

        <Link to='/profile'>
          <Dropdown.Item>
            <Icon name='user' circular fitted color='olive' size='big' aria-label='profile'/>
          </Dropdown.Item>
        </Link>

        <Link to='/about'>
          <Dropdown.Item>
            <Icon name='info circle' circular fitted color='olive' size='big' aria-label='about'/>
          </Dropdown.Item>
        </Link>

        <Link to='/login'>
          <Dropdown.Item
            name='signOut'
            onClick={() => this.props.signout()}>
            <Icon name='sign out' circular fitted color='olive' size='big' aria-label='sign out'/>
          </Dropdown.Item>
        </Link>

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
