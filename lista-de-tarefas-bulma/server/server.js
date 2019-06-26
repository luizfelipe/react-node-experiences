const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const config = require('./config/keys.config.js')

const TarefaRoutes = require('./routes/TarefaRouter');

const cors = require('cors');

const app = express();

/* { useNewUrlParser: true } To prevent MongoDb DepreciationWarning */
mongoose.connect(config.mongodbURI, { useNewUrlParser: true })
    .then(() => console.log('Base de Dados conectada!'))
    .catch((err) => console.log('Erro na conexão com a basse de dados', err));

/* To prevent MongoDb DepreciationWarning */
mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(cors());
app.use('/api/tarefas', TarefaRoutes);

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log('Servidor escutando na porta ' + port);
});