



const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "data");
const outputPath = path.join(OUTPUT_DIR, "generate.js");
const generateTeam = require("./src/generate.js");


teamArray = [];



function createTeam() {
  inquirer.prompt([{
    
    type: "list",
    message: "What type of employee would you like to add to your team?",
    name: "addEmployeePrompt",
    choices: ["Manager", "Engineer", "Intern", "No more team members are needed at this time"]
    
  }])
  
  .then(function (userInput) {
    switch (userInput.addEmployeePrompt) {
      case "Manager":
        addManager();
        break;
        
        case "Engineer":
          addEngineer();
          break;
          
          case "Intern":
            addIntern();
            break;
            
            default:
              htmlBuilder();
            }
            // console.log(teamArray);
          })
        }
        
        
        function addManager() {
          inquirer.prompt([
            
            {
              type: "input",
              name: "managerName",
              message: "What is the manager's name?"
            },
            
            {
              type: "input",
              name: "managerId",
              message: "What is the manager's employee id number?"
            },
            
            {
              type: "input",
              name: "managerEmail",
              message: "What is the manager's email address?"
            },
            
            {
              type: "input",
              name: "managerOfficeNumber",
              message: "What is the manager's office number?"
            },
            
          ])
          
          .then(data => {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
            teamArray.push(manager);
            createTeam();
          });
        }
        
        
        function addEngineer() {
          inquirer.prompt([
            
            {
              type: "input",
              name: "engineerName",
              message: "What is the engineer's name?"
            },
            
            {
              type: "input",
              name: "engineerId",
              message: "What is the engineer's id number?"
            },
            
            {
              type: "input",
              name: "engineerEmail",
              message: "What is the engineer's email address?"
            },
            
            {
              type: "input",
              name: "engineerGithub",
              message: "What is the engineer's github username?"
            },
            
          ])
          
          .then(data => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
            teamArray.push(engineer);
            createTeam();
          })
        }
        
        function addIntern() {
          inquirer.prompt([
            
            {
              type: "input",
              name: "internName",
              message: "What is the intern's name?"
            },
            
            {
              type: "input",
              name: "internId",
              message: "What is the intern's id number?"
            },
            
            {
              type: "input",
              name: "internEmail",
              message: "What is the intern's email address?"
            },
            
            {
              type: "input",
              name: "internSchool",
              message: "Where does the intern go to school?"
            },
            
          ])
          
          .then(data => {
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            teamArray.push(intern);
            createTeam();
          });
          
        }
        
        
        
        function htmlBuilder() {
          console.log("This is your Team!");
          
          fs.writeFile(outputPath, generateTeam(teamArray));
          
        }
        
createTeam();