export const curry = (fn, ...args) =>
  args.length === fn.length
    ? fn(...args)
    : (...rest) => curry(fn, ...args, ...rest)

export const compose = (...args) =>
  (...rest) =>
    args.reduceRight((value, fn) => curry(fn)(value), ...rest)

export const pipe = (...args) =>
  (...rest) =>
    args.reduce((value, fn) => curry(fn)(value), ...rest)

export const merge = (...x) =>
  Object.assign({}, ...x)

export const trace = x => {
  console.log(x)
  return x
}

export const container = value =>
  ({
    valueOf: () => value,
    map: fn => container(fn(value))
  })
