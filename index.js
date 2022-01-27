const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');
const fs = require('fs');
const team = require("./util/generateHtml");
let Team = [];

const managerQuestions = [
    {
        type: "input",
        message: 'What is your Team Manager\'s name?',
        name: "name",
    },

    {
        type: 'number',
        message: 'What is their Employee ID number?',
        name: 'id'
    },

    {
        type: 'input',
        message: 'What is their email address?',
        name: 'email'
    },

    {
        type: 'input',
        message: 'What is their office number?',
        name: "office"
    }
];

function createTeam() {
    inquirer
        .prompt(managerQuestions)
        .then(answer => {

            let name = answer.name;
            let email = answer.email;
            let id = answer.id;
            let officeNum = answer.office;

            let manager = new Manager(name, id, email, officeNum);
            Team.push(manager)

            buildTeam();
        })
}


function buildTeam() {
    inquirer
        .prompt([
            {
                name: "team",
                type: 'list',
                message: 'Would you like to add and Engineer, Intern, or Finish Building Team',
                choices: ["Engineer", "Intern", "Finish Building Team"]
            }
        ])
        .then(function(ans){
            switch(ans.team) {
                case "Engineer": 
                    inquirer.
                        prompt([
                            {
                                name: "name",
                                type: "input",
                                message: "Enter engineer name"
                            }, 
                            {
                                name: "id",
                                type: "input",
                                message: "Enter engineer id"
                            }, 
                            {
                                name: "email",
                                type: "input",
                                message: "Enter engineer email"
                            }, 
                            {
                                name: "github",
                                type: "input",
                                message: "Enter engineer github"
                            }, 
                        ])
                        //build the engineer based on feedback from user
                        .then(function(result){
                            let engineer = new Engineer(result.name, result.id, result.email, result.github);
                            //add the engineer to the array of people in the team and restart the function from the top
                            Team.push(engineer);
                            buildTeam();
                        })
                        break;
                case "Intern":
                    inquirer.
                        prompt([
                            {
                                name: "name",
                                type: "input",
                                message: "Enter intern name"
                            }, 
                            {
                                name: "id",
                                type: "input",
                                message: "Enter intern id"
                            }, 
                            {
                                name: "email",
                                type: "input",
                                message: "Enter intern email"
                            }, 
                            {
                                name: "school",
                                type: "input",
                                message: "Enter intern school"
                            }, 
                        ])
                        .then(function(result){
                            //build the intern, add them to the team, and restart the function
                            let intern = new Intern(result.name, result.id , result.email, result.school);
                            Team.push(intern);
                            buildTeam();
                        })
                        break;
                case "Finish Building Team":
                    console.log(Team)
                    fs.writeFile("output.html", team(Team), function(err) {
                        if(err) return console.log(err);
                        console.log("Team page completed!");
                    });
                    break;
            }
        })
}

createTeam();