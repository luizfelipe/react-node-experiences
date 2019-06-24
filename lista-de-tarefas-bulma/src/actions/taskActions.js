import { ADICIONAR_TAREFA } from './actionTypes';

export function adicionarTarefa(payload) {
    return {
        type: ADICIONAR_TAREFA,
        payload
    };
};