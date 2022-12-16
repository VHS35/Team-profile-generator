// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'



const Engineer = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email,gitHub) {
  super(name, id, email);

    this.gitHub = gitHub;

  }
    
    getGitHub() {
        return this.gitHub;
      }
      getRole()  {
        return "Engineer"
    }
    }
    

    module.exports = Engineer;