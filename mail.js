var express= require("express");
var app= express();
var nodemailer=require("nodemailer");

app.post("/send-email",(req,res)=>{
    console.log("email enviado");
});
app.listen(8000,()=>{
    console.log("servidor inicido en http://localhost:8000");
});
