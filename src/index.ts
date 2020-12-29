export default class EmailRegexp {

    /**
     *
     *
     * @static
     * @param {string} email
     * @returns {boolean}
     * @memberof Email
     */
    static isValid(emailAddress: string): boolean {
        return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddress)
    }

}