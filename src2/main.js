import {createStore} from './store.js'
import reducers from './reducers.js'
import {heal} from './actions.js'

import {grass} from './tiles.js'

const store = createStore(reducers)
const tilesY = 10
const tilesX = 10
const tileWidth = 8
const tileHeight = 8
const width = tilesX * tileWidth
const height = tilesY * tileHeight
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

document.body.appendChild(canvas)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(heal({amount: 50}))

canvas.width = width
canvas.height = height

for (let y = 0; y < tilesY; y++) {
  for (let x = 0; x < tilesX; x++) {
    const isGrass = (y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)
    isGrass && ctx.putImageData(grass(), x * tileWidth, y * tileHeight)
  }
}
