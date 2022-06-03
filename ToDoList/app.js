var itemList = ["Buy Food", "Cook Food", "Eat Food"];

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res){
    var date = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    date = date.toLocaleDateString('en-US', options);
    res.render("list", {currDate: date, listOfItems: itemList});
});

app.post("/", function (req, res){
    itemList.push(req.body.item);
    res.redirect("/");
})

app.listen(3000, function (){
    console.log("Server started on port 3000");
})