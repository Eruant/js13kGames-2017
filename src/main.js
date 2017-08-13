const makeElement = x => document.createElement(x)
const makeText = x => document.createTextNode(x)

const text = makeText('JS 13k Games | Lost')
const h1 = makeElement('h1')

h1.append(text)
document.body.appendChild(h1)
