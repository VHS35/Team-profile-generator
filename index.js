const inquirer = require('inquirer');
const fs = require('fs');


function writeToFile(userInput, data) {
  fs.writeFileSync('index.html', userInput)
}


inquirer
const questions = () => {
  return inquirer.prompt([{

    
    type: 'input',
    name: 'Name',
    message: 'What is your Team Managers name?',
  },
  {
    type: 'input',
    name: 'ID',
    message: 'What is your Team managers ID number?',
  }, {
    type: 'input',
    name: 'Email',
    message: 'What is your Team Managers email address?',
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is your Team Managers office number?',
  },
  {
    type: 'list',
    message: 'What type of emloyee would you like to add?',
    name: 'Role',
    choices: ['Manager', 'Engineer', 'Intern'],
  },
  
  ])
    .then((data) => {
      const readmeInput = generateMarkdown(data)
      writeToFile(userInput, data)
      fs.writeFileSync('index.html', userInput)
      console.log('Successfuly created index.html file')
    })
};




// TODO: Create a function to initialize app
const init = () => {
  questions()
};

// Function call to initialize app
init();
