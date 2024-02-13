const http = require("node:http");

const server = http.createServer((request, response) => {
    console.log({request});
    console.log({response});

    if (request.method === "GET" && request.url === "/") {
        return response.end("Home");
    }

    if (request.method === "GET" && request.url === "/movies") {
        return response.end("Movies");
    }

    
    response.end();
});

server.listen(8080, () => {
    console.log("Server started on port 8080");
});