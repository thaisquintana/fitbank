import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* Types & Action Creators */

const { Types, Creators } = createActions({
  charactersRequest: ['results'],
  charactersSuccess: ['char']
})

export const CharactersTypes = Types
export default Creators

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: {}
})

/* Reducers */

export const charListSuccess = (state, { data }) => {
  console.log(data)
  return state.merge({ data })
}

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHARACTERS_SUCCESS]: charListSuccess
})
