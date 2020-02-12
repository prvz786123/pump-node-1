const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send({success:true,message:"Hello This is working fine"})
});

app.get("/test",(req,res)=>{
    res.send({success:true,message:"This is test route"})
})

app.listen(port);
