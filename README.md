# Redux Store

This a project where I refactored the e-commerce platform from the module project so that it uses Redux

## Table of contents

- [Installation](#installation)
- [Application Criteria](#application-criteria)
- [Links](#links)
- [Tools Used](#tools-used)
- [Application Gif](#application-gif)
- [License](#license)

## Installation

The JSON file will have the necessary dependencies. Type this in your command line:

```
npm i
```

## Application Criteria

GIVEN an e-commerce platform that uses Redux to manage global state

- WHEN I review the app’s store
  THEN I find that the app uses a Redux store instead of the Context API
- WHEN I review the way the React front end accesses the store
  THEN I find that the app uses a Redux provider
- WHEN I review the way the app determines changes to its global state
  THEN I find that the app passes reducers to a Redux store instead of using the Context API
- WHEN I review the way the app extracts state data from the store
  THEN I find that the app uses Redux instead of the Context API
- WHEN I review the way the app dispatches actions
  THEN I find that the app uses Redux instead of the Context API

## Links

- [Github Repository](https://github.com/MtendeRoll/redux-store)
- [Deployed Application](https://redux-store-roll.herokuapp.com/)

## Tools Used

- [Redux](https://redux.js.org/tutorials/fundamentals/part-1-overview)

## Application Gif

- Gif displaying were the redux changes were made
  ![Deployed Application](./client/public/images/redux-hooks.gif)

## License

- [MIT](./LICENSE)
