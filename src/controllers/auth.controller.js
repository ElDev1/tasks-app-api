import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async (req, res) => {
    const { username, email, password } = req.body

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)     
    })

    const savedUser = await newUser.save()

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400
    })

    res.status(200).json({token})
} 

export const signIn = async (req, res) => {
    
    const userFound = await User.findOne({email: req.body.email})

    if(!userFound) return res.status(400).json({message: 'user not found'})
    
    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if(!matchPassword) return res.status(400).json({token: null, message: 'invalid password'})

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400
    })

    res.json({token})
}