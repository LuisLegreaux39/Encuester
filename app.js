const express = require('express');
const app = express();
const path = require('path');
const Global = require('./Partials/Globals');
const preguntas = require('./Partials/Encuesta');
const DB = require('./Partials/MySql_Db_Conn');

///settings
const host = '0.0.0.0';
app.set('PORT', process.env.PORT || Global.PORT);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Variables
var questions = [];
var amountOfQuestions = 1;

// Routse
//Get 
app.get('/',(req,res)=>{
    var _preguntas = preguntas.preguntas;
    res.render('Index',{ _preguntas } );
    
})
app.get('/CrearEncuesta',(req,res)=>{
    res.render('CrearEncuesta' );
})
app.get('/VerEncuesta',(req,res)=>{
    var _encuestas=[];
    DB.getEncuestas((err,result)=>{
        _encuestas = result;
        res.render('VerEncuestas',{ _encuestas } );
    })
})

//POST
app.post('/CrearEncuesta',(req,res)=>{
    // console.log(req)
    res.render('CrearEncuesta');
    
})
//
app.listen(app.get('PORT'),()=>{
    console.log(`App listening ${app.get('PORT')}`);
})