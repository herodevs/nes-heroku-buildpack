console.log('Hello NES!', process.version)

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/*', (req, res) => {
  res.send('Hello NES: ' + process.version)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})