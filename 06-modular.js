var myFilter = require('./06-modular-filter.js')

var dir=process.argv[2]
var ext=process.argv[3]

myFilter(dir, ext, function (err,files){
    if (!err) {
        for (var i=0; i<files.length; i++) {
            console.log(files[i])
            
        }
        
    }
    
})