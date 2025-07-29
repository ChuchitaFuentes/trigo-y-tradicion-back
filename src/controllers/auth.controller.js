const User = require ('../models/user.model');

exports.register = async(req,res)=>{
    const user = new User(req.body);
    await user.save();
    return res.status(201).json(user);
};

exports.login = async(req,res)=>{
    const user = await User.findOne({name:req.body.name, password:req.body.password})
    if (user) return res.json(user)
    return res.status(401).json({message:'Credenciales invalidas'})
};