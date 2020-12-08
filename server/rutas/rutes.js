const router= require("express").Router();
const {obtenerUsuarios,guardarUsuarios,eliminarUsuarios, enviarmail }=require('../controlles/usuarios_controllers');
router.get("/",(req,res)=>res.send("hola mundo!!!"));
router.get('/usuarios',obtenerUsuarios);
router.post('/usuarios',guardarUsuarios);
router.delete('/usuarios/:id',eliminarUsuarios);
router.get('/enviarmail',enviarmail);

module.exports=router;