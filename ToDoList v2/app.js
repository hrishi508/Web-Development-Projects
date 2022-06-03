var itemList = ["Buy Food", "Cook Food", "Eat Food"];
var workList = [];

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res){
    res.render("list", {typeOfList: date.getDate(), listOfItems: itemList});
});

app.get("/work", function (req, res){
    res.render("list", {typeOfList: "Work", listOfItems: workList});
});

app.post("/", function (req, res){
    if (req.body.submit === "Work"){
        workList.push(req.body.item);
        res.redirect("/work");
    }

    else{
       itemList.push(req.body.item);
       res.redirect("/");
    }
    
})

app.listen(3000, function (){
    console.log("Server started on port 3000");
})