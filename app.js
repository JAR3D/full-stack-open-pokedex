const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// dummy endpoint in the app that makes it possible to do some code changes
// and to ensure that the deployed version has really changed
app.get('/version', (req, res) => {
  res.send('1')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
