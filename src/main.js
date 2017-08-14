import {createStore} from './store.js'
import reducer, {START} from './reducer.js'

const makeElement = x => document.createElement(x)
const makeText = x => document.createTextNode(x)

const game = makeElement('game')

document.body.appendChild(game)

const store = createStore(reducer, {foo: 'bar'})

const getStateToString = () =>
  JSON.stringify(store.getState(), null, 2)

const initialText = makeText(getStateToString())
game.appendChild(initialText)

store.subscribe(() => {
  const text = makeText(getStateToString())
  game.replaceChild(text, game.firstChild)
})

store.dispatch({
  type: START
})
