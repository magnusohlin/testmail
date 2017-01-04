# testmail

Javascript utility for checking if an email is valid or using a free or disposable email domain.
 
Based on the npm freemail module, which provides a database of free and disposable email domains.
All credit for the free and disposable domains lists goes to the npm freemail maintainers.

Could for example be used to test if a user is using a business email.

## Node

### Install

```
npm install --save testmail
```

```javascript
var testmail = require('testmail');

testmail('foo@bar');
> 'invalid'
testmail('foobar.com');
> 'invalid'
testmail(123);
> 'invalid'

testmail('smith@gmail.com');
> 'free'
testmail('jack@mailinater.com');
> 'disposable'

testmail('foo@google.com');
> 'valid'
```

## Credit

- [freemail](https://github.com/willwhite/freemail)
