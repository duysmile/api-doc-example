const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('./dist'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve('./', 'dist/index.html'));
});

app.listen(3000, () => {
  console.log('Server started at port 3000');
});
