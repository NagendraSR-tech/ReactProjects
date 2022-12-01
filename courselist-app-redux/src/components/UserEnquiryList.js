import React from 'react';

const UserEnquiryList = (enquiryList) => {

  const renderUserEnquiry = ({ userenquirydata }) => {
    if (userenquirydata) {
      return userenquirydata.map((item) => {
        return (
          <div key={item.id} className="p-2 m-2 bg-light text-dark border">
            <p><strong>{item.topic}</strong><br />{item.details}</p>
          </div>
        )
      })
    }
  }

  return (
    <div>{renderUserEnquiry(enquiryList)}</div>
  )
}

export default UserEnquiryList