var net = require('net')

var server = net.createServer(function (socket) {
    //handling socket
    var d = new Date()
    var res = d.getFullYear() + "-"
    if (d.getMonth()+1<10) res += "0"
    res += d.getMonth()+1 + "-"
    if (d.getDate() < 10) res += "0"
    res += d.getDate() + " "
    if (d.getHours() < 10) res += "0"
    res += d.getHours() + ":"
    if (d.getMinutes() < 10) res += "0"
    res += d.getMinutes() +"\n"
    socket.end(res)
    
})
server.listen(process.argv[2])