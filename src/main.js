/* globals AFRAME */

import {createStore} from './store.js'
import reducers from './reducers.js'
import {heal} from './actions.js'

const store = createStore(reducers)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(heal({amount: 50}))

const getRandomColor = () => {
  console.log('getRandomColor')
  const letters = '0123456789abcdef'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

AFRAME.registerComponent('random-color', {
  dependancies: ['material'],
  init () {
    this.el.setAttribute('material', 'color', getRandomColor())
  }
})

AFRAME.registerComponent('snap', {
  dependencies: ['position'],
  schema: {
    offset: {type: 'vec3'},
    snap: {type: 'vec3'}
  },
  init () {
    this.originalPos = this.el.getAttribute('position')
  },
  update () {
    const data = this.data
    const pos = AFRAME.utils.clone(this.originalPos)
    pos.x = Math.floor(pos.x / data.snap.x) * data.snap.x + data.offset.x
    pos.y = Math.floor(pos.y / data.snap.y) * data.snap.y + data.offset.y
    pos.z = Math.floor(pos.z / data.snap.z) * data.snap.z + data.offset.z

    this.el.setAttribute('position', pos)
  }
})
