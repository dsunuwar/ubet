# Introduction
In this coding excercise, i will setup a server for API to live on. I will use Node.js, back-end implementation of JavaScript, and Express framework for Node.

For the Front-end, i will use latest Angular CLI to generate seed project and build from there. I will also use Twitter Bootstrap for UI framework. The Bootstrap will provide me CSS Style reset, responsive grid, buttons, and card.

# Objectives
Write a web site to display next to go races, similar to https://www.tab.com.au/racing/next-to-go by using an API provided. The site should work in both mobile and desktop view.

Functionalities:
- Allow user to switch jurisdiction from 'NSW' to 'VIC' and vice-versa. Default jurisdiction should be 'NSW'.
- Allow user to filter races by race type. In the API, the raceType property can have the following values: R for Thoroughbred, G for Greyhounds and H for Harness. Default race type should be Thoroughbred.
- Sort the races by start time with the earliest race on top
- Display the following information for each race:
Time to start, 
Race number,
Race name,
Meeting name,
Meeting location,
Meeting date

# Installing & running
Project requires Node.js and NPM. It can be downloaded and isntalled from https://nodejs.org. To install the project, first clone it from Github, go to project root by using terminal and,   
- Run 'npm install'

## Development server
From terminal, go to project root directory.
- Run `npm run start`

This will start two servers, one for Front-end and other for backend. 
Next, navigate to `http://localhost:4200/`. 

## Production Build 
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. 

## Running unit tests
Run `npm run test` to execute the unit tests.