const conexaoDB = {
    host: 'localhost',
    porta: '27017',
    base: 'db_lista-de-tarefas',
}

module.exports = {
    mongodbURI: 'mongodb://' + conexaoDB.host + ':' + conexaoDB.porta + '/' + conexaoDB.base,
}