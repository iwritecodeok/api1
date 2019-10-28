const express = require('express'); //CommonJS modules, and its equivalent to the line above//

const server = express(); // creates server

// request/ route handlers
server.get('/', (req,res) => {
    res.send('Hello Node 23!');
})


// listen for requests in a particular prot on localhost
const port = 8000; // localhost:8000
server.listen(port, () => vonsole.log('\n=== API on port 8000 ===\n'));