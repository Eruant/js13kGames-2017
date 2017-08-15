import {HEAL} from './reducers.js'

export const heal = ({amount}) =>
  ({
    amount,
    type: HEAL
  })
