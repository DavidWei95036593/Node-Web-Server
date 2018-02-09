const express = require(`express`);
const hbs = require(`hbs`);
const path = require(`path`);

const app= express();
app.set(`view engine`,`hbs`);
hbs.registerPartials(path.join(__dirname,"views","partials"))

  app.get(`/`,(req,res)=>{
    res.render(`index.hbs`,{
      about:`About Me`,
      content:`Jeremy is a despacito`,
      school:`Paly`,
      year:new Date().getFullYear(),
      pageTitle:`Home`
    });
  //sentfile sent it to the excate location
  // app.sendFile(__dirname+"/public");
  })
  //this tells express to make the content of the  directory make it visible
  // app.use(express.static(__dirname + "/public"));

  app.get(`/about`,(req,res)=>{
    res.render(`about.hbs`,{
      about:`About Me`,
      content:`Jeremy is a despacito`,
      school:`Gunn`,
      year:new Date().getFullYear(),
      pageTitle:`About`
    });
  })
  // app.use(express.static(__dirname + "/public"));


  app.listen(3000,()=>{
  console.log("Listening on port 3000!");
})
