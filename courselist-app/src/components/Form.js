import React, { Component } from 'react';

const url = "http://localhost:4001/enquiries";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Javascript',
      details: 'Enquire ...'
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeDetails = this.handleChangeDetails.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value })
  }

  handleChangeDetails(event) {
    this.setState({ details: event.target.value })
  }

  handleSubmit() {
    console.log(this.state)
    var id = Math.floor(Math.random() * 1000)
    var data = {
      id: id,
      name: this.state.title,
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
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4'>
            {/* <form > */}
            <div className="mb-3 mt-3">
              <label >Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name of topic"
                name="email"
                value={this.state.title}
                onChange={this.handleChangeTitle} />
            </div>

            <label >Details:</label>
            <textarea
              className="form-control mb-3"
              rows="5"
              id="details"
              name="text"
              placeholder='Detail of topic'
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