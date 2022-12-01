const baseurl = "http://localhost:4001"

export function courseList() {
  const output = fetch(`${baseurl}/courses`, { method: 'GET' })
    .then((response) => response.json())

  return {
    type: 'GET_COURSE_LIST',
    payload: output
  }
}

export function enquiryList() {
  const output = fetch(`${baseurl}/enquiries`, { method: 'GET' })
    .then((response) => response.json())

  return {
    type: 'GET_ENQUIRY_LIST',
    payload: output
  }
}