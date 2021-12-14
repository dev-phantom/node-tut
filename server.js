var express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/Blog');


const app = express();


const dbURI = 'mongodb+srv://khalid:khalid123@phantom.jj8s4.mongodb.net/naijabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, {})
  .then((data) => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog',
    snippet: 'about my blog',
    body: 'more about the blog'
  });
  blog.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
})

app.get('/', (req, res) => {
  const blogs= [
    {title: "phantom ate eggs", snippet: "lorem ispum scsjn ndiwndiwd "},
    {title: "caro ate eggs", snippet: "lorem ispum scsjn ndiwndiwd "},
    {title: "adeola ate eggs", snippet: "lorem ispum scsjn ndiwndiwd "},
  ];
  res.render('index', {title:"home", blogs});
});
app.get('/about', (req, res) => {
  res.render('about',{title:"About Us"});
});
app.get('/blogs/create', (req, res) => {
  res.render('create',{title:"Create A New Blog"});
})


app.listen(4000,() => console.log("Server running!"));