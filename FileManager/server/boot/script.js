
module.exports = function(server) {
    var memory = server.loopback.createDataSource({
        connector: server.loopback.Memory,
        file: "mydata.json"
    });
}

