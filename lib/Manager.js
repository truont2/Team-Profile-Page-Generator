// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.name = name; 
        this.id = id;
        this.email = email;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Engineer;