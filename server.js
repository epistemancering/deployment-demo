let express = require("express")
let api = express()
api.use(express.static(__dirname + "/public"))
api.listen(4000, function() {
    console.log("up on 4000")
})