// officeNumber

// getRole()—overridden to return 'Manager'
const Employee = require('./Employee')

class Manager extends Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;

    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;