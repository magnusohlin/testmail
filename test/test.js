var assert = require('chai').assert;
var testmail = require('../index.js');

describe('Test mail', function() {

  it('should have an evaluate function',  function() {
    assert.isFunction(testmail);
  });

  it('should return invalid if email is not a string', function() {
    var email = 123;
    assert.equal('invalid', testmail(email));
  });

  it('should return invalid if no @ present', function() {
    var email = 'foobar.com';
    assert.equal('invalid', testmail(email));
  });

  it('should return invalid if empty before @', function() {
    var email = '@bar.com';
    assert.equal('invalid', testmail(email));
  });

  it('should return invalid if no domain present', function() {
    var email = 'foo@';
    assert.equal('invalid', testmail(email));
  });

  it('should return invalid if no domain end present', function() {
    var email = 'foo@bar';
    assert.equal('invalid', testmail(email));
  });

  it('should return invalid if numbers domain end', function() {
    var email = 'foo@bar.123';
    assert.equal('invalid', testmail(email));
  });

  it('should return valid if email is valid', function() {
    var email = 'foo@bar.com';
    assert.equal('valid', testmail(email));
  });

  it('should return free if email domain present in free list', function() {
    var email = 'foo@gmail.com';
    assert.equal('free', testmail(email));
  });

  it('should return disposable if email domain present in disposable list', function() {
    var email = 'foo@mailinator.com';
    assert.equal('disposable', testmail(email));
  });

});