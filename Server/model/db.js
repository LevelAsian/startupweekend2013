
var mongoose = require('mongoose')
    , SALT_WORK_FACTOR = 10;


mongoose.connect('mongodb://localhost/penis');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('Connected to database');
});

// User Schema
var userSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true}
})

module.exports = db.model('users', userSchema);