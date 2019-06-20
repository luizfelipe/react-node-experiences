const conexaoLocalDbUrl = 'mongodb://localhost:27017/db_lista-de-tarefas';

const conexaoNuvemDbUrl = 'mongodb+srv://nodeexperiences:dtp_s3cr3t@clustermongodb-nodeexperiences-elhch.mongodb.net/db_lista-de-tarefas';

const conexaoDbUrl = conexaoNuvemDbUrl;

module.exports = {
    mongodbURI: conexaoDbUrl,
}