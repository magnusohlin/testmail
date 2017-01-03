var free = require('./data/free')
var disposable = require('./data/disposable')
var tldjs = require('tldjs');

var isValidRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var getDomain = function (email) {
  return tldjs.getDomain(email.split('@').pop())
}

var typeCheck = function (email) {
  if (typeof email !== 'string') {
    return false
  } else {
    return true
  }
}

var isValid = function (email) {
  return isValidRe.test(email)
}

var isFree = function (email) {
  var domain = getDomain(email)
  return free.indexOf(domain) !== -1
}

var isDisposable = function (email) {
  var domain = getDomain(email)
  return disposable.indexOf(domain) !== -1
}

var evaluate = function(email) {
  if (!typeCheck(email) || !isValid(email)) {
    return 'invalid'
  } else if (isDisposable(email)) {
    return 'disposable'
  } else if (isFree(email)) {
    return 'free'
  } else {
    return 'valid'
  }
}

module.exports = {
  evaluate: evaluate
}