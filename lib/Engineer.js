const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, gitUn) {
        super(name, id, email)
        this.github = gitUn
    }
    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer