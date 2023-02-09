const express = require('express');
const { json, urlencoded } = express;
const { PORT } = require('./config/keys');
const logger = require('./helpers/logger');
const app = express();
const { connectToDatabase } = require('./config/mongoose');
const { errorConverter, errorHandler } = require('./helpers/asyncError');

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api', require('./routes/routes'));
app.get('/', (req, res) => {
  res
    .status(200)
    .json({ status: true, message: 'Welcome to Snapnet Assessment...' });
});

app.use(errorConverter);
app.use(errorHandler);

connectToDatabase();

app.listen(PORT, () => {
  logger.info(`Server now live at port ${PORT}`);
});
