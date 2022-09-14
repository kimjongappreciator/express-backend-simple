require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 9000;
const routes = require('./routes/chores')

app.use(express.json());
app.use("/api",routes);


mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('success'))
.catch((error) => console.log(error))


// routes
app.get("/",(req, res) => {
    res.send('Express test')
})



app.listen(PORT,() => console.log('server listening on port', PORT));