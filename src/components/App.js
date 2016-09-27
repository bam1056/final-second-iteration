import React, { Component } from 'react'
import Header from './Header'
import { Footer, Breadcrumbs } from 'rebass'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userName: '',
      userId: '',
      currentTask: {}
    }
  }
  static propTypes = {
    children: React.PropTypes.object.isRequired
  }

  setUser = (id, name) => {
    this.setState({
      userName: name,
      userId: id
    })
  }

  getAssignedTask = (taskList) => {
    this.setState({
      currentTask: taskList[0]
    })
  }

  render () {
    const style = {
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: '0',
      right: '0',
      left: '0',
      minWidth: '100%',
      margin: 0
    }
    return <div>
      <Header />
      {this.props.children && React.cloneElement(this.props.children, {setUser: this.setUser, userName: this.state.userName, userId: this.state.userId, getAssignedTask: this.getAssignedTask, currentTask: this.state.currentTask})}
      <Footer
        style={style}
        >
        <Breadcrumbs
          links={[
            {children: 'About Us', href: '/about'}, {children: 'Contact Us', href: '/contact'}, {children: 'FAQs', href: '#!'}]}
        />
      </Footer>
    </div>
  }
}

export default App
