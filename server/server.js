const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./router/api.js');

const PORT = 3000;

// Parsing request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Statically serve everything from the build folder (so our bundle)
app.use('/build', express.static('build'));

// Use api router handler
app.use('/api', apiRouter);

// Serve index.html on route '/'
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));

// Error for if someone tries to go to a page that doesn't exist
app.use((req, res) => {
  res.sendStatus(404);
});

// Global error handler for if there is a middleware/api error
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: {err: "An error occurred."}
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

// Begin listening on port number PORT
app.listen(PORT, () => console.log('The server is running on CatSnake-3000'));