import { assert } from 'chai'
import EmailRegexp from '../src'

describe('email regexp tests', () => {
    it('validates email string, returns true if valid' , (done) => {
        assert(EmailRegexp.isValid('MURGOR@HOTMAIL.COM'), "invalid email")
        done()
    })
})
