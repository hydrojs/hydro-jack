/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  var plugin = require('./index');

  hydro.set({
    plugins: [plugin],
    proxies: {
      test: 'addTest'
    },
    suite: 'hydro-jack',
    formatter: 'hydro-simple',
    globals: {
      assert: require('assert')
    },
    tests: [
      'test/*.js'
    ]
  });
};
