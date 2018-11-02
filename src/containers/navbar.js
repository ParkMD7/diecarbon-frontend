// dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'

const NavBar = () => (
  <Menu vertical>
    <Dropdown item text='Navigation'>
      <Dropdown.Menu>
        <Dropdown.Item>Goals</Dropdown.Item>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>About</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
)

export default NavBar


  // <Menu.Item name='recycle'>
  //   <Icon name='recycle' />
  // </Menu.Item>
