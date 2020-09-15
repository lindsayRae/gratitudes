const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3001

app.use(express.json())

// Test API
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})