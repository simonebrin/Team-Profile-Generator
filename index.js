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
    // promptMenu();
}

const otherEmployeesQuestions = [
    {
        type: "list",
        name: "otherEmployees",
        message: "Would you like to add the following other employees?",
        choices: ["Engineer", "Intern"],
    }
]

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
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "gitUn",
        message: "What is your GitHub username?"
    }
]

function promptMenu() {
    inquirer.prompt(otherEmployeesQuestions).then(answers => {
        console.log(answers);
        if (answers.otherEmployees === "Engineer") {
            inquirer.prompt(engineerQuestions).then(answers => {
                console.log(answers)
            })
            if (answers.otherEmployees === "Intern") {
                inquirer.prompt(internQuestions).then(answers => {
                    console.log(answers)
                })
            }
        }
    })
}

function promptEngineer() {
    promptMenu();
}

function promptIntern() {
    promptMenu();
}

function buildHtml() {}

promptManager();