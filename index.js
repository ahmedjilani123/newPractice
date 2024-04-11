const express = require('express');
const app = express();
app.get('/', function(req, res){
res.send("welcome")
});
app.listen(3001,()=>{
    console.log('listening on');
})