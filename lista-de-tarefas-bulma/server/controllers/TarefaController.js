const Tarefa = require('../models/Tarefa');

let getMensagemErro = function(operacao) {
    return 'Ocorreu um erro ao ' + operacao + '.';
};

let montarResposta = function(err, res, operacao, objeto) {
    if(err) {
        res.status(400).send(getMensagemErro(operacao), err);
    }
    else {
        res.status(200).json(obj);
    }
};

module.exports = {
    adicionar: function(req, res) {
        let tarefa = new Tarefa(req.body);

        tarefa.save()
            .then(tarefa => res.status(200).json(tarefa))
            .cath(err => {
                res.status(400).send(getMensagemErro('adicionar tarefa'), err)
            });
    },

    buscarTodas: function(req, res) {
        Tarefa.find(function(err, tarefas) {
            montarResposta(err, res, 'buscar tarefas', tarefas);
        });
    },

    buscar: function(req, res) {
        Tarefa.findById(req.parans.id, function(err, tarefa) {
            montarResposta(err, res, 'buscar tarefa ' + req.parans.id, tarefa);
        });
    },

    remover: function(req, res) {
        Tarefa.findByIdAndRemove(req.parans.id, function(err) {
            montarResposta(err, res, 'remover tarefa ' + req.parans.id, req.parans.id);
        });
    },

    atualizar: function(req, res) {
        Tarefa.findByIdAndUpdate(req.parans.id, req.body, { new: true }, function(err, task) {
            montarResposta(err, res, 'atualizar tarefa ' + req.parans.id, tarefa);
        });
    },
};