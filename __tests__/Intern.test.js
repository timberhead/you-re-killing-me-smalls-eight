



const Intern = require("../lib/Intern.js");



describe("newIntern", () => {

    it("Can create school", () => {
        const testSchool = "School Name";
        const employeeInformation = new Intern("Kyle", "404", "kyletheintern@gmail.com", testSchool);
        expect(employeeInformation.school).toBe(testSchool);
    });
});



describe("getMethods", () => {

    it("Testing the testSchool method will return School Name", () => {
        const testSchool = "School Name"; 
        const employeeInformation = new Intern("Kyle", "404", "kyletheintern@gmail.com", testSchool);
       
        expect(employeeInformation.getSchool()).toBe(testSchool);

    });


    it("Testing getRole method", () => {
        const returnValue = "Intern";
        const employeeInformation = new Intern();
        const newEmployee = employeeInformation.getRole();
        expect(newEmployee).toBe(returnValue);
        
    });
});