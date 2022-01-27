# Team-Profile-Page-Generator

## Table of Contents
- [Description](#description)
- [Authors](#authors)
- [Deployed Link](#deployed-Link)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [How to Contribute](#contribute)
- [Resources](#resources)

### Description

Instead of wasting time writing yourself a Team porfile page from scratch, this application provides Team managers with a quick alternative to build a professional team profile page with all the team members and some information about that member. Instead of having to manually create a html file and writing out the code to create the team profile page, this application only asks several questions and creates the webpage for you. The Manager or user will be prompted to enter their own information first. The user is then asked by the application whether they have any additional team memebers such as an Engineer or Intern. If so, the user is prompted several questions about those other team members. Once completed, the application aquires all the information that was collected from the user and creates an html file. The Html file contains card elements for each of the employees that was specified earlier with their respective information as well. 

This project taught be the fundamentals of using node and NPM to create an aplication without using the browser that can read, write, or edit files. I learned to use node.js to write files from scratch using the writeFile() method and how to use packages from npm such as inquirer to prompt questions for the user. Additionaly, I learned to utilize classes to clean up the code and to reduce redundancy using inheritance. The main issue I encountered was understanding how the classes are imported and inititailized. I did not understand how inheritance applied to classes and how to create new instances of the class in the index.js file therefore my application would not correctly output data. Once I understood how the data was being processed, I was able to complete the application and utilize the class to create each employee. Some future features I would like to implement in the future are to make the website more dynamic and styled. 
## Author 
- Takara Truong

## Github Link

https://github.com/truont2/portfolio-page-generator

## Installation

To install this application, clone the necessary files in the github repository. Once done, open up the terminal in the index.js file where you will enter npm install. This will in stall the necessary packages needed to run this application. 

## Usage

The application will be invoked by using the following command:

```bash
node index.js
```

1. First download any dependencies by opening your index,js terminal and entering "npm install". 
2. Once completed, enter node index.js to run the application. 
3. Answer any questions that load in the terminal. 
4. Terminal will display "Team page completed!" to notifying the user that the readme file was sucessfully created.

### Video Walkthrough: 

![video walkthrough](./assets/walkthrough.gif)

#### Extra screenshot:
![screenshot](./assets/terminal.PNG)

## Test 

program was run in the index.js terminal creating a file called Readmetest.md.

## Contribute

To contribute, contact me at https://github.com/truont2/

## Resources 

* https://www.youtube.com/watch?v=2ZphE5HcQPQ 
