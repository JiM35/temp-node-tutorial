// app.js

const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to  NodeJS Server!')
    }
    if (req.url === "./about"){
        res.end('Here is our short history')
    }
    res.end(`<h1>Oops!</h1>
    <p>Sorry, we couldn't find what you were looking for.</p>
    <a href= "/">Go back home</a>`);
});
server.listen(5000, ()=> console.log("Server started on port 5000"));
// server.listen(5000)
