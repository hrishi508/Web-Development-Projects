const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
// mongoose.connect('mongodb://localhost:27017/todolistDB', {useNewUrlParser: true});
mongoose.connect('mongodb+srv://admin-hrishi:test123@cluster0.tb71rz1.mongodb.net/?retryWrites=true&w=majority/todolistDB', {useNewUrlParser: true});

const itemsSchema = new mongoose.Schema({
    name: String
});

const Item = mongoose.model('Item', itemsSchema);

const item1 = new Item({
    name: "Hit the + button to add a new item." 
});

const item2 = new Item({
    name: "Welcome to your todolist!" 
});

const item3 = new Item({
    name: "<-- Hit this to delete an item.!" 
});

const defaultItems = [item1, item2, item3];

const listSchema = new mongoose.Schema({
    name: String,
    items: [itemsSchema]
});

const List = mongoose.model("List", listSchema); 

app.get("/", function (req, res){
    Item.find({}, function (err, items){
       if (err){
           console.log(err);
           res.send("Failed to fetch items");
       }
       
       else{
            if (items.length === 0){
                Item.insertMany(defaultItems, function (err){
                    if (err){
                        console.log(err);
                    }
                
                    else{
                        console.log("Successfully saved default items to the DB.");
                    }
                });

                res.render("list", {nameOfList: "", typeOfList: date.getDate(), listOfItems: defaultItems});
            }

            console.log("Fetched items successfully.");
            res.render("list", {nameOfList: "", typeOfList: date.getDate(), listOfItems: items});
       }
    });
});

app.get("/:customListName", function (req, res){
    const listName = req.params.customListName;

    List.find({name: listName}, function (err, element){
        if (err){
            console.log(err);
        }

        else{
            if (element.length === 0){
                const list = new List({
                    name: listName,
                    items: defaultItems
                });
            
                list.save();
                res.redirect("/" + listName);
            }

            else{
                res.render("list", {nameOfList: listName, typeOfList: element[0].name, listOfItems: element[0].items});
            }
        }
    })
    
    
});

app.post("/", function (req, res){

    const item = new Item({
        name: req.body.item 
    });

    item.save();

    res.redirect("/");
    
});

app.post("/delete", function (req, res){
    Item.deleteOne({_id: req.body.checkbox}, function (err){
        if (err){
            console.log(err);
        }

        else{
            console.log("Item deleted successfully!");
        }
    });
    res.redirect("/");
});

app.post("/delete:customListName", function (req, res){
    const listName = req.params.customListName;

    List.findOne({name: listName}, function (err, element){
        if (err){
            console.log(err);
        }

        else{
            // console.log(element.items.id(req.body.checkbox));
            element.items.pull(req.body.checkbox);
            element.save();
            
            res.redirect("/" + listName);
        }
    });
});

app.post("/:customListName", function (req, res){
    const listName = req.params.customListName;
    console.log(req.body.item);
    const item = new Item({
        name: req.body.item
    });

    List.findOne({name: listName}, function (err, element){
        if (err && !element){
            console.log(err);
            res.redirect("/");
        }

        else{
            element.items.push(item);
            element.save();
        }
    });

    res.redirect("/" + listName);    
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function (){
    console.log("Server started on port 3000");
});