var http = require('http')
var bl = require('bl')

http.get(process.argv[2],function(response){
    response.on("err", console.error)
    response.pipe(bl(function (err,data) {
        if (!err) {
            console.log(data.toString().length)
            console.log(data.toString())
            
        }
        
    }))
    
    
})