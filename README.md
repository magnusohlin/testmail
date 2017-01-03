# testmail

Javascript utility for checking if an email is valid or using a free or disposable email domain.
 
Based on the npm freemail module, which provides a database of free and disposable email domains.
All credit for the free and disposable domains lists goes to the npm freemail maintainers.

## Node

### Install

```
npm install --save testmail
```

```javascript
var testmail = require('testmail');
testmail.evaluate('foo@bar');
> 'invalid'
testmail.evaluate('foobar.com');
> 'invalid'
testmail.evaluate(123);
> 'invalid'

testmail.evaluate('smith@gmail.com');
> 'free'
testmail.evaluate('jack@mailinater.com');
> 'disposable'

testmail.evaluate('foo@google.com');
> 'valid'
```

## Credit

- [freemail](https://github.com/willwhite/freemail)
