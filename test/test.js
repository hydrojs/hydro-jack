var obj = { foo: function() {} };

test('global', function() {
  assert(jack);
});

test('stub', function() {
  jack.stub(obj, 'foo');
  assert(obj.foo.double);
});

test('unstub', function() {
  assert(!obj.foo.double);
});
