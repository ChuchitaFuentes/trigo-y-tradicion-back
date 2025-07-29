const mongoose = require('mongoose');
const postSchema = new mongoose.Schema ({
        nombre:String, 
        descripcion: String, 
        precio:Number, 
        categoria: String 
});

 module.exports = mongoose.model('Post', postSchema);