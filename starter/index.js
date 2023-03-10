const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];
const memberIds = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Start: Need to create node project, install inquirer and Jest.

//     1. Make a new folder for the project and initialize it as an npm project.
//     - npm init -y

//     2. Install the older version of inquirer so that it doesnt break the setup using require().
//     Link to doc: https://www.npmjs.com/package/inquirer
//     Also, install Jest
//     npm install --save inquirer@^8.0.0   // npm i jest

//     3. Need to change package.json so that it uses jest to test.
//         change scripts section to look like this:
//             "scripts": {
//               "test": "jest --verbose test"
//              },

//    4. Setup a .gitignore file -> add: node_modules

//     - Tests have been written for you already. They can be used to make sure that
//     the lib classes have been created correctly. Run the tests to check. "npm run test"

//  output-dir and outputPath have already been setup so we can use both
//  & fs.writeFile() to create the html file when needed.

//  - Need to ask a questions using the inquirer to determine team makeup. The user
//  will answer a set of questions and provide the information needed to create objects
//  of type Manager, Engineer, & Intern.

//  We can use an array to hold the employee objects(manager, engineer, or intern):
//   let team = []; // this array will consist of: the output from the inquirer

//  how do we use the entity classes above to populate the team array?
//   - team.push(new Manager())

//     when the user has finished adding new team members:
//     we call render() and pass in the team array. (imported above)
//      - Render returns a string to us that represents the contents of our html doc.
//         - ex: let html = render(team) -> This is what will be used to write to file.
//         - This will look like this:
//           fs.writeFileSync(outputPath, render(teamMembers), "utf-8");

//           ex of structure below:
// */

function start() {
  // function to handle generating manager - first bc we need a manager
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the team manager's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        // /* {ask for id},
        {
          type: "input",
          name: "managerId",
          message: "What is the team manager's id?",
          validate: (answer) => {
            const correct = answer.match(/^[1-9]\d*$/);
            if (correct) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          },
        },
        //   {ask for email},
        {
          type: "input",
          name: "managerEmail",
          message: "What is the team manager's email?",
          validate: (answer) => {
            const correct = answer.match(/\S+@\S+\.\S+/);
            if (correct) {
              return true;
            }
            return "Please enter a valid email address.";
          },
        },
        //   {ask for office number}
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the team manager's office number?",
          validate: (answer) => {
            const correct = answer.match(/^[1-9]\d*$/);
            if (correct) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          },
        },
        //  */
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        // push to team array
        teamMembers.push(manager);
        // push to the id array to check id is unique
        memberIds.push(answers.managerId);
        // call the next function that will ask what type of employee will be created next
        createTeam();
      });
  }

  // function that asks what type of employee they would like to create next
  function createTeam() {
    // similar setup to what we have listed above
    inquirer
      .prompt([
        // question asking what we should make next
        // choices(engineer, intern, I dont want to add anything else)
        {
          type: "list",
          name: "choice",
          message: "Which one do you want to add?",
          choices: ["Engineer", "Intern", "I dont want to add anything else"],
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
      ])
      .then((userChoice) => {
        // /* conditional that decides which of the below functions to call
        //         based on userChoice.
        switch (userChoice.choice) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;
          //         - If none of the choices (engineer or employee) have been chosen default to buildTeam()
          //             - This will take the indo
          //     */
          default:
            buildTeam();
        }
      });
  }

  // function to handle generating engineer
  function createEngineer() {
    inquirer
    .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the Engineer's Name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        // /* {ask for id},
        {
          type: "input",
          name: "engineerId",
          message: "What is the Engineer's id?",
          validate: (answer) => {
            const correct = answer.match(/^[1-9]\d*$/);
            if (correct) {
                if (memberIds.includes(answer)) {
                    return 'This ID has already taken. Please enter anthore number.';
                  } else {
                    return true;
                  }
            }
            return "Please enter a positive number greater than zero.";
          },
        },
        //   {ask for email},
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
          validate: (answer) => {
            const correct = answer.match(/\S+@\S+\.\S+/);
            if (correct) {
              return true;
            }
            return "Please enter a valid email address.";
          },
        },
        //   {ask for  GitHub username}
        {
          type: "input",
          name: "engineerGitHub",
          message: "What is the GitHub username?",
          validate: (answer) => {
            if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
          },
        },
        //  */
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGitHub
        );
        // push to team array
        teamMembers.push(engineer);
        // push to the id array to check id is unique
        memberIds.push(answers.engineerId);
        // call the next function that will ask what type of employee will be created next
        createTeam();
      });
  }
  // function to handle generating intern
  function createIntern() {
    inquirer
    .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the Intern's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        // /* {ask for id},
        {
          type: "input",
          name: "internId",
          message: "What is the intern's id?",
          validate: (answer) => {
            const correct = answer.match(/^[1-9]\d*$/);
            if (correct) {
                if (memberIds.includes(answer)) {
                    return 'This ID has already taken. Please enter anthore number.';
                  } else {
                    return true;
                  }
            }
            return "Please enter a positive number greater than zero.";
          },
        },
        //   {ask for email},
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email?",
          validate: (answer) => {
            const correct = answer.match(/\S+@\S+\.\S+/);
            if (correct) {
              return true;
            }
            return "Please enter a valid email address.";
          },
        },
        //   {ask for office number}
        {
          type: "input",
          name: "internSchool",
          message: "What is the intern's School?",
          validate: (answer) => {
            if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
          },
        },
        //  */
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        // push to team array
        teamMembers.push(intern);
        // push to the id array to check id is unique
        memberIds.push(answers.internId);
        // call the next function that will ask what type of employee will be created next
        createTeam();
      });
  }
  // function to buildTeam - will use fs.writeFileSync & pass in the outputPath created above, 
  //call to render (dont forget to pass in the employee array), & "utf-8"
  function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
      }
      fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    console.log(teamMembers);
  }

  createManager(); // starts of the whole chain of events.
}

start();
