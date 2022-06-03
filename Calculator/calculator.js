const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res){
    var result = 0;

    switch (req.body.op) {
        case "+":
            result = Number(req.body.num1) + Number(req.body.num2);
            break;

        case "-":
            result = Number(req.body.num1) - Number(req.body.num2);
            break;

        case "*":
            result = Number(req.body.num1) * Number(req.body.num2);
            break;

        case "/":
            result = Number(req.body.num1) / Number(req.body.num2);
            break;

        case "%":
            result = Number(req.body.num1) % Number(req.body.num2);
            break;

        case "^":
            result = Number(req.body.num1) ** Number(req.body.num2);
            break;
    
        default:
            res.send("Unsupported Operator detected!");
            break;
    }
    
    res.send("The result of the calculation is " + result);
})

app.listen(3000, function (){
    console.log("Server started on port 3000");
})