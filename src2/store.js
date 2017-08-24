import {container} from './f.js'

const state = []
const subscriptions = []

export const createStore = (reducer, defaultState) => {
  state.push(container(defaultState))

  const getState = () => state[state.length - 1].valueOf()

  const dispatch = action => {
    state.push(container(reducer(getState(), action)))
    subscriptions.forEach(fn => fn())
  }

  const subscribe = fn => subscriptions.push(fn)

  return {getState, dispatch, subscribe}
}
