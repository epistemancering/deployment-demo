let express = require("express")
let api = express()
api.use(express.static(__dirname + "/public"))
AudioParamMap.post("/ma-post", function(request, response) {
    response.send("ya po0sted!")
})
api.listen(4000, function() {
    console.log("up on 4000")
})