const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    var arr = req.url.split("/");
    console.log(arr[1])
    if(arr[1]=='add'){
        var result = Number(arr[2])+Number(arr[3]);
        res.write(`<h1>${result}</h1>`)
        res.end()
    }
    else if(arr[1]=='sub'){
        var result = Number(arr[2])-Number(arr[3]);
        res.write(`<h1>${result}</h1>`)
        res.end()
    }
    else if(arr[1]=='mul'){
        var result = Number(arr[2])*Number(arr[3]);
        res.write(`<h1>${result}</h1>`)
        res.end()
    }
    else if(arr[1]=='div'){
        var result = Number(arr[2])/Number(arr[3]);
        res.write(`<h1>${result}</h1>`)
        res.end()
    }
})
server.listen(8080)

server.on('listening', () => {
    console.log("server is running on 8080 port.")
})

server.on('error', (error) => {
    console.log(error)
})
