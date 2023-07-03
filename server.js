const express= require('express');
const bodyparser=require('body-parser')

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
const port= 3008;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/server.html');
  })

   app.post('/', (req,res)=>{
   var name=req.body.Name;
   var height = parseFloat(req.body.Height);
   var weight =parseFloat(req.body.Weight);
     var bmi= weight/(height*height);
     
    res.send("Hey! " + name + " your bmi is " + bmi );
     
   })


  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })