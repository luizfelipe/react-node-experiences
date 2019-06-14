const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Tarefa = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    concluida: {
        type: Boolean,
        defalt: false,
    },
    detalhes: {
        type: String,
    },
    data_criacao: {
        type: Date,
        defalt: Date.now(),
    },
    data_conclusao: {
        type: Date,
    },
    data_lembrete: {
        type: Date,
    },
});

module.exports = mongoose.model('Tarefa', Tarefa);