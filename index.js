/**
 * External dependencies.
 */

var loa = require('loa');

/**
 * Jack.js plugin for hydro. Reverts all stubbed/mocked methods
 * before and after each test.
 *
 * @param {Object} hydro
 * @param {Object} util
 * @api public
 */

module.exports = function(hydro, util) {
  var opts = hydro.get('jack') || {};
  var jack = loa('jack');

  if (opts.global !== false) {
    hydro.set('globals', 'jack', jack);
  }

  hydro.on('pre:test', function() {
    jack.revert();
  });

  hydro.on('post:test', function() {
    jack.revert();
  });
};
