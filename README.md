# Team-Profile-Generator
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
* This application will take in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

## User Story
* As a manager a user want to generate a webpage that displays my team's basic info so that a user have quick access to their emails and GitHub profiles.

## Acceptance Criteria
* Create a command-line application that accepts accepts user input using the provided starter code.
  * Create classes for each team member provided and export them. The tests for these classes (in the _tests_ directory) must ALL pass:
    * The first class is an Employee parent class with the following properties and methods:
        * name
        * id
        * email
        * getName()
        * getId()
        * getEmail()
        * getRole()—returns 'Employee'
    * In addition to Employee's properties and methods, Manager will also have the following:
        * officeNumber
        * getRole()—overridden to return 'Manager'
    * In addition to Employee's properties and methods, Engineer will also have the following::
        * github—GitHub username
        * getGithub()
        * getRole()—overridden to return 'Engineer'
    * In addition to Employee's properties and methods, Intern will also have the following:
        * school
        * getSchool()
        * getRole()—overridden to return 'Intern'
    * Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
    * Write code in index.js that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.
        * When a user starts the application then they are prompted to enter the team manager’s:
            * Name
            * Employee ID
            * Email address
            * Office number
        * When a user enters those requirements then the user is presented with a menu with the option to:
            * Add an engineer
            * Add an intern
            * Finish building the team
        * When a user selects the engineer option then a user is prompted to enter the following and then the user is taken back to the menu:
            * Engineer's Name
            * ID
            * Email
            * GitHub username
        * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
            * Intern’s name
            * ID
            * Email
            * School
        * When a user decides to finish building their team then they exit the application, and the HTML is generated.
* Call the render function (provided for you) and pass in an array containing all employee objects;
        * The render function will generate and return a block of HTML including templated divs for each employee!
* Create an HTML file using the HTML returned from the render function.
        * Write it to a file named team.html in the output folder.
        * You can use the provided variable outputPath to target this location.
* Sections entitled: 
      * Description,
      * Table of Contents,
      * Installation,
      * Usage,
      * License,
      * Contributing,
      * Tests,
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README
 
## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Questions](#questions)

## Installation
* You can create one by running npm init when you first set up the project, before installing any dependencies.
* The command should be run to install dependencies: npm i

## Usage
* The application will be invoked by using the following command: node index.js
![image of screenshot2](1.png)
![image of screenshot1](2.png)


## License

MIT
  
## Contributing

help you README-Generator


## Questions

If you have any questions please contact me, my email address is tongwandou432@gamil.com. 
This is my github: [Joy](https://github.com/Joy/).



