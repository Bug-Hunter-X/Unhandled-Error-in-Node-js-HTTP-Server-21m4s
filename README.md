# Unhandled Error in Node.js HTTP Server

This repository demonstrates an example of an unhandled error in a Node.js HTTP server and provides a solution for robust error handling.

## Bug Description
The provided `bug.js` file contains a Node.js HTTP server with inadequate error handling.  The server may crash or return unexpected responses if an error occurs during request processing.

## Solution
The `bugSolution.js` file demonstrates a robust solution by implementing a try-catch block to gracefully handle potential errors.  This solution ensures that the server continues running and provides informative error messages to clients.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`. Observe that the server may crash or return unexpected 500 errors intermittently.
3. Run `node bugSolution.js`. The server now handles errors gracefully.