const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is your employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
  },
];

function promptManager() {
  inquirer.prompt(managerQuestions).then((answers) => {
    console.log(answers);
    promptMenu();
  });
}

const otherEmployeesQuestions = [
  {
    type: "list",
    name: "otherEmployees",
    message: "Would you like to add the following other employees?",
    choices: ["Engineer", "Intern", "None"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is your employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "gitUn",
    message: "What is your GitHub username?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "internId",
    message: "What is your employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "school",
    message: "What school do you go to?",
  },
];

function promptMenu() {
  inquirer.prompt(otherEmployeesQuestions).then((answers) => {
    console.log(answers);
    if (answers.otherEmployees === "Engineer") {
      promptEngineer();
      // .then(answers => {
      //     console.log(answers)
    }
    if (answers.otherEmployees === "Intern") {
      promptIntern();
      // .then(answers => {
      //     console.log(answers)
    }
    if (answers.otherEmployees === "None") {
        console.log("I need to generate a HTML");
    }
  });
}

function promptEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    promptMenu();
  });
}

function promptIntern() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    promptMenu();
  });
}

function buildHtml() {}

promptManager();
// promptMenu();
