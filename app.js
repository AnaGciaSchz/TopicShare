require('dotenv').config();
const express = require('express');
const topicsRouter = require('./src/routes/routes');
const cors = require('cors');

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/', topicsRouter);

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = server;
