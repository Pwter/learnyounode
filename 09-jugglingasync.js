var http = require('http')
var bl = require('bl')

var queue=[process.argv[2]
    , process.argv[3]
    , process.argv[4]]
    
var solution = []
var countcbs = 0

function httpGET(index) {
    http.get(queue[index], function(response){
        response.on("err", console.error)
        response.pipe(bl(function (err,data){
            if (!err) {
                solution[index]=data.toString()
                countcbs++
                
                if (countcbs==3) {
                    for (var i=0; i<solution.length; i++) {
                        console.log(solution[i])
                        
                    }
                    
                }
            }
            
        }))
        
    })
    
}

for (var i=0; i<queue.length; i++) {
    httpGET(i)
    
}