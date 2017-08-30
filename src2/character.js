const makeCanvas = (width = 8, height = 16) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  return canvas
}

export const player = () => {
  const canvas = makeCanvas()
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = 'green'
  ctx.fillRect(0, 0, 8, 16)

  return canvas
}
