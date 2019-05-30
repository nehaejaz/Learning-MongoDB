const mongoose = require('mongoose');

//Connecting the database

mongoose.connect('mongodb://localhost/testdb',{useNewUrlParser: true});

mongoose.connection.once('open',function(){
    console.log('Connection has been made!!')
}).on('error',function(error){
    console.log("Connection error",error)
})
