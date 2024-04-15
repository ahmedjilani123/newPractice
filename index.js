const express = require('express');
const app = express();
const jsonM ={
    "data":[
      {
      "user":"Zaid",
      "age":20,
      "gender":"Male"
      },
       {
      "user":"Dev",
      "age":20,
      "gender":"Male"
      },
       {
      "user":"joshi sir",
      "age":26,
      "gender":"Male"
      }
    ]
  }
app.get('/daffodils', function(req, res){
res.json(jsonM)
});
app.listen(3001,()=>{
    console.log('listening on');
})