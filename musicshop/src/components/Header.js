import React, { Component } from 'react';
import './header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'React App',
      userInput: 'User text here'
    }
  }

  inputChange(event) {
    this.setState({
      userInput: event.target.value ? event.target.value : 'User text here'
    })
  }

  render() {
    return (
      <div className='input-bx'>
        <input type="text" placeholder='Please enter your search' onChange={this.inputChange.bind(this)} />
        <span>{this.state.userInput}</span>
      </div>
    )
  }
}

export default Header