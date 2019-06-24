import { ADICIONAR_TAREFA } from '../actions/actionTypes';

const estadoInicial = {
    tarefas: [],
};

function rootReducer(state = estadoInicial, action) {
    if (action.type == ADICIONAR_TAREFA) {
        return {
            ...state,
            tarefas: [...state.tarefas, action.payload]
        }
    }
    
    return state;
};

export default rootReducer;