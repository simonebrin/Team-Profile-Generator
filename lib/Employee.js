class Employee {
    constructor(passedName, passedId, passedEmail) {
        this.name = passedName,
        this.id = passedId,
        this.email = passedEmail
    }

    getName() {
        return `My name is ${this.name}`
    }

    getId() {
        return this.id
    }

    getEmail() {
        return `My email is ${this.email}`
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee