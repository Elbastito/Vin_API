//main.js
/* Para arrancar el servidor usar "npm run start" */
const express = require("express");
const main = express();
require("dotenv").config()
const rutaParaNotas = require("./rutas/rutasParaNotas");
const conexionDB= require("./config/conexiondb");
const cors = require('cors');

main.use(express.json());
/* main.use(cors());

// Configurar CORS para permitir solicitudes desde https://vin-m2m3.onrender.com
main.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://vin-m2m3.onrender.com');
  next();
}); */

//Rutas
main.get("/",(req,res)=>{
    res.send("Pruebas pruebas");
})
main.use("/v1/notas", rutaParaNotas)

//Creacion del servidor
const PORT = 3000;

async function echarAAndar(){
    try{
        await conexionDB()
        main.listen(PORT,()=>{
            console.log(`Server listening on port ${PORT}`);
        })
    }catch(error){
        console.error(error);
    }
}

echarAAndar();



