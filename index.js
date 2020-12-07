const express= require("express");
const morgan=require("morgan");
const app =express();
app.use(morgan("dev"));
require('./server/config/dataBase');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/", require("./server/rutas/rutes"));

module.exports=app;
app.listen(8000,()=>{
    console.log("servidor inicido en http://localhost:8000 ");
});

