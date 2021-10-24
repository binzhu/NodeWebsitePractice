'use strict';

const express = require('express');
const mongoose = require('mongoose');
const project1dbname = "nodeproject1_db";
const dbAddress = "192.168.86.49";
const dbAddressDocker = "MongoDB";

//mongoose.connect("mongodb://mongo:27017/MongoDB")
mongoose.connect("mongodb://" + dbAddress +":27017/" + project1dbname,
    {useNewUrlParser: true }
).then(()=> console.log("mongo connected"))
.catch(error => console.log(err))

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

const UserSchema = new mongoose.Schema({
  first_name: String
});

const User = mongoose.model('User', UserSchema);

//app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  User.find().then((users)=>{
    console.log(users);
    res.send(users);
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);