const{logData}=require('../Usercontroller.js')
const logger = async (req, res, next)=> {
    const date = new Date()
    const data = `ADMIN ${req.method} method was used in ${req.url} at ${date}`

    await logData(data)
 
    next()
}

module.exports={logger}