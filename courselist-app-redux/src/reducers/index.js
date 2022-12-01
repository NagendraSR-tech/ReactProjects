import { combineReducers } from 'redux'
import courses from './course_reducer'
import enquiries from './course_reducer'

const rootReducer = combineReducers(
  {
    courses,
    enquiries
  }
)

export default rootReducer;