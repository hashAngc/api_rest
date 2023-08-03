
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dbConnect = require('./config/mongo');
const port = process.env.PORT || 3000;
app.use(cors())
app.use("/", require("./routers"));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
dbConnect();