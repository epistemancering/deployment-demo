let api = require("express")()
api.get("/", function(request, response) {
    response.sendFile(__dirname + "/public/index.html")
})
api.get("/styles", function(request, response) {
    response.sendFile(__dirname + "/public/styles.css")
})
api.get("/js", function(request, response) {
    response.sendFile(__dirname + "/public/main.js")
})
api.listen(4000, function() {
    console.log("up on 4000")
})