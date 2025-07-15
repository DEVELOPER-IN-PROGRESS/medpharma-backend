const user = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.userRegisterController = async(req,res) => {
    // console.log('inside register controller');
    const {username ,
        email ,password
    } = req.body

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({message: 'Invalid email format' });
    }

    try{
        const presentUser = await user.findOne({email})
        console.log(presentUser);

        const saltedPassword = await bcrypt.hash(password,10)

        if(presentUser){
            res.status(401).json('User Already Registered');
        }else{
            const newUser = await user({
                username,
                email,
                password:saltedPassword,
            })

            await newUser.save()
            console.log('new user created ')
            res.status(200).json(newUser);
        }

    }catch(error){
        res.status(500).json({error});
    }
}

exports.userLoginController = async(req,res) => {
    console.log('inside login controller')
    const { email , password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({message:'Invalid email format' });
    }

    try{
        const validUser = await user.findOne({email})
        console.log(validUser);

        if(validUser){
            const passCheck = await bcrypt.compare(password , validUser.password)
            console.log()
            if(passCheck){
                const token = jwt.sign({userId:validUser.id},process.env.JWT_SECRET)
                console.log(token);
                const {email,password} = validUser;
                res.status(200).json({token,email,password});
            }else{
                res.status(402).json({message:'Invalid Credentials'})
            }
        }else{
            res.status(402).json({message:'Invalid Credentials'})
        }

    }catch(error){
        res.status(500).json({error});
    }
}