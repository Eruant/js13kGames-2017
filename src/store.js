import {container} from './f.js'

const getStateFactory = ({state}) => () =>
  state[state.length - 1].valueOf()

const dispatchFactory = ({getState, state, reducer, subscriptions}) => action => {
  const newState = container(
    reducer(
      getState(),
      action
    )
  )

  state.push(newState)
  subscriptions.forEach(fn => fn())
}

const subscribeFactory = ({subscriptions}) => fn => subscriptions.push(fn)

export const createStore = (reducer, defaultState = {}) => {
  const state = []
  const subscriptions = []
  state.push(container(defaultState))

  const getState = getStateFactory({state})
  const dispatch = dispatchFactory({state, getState, reducer, subscriptions})
  const subscribe = subscribeFactory({subscriptions})

  return {getState, dispatch, subscribe}
}
