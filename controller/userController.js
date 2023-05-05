const User = require('../models/userSchema')
const asyncHandler = require('express-async-handler')

const createUser = asyncHandler(async(req,res)=>{
const {username,email} = req.body

const usercreated =await User.create({
    username,
    email
})
res.status(200).json({
    status:'success',
    usercreated
})

})

const getUser = asyncHandler(async(req,res)=>{
    const user = await User.find()
    res.status(200).json({
        status:'success',
        data:{
            user
        }
    })
})

module.exports = {
    createUser,
    getUser
}