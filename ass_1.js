const http = require('http')

const server = http.createServer((req,res)=>{
    const url = req.url
    const method = req.method

    if(url==="/"){
        res.setHeader("content-type","text/html")
        res.write("<html>")
        res.write("<head><title>Main Page</title></head>")
        res.write("<body><h1>Welcome To The Site</h1> <br> <form action='/create-user' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>")
        res.write("</html>")
        return res.end()
    }

    if(url==="/create-user" && method==="POST"){
        const body = []
        req.on('data',(value)=>{
            body.push(value)
        })
        req.on('end',()=>{
            const bufferedarray = Buffer.concat(body).toString()
            const mess = bufferedarray.split("=")[1]
            console.log(mess)
        })
        res.statusCode=302
        res.setHeader("Location","/")
        return res.end()
    }

    if(url==="/user"){
        res.setHeader("content-type","text/html")
        res.write("<html>")
        res.write("<head><title>User Page</title></head>")
        res.write("<body><ul><li>user1</li><li>user1</li><li>user1</li></ul></body>")
        res.write("</html>")
        return res.end()
    }
})
server.listen(3000)