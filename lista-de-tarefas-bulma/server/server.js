const express = require('express');
const bodyParser = require('body-parser');

const TarefaRoutes = require('./routes/TarefaRouter');

const app = express();

app.use(bodyParser.json());
app.use('api/tarefas/', TarefaRoutes);

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log('Servidor escutando na porta ' + port);
});