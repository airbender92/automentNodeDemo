const express = require('express');

const app = express();

app.use(express.static('./'));

app.get('/', (req, res) => {
  res.send('sssss')
})

app.listen(8080, () => {
  console.log('Listening on localhost:8080')
})