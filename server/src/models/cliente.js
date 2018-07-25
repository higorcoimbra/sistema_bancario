const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	nome: {
        type: String,
        required: true,
        trim: true
    },
    idade: {
        type: Number,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
        trim: true
    },
    nconta:{
        type: String,
        required: true,
        unique: true
    } 
});

module.exports = mongoose.model('Cliente', schema);