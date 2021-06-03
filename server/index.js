const express = require('express');
const path = require('path');
require('dotenv').config();
const gitToken = process.env.GIT_API_TOKEN;

const app = express();
const servingPath = path.join(__dirname, '..', 'client', 'dist')

app.use(express.static(servingPath));

console.log(gitToken);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
})