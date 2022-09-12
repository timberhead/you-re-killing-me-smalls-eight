



const Engineer = require("../lib/Engineer.js");



describe("newEngineer", () => {

    it("Can create a github.", () => {
        const testGithub = "Spencer";
        const employeeInformation = new Engineer("Spencer", 21, "Spencer@CUBuffs.org", testGithub);
        expect(employeeInformation.gitHub).toBe(testGithub);
    });
});



describe("getMethods", () => {

    it("Testing the getGithub method will return github.", () => {
        const testGithub = "Spencer";
        const employeeInformation = new Engineer("Spencer", 21, "Spencer@CUBuffs.org", testGithub);
        expect(employeeInformation.getGitHub()).toBe(testGithub);
    });


    it("Testing getRole method.", () => {
        const returnValue = "Engineer";
        const employeeInformation = new Engineer("Spencer", 21, "Spencer@CUBuffs.org", "Spencer");
        expect(employeeInformation.getRole()).toBe(returnValue);
    });
});

