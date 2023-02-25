# Getting Started PPMC Booking

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## App Utilities

### Prettier 
Is used for formatting the code base and currently looks at all src modules.  Prettier will run during the build process or you can run it manually via "yarn run clean".

### CSP
Content Security Policy is integrated via the csp.js in the root of the app.  This will need to be modified while developing moving forward.

### GraphiQL
GraphQL has a UI for documentation of the API, and testing queries, etc.  You can access the GraphiQL by opening the local file "GraphQL_UI.html".  Chrome browser also has an Apollo extension which gives you a GraphQL UI. 

## File Structure

### Components
  The Component's directory is where all component library templates should be placed.
  
### Design
  The Design Directory is where building of multiple components into a larger component and layout components should be placed.
  
### GraphQL
  All GraphQL queries need to be placed in the GraphQL directory in the Queries.tsx module.
  
### Utils
  Any helper components, 3rd party libraries should be placed in the Utils directory.
  
### Views
  All Page views should be placed in the Views directory.  Each page view should be its own module.  A page view should store all components, state management, etc. needed to run that component.
