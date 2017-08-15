import {merge} from './f.js'

export const HEAL = 'HEAL'

const MAX_HEALTH = 100

const defaultState = {
  health: 0
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case HEAL:
      return merge(
        state,
        {
          health: (state.health + action.amount > MAX_HEALTH) ? MAX_HEALTH : state.health + action.amount
        }
      )
    default:
      return state
  }
}
