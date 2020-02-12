const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send({success:true,message:"Hello This is working fine"})
});

app.listen(process.env.PORT);