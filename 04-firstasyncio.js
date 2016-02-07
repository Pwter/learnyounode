var fs = require('fs')

var contentbuffer = fs.readFile(process.argv[2],
    function (err,data) {
        if (!err)
            var newlines = data.toString().split("\n").length - 1

            console.log(newlines)
        
    })
    
