const mongoose = require('mongoose') //Para que se interprete que se esta haciendo la conexion

const userSchema = new mongoose.Schema({
    name: String,
    password: String
}) //Le avisa a mongoose como va a ser el esquema del usuario

module.exports = mongoose.model('User', userSchema)