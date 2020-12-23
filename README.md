# email-regexp

A Regular expression for validating email addresses that match 
[RFC 5322 email validation](https://www.ietf.org/rfc/rfc5322.txt) summary.

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

```
## ES6 module

```javascript
import EmailRegex from 'email-regexp'

console.log(EmailRegex.isValid('nmurgor@gmail.com')) // => true
console.log(EmailRegex.isValid('nmurgor..@gmail.com')) // => false

```
# api

```typescript
 EmailRegex.isValid(email: string) => boolean
```