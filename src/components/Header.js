import React, { Component } from 'react'
import { Dropdown, DropdownMenu, Button, NavItem, Arrow, Base } from 'rebass'
import { Link, browserHistory } from 'react-router'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      open: false
    }
  }
  static propTypes = {
    setUser: React.PropTypes.func
  }

  showDropDown = (event) => {
    this.setState({open: true})
  }

  dismissDropDown = (event) => {
    this.setState({open: false})
  }

  signOut = () => {
    window.sessionStorage.removeItem('userId')
    window.sessionStorage.removeItem('userName')
    browserHistory.push('/')
  }

  render () {
    return <Base
      backgroundColor='black'
      color='white'
      >
      <Dropdown>
        <Button
          backgroundColor='black'
          color='white'
          inverted
          rounded
          onMouseEnter={this.showDropDown}
          >
          Menu
          <Arrow direction='down' />
        </Button>
        <DropdownMenu
          open={this.state.open}
          onMouseLeave={this.dismissDropDown}
          >
          <NavItem to='/' is={Link} children='Home' />
          <NavItem to='/get-task' is={Link} children='AskForTask' />
          <NavItem to='/currentTask' is={Link} children='Current Task' />
          <NavItem to='/todolist' is={Link} children='ToDos' />
          <NavItem to='/profile' is={Link} children='Profile' />
        </DropdownMenu>
      </Dropdown>
    </Base>
  }
}
export default Header
