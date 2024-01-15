require("dotenv").config(); // Allows Environment Variables
require("express-async-errors"); // Async error handler

// extra security
const cors = require("cors");

// Create express app
const express = require("express");
const app = express();

// Error handler
const errorHandlerMidlleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

// Routers
const questionRouter = require("./routes/question");
const answerRouter = require("./routes/answer");

// DB Connenction
const connectDB = require("./db/connect");

// Middleware
app.use(express.json()); // Parsing json
app.use(cors());

// Routes
app.use("/api/v1/question", questionRouter);
app.use("/api/v1/answer", answerRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMidlleware);

const port = process.env.QA_APP_PORT;

// Start Server
const start = async () => {
  try {
    await connectDB(); // Connecting to database

    app.listen(port, () => console.log(`Server listening on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
