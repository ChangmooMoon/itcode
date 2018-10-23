const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const _ = require('lodash')

const course = require('./api/course')

if(process.env.NODE_ENV === 'test'){
  app.use(morgan('dev'))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use('/courses', course)

module.exports = app