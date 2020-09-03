const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-task';

mongoose.connect(URI)

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected')
})


module.exports = mongoose;    