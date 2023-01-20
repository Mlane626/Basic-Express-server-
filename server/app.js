// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const data = require('./data.json');
const app = express();
const port = 3000;


// create your express server below
app.get('/', function (req, res){
    res.send('Its working');
    res.status(200).json(req.body);
    res.send(data);
});

app.get('/data', function(req, res){
    res.status(200);
    res.send(data);
})
// add your routes and middleware below
app.use(morgan('dev'));


// finally export the express application
module.exports = app;



// form.on ('end', function() {
//    res.writeHead(200, {'Content-Type': 'text/plain'});--- not usable bc npm test doesnt work 
// });