// school

// getSchool()

// getRole()—overridden to return 'Intern'

class Intern {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, school) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.school = school;
    }
  
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Id: ${this.id}`);
      console.log(`Email: ${this.email}`);
      console.log(`School: ${this.school}`);
    }
  }