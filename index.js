var free = require('./data/free');
var disposable = require('./data/disposable');
var tldjs = require('tldjs');

var isValidRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function getDomain(email) {
  return tldjs.getDomain(email.split('@').pop());
}

function typeCheck(email) {
  return typeof email === 'string';
}

function isValid(email) {
  return isValidRe.test(email);
}

function isPartOf(email, list) {
  var domain = getDomain(email);
  return list.indexOf(domain) !== -1;
}

function testmail(email) {
  if (!typeCheck(email) || !isValid(email)) {
    return 'invalid';
  } else if (isPartOf(email, disposable)) {
    return 'disposable';
  } else if (isPartOf(email, free)) {
    return 'free';
  } else {
    return 'valid';
  }
}

module.exports = testmail;