//nota.js
const modeloNotas = require("../modelos/Nota");
async function notaPadre(req,res){
    try{
        const notaPadre = await modeloNotas.findOne({IDP: "@"})
        res.status(201).json({notaPadre})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

async function traerNotas(req, res) {
    const idBuscada = req.params.ID;
    const tipoSolicitud = req.query.type;
    
    try {
      if (tipoSolicitud === 'single') {
        const notaEncontrada = await modeloNotas.findOne({
          _id: idBuscada
        });
        res.status(201).json({ notaEncontrada });
      } else if (tipoSolicitud === 'multiple') {
        const notasEncontradas = await modeloNotas.find({
          IDP: idBuscada
        });
        res.send(notasEncontradas);
      } else {
        res.send("Tipo de solicitud no válido");
      }
    } catch (error) {
      res.send("404");
    }
}
  

async function crearNota(req,res){
    try{
        const nuevaNota = await modeloNotas.create({
            IDP:req.params.IDP,
            titulo: req.body.titulo,
            contenido: req.body.contenido,
        })
        res.status(201).json({nuevaNota})
    }catch(error){
        res.status(500).json(error)
    }
}

async function ajustarNota(req, res) {
  const idACambiar = req.params.ID; // Obtenemos el ID del documento desde los parámetros de la ruta
  try {
    const cambiadaNota = await modeloNotas.findOneAndUpdate(
        { _id: idACambiar },
        { $set: req.body }, // Utilizamos "$set" para actualizar solo los campos proporcionados en el cuerpo de la solicitud
        { new: true, runValidators: true }
    );

    res.send(cambiadaNota); // Enviamos el documento actualizado como respuesta al cliente
  } catch (error) {
    res.send(error); // Si ocurre un error, enviamos el error como respuesta al cliente
  }
}


async function borrarNota(req,res){
    const idABorrar = req.params.ID;
    try{
        const adeusNotasHijasDeLaDeArriba = await modeloNotas.deleteMany({
            IDP: idABorrar
        })
        const adeusNota = await modeloNotas.findOneAndDelete({
            _id: idABorrar
        })
        res.send("choa notilla :(");
    }catch(error){
        res.send(error);
    }
}

module.exports = {
    notaPadre,
    traerNotas,
    crearNota,
    ajustarNota,
    borrarNota
}