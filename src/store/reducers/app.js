import { AppActionTypes } from '../actions/app';


const defaultState = {
    isLoading: true
}
export default function AppReducer(state = defaultState, action) {
  switch (action.type) {
    case AppActionTypes.loaded:
      return { isLoading: false }
    default:
      return state
  }
}
