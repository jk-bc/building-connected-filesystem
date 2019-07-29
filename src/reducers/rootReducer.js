import { combineReducers } from 'redux'
import rfpReducer from './rfpReducer'
import filesReducer from './filesReducer'

const rootReducer = combineReducers({
  rfp: rfpReducer,
  files: filesReducer
})

export default rootReducer;