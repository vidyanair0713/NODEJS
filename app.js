'use strict';

console.log('Hello world');

//A basic node  server

const http = require('http'); // library 
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");


const server = http.createServer(function (req, res) {
    //console.log(http.METHODS); //http.Methods
    //console.log(http.STATUS_CODES); // In http module
    //console.log(req.headers);
    //console.log(req.url);

    let path = url.parse(req.url, true);
    //path.pathname -- path
    //path.search -- querystring
    //path.query -- querystring object
    //path.port path.protocol path.origin

   // let decoder = new StringDecoder('utf-8');
   // let buffer = '';
   // req.on('data', function (chunk) {
   //     buffer += decoder.write(chunk);
   // });

   // req.on('end', function () {
   //     buffer += decoder.end();
   //    res.writeHead(200, "OK", { 'Conent-Type': 'text\plain' });
   //     res.write("The response \n \n ");
   //     res.write(util.inspect(path.query) + "\n\n");
   //     res.write(buffer + "\n\n")
   //     res.end("End of the message to browser")
   // });

   

    if (path.pathname == "/getInfo") {
        /* Sending plain text example*
         res.writeHead(200, "OK", { 'Conent-Type': 'text\plain' });
         res.write("The response \n \n ");
         res.write("path.query" + util.inspect(path.query) + "\n\n");
         res.write("path.search" + util.inspect(path.search) + "\n\n");
        res.write("path.pathname" + util.inspect(path.pathname) + "\n\n");
      */
        /* Sending JSON response */
        res.setHeader('Content-type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', "*");
        res.writeHead(200); //status code HTTP 200/OK

        let dataObj = { "id": 123, "name": "Bob", "email": "bob@work.org" };
        let data = JSON.stringify(dataObj);

        res.end(data);
    }
    

    res.end("End of the message to browser")

});

server.listen(1234, function () {
    console.log('listening on port 1234')
})

