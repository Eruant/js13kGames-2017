import {createStore} from './store.js'
import reducers from './reducers.js'
import {heal} from './actions.js'

const store = createStore(reducers)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(heal({amount: 50}))

const scene = document.querySelector('a-scene')
const forest = document.createElement('a-entity')
forest.setAttribute('shadow', 'receive: true')

const makeTree = position => {
  const tree = document.createElement('a-entity')
  const scale = Math.random() + 1
  tree.setAttribute('mixin', 'tree')
  tree.setAttribute('position', position)
  tree.setAttribute('scale', `${scale} ${scale} ${scale}`)
  forest.appendChild(tree)
}

for (let i = 0; i < 1500; i++) {
  const radius = 10
  const spred = 1000
  const x = Math.random() * spred - (spred * 0.5)
  const y = Math.random() * spred - (spred * 0.5)

  if (
    (x < radius && x > -radius) &&
    (y < radius && y > -radius)
  ) {
    continue
  }

  makeTree(`${x} 2 ${y}`)
}

scene.appendChild(forest)
