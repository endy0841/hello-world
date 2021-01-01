var express = require("express");
var app =express();
var ejs =require("ejs");

app.use(express.static("public"));
app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("home");
})



app.listen(process.env.PORT||3000,process.env.IP,function(err,res){
	if(err)
		{
			console.log("bhjbhm")
		}
	else
	console.log("fsh");
})