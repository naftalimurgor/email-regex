class EmailRegexp {

    /**
     *
     *
     * @static
     * @param {string} email
     * @returns {boolean}
     * @memberof EmailRegexp
     */
    static isValid(emailAddress: string): boolean {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddress)
    }

}

export = EmailRegexp