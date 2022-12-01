export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_COURSE_LIST':
      return { ...state, courselist: action.payload }
    case 'GET_ENQUIRY_LIST':
      return { ...state, enquirylist: action.payload }
    default:
      return state
  }
}