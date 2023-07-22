// conexion.js
const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;


//Conexion a la base de datos (Mongo Atlas)
const conexionBD = function(url){
    return mongoose.connect(URI);
}
module.exports = conexionBD;
