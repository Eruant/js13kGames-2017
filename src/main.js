import {createStore} from './store.js'
import reducers from './reducers.js'
import {heal} from './actions.js'

const makeElement = x => document.createElement(x)
const makeText = x => document.createTextNode(x)

const game = makeElement('game')

document.body.appendChild(game)

const store = createStore(reducers)

const getStateToString = () =>
  JSON.stringify(store.getState(), null, 2)

const initialText = makeText(getStateToString())
game.appendChild(initialText)

store.subscribe(() => {
  const text = makeText(getStateToString())
  game.replaceChild(text, game.firstChild)
})

store.dispatch(heal({amount: 50}))
store.dispatch(heal({amount: 10}))
