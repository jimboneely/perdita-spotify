const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("client/build"));
app.use(routes);

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
