
declare module '@neumatter/to-camel-case'

/**
 *
 * @param {object} obj
 * @returns {object} object with keys converted to camelCase
 * @api public
 */
declare const objectToCamelCase: (obj:object) => object

/**
 *
 * @param {string[]} arr
 * @param {object} [options]
 * @param {boolean} [options.arrayObject]
 * @returns {string[]} - Arrary with elements converted to camelCase
 * @api public
 */
declare const arrayToCamelCase: (arr:string[], options?: { arrayObject:boolean }) => string[]

/**
 * Converts array, object, string to camelCase.
 *
 * @param {any} input
 * @param {object} [options]
 * @param {boolean} [options.arrayObject]
 * @returns {*}
 * @api public
 */
declare function toCamelCase (input:any, options?: { arrayObject:boolean }): any

export = toCamelCase
export {
  objectToCamelCase,
  arrayToCamelCase
}
