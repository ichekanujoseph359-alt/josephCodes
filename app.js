const express = require("express")

const app = express();

const route = require("./Routes")

app.use(express.json())

app.use(route)

app.listen(2000, ()=> {
    console.log("server is running on PORT:2000")
})