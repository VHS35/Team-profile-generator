// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'


class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Id: ${this.id}`);
      console.log(`Email: ${this.email}`);
    }
  

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail () {
    return this.email;
  }

  getRole () {
    return "Employee";
  }
}