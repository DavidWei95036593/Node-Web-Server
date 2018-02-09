const express = require(`express`);

const app= express();

app.get(`/`,(req,res)=>{
  res.send({
    course:`Web Development`,
    school:`Paly`
  })
})
app.listen(3000,()=>{
  console.log("Listening on port 3000!");
})
