//Creacion del schema
//Nota.js
const mongoose = require("mongoose");

 const esquemaLibreta = new mongoose.Schema({
     IDP: {type: String,required: true},
     titulo: {type: String},
     contenido: {type: String},
     },{collection: "notas", timestamps: true
})
module.exports = mongoose.model("libreta", esquemaLibreta);