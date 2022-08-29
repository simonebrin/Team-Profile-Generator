const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern")
const generateHtml = require("./utils/generateHtml")
const fs = require("fs")
const team = []

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
    const manager = new Manager(answers.managerName, answers.employeeId, answers.email, answers.officeNumber)
    team.push(manager)
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
    message: "What is their employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email address?",
  },
  {
    type: "input",
    name: "gitUn",
    message: "What is their GitHub username?",
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
    message: "What is their employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email address?",
  },
  {
    type: "input",
    name: "school",
    message: "What school did they go to?",
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
        buildHtml(team)
    }
  });
}

function promptEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.email, engineerAnswers.gitUn)
    team.push(engineer)
    promptMenu();
  });
}

function promptIntern() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    const intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.email, internAnswers.school)
    team.push(intern)
    promptMenu();
  });
}

function buildHtml() {
        fs.writeFile("./dist/index.html", generateHtml(team), function(err){
            if(err){
                console.log(err)
            } else {
                console.log("You have successfuolly created your html.")
            }
        })
}

promptManager();
// promptMenu();
