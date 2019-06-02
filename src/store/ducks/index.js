import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { reducer as charList } from './charList'

export default history =>
  combineReducers({
    charList,
    router: connectRouter(history)
  })
