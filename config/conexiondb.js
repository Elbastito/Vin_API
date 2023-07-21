// conexion.js
const mongoose = require("mongoose");
const confia = require("../confia")

const URI = confia.MONGO_URI;;


//Conexion a la base de datos (Mongo Atlas)
const conexionBD = function(url){
    return mongoose.connect(URI);
}
module.exports = conexionBD;
