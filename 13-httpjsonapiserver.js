var http = require('http')
var url = require('url')

var server = http.createServer(function callback(req,res) {
    if (req.method == 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        
        var urlObj = url.parse(req.url, true)
        //res.end(urlObj.pathname + " and query: " + urlObj.query)
        var date = new Date(urlObj.query.iso)
        var tJson = {}
        
        if (urlObj.pathname=='/api/parsetime') {
            tJson.hour = date.getHours()
            tJson.minute = date.getMinutes()
            tJson.second = date.getSeconds()
            
        }
        if (urlObj.pathname=='/api/unixtime') {
            tJson.unixtime = date.getTime()
            
        }
        
        res.end(JSON.stringify(tJson))
    }
    
})

server.listen(process.argv[2])