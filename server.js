const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyparser.json());

//=============================//

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/blog');
console.log(`MONGODB_URI = ${process.env.MONGODB_URI}`)

const db = mongoose.connection;
 
db.on('error', function (err) {
    console.log('connection error', err);
});
db.once('open', function () {
    console.log('connected.');
});
 
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: String,
    content: String,
    time: String
})

const Post = mongoose.model('post', PostSchema);

//=============================//

app.get('/getTitles', (req,res) => {
    Post.find()
        .then(posts => res.json(posts));
    console.log("server getTitle");
})
app.get('/post/:postID', (req,res) => {
    const id = req.params.postID;
    Post.findById(id, (err,post) => {
        if (err) console.log(err);
        res.json(post);
        console.log(`getPost ${id}: ${post}`)
    })   
})
app.post('/post',(req,res) => {
    console.log("GET POST");
    console.log(req.body);
    Post.create(req.body)
        .catch(err => console.log(err));
    res.json({state: "SUCCESS"});
})
app.put('/post/:postID',(req,res) => {
    console.log("GET EDIT");
    console.log(req.body);
    const id = req.params.postID;
    Post.findByIdAndUpdate(id,req.body)
        .catch(err => console.log(err));
    res.json({state: "SUCCESS"});
})

console.log(__dirname)
// app.use(express.static(__dirname+'/build'))
app.use(express.static(__dirname+'/public'))
// app.get('/', (req,res)=>{res.sendFile(__dirname+'/public/index.html')})

const port = process.env.PORT || 3001;
app.listen(port, ()=>{console.log(`listening on ${port}...`)});
