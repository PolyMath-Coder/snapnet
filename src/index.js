const express = require('express');
const { json, urlencoded } = express;
const { PORT } = require('./config/keys');
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res
    .status(200)
    .json({ status: true, message: 'Welcome to Snapnet Assessment...' });
});

app.listen(PORT, () => {
  console.log(`Server now live at port ${PORT}`);
});
