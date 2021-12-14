const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.get("/", (req,res)=>{
    res.render("index");
});

app.listen(process.env.PORT || 2000, (e)=>{
    if(e)return console.log(e);
    console.log("server running");
})