const con = require('../../config')

const EventEmitter = require('events');
let count = 0;
const event = new EventEmitter();
// making an event 
// pirst parameter event name and second is a call back function 
event.on('countAPI',()=>{
    count++;
    console.log(`event called ${count}`);
});
const crudApi = {
    create: (req,res)=>{
        const data = req.body;
        console.log(data);
        con.query ('insert into students SET ?', data, (error,result,fields)=>{
            if(error) {res.send("error")}
            else {
                event.emit('countAPI');
                res.send(result)}
        })
    },
    read:async(req,res)=>{
        await con.query ('select * from students', (err,result)=>{
           if(err) {
               res.status(404).json({message:"gettung error"})
           }
           else {
               event.emit('countAPI');
               res.status(200).json({result,count})
              
           }
        })
       },
    update:(req,res)=>{
        console.log(req.body);
         const {fname,lname,age} = req.body;
         const data = [fname,lname,age, req.params.id];
         console.log(data);
        // this will update all the columns b/c we have not specified
        // con.query("UPDATE users SET fname = ?, lname = ?, age = ? ",
        // data,(error,results,fields)=>{
        //   if(error) throw error;
        //   resp.send(results)
        // })
    
        // now specifying 
        con.query("UPDATE students SET fname = ?, lname = ?, age = ? where id = ? ",
        data,(error,results,fields)=>{
          if(error) throw error;
          event.emit('countAPI');
          res.send(results)
        })
    },
    del:(req,res)=>{
        con.query('Delete from students where id = '+ req.params.id,(err,result)=>{
            if(err) throw err;
            else { event.emit('countAPI');
                res.send (result)}
        })
        },
 
}
module.exports = crudApi;