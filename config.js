const mysql = require ('mysql');
// connecting to mysql database 
// taking parameter as object 
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'youtubestu'
});
 
// checking for  connection
con.connect ((err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log('connected');
    }
});

module.exports = con;