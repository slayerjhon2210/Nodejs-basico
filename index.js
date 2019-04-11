const express = require('express');
const color = require('colors');

const server = express();
server.get('/', function(req, res){
    res.send("<h1>Hola mundo con Express y Node</h1>");
    res.end();
})
server.listen(3000, function(){
    console.log('Server on port 3000'.red);
});

/*
const http = require('http');

const colors = require('colors');

const handServer = function(req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>hola mundo </h1>');
    res.end();
}
const server = http.createServer(handServer);

server.listen(3000, function(){
    console.log('Server on port 3000'.yellow);
});

const fs = require('fs');

fs.readFile('./texto.txt', function(err, data){
    if (err){
        console.log(err);
    }
    console.log(data.toString()); 
})
fs.writeFile('./texto.txt', 'linea uno', function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');
});
console.log('Ultima linea de codigo');
const os = require('os');
console.log(os.platform());
console.log(os.release());
console.log('free mem: ', os.freemem(), ' bytes');
console.log('total mem: ', os.totalmem(), ' bytes');


const math = require('./math.js');

console.log(math);

console.log(math.add(1,3));
console.log(math.substract(9,3));  
console.log(math.divide(12,0));
*/