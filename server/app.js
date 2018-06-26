const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const fetch = require('node-fetch')

const app = express()

const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN || 'foo'
const PROJECT_ID = process.env.PROJECT_ID || 'bar'

app.engine(
  '.hbs',
  exphbs({
    extname: '.hbs'
  })
)

app.set('view engine', '.hbs')

app.use(express.static(path.resolve(__dirname, '../', 'build')))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/pull', (req, res) => {
  fetch('https://poeditor.com/api/webhooks/github?api_token=' + GITHUB_API_TOKEN + '&id_project=' + PROJECT_ID + '&language=en&operation=export_terms_and_translations=1')
    .then(() => {
      res.status(200).send()
    })
    .catch(() => {
      res.status(500).send()
    })
})

module.exports = app
