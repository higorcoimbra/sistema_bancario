const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	nconta: {
        type: String,
        required: true,
        unique: true
    },
    saldo: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Conta', schema);