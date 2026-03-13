const http = require('http');

const server = http.createServer((req,res)=>{
res.write("Docker Node App Running!");
res.end();
});

server.listen(3000);
