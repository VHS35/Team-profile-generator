// officeNumber

// getRole()—overridden to return 'Manager'

class Manager {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
    }
  
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Id: ${this.id}`);
      console.log(`Email: ${this.email}`);
      console.log(`Office Number: ${this.officeNumber}`);
    }
  }