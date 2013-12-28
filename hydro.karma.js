hydro.set({
  suite: 'hydro-jack',
  plugins: [require('hydro-jack')],
  globals: {
    jack: require('jack'),
    assert: require('assert')
  },
  proxies: {
    test: 'addTest'
  }
});

hydro.setup();
