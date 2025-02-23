# UI Garden - React Component Library
This is a React-based UI component library.

## Project Setup

### Step 1: Create a React App and Storybook steup
I created a react app using the commond `npx create-react-app ui-garden --template typescript` and then i initialized the storybook with `npx sb init`

### Step 2: Dependecies required for the project
npm install styled-components @types/styled-components --save
npm install --save-dev @testing-library/react @testing-library/jest-dom

### Step 3: Created components 
I created different components like button , label, Table , Image in which i had displayed some mock data and inside the components i created five different files which has names like
`Component_name.tsx
Component_name.stories.tsx 
Component_name.types.tsx 
Component_name.tests.tsx 
Index.ts `


### Step 4: Build docker Image
I build the docker image by running this command
`docker build -t kaur_khushleen_coding_assignment12 .`

### Step 5: Docker Container
I made the docker container and port them on 8083 port using `docker run -p 8083:80 --name kaur_khushleen_ui_garden kaur_khushleen_coding_assignment12
`
## We can run the project by visting http://localhost:8083.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
