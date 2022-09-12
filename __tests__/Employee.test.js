



const Employee = require("../lib/Employee.js");



describe("newEmployee", () => {

    it("Should create a new Employee.", () => {
        const employeeInformation = new Employee();
        expect(typeof (employeeInformation)).toBe("object");
    });

    it("Testing name.", () => {
        const name = "Kyle";
        const employeeInformation = new Employee(name);
        expect(employeeInformation.name).toBe(name);
    });

    it("Testing id.", () => {
        const id = 404;
        const employeeInformtion = new Employee("Kyle", id);
        expect(employeeInformtion.id).toBe(id);
    });

    it("Testing email.", () => {
        const email = "kyletheintern@gmail.com";
        const employeeInformtion = new Employee("Kyle", id, email);
        expect(employeeInformtion.email).toBe(email);
    });
});



describe("getMethods", () => {

    it("Can get name through the getName method.", () => {
        const testName = "Kyle";
        const employeeInformation = new Employee(testName);
        expect(employeeInformation.getName).toBe(testName);
    });

    it("Can test id through the getID method.", () => {
        const testId = 404;
        const employeeInformation = new Employee("Kyle", testId);
        expect(employeeInformation.getID()).toBe(testId);
    });

    it("Can test email through the getEmail method.", () => {
        const testEmail = "kyletheintern@gmail.com";
        const employeeInformation = new Employee("Kyle", 404, testEmail);
        expect(employeeInformation.getEmail()).toBe(testEmail);
    });

    it("Testing getRole method.", () => {
        const returnValue = "Employee";
        const employeeInformation = new Employee("Kyle", 404, "kyletheintern@gmail.com");
        expect(employeeInformation.getRole()).toBe(returnValue);
    });
});