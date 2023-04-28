const http = require('http');



const server = http.createServer((req, res)=>{
    // console.log(req)
    // console.log(res)
    if(req.method === 'GET' && req.url === '/'){
        console.log('Hello');
        res.write("Welcome brothers")
        res.end()
    }
})


server.listen(3002, ()=>{
    console.log('Server started on http://localhost:3002');
})