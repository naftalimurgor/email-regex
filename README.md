[![npm version](https://badge.fury.io/js/email-regexp.svg)](https://badge.fury.io/js/email-regexp)  ![npm](https://img.shields.io/npm/dw/email-regexp)
# email-regexp

Regular expressions for validating regular email addresses.  

## usage

Install package

```bash
npm i email-regexp
```

```bash
yarn add email-regexp
```

##  commonjs module

```javascript
const EmailRegex = require('email-regexp');

console.log(EmailRegex.isValid('nmurgor@gmail.com')) // => true
console.log(EmailRegex.isValid('nmurgor..@gmail.com')) // => false
console.log(EmailRegex.isValid('FOO@MACHINE.COM')) // => false, uppercase


```
## ES6 module

```javascript
import EmailRegex from 'email-regexp'

console.log(EmailRegex.isValid('nmurgor@gmail.com')) // => true
console.log(EmailRegex.isValid('nmurgor..@gmail.com')) // => false
console.log(EmailRegex.isValid('FOO@MACHINE.COM')) // => false, uppercase

```
# api
```typescript

 EmailRegex.isValid(emailAddress: string) => boolean
```


