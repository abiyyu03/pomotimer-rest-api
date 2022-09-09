const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {google} = require('googleapis');
const cors = require('cors');
const request = require('request');
const urlParse = require('url-parse');
const queryParse = require('query-string');
const { auth } = require('express-openid-connect');
const expressSession = require('express-session');
const passport = require('passport');
const auth0Strategy = require('passport-auth0');

const { dbHost, dbPort, dbName, dbUsername, dbPassword } = require('./config/database');
const config = require('./config/auth');
require('dotenv').config();

// 142095363956-n7kelamehqfgha773ku63uqhe4vngfr1.apps.googleusercontent.com
// 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

const app = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST;

app.use(cors());
app.use(auth(config));
app.use(express.json()); //parse JSON
app.use(bodyParser.urlencoded({extended: true})); // parse JSON from form html
app.use(require('./routes/routes')); //get route

mongoose.connect(dbHost+':'+dbPort+'/'+dbName,{useNewUrlParser:true});
const db = mongoose.connection;
db.once('open',_=>{
    console.log(`Database connected : ${dbHost}`);
});
db.on('error',err =>{
    console.log(`connection error : ${err}`);
});


app.listen(port, () => {
    console.log(`Server is running at ${host}:${port}`);
})