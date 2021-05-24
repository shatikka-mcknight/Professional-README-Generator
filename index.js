const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const userQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'GitHubName',
      message: 'What is yopu GitHub Username?',
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your projects name?',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Please write a short description of your projcet:',
    },
    {
      type: 'list',
      message: 'What kind of license should your project have?',
      name: 'license',
      choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'None'],
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'dependencies',
    },
    {
      type: 'input',
      message: 'What command should be run to run test?',
      name: 'runTest',
    },

    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
      name: 'repoInfo',
    },

    {
      type: 'input',
      message: 'What does the user need to know about contributinh to the repo?',
      name: 'contributeRepo',
    },

    {
      type: "input",
      name: "githubAccount",
      message: "Enter your GitHub Username:"
      
  },
  
  {
      type: "input",
      name: "linkedinAccount",
      message: "Enter your LinkedIn URL:",
  }
  ]);
};

const readmeTemplate = (answers) =>
  `# Project: ${answers.title}

  ## Description
  ${answers.projectDescription}
  
  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#dependencies)
    * [Credits](#credits)
    * [License](#license)
    * [Contasts](#contacts)
  
  ## Installations
  ${answers.installation}
  
  ## Usage
    Dependencies: ${answers.dependencies}
    Run Test Using: ${answers.runTest}
    Using Repo: ${answer.repoInfo}
    Repo Contributions: ${answer.contributeRepo}

  ## License
  ${answers.license}
  
  # Contacts
  * GitHub Name: ${answers.GitHubName}
  * GitHub: ${answers.githubAccount}
  * Linked-In: ${answers.linkedinAccount}
  * Email: ${answers.emailAddress}
  })`;

// Bonus using writeFileAsync as a promise
const init = () => {
  userQuestions()
    .then((answers) => writeFileAsync('README.md', readmeTemplate(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
