const express = require("express");
const logger = require("morgan");
require("dotenv").config();

const appRouter = require("./routes/appRoutes");
const _404ErrorRoute = require("./middleware/_404_Error");
const { sequelize } = require("./models");

const app = express();

app.use(express.json());
app.use(logger("dev"));

app.use("/gigs", appRouter);

app.get("/", (req, res) => res.status(304).redirect("/gigs"));

app.use("*", _404ErrorRoute.get404Response);

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    app.listen(PORT, () => {
      console.info(`Express server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error({ msg: error.message });
  }
};

startServer();
