[![NPM
version](https://badge.fury.io/js/hydro-jack.png)](http://badge.fury.io/js/hydro-jack)
[![Build Status](https://secure.travis-ci.org/hydrojs/hydro-jack.png)](http://travis-ci.org/hydrojs/hydro-jack)
[![Coverage Status](https://coveralls.io/repos/hydrojs/hydro-jack/badge.png?branch=master)](https://coveralls.io/r/hydrojs/hydro-jack?branch=master)

# hydro-jack

## Synopsis

Jack.js integration for [hydro](https://github.com/hydrojs/hydro)

Reverts all stubbed and mocked methods before and after each test.

NOTE: This is meant to work with jack >= 0.1 which is currently not officially
released.

## Usage

```js
hydro.set({
  attach: global,
  plugins: ['hydro-jack'],
  jack: {
    global: false, // Make jack global, (optional, default: true)
  },
});
```
## Installation

npm:

```bash
npm install hydro-jack
```

component:

```bash
component install hydrojs/hydro-jack
```

stand-alone:

* Download dist/hydro-jack.js
* `<script src="hydro-jack"></script>`

## Tests

```bash
$ npm test
```

## License

(The MIT License)

Copyright (c) 2013 Veselin Todorov <hi@vesln.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
