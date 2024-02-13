const http = require("node:http");

const server = http.createServer((request, response) => {
    console.log({request});
    console.log({response});

    response.end();
});

server.listen(8080, () => {
    console.log("Server started on port 8080");
});