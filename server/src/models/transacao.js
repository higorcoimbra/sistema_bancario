const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nconta:{
        type: String,
        required: true,
        unique: true
    }, 
	operacao: {
        type: String,
        required: true,
    },
    saldo_ant: {
        type: Number,
        required: true,
    },
    saldo_pos: {
        type: Number,
        required: true,
    },
    data: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('Transacao', schema);