const express = require('express');
const path = require('path');

const app = express();
const servingPath = path.join(__dirname, '..', 'client', 'dist')

app.use(express.static(servingPath));

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
})