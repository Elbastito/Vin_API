const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const funcionesControladorasNotas = require("../controladores/nota");

router.route("/").get(funcionesControladorasNotas.notaPadre);
router.route("/:ID").get(funcionesControladorasNotas.traerNotas);
router.route("/:ID").delete(funcionesControladorasNotas.borrarNota);
router.route("/:ID").put(funcionesControladorasNotas.ajustarNota);
router.route("/:IDP").post(funcionesControladorasNotas.crearNota);


module.exports = router;