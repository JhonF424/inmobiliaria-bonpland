const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index");
const pkg = require("../package.json");
const cors = require("cors");

require("./db");

const app = express();
app.set("pkg", pkg);
app.name = "API";

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }))
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res) => {    
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use("/api", routes);
app.get("/", (req, res, next) => {
    return res.status(200).json({
        author: app.get("pkg").author,
        description: app.get("pkg").description,
        version: app.get("pkg").version
    });
});

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = app;