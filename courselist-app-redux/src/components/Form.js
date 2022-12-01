import React, { Component } from 'react';

const url = "http://localhost:4001/enquiries";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      topic: 'Enter required topic',
      name: '',
      email: '',
      phonenumber: '',
      details: 'Enquire ...',
    }
    this.handleChangeTopic = this.handleChangeTopic.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this)
    this.handleChangeDetails = this.handleChangeDetails.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeTopic(event) {
    this.setState({ topic: event.target.value })
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value })
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value })
  }
  handleChangePhoneNumber(event) {
    this.setState({ phonenumber: event.target.value })
  }
  handleChangeDetails(event) {
    this.setState({ details: event.target.value })
  }

  handleSubmit() {
    var id = Math.floor(Math.random() * 1000)
    var data = {
      id: id,
      topic: this.state.topic,
      name: this.state.name,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      details: this.state.details
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(console.log('data added'))
    alert('Details submitted')
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <h3 className='mt-3'>Please fill your details</h3>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4'>
            {/* <form > */}
            <div className="mb-3 ">
              <label >Name:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Name"
                name="username"
                value={this.state.name}
                onChange={this.handleChangeName} />
            </div>

            <div className="mb-3 mt-3">
              <label >Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChangeEmail} />
            </div>

            <div className="mb-3 mt-3">
              <label >Topic:</label>
              <input
                type="text"
                className="form-control"
                id="topic"
                placeholder="Topic"
                name="topic"
                value={this.state.topic}
                onChange={this.handleChangeTopic} />
            </div>

            <div className="mb-3 mt-3">
              <label >Name:</label>
              <input
                type="tel"
                className="form-control"
                id="phonenumber"
                placeholder="Mobile number"
                name="phonenumber"
                value={this.state.phonenumber}
                onChange={this.handleChangePhoneNumber} />
            </div>

            <label >Details:</label>
            <textarea
              className="form-control mb-3"
              rows="5"
              id="details"
              name="text"
              placeholder='Details'
              value={this.state.details}
              onChange={this.handleChangeDetails}></textarea>

            <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
            {/* </form> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Form