const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const _ = require('lodash')

let courseId = 7
let courses = [
    {
      id : 1,
      title : 'Python으로 배우는 \'프로그래밍 기초\'',
      language : 'python',
      price : 99000,
      immutable : true
    },
    {
      id : 4,
      title : 'HTML/CSS로 배우는 \'웹 퍼블리싱\'',
      language : 'html/css',
      price : 99000,
      immutable : true
    },
    {
      id : 5,
      title : '\'JavaScript\'로 배우는 \'인터랙티브 웹\'',
      language : 'javascript',
      price : 99000,
      immutable : true
    },
    {
      id : 6,
      title : '테스트용',
      language : 'test',
      price : 990000,
      immutable : false
    },
]

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.get('/courses', (req,res) => {
  res.json(courses)
})

app.get('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  if(Number.isNaN(id)){
    return res.status(400).end()
  }
  const course = courses.filter((course) => {
    return course.id === id
  })[0]
  if(!course) {
    return res.status(404).end()
  }
  res.json(course)
})

app.delete('/courses/:id', (req,res) => {
  const id = parseInt(req.params.id, 10)
  if(Number.isNaN(id)){
    return res.status(400).end()
  }
  _.remove(courses, (course) => {
    return course.id === id && !course.immutable
  }) // immutable이라는 새로운 키값 넣어서 기존에 제공된 3과목인지 검증
  res.status(204).end()
})

app.post('/courses/new-subject', (req, res) => {
  const id = courseId
  const title = req.body.title
  const language = req.body.language
  const price = req.body.price
  if(!title || !language || !price) {
    return res.status(400).end()
  }

  const subject = {id, title, language, price}
  courses.push(subject)
  courseId++
  res.status(201).json(subject)
})

app.put('/courses/:id/edit', (req, res) => {
  const id = parseInt(req.params.id, 10)
  if(Number.isNaN(id)){
    return res.status(400).end()
  }
  let subject = courses.filter((course) => {
    return course.id === id
  })[0]
  // const title = req.body.title
  // const body = req.body.body
  // const price = req.body.price
  // if(!title || !language || !price) {
  //   return res.status(400).end()
  // } // 테스트코드는 fail인데 req, res는 맞음. ???
  subject.title = req.body.title || subject.title
  subject.language = req.body.language || subject.language
  subject.price = req.body.price || subject.price
  res.json(subject)
})

app.listen(3000, function(){
  console.log('Server is listening on port 3000')
})

module.exports = app