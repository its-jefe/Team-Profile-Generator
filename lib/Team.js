const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class Team {
    constructor() {
        this.member = [];
    }

    async initializeTeam() {
        await this.addManager();
        await this.makeChoice();
    }

    async addManager() {
        await inquirer
            .prompt([
                {
                    type: `input`,
                    name: `name`,
                    message: `What is the Team Manager's name? `,
                },
                {
                    type: `input`,
                    name: `id`,
                    message: `What is the Team Manager's ID? `,
                },
                {
                    type: `input`,
                    name: `email`,
                    message: `What is the Team Manager's email? `,
                },
                {
                    // could and should make this an alternating prompt and then
                    // call this function recursively with index value or something
                    type: `input`,
                    name: `officeNumber`,
                    message: `What is the Team Manager's office number? `,
                },
            ])
            .then((managerObject) => {
                this.member.push(new Manager(managerObject));
                console.log(this);
                // console.log(this.member[0])
            });
    }

    async makeChoice() {
        await inquirer.prompt({
            type: `list`,
            name: `choice`,
            message: `What would you like to do now?`,
            choices: [`Add Engineer`, `Add Intern`, `Finish Building`],
        })
            .then(({choice}) => {
                console.log(choice)
                if (choice === 'Finish Building') {
                    console.log('Wrapping things up...')
                    buildTeam()
                    return //hopefully this ends everthing WHERE DOES THIS RETURN TO???
                } else {
                    addEmployee(choice)
                    makeChoice()
                }
            })
    }

    // the classes destructure the objects so I can send the finished 
    // inquirer prompt objects as they are... so this should be easy

    async addEmployee(choice) { // takes class type as argument .. maybe
        console.log(choice)
    }

    buildTeam() {

    }
}

module.exports = Team;