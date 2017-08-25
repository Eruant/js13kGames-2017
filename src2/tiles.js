const makeCanvas = (width = 8, height = 8, color = 'red') => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')

  ctx.fillStyle = color
  ctx.fillRect(0, 0, width, height)

  return ctx
}

const randomInt = max => Math.floor(Math.random() * max)

const drawRandomPixel = ctx => ctx.fillRect(randomInt(8), randomInt(8), 1, 1)

const makeTile = (color, altColor) => {
  const ctx = makeCanvas(8, 8, color)

  ctx.fillStyle = altColor
  for (let i = 0; i < 20; i++) {
    drawRandomPixel(ctx)
  }

  const data = ctx.getImageData(0, 0, 8, 8)

  return () => data
}

export const grass = makeTile('olivedrab', 'olive')
export const dirt = makeTile('peru', 'burlywood')
export const water = makeTile('turquoise', 'mediumturquoise')
