This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

 * Node 10
 * Docker

## Available Scripts

In the project directory, you can run:

### `npm run start-db`

Starts a Docker container with PostgreSQL on it listening at port 55432 with the credentials - dev:pgadmin.

### `npm run stop-db`

Removes the PostgreSQL Docker container permanently.

### `npm run start-queue`

This is necessary to start a Docker container with ActiveMQ on your system.
The JMX broker listens on port 61616 (JMS), 11883 (MQTT), and the Web Console on port 8161. Credentials are demo:activemq.

### `npm run stop-queue`

Removes the ActiveMQ Docker container permanently.

### `npm start-server`

Starts the HTTP server responsible for handling API calls from the client which also sends and receives messages from ActiveMQ via MQTT.

### `npm start`

Runs the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
