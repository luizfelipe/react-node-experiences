import { ADICIONAR_TAREFA, BUSCAR_TODAS_TAREFAS, ALTERAR_TAREFA, ALTERAR_FILTRO_TAREFAS_CONCLUIDAS } from './actionTypes';
import axios from 'axios';

const apiUrl = 'http://localhost:3001/api/tarefas';

export function buscarTodasTarefas() {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(res => {
                dispatch(buscarTodasTarefasSucesso(res.data))
            })
            .catch(err => {
                throw (err);
            })
    };
};

export function buscarTodasTarefasSucesso(tarefas) {
    return {
        type: BUSCAR_TODAS_TAREFAS,
        payload: {
            tarefas
        }
    };
};

export function adicionarTarefa(payload) {
    return {
        type: ADICIONAR_TAREFA,
        payload
    };
};

export function alterarTarefa({ _id, titulo, concluida, detalhes, data_conclusao, data_lembrete }) {
    return (dispatch) => {
        return axios.put(`${apiUrl}/${_id}`, { _id, titulo, concluida, detalhes, data_conclusao, data_lembrete })
            .then(res => {
                dispatch(alterarTarefaSucesso(res.data));
            })
            .catch(err => {
                throw(err);
            });
    };
};

export function alterarTarefaSucesso(tarefa) {
    return {
        type: ALTERAR_TAREFA,
        payload: {
            _id: tarefa._id, 
            titulo: tarefa.titulo, 
            concluida: tarefa.concluida, 
            detalhes: tarefa.detalhes, 
            data_conclusao: tarefa.data_conclusao, 
            data_lembrete: tarefa.data_lembrete,
        }
    }
};

export function alterarFiltroTarefasConcluidas(ativo) {
    return {
        type: ALTERAR_FILTRO_TAREFAS_CONCLUIDAS,
        payload: {
            ativo
        }
    }
}