const http = require('http');
function startServer(port) {
    const server = http.createServer((req , res) =>{
                res.setHeader("Content-Type", "text/plan");
                res.write("hello");
                console.log("neww");
                res.end();
        });

        server.listen(port, () =>{
               console.log("listening");
                });
}

module.exports= startServer;