const express = require('express');
const app = express();
app.get('/ahmed', function(req, res){
res.send("welcome ahmed")
});
app.listen(3001,()=>{
    console.log('listening on');
})