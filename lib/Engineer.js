// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'



const Engineer = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email,githubUsername) {
    super(name, id, email);
    this.githubUsername = githubUsername;
    this.getRole()
        return "Engineer"
    }

    printInfo() {
        console.log(`Name: ${this.githubUsername}`);
    }
    
    getGitHub() {
        console.log(this.githubUsername);
      }
    }
    

