const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
// 1 - MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json()); // express, request bodysini json olarak işlemediğininden middleware kullanmamız gerek.
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log("Hello, it's middleware!");
  next(); // we must call that function
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString(); // req için requstTime propterysi tanımladık
  next();
});

// 3 - ROUTES

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
