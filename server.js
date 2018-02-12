const express = require(`express`);
const hbs = require(`hbs`);
const path = require(`path`);

const app= express();
app.set(`view engine`,`hbs`);
hbs.registerPartials(path.join(__dirname,"views","partials"))
hbs.registerHelper(`getCurrentYear`,()=>{
  // return "HIII";
  return new Date().getFullYear();
})
hbs.registerHelper(`yell`,(word)=>{
    return word.substr(0,1).toUpperCase()+word.substr(1).toLowerCase()+"!!!";
})
  app.get(`/`,(req,res)=>{
    res.render(`index.hbs`,{
      about:`About Me`,
      content:`Jeremy is a despacito`,
      school:`Paly`,
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
      pageTitle:`About`
    });
  })
  // app.use(express.static(__dirname + "/public"));
  //this means to get every characters that has ing in it
  app.get(/.*ing/,(req,res)=>{
    res.send({
      year:new Date().getFullYear(),
      originalUrl:req.originalUrl,
      queryParams: req.query,
      school:req.query.school,
      clsss:req.query.class
    })
  })

  app.listen(3000,()=>{
  console.log("Listening on port 3000!");
})
