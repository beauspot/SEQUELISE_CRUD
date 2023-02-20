const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
const exphbs = require("express-handlebars");
const appRouter = require("./routes/appRoutes");
const _404ErrorRoute = require("./middleware/_404_Error")

const app = express();

app.use(express.json());

app.use("/gigs", appRouter);

app.get("/", (req, res) => res.status(304).redirect("/gigs"));

app.use("*", _404ErrorRoute.get404Response )

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.info(`Express server listening on port ${PORT}`);
});
