const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); 
const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use(authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Personal Budget Tracker App!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
