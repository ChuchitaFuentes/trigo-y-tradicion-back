const mongoose = require('mongoose')
const connectDB =async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('🌳Mongo DB conectado')
    } catch (error){
        console.error('🍎Error al conectar con MongoDB:', error.message)
        process.exit(1);
    }
};

module.exports = connectDB