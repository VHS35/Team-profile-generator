// school

// getSchool()

// getRole()—overridden to return 'Intern'

const Employee = require('./Employee')

class Intern extends Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, school) {
      super(name, id, email)

      this.school = school;
    }
  
   getSchool() {
    return this.school;
   }

    getRole () {
        return "Intern";
      }
  }

  module.exports = Intern;