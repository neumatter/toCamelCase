
# toCamelCase

Tool for converting strings, arrays, and object keys to strings.

<br />

# Table of Contents
1. [ Install ](#install) <br />
2. [ Usage ](#examples) <br />

<br />

<a name="install"></a>
## Install

```console
npm i @neumatter/to-camel-case 
```

<br />

<a name="examples"></a>
## Usage


### Default:

```js
// CJS require
const toCamelCase = require('@neumatter/to-camel-case')
// ESM import
import toCamelCase from '@neumatter/to-camel-case'

/** 
 *
 * @param {string}
 * @returns {string} helloWorld
*/
toCamelCase('hello-world') 
/** 
 *
 * @param {string}
 * @returns {string} helloWorld
*/
toCamelCase('hello_world'))
/** 
 *
 * @param {string}
 * @returns {string} helloWorld
*/
toCamelCase('hello world'))
/** 
 *
 * @param {string}
 * @returns {string} helloWorld
*/
toCamelCase('hello\nworld'))
/** 
 *
 * @param {string[]}
 * @returns {string[]} [ 'helloWorld1', 'helloWorld2', [ 'helloWorld1', 'helloWorld2' ] ]
*/
toCamelCase(['hello\nworld1', 'hello world2', ['hello_world1', 'hello-world2']]))
/** 
 *
 * @param {object}
 * @returns {object} { helloWorld1: 'hi', helloWorld2: 'hi', helloWorld3: { helloWorld4: 'hi', helloWorld5: 'hi' } }
*/
toCamelCase({
  hello_world1: 'hi',
  'hello world2': 'hi',
  hello__world3: {
    hello_world4: 'hi',
    'hello world5': 'hi'
  }
})
```
