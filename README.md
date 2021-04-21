[![npm version](https://badge.fury.io/js/email-regexp.svg)](https://badge.fury.io/js/email-regexp)

# email-regexp

A tiny JavaScript library for validating  email addresses. 
It's Gmail safe and supports  most TLDs.  

## Usage

## Installation
With npm:
```bash
npm i email-regexp
```
Using yarn package manager:
```bash
yarn add email-regexp
```

##  Commonjs module
Using Commonjs module pattern:
```javascript
const EmailRegex = require('email-regexp');

console.log(EmailRegex.isValid('nmurgor@gmail.com')) // => true
console.log(EmailRegex.isValid('nmurgor..@gmail.com')) // => false


```

## ES6 module
Using ES6 module pattern:
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


