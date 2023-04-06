Nedap-be
This is a mock server that returns a random ok response for requests to the /users endpoint.

Installation
Before running the server, you'll need to have npm 8.11.0 and Node.js v16.15.1 installed on your machine.

Clone this repository to your local machine.
In your terminal, navigate to the root directory of the repository.
Run npm i to install the required dependencies.
Run npm run start to start the server.
The server will be hosted at http://localhost:3200.

Endpoints
The server currently supports one endpoint:

/users (POST)
This endpoint expects a JSON payload with the following fields:

firstName (required)
lastName (required)
email (required)
If any of these fields are missing, the server will return a 400 Bad Request error with a JSON response of { error: 'Missing required fields' }.

The server will then sleep for a random amount of time between 1 and 1.5 seconds before responding with a JSON object containing a random ok response. The ok field will be either true or false, determined by a 50/50 chance.

Code
The server is built using Express.js, a popular Node.js web framework. The code for the server can be found in index.js.

The server also utilizes the body-parser middleware to parse JSON payloads, and the cors middleware to allow cross-origin requests.

The sleepSync() function is used to simulate some latency before sending a response.

