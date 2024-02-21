const http = require('http');
const fs = require('fs');
const { log } = require('console');

//     fs.mkdir("./gaurav",(error)=>{
//         if (error) {
//             console.log(error);
//         }else{
//            console.log("created file");
//         }

//  });

// fs.rmdir("./gaurav",(error)=>{
//     if (error) {
//         console.log(error);
//     }else{
//        console.log("deleted");
//     }

// });

// fs.writeFile("./doc.txt","vilas",(error)=>{
//     if (error) {
//         console.log(error);
//     }else{
//        console.log("created file");
//     }

// });

// fs.unlink("./doc.txt",(error)=>{
//     if (error) {
//         console.log(error);
//     }else{
//        console.log("created file");
//     }

// });

const server = http.createServer((req , res) =>{
        res.setHeader("Content-Type", "html");
        fs.readFile("./home.html", (error,data) =>{
            if (error) {
                console.log(error);
            }else{
                res.write(data);
            }
        });
    
    });

    server.listen(4000,()=>{
        console.log("listinigng");
    });