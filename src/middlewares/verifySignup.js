import User from "../models/User"

export const checkDuplicateUserNameOrEmail = async (req, res, next) => {

    const user = await User.findOne({username: req.body.username})
    if (user) return res.status(400).json({message: 'the user already exist'})

    const email = await User.findOne({email: req.body.email})
    if (email) return res.status(400).json({message: 'the email already exist'})

    next()
}