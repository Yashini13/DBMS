const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');
const User = require("./models/Login");
const bcrypt = require('bcryptjs');
const app = express();
app.use(cors())
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/crud');
// mongoose.connect('mongodb://127.0.0.1:27017/employee')

app.get('/users', (req, res)=>{

    UserModel.find({})
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.get('/getUser/:id', (req,res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.put('/updateUser/:id', (req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {name: req.body.name , email: req.body.email , age:req.body.age})
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.delete('/deleteUsers/:id' ,(req , res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id}, {name: req.body.name , email: req.body.email , age:req.body.age})
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})
app.post("/createUser",(req ,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
}) 

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
  
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
  
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const newUser = new User({
      username,
      password: hashedPassword,
    });
  
    try {
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  });
  
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
  
    // Check passwordn
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
  
    res.status(200).json({ message: 'Login successful' });
  });
// app.get('/login',(res,req)=>{
//     const {email, password} =  req.body;
//     EmployeeModel.findOne({email: email})
//     .then(user => {
//         if(user){
//             if(user.password === password){
//                 res.json("Success")
//             }
//             else{
//                 res.json("check ")
//             }
//         }else{
//             res.json("no response");
//         }
//     })    
// })

// app.post('/register', (req,res)=>{
//      EmployeeModel.create(req.body)
//      .then(employees => res.json(employees))
//      .catch(err => res.json(err))
// })

const port = 3000

app.listen(port, ()=>{
console.log(`"Server is running port: ${port}"`)
})