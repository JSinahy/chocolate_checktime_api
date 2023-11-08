const express = require("express"); 
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const v1Router = require("./v1/routes");
const v1Register = require("./v1/routes/register");

const app = express(); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
});

app.use("/api/v1", v1Router);
app.use("/api/v1/register", v1Register);

app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500).send({"message": "Error"});
  });

app.listen(PORT, () => {
    console.log("Server is started: 4000")
});

