export default function JoJo(params) {
  const arr = []
  if (arguments.length === 1) {
    switch (typeof params) {
    case 'number':
      if (Math.sign(params) === 1) {
        for (let i = 0; i < params; i++) {
          arr.push(i)
        }
      } else if (Math.sign(params) === -1) {
        for (let i = 0; i > params; i--) {
          arr.push(i)
        }
      }
      return arr
    case 'string':
      return params.split('')
    default:
      return [params]
    }
  } else if (arguments.length === 2) {
    if (
      typeof Number(arguments[0]) === 'number' &&
      typeof Number(arguments[1]) === 'number'
    ) {
      for (let i = arguments[0]; i < arguments[1]; i++) {
        arr.push(i)
      }
    } else {
      arr.push(...arguments)
    }
    return arr
  } else if (arguments.length === 3) {
    if (
      typeof Number(arguments[0]) === 'number' &&
      typeof Number(arguments[1]) === 'number' &&
      typeof Number(arguments[2]) === 'number'
    ) {
      if (Math.sign(arguments[1]) === 1) {
        if (arguments[2] < arguments[0]) {
          for (let i = arguments[0]; i < arguments[1]; i++) {
            arr.push(arguments[0])
          }
        } else {
          for (let i = arguments[0]; i < arguments[1]; i += arguments[2]) {
            arr.push(i)
          }
        }
      } else if (Math.sign(arguments[1]) === -1) {
        if (arguments[2] > arguments[0]) {
          for (let i = arguments[0]; i > arguments[1]; i--) {
            arr.push(arguments[0])
          }
        } else {
          for (let i = arguments[0]; i > arguments[1]; i += arguments[2]) {
            arr.push(i)
          }
        }
      }
    } else {
      arr.push(...arguments)
    }
    return arr
  } else if (arguments.length > 3) {
    return [...arguments]
  }
  return []
}
