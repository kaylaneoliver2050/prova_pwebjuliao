const express = require("express");
const port = 3333;
const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("src/routes/index");
const app = express();

require("src/databases");

app.listen(port, () => console.log("abrir servidor em : http://localhost:3333"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(routes);