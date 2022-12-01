import React from 'react';

const UserEnquiryList = (props) => {

  const renderUserEnquiry = ({ userenquirydata }) => {
    if (userenquirydata !== "") {
      return userenquirydata.map((item) => {
        return (
          <div key={item.id} className="mt-4 p-5 bg-secondary text-white">
            <h2>{item.name}</h2>
            <p>{item.details}</p>
          </div>
        )
      })
    }
  }

  return (
    <div>{renderUserEnquiry(props)}</div>
  )
}

export default UserEnquiryList