



const Manager = require("../lib/Manager.js");



describe("newManager", () => {

    it("Can create an office number.", () => {
        const testOfficeNumber = 5;
        const employeeInformation = new Manager("Brian", 5, "bcool@yahoo.com", testOfficeNumber);
        expect(employeeInformation.officeNumber).toBe(testOfficeNumber);
    });
});



describe("getMethods", () => {

    it("Testing the getOfficeNumber method will return an office number.", () => {
        const testOfficeNumber = 5;
        const employeeInformation = new Manager("Brian", 5, "bcool@yahoo.com", testOfficeNumber);
        expect(employeeInformation.getOfficeNumber()).toBe(testOfficeNumber);
    });


    it("Testing the getRole method.", () => {
        const returnValue = "Manager";
        const employeeInformation = new Manager("Brian", 5, "bcool@yahoo.com", returnValue);
        expect(employeeInformation.getRole()).toBe(returnValue);
    });
});

