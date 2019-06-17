const Tarefa = require('../models/Tarefa');

let getMensagemErro = function(operacao) {
    return 'Ocorreu um erro ao ' + operacao + '.';
};

let montarResposta = function(err, res, operacao, objeto) {
    if(err) {
        res.status(400).send(getMensagemErro(operacao), err);
    }
    else {
        res.status(200).json(objeto);
    }
};

module.exports = {
    adicionar: function(req, res) {
        let tarefa = new Tarefa(req.body);

        tarefa.save()
            .then(tarefa => res.status(200).json(tarefa))
            .catch(err => {
                res.status(400).send(getMensagemErro('adicionar tarefa'), err)
            });
    },

    buscarTodas: function(req, res) {
        Tarefa.find(function(err, tarefas) {
            montarResposta(err, res, 'buscar tarefas', tarefas);
        });
    },

    buscar: function(req, res) {
        Tarefa.findById(req.params.id, function(err, tarefa) {
            montarResposta(err, res, 'buscar tarefa ' + req.params.id, tarefa);
        });
    },

    remover: function(req, res) {
        Tarefa.findByIdAndRemove(req.params.id, function(err, tarefa) {
            montarResposta(err, res, 'remover tarefa ' + req.params.id, tarefa);
        });
    },

    alterar: function(req, res) {
        Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, tarefa) {
            montarResposta(err, res, 'atualizar tarefa ' + req.params.id, tarefa);
        });
    },
};