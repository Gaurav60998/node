const http = require('http');
const fs = require('fs');
const { error } = require('console');

const server = http.createServer((req,res)=>{
    res.setHeader('Contend-Type','html');
    let path='./ui';

    switch (req.url) {
        case '/':
            path+='/home.html';
            break;
        case '/about':
             path+='/about.html';
        break;
        
        case '/contact':
            path+='/contact.html';
            break;
        default:
            path+='/404.html'
            break;
    }

    fs.readFile(path,(error,data)=>{
        if (error) {
            
        } else {
            res.write(data);
            res.end();
        }
    })

    console.log(req.url);
});

server.listen(3000,()=>{
    console.log("listing");
});