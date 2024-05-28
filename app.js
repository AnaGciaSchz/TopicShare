require('dotenv').config();
const express = require('express');
const topicsRouter = require('./src/routes/routes');

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(express.json());
app.use('/', topicsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
