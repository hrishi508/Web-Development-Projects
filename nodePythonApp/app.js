const express = require('express')
const {spawn} = require('child_process');
const app = express()
const port = 3000
app.get('/', function (req, res){

    var dataToSend;

    // spawn new child process to call the python script
    const python = spawn('python', ['script.py']);

    // collect data from script
    python.stdout.on('data', function (data){

        console.log('Pipe data from python script ...');
        dataToSend = data.toString();

    });

    // in close event we are sure that stream from child process is closed
    python.on('close', function (code){

        console.log(`child process close all stdio with code ${code}`);
        console.log(typeof(dataToSend));
        // send data to browser
        res.send(dataToSend);
    });
 
})

app.listen(port, function (){
    console.log(`Server started on port ${port}!`);
});