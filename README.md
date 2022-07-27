# IDF Recruitment Project

## Goals

- Collaborate with IDF' engineers on an every-day set of tasks, showcasing general problem solving.

## Guidance

- It's about the path and **not** the end result.
- Don't feel stressed about completing everything, it's the process that matters!
- Work towards the bigger picture. Don't spend too much time on the details.
- Ask any question any time. Don't hesitate to get help.

## Getting started

1. Clone this repo and create a branch (yymmdd-candidate-name) to work on.

## Tasks

### Frontend

The [mock_data.json](./assets/mock_data.json) file contains some mock API data. You can use the NPM package [json-server](https://www.npmjs.com/package/json-server) to start a mock REST api for frontend prototyping.

1. Create a base React app with Typescript using any method desired.
   Align your work to the [designs provided in Figma](https://www.figma.com/file/7famY6yrvQhwf2SOkliVDv/Recruitment-Project).
2. The main page should list the Alerts as returned from the API in descending order of the _createdOn_ timestamp.
3. The (x) should dismiss the alerts based on local state.

- You can use the [provided icon assets](./assets/icons) if desired, or anything you prefer.
- The option to create a new alert can be considered a stretch goal, and can be implemented however desired (e.g. additional
  UI or dynamic input is not required - whatever you feel like doing is OK).

### Back end

1. Create a base NodeJS using any preferred frameworks and libraries.
   NodeJS is the most common backend language at IDF, but if you're more comfortable with node.js that's fine too.
   Implement endpoints for:
   - List _Errors_
   - Delete _Errors_ (soft delete only)
2. Create a data store using any technology that is capable of storing the structures found in the
   [mock_data.json](./assets/mock_data.json) file, and as required by your endpoints.

- You can use a RESTful API or GraphQL (if you have mocked the frontend with REST, you've probably already decided!).

## Finishing up

1. Push your solution and create a PR onto main.
