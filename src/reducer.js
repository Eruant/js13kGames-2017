import {merge} from './f.js'

export const START = 'START'

export default (state = {}, action = {}) => {
  switch (action.type) {
    case START:
      return merge(state, {started: true})
    default:
      return state
  }
}
