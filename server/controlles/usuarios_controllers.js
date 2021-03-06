const db=require('../config/dataBase');
const bcrypt=require("bcrypt");
const nodemailer = require("nodemailer");
const usuarios = require('../models/usuarios');
const { getMaxListeners } = require('../..');

module.exports.obtenerUsuarios= async(req,res)=>{

    try{
        let usuarios=await db.usuarios.findAll();
        if(usuarios){
            return res.json(usuarios);
        }else{
            return res.json({mensaje:'datos no existen'});
        }
    }catch(error){
        res.status(400).json(error);

    }
}
module.exports.guardarUsuarios=async(req,res)=>{
    try{
        req.body.password=bcrypt.hashSync(req.body.password,10);
        await db.usuarios.create(req.body)
        return res.json({mensaje:'usuario agregado '});
    }catch(error){
        res.status(400).json(error);
    }

}
module.exports.eliminarUsuarios=async(req,res)=>{
    await usuarios.destroy({
        where: {
          nombre: ""
        }
      });
}
module.exports.actualizarUsuarios=async(req,res)=>{
    
    await db.usuarios.update({ nombre: "" }, {
        where: {
          nombre: null
        }
      });  
}


"use strict";



module.exports.enviarmail=async (req,res) =>{
  
  

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: "xxxxxxxx@gmail.com", // generated ethereal user
      pass: "xxxx", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info= await transporter.sendMail({
    from: '"Hefzi👻" <bamurillo15@gmail.com>', // sender address
    to: "xxxxxxx@gmail.com", // list of receivers
    subject: "Hello ✔ desde nodemailer", // Subject line
    text: "Hello world, preciosa Hefzi", // plain text body
    html: "<b>Hello world?</b>", // html body
  },(err, result)=>{
    if(err){
      res.send({
        message:err
      })
    }else{
      transporter.close();
      res.status(281).json({
        ok:true,
        message:"el email ha sido enviado"
      });
    }
  });

  console.log("Message sent: hefzimurillo15@gmail.com", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL:bamurillo15@gmail.com", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}




