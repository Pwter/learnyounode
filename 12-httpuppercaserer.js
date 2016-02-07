var map = require('through2-map')
var http = require('http')

var server = http.createServer(function callback(req,res){
    req.pipe(map(function(chunk){
        var strarr=chunk.toString().split('')
        for (var i=0; i<strarr.length; i++) {
            strarr[i]=strarr[i].toString().toUpperCase()
            
        }
        return strarr.join('')
        
    })).pipe(res)
    
})

server.listen(process.argv[2])