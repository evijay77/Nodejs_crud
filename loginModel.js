var mongoose = require('mongoose');
var loginSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


// Export login model
var Login = module.exports = mongoose.model('login', loginSchema);
module.exports.get = function (callback, limit) {
    Login.find(callback).limit(limit);
}