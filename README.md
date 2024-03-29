[![npm version](https://badge.fury.io/js/email-regexp.svg)](https://badge.fury.io/js/email-regexp) ![npm](https://img.shields.io/npm/dw/email-regexp?style=flat-square)

# email-regexp

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5P0HEF2O)

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
console.log(EmailRegex.isValid('FOO@MACHINE.COM')) // => true,all uppercase addresses are valid

```
# api
```typescript
 EmailRegex.isValid(emailAddress: string) => boolean
```


