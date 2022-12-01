import React, { Component } from 'react';
import UserEnquiryList from './UserEnquiryList';

const url = 'http://localhost:4001/enquiries';

class UserEnquiry extends Component {
  constructor() {
    super()
    this.state = {
      enquiries: ''
    }
  }

  componentDidMount() {
    fetch(url, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          enquiries: data
        })
        // console.log(data)
      })
  }

  render() {
    return (
      <div className='container'>
        <h1 className='mt-2'>User Enquiries</h1>
        <UserEnquiryList userenquirydata={this.state.enquiries} />
      </div>
    )
  }
}

export default UserEnquiry