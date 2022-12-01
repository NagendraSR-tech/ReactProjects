import React, { Component } from 'react';
import { connect } from 'react-redux'
import { enquiryList } from '../actions';
import { bindActionCreators } from 'redux';

import UserEnquiryList from '../components/UserEnquiryList';

class UserEnquiry extends Component {
  componentDidMount() {
    this.props.enquiryList();
  }

  render() {
    return (
      <UserEnquiryList userenquirydata={this.props.finalenquirystate.enquirylist} />
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return ({
    finalenquirystate: state.enquiries
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ enquiryList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEnquiry)