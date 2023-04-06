<h1>Nedap-be</h1>
<p>This is a mock server that returns a random <code>ok</code> response for requests to the <code>/users</code> endpoint.</p>
<h2>Installation</h2>
<p>Before running the server, you'll need to have npm 8.11.0 and Node.js v16.15.1 installed on your machine.</p>
<ol>
   <li>Clone this repository to your local machine.</li>
   <li>In your terminal, navigate to the root directory of the repository.</li>
   <li>Run <code>npm i</code> to install the required dependencies.</li>
   <li>Run <code>npm run start</code> to start the server.</li>
</ol>
<p>The server will be hosted at <code>http://localhost:3200</code>.</p>
<h2>Endpoints</h2>
<p>The server currently supports one endpoint:</p>
<h3><code>/users</code> (POST)</h3>
<p>This endpoint expects a JSON payload with the following fields:</p>
<ul>
   <li><code>firstName</code> (required)</li>
   <li><code>lastName</code> (required)</li>
   <li><code>email</code> (required)</li>
</ul>
<p>If any of these fields are missing, the server will return a <code>400 Bad Request</code> error with a JSON response of <code>{ error: 'Missing required fields' }</code>.</p>
<p>The server will then sleep for a random amount of time between 1 and 1.5 seconds before responding with a JSON object containing a random <code>ok</code> response. The <code>ok</code> field will be either <code>true</code> or <code>false</code>, determined by a 50/50 chance.</p>
<h2>Code</h2>
<p>The server is built using Express.js, a popular Node.js web framework. The code for the server can be found in <code>index.js</code>.</p>
<p>The server also utilizes the <code>body-parser</code> middleware to parse JSON payloads, and the <code>cors</code> middleware to allow cross-origin requests.</p>
<p>The <code>sleepSync()</code> function is used to simulate some latency before sending a response.</p>
