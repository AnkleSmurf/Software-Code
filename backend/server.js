const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config({ path: 'config.env' });
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connected')
})

const exercisesRouter = require('./routes/activity');
const usersRouter = require('./routes/users');
const fileRouter = require('./routes/files')

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/files', fileRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.on("error", error => {
    throw new Error(`[Server]::ERROR:${error.message}`);
});