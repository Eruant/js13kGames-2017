const drawPixel = ctx => (x, y) => ctx.fillRect(x, y, 1, 1)

export const grass = () => {
  let data

  if (!data) {
    const width = 8
    const height = 8
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = width
    canvas.height = height

    ctx.fillStyle = 'olivedrab'
    ctx.fillRect(0, 0, width, height)

    const p = drawPixel(ctx)

    ctx.fillStyle = 'olive'
    p(2, 2)
    p(2, 4)
    p(0, 3)
    p(5, 1)
    p(4, 7)
    p(6, 3)

    data = ctx.getImageData(0, 0, width, height)
  }

  return data
}
