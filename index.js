import IS from '@neumatter/is'

/**
 *
 * @param {string} i
 * @returns {string[]}
 * @api private
 */
const toWords = i => {
  const CAMEL_REGEX = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g
  return i.replace(/[\u{0080}-\u{FFFF}]/gu, '').match(CAMEL_REGEX) || [i]
}

/**
 *
 * @param {string[]} a
 * @returns {string}
 * @api private
 */
const camelCase = a => {
  const { length } = a
  let index = -1
  let result = ''
  while (++index < length) {
    const str = a[index].toLowerCase()
    result +=
    index !== 0 
      ? str.substring(0, 1).toUpperCase() + str.substring(1)
      : str
  }
  return result
}

/**
 *
 * @param {object} obj
 * @returns {object} object with keys converted to camelCase
 * @api public
 */
export const objectToCamelCase = obj => {
  const output = {}
  const keys = Object.keys(obj)
  const { length } = keys
  let index = -1
  while (++index < length) {
    const value = obj[keys[index]]
    const key = keys[index]
    output[`${camelCase(toWords(key))}`] = IS.object(value)
      ? objectToCamelCase(value)
      : value
  }
  return output
}

/**
 *
 * @param {string[]} arr
 * @param {object} [options]
 * @param {boolean} [options.arrayObject]
 * @returns {string[]} - Arrary with elements converted to camelCase
 * @api public
 */
export const arrayToCamelCase = (arr, options) => {
  options = options || {}
  return arr.map(el => {
    if (IS.array(el)) return arrayToCamelCase(el)
    if (IS.string(el)) return camelCase(toWords(el))
    if (options.arrayObject) {
      if (IS.object(el)) return objectToCamelCase(el)
    }
    return el
  })
}

/**
 * Converts array, object, string to camelCase.
 *
 * @param {any} input
 * @param {object} [options]
 * @param {boolean} [options.arrayObject]
 * @returns {*}
 * @api public
 */
export default function toCamelCase (input, options) {
  options = options || {}

  const tryToString = i => {
    return i && IS.string(i) ? i : i ? String(i) : ''
  }

  const unknownToCamelCase = input => {
    const catchErrTry = input => {
      try {
        const str = tryToString(input)
        const tryConvert = camelCase(toWords(str))
        return tryConvert
      } catch (err) {
        throw new Error(err).stack
      }
    }

    try {
      const converted = catchErrTry(input)
      return converted
    } catch (err) {
      throw new TypeError(
        `Tried unknown type and failed. Valid Types: <array>, <object>, <string>. \n${err}`
      ).stack
    }
  }

  return (
    (IS.array(input) && arrayToCamelCase(input, options)) ||
    (IS.object(input) && objectToCamelCase(input)) ||
    (IS.string(input) && camelCase(toWords(input))) ||
    unknownToCamelCase(input)
  )
}
