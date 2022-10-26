const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/Category.json');
const course =require('./data/Course.json');

app.get('/', (req, res) => {
  res.send('BD API Runing!')
});

app.get('/course-categories', (req, res) => {
  res.send(categories)
});

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if(id === '08'){
    res.send(course)
  }
  else{
    const category_course =course.filter( c => c.category_id === id);
    res.send(category_course)

  }
})

app.get('/course', (req, res) =>{
  res.send(course);
})

app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourse = course.find(c => c._id === id);
  res.send(selectedCourse)
  // console.log(req.params.id);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})