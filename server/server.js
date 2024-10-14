const express = require('express');
const app = express();
// body-parser is show data in json format in postman
const bodyParser = require('body-parser');
// morgan is show the log in terminal someone do the request frontend to backend
const morgan = require('morgan');
// cors is use for cross origin request in frontend to backend *** if backend and frontend are different domain
const cors = require('cors');

// import the routes
const { readdirSync } = require('fs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());


readdirSync('./routers').map((r) => app.use('/api', require('./routers/' + r)));


app.listen(4900, () => {
    console.log('Server is running on http://localhost:4900');
});