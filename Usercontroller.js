const database = require("./database.json")
const fs = require("fs")

const saveToDB = (data) => {
    return new Promise ((resolve, reject)=> {
        fs.writeFile("./database.json", data,(err, data)=> {
           if(err) {
               reject(err)
           } else{
            resolve("File written successfully")
           }
        })
    })
}




const allUser = (req, res) => {
    const user = database;
    res.status(200).json({data: user})
}

const newUser = async (req, res) => {
    const name = req.body.name;
    const gender = req.body.gender;
    const id =  database.length + 1
    const user = {
        id:id,
        name:name,
        gender:gender,
    }
    database.push(user)
    res.status(201).json({message: 'User created successfully'})
    await saveToDB(JSON.stringify(database, null, 2))
}




















module.exports = {
    allUser,
    newUser
}