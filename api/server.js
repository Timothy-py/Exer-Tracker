const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// require routes
const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

// setup mongodb connection: connecting to mongo atlas
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB Database connection established successfully');
})


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});

module.exports = app;