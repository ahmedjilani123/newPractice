const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
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
      "user":"Karan",
      "age":26,
      "gender":"Male"
      }
    ]
  }
app.get('/daffodils', function(req, res){
res.json(jsonM)
});
app.post('/daffodil', function(req, res){
    var Userdata = req.body;
    res.json({Message:"Your Name is :"+Userdata.name});
    });
app.listen(3001,()=>{
    console.log('listening on');
})