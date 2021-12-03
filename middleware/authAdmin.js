const Users = require('../models/userModel')

const authAdmin = async (req, res, next) => {
try {
    //Getting the user informations by id
    const user = await Users.findOne({
        // _id: req.headers.id
        _id: req.user.id
    })
    if(user.role === 0)
    return res.status(400).json({msg: 'Access denied'})

    next()
    
} catch (err) {
    return res.status(506).json({msg: err.message})
}
}


module.exports = authAdmin