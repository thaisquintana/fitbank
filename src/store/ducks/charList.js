import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* Types & Action Creators */

const { Types, Creators } = createActions({
  // get List Client
  charListRequest: null,
  charListSuccess: ['data']
})

export const CharListTypes = Types
export default Creators

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: []
})

/* Reducers */

export const charsList = (state, { data }) => state.merge({ data })

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHAR_LIST_SUCCESS]: charsList
})
