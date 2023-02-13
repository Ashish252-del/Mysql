// const con = require('./config')
const express = require('express');
const { response } = require('express');
const app = express();
app.use(express.json());
const router = require('./routers/index');
app.use(router);



// app.get('/',async(req,res)=>{
//  await con.query ('select * from students', (err,result)=>{
//     if(err) {
//         res.status(404).json({message:"gettung error"})
//     }
//     else {
//         event.emit('countAPI');
//         res.status(200).json({result})
       
//     }
//  })
// })

// app.post ('/',(req,res)=>{
//     const data = req.body;
//     con.query ('insert into students SET ? ', data, (error,result,fields)=>{
//         if(error) {res.send("error in api ")}
//         else {
//             event.emit('countAPI');
//             res.send(result)}
//     })
// })

// app.put('/:id',(req,res)=>{
//     console.log(req.body);
//      const {fname,lname,age} = req.body;
//      const data = [fname,lname,age, req.params.id];
//      console.log(data);
//     // this will update all the columns b/c we have not specified
//     // con.query("UPDATE users SET fname = ?, lname = ?, age = ? ",
//     // data,(error,results,fields)=>{
//     //   if(error) throw error;
//     //   resp.send(results)
//     // })

//     // now specifying 
//     con.query("UPDATE students SET fname = ?, lname = ?, age = ? where id = ? ",
//     data,(error,results,fields)=>{
//       if(error) throw error;
//       event.emit('countAPI');
//       res.send(results)
//     })
// })

// app.delete('/:id',(req,res)=>{
// con.query('Delete from students where id = '+ req.params.id,(err,result)=>{
//     if(err) throw err;
//     else { event.emit('countAPI');
//         res.send (result)}
// })
// })
app.listen(4000,()=>{{
    console.log('server is running at 4000');
}})