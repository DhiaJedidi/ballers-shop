const express = require('express')
const app = express()
const b=express.urlencoded({extends:true})
const mongoose = require("mongoose");


const url = 'mongodb://localhost:27017/test';
// const students =[
//    {
//       "id" : 0,
//       "name" : 'dhaw',
//       "age" : 9
//    },
//    {
//       "id" : 1,
//       "name" : 'lboss',
//       "age" : 50
//    }
// ]
// mongoose.connect('mongodb://localhost/mydatabase')
// .then(() => {
//     console.log('Connected to MongoDB');
// })
// .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });


// app.get('/', (req, res) => {
//    res.send('Hello, this is your message!');
      
   
// });
// app.get('/students',(req,res) =>{
//    res.send("students");  
// })
// app.get('/students/:id',(req,res) => {
//    let id = req.params.id
//    let newStudent = students.find(student => student.id == id)
//    if(newStudent){
//    res.send(newStudent)}
//    else{
//       res.send("this student dont exist")
//    }
// })
// app.delete('/students/delete/:id',(req,res) => {
//    let newStudent = students.find(student => student.id == req.params.id)
//    pos = students.indexOf(newStudent)
//    students.splice(pos,1)  
//    res.send(students)
// })

// app.post('/students/addStudent',b,(req,res)=>{
//    let newStudent = {
//       id :req.body.id,
//       firstname :req.body.firstname,
//       lastname :req.body.lastname,
//       job :req.body.job
//    }
//    students.push(newStudent)
//    res.send(students)
// })

// app.put('/students/update/:id',b,(req,res)=>{
//    let newStudent = students.find(student => student.id == req.params.id)
//    newStudent.firstname = req.body.firstname
//    newStudent.lastname = req.body.lastname
//    newStudent.job = req.body.job   
//    res.send(newStudent)                                                           
// })
const OrderSchema = mongoose.Schema({
   id : Number,
   modele : String,
   taille : String,
   price : Number,
   num : Number
})
const Order=mongoose.model('order',OrderSchema)
app.get('/createorder',(req,res)=>{

   mongoose.connect(url).then(res=>{
      let Odr =new Order({
         id : 0,
         modele : 'artist on the court tshirt',
         taille : 'm',
         price : 50,
         num : 22329392

      })    
      Odr.save()
   })
   res.send("loshfofshf")
})
app.get('/getorder/:taille',async (req,res)=>{
   mongoose.connect(url)
   const order = await Order.find({taille : req.params.taille});
   res.send(order) 
})
app.listen(7000,() => {
   console.log("server work")
})

