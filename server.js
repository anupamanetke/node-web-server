
const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{

    res.render('home.hbs',{
        'pageTitle':"Home Page",
        "welcome_message":"Welcome to my website."
    });
});

app.get('/about',(req,res)=>{

    res.send("about page");
});

app.get('/bad',(req,res)=>{

    res.send({"error:":"error occured"});
});


app.listen(3000, ()=>{
    console.log('Server started at port 3000');
});