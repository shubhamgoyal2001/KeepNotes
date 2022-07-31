const mongoose=require('mongoose');

// const DBURL= 'mongodb://127.0.0.1/notemake'
const DBURL = "mongodb+srv://shubhamgoyal2710:Shubham2001@cluster0.l2f0g57.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DBURL);
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error connecting to db"));
db.once('open',function(){
    console.log("successfully connected to the database");
});
console.log("mongoose connected");
module.exports=db;

