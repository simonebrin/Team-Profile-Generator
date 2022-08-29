class Employee {
    constructor(passedName, passedId, passedEmail) {
        this.name = passedName,
        this.id = passedId,
        this.email = passedEmail
    }

    getName() {
        return `${this.name}`
    }

    getId() {
        return `ID: ${this.id}`
    }

    getEmail() {
        return `Email: <a href="mailto:${this.email}">${this.email}</a>`
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee