const express = require('express');
const TarefaRouter = express.Router;
const tarefaController = require('../controllers/TarefaController');

TarefaRouter.route('/')
    .get(tarefaController.buscarTodas)
    .post(tarefaController.adicionar);    

TarefaRouter.route('/:id')
    .get(tarefaController.buscar)
    .delete(tarefaController.remover)
    .put(tarefaController.atualizar);

module.exports = TarefaRouter;

