const express = require("express")

const app = express();

const router = require("./Routes")

app.use(express.json())

app.use(router)

app.listen(2000, ()=> {
    console.log("server is running on PORT:2000")
})