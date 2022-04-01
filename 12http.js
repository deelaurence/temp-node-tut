const http = require('http')

const server = http.createServer((req,res)=>{
if (req.url==='/'){
    res.end('welcome to our homepage')}

if(req.url==='/about'){
    res.end('about us')}
{
    res.end('oops fuck off')
}

})
server.listen(5000)