const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer")

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
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
    },
];

function promptManager() {
    inquirer.prompt(managerQuestions).then(answers => {
        console.log(answers)
    })
    promptMenu();
}

function promptMenu() {}

function promptEngineer() {
    promptMenu();
}

function promptIntern() {
    promptMenu();
}

function buildHtml() {}

promptManager();