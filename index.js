const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMember = [];





//prompted to enter team managers name,id,email and office number
inquirer
const managerPrompt = () => {
  return inquirer.prompt([{

    type: 'input',
    name: 'Name',
    message: 'What is the Team Managers name?',
    validate: name => {
      if
        (name) {
        return true;
      } else {
        console.log('Please enter your name');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'ID',
    message: 'What is managers ID number?',
    validate: id => {
      if
        (id) {
        return true;
      } else {
        console.log('Please enter your emplyee ID number');
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'Email',
    message: 'What is managers email address?',
    validate: email => {
      if
        (email) {
        return true;
      } else {
        console.log('Please enter your email address');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is managers office number?',
    validate: officeNumber => {
      if
        (officeNumber) {
        return true;
      } else {
        console.log('Please enter your office number');
        return false;
      }
    }
  },
  ])
    .then(answers => {
      console.info(answers);
      const manager = new Manager(answers.Name, answers.ID, answers.Email, answers.officeNumber)
      teamMember.push(manager);
      promptMenu();
    })
};
//add prompt menu with option to add engineer, intern or finish building your team
const promptMenu = () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Would you like to add additional team members?',
      name: 'menu',
      choices: ['Manager', 'Engineer', 'Intern', 'I am finished'],
    }])
    .then(userInput => {
      switch (userInput.menu) {
        case "Add another Manager":
          managerPrompt()
          break;
        case "add an Engineer":
          engineerPrompt();
          break;
        case "add an Intern":
          internPrompt();
        default:
          completedTeam();
      }
    });
};

//create quesitons for the other roles if selected
const engineerPrompt = () => {
  console.log (
    `--------
     Add Engineer info`
  );

  return inquirer.prompt([{
    type: 'input',
    name: 'Name',
    message: 'What is your name?',
    validate: engineerName => {
      if
        (engineerName) {
        return true;
      } else {
        console.log('Please enter your name');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'ID',
    message: 'What is your ID number?',
    validate: engineerID => {
      if
        (engineerID) {
        return true;
      } else {
        console.log('Please enter your employee ID number');
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'Email',
    message: 'What is your email address?',
    validate: engineerEmail => {
      if
        (engineerEmail) {
        return true;
      } else {
        console.log('Please enter your email address');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'user',
    message: 'What is your github username?',
    validate: gitHubInput => {
      if
        (gitHubInput) {
        return true;
      } else {
        console.log('Please enter your Git Hub username');
        return false;
      }
    }
  },
  ])
    .then(answers => {
      console.info(answers);
      const engineer = new Engineer(answers.Name, answers.ID, answers.Email, answers.gitHub)
      teamMember.push(engineer);
      promptMenu();
    })
};

const internPrompt = () => {
  console.log (
    `--------
     Add Intern info`
  );

  return inquirer.prompt([
    {
      type: 'input',
      name: 'Name',
      message: 'What is your name?',
      validate: internName => {
        if
          (internName) {
          return true;
        } else {
          console.log('Please enter your Git Hub username');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'ID',
      message: 'What is your ID number?',
      validate: internID => {
        if
          (internID) {
          return true;
        } else {
          console.log('Please enter your Git Hub username');
          return false;
        }
      }
    }, {
      type: 'input',
      name: 'Email',
      message: 'What is your email address?',
      validate: internEmail => {
        if
          (internEmail) {
          return true;
        } else {
          console.log('Please enter your Git Hub username');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'schoolName',
      message: 'What is the name of the school you attend?',
      validate: schoolInput => {
        if
          (schoolInput) {
          return true;
        } else {
          console.log('Please enter your Git Hub username');
          return false;
        }
      }
    },

  ])
    .then(answers => {
      console.info(answers);
      const intern = new Intern(answers.Name, answers.ID, answers.Email, answers.school)
      teamMember.push(intern);
      promptMenu();
    })
};

const completedTeam = () => {
  console.log("Team Profile Complete!");

}
//   if (!fs.existsSync(OUTPUT_DIR)) {
//     fs.mkdirSync(OUTPUT_DIR)
//   }
//   fs.writeFileSync(outputPath, generateMarkdown(completedTeam), "utf-8");
// }

// .then((data) => {
//   const readmeInput = generateMarkdown(data)
//   writeToFile(userInput, data)
//   fs.writeFileSync('index.html', userInput)
//   console.log('Successfuly created index.html file')
// });





// Function call to initialize app
managerPrompt();
