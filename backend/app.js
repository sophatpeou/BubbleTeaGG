const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

const btlMongoURL = "mongodb+srv://sopa:bXFb1ffZsnERmxib@cluster0-spcvx.mongodb.net/bubbleteagg?retryWrites=true&w=majority";

mongoose.connect(btlMongoURL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
    console.log('Connected to database')
  }).catch(()=>{
    console.log('Connection Failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});



app.post("/api/posts", (req, res, next) => {
  // const post = req.body;
  const post = new Post({
    //@post.js postschema
    title: req.body.title,
    content: req.body.content
  });
  // console.log(post);
  post.save().then((result)=>{
    res.status(201).json({
      message: 'Post added successfully',
      postId: result._id
    });
  });
});

app.put("/api/posts/:id", (req, res, next)=>{
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Post.updateOne({_id: req.params.id},post).then((result)=>{
    console.log(result);
    res.status(200).json({ message: "post edited successfully!"});
  });


});

app.delete("/api/posts/:id", (req, res, next) =>{
  console.log(req.params.id);
  Post.deleteOne({_id: req.params.id}).then((result) =>{
    console.log(result);
    res.status(200).json({ message: "post deleted!"});
  });
});

app.get("/api/posts", (req, res, next) => {
  // const posts = [
  //   {
  //     id: "fadf12421l",
  //     title: "First server-side post",
  //     content: "This is coming from the server"
  //   },
  //   {
  //     id: "ksajflaj132",
  //     title: "Second server-side post",
  //     content: "This is coming from the server!"
  //   }
  // ];
  // const messages = [
  //   {
  //     id: '1',
  //     title: 'hi',
  //     content: 'I\'m testing this out.'
  //   }
  //
  // ];

  Post.find()
    .then((documents) => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: documents
      });
  });

});

app.get("/api/posts/:id", (req, res, next) => {
  Post.findById(req.params.id).then(post =>{
    if(post){
      res.status(200).json(post);
    } else{
      res.status(404).json({messages: 'Post not found'});
    }
  });
});


module.exports = app;
