var fs = require('fs')
var path = require('path')

module.exports = function (dir,ext,callback) {
    // three arguments: directory name, filename ext, callback function
    fs.readdir(dir, function (err,files) {
        if (err) {
            callback (err)
            
        }
        else {
            var arr=[];
            for (var i=0; i<files.length; i++) {
                if (path.extname(files[i]) == "." + ext) {
                    arr.push(files[i])
                    
                }
                
            }
            callback(null,arr)
            
        }
    
    })
    
    
}