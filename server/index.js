const app = require('./app')

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Paratii translations ui server is listening on port ${PORT}!`)
})
