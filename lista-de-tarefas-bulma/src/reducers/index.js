import { ADICIONAR_TAREFA, BUSCAR_TODAS_TAREFAS, ALTERAR_TAREFA, ALTERAR_FILTRO_TAREFAS_CONCLUIDAS } from '../actions/actionTypes';

const estadoInicial = {
    tarefas: [],
    filtroConcluidas: false
};

function rootReducer(state = estadoInicial, action) {
    if (action.type == BUSCAR_TODAS_TAREFAS) {
        return {
            ...state,
            tarefas: [...action.payload.tarefas]
        }
    }
    
    if (action.type == ADICIONAR_TAREFA) {
        return {
            ...state,
            tarefas: [...state.tarefas, action.payload]
        }
    }
    
    if (action.type == ALTERAR_TAREFA) {
        const tarefasAlteradas = state.tarefas.map( tarefa => {
            if (tarefa._id === action.payload._id) {
                return {...tarefa, ...action.payload}
            }
            return tarefa;
        });

        return {
            ...state,
            tarefas: [...tarefasAlteradas],
        }
    }

    if (action.type == ALTERAR_FILTRO_TAREFAS_CONCLUIDAS) {
        return {
            ...state,
            filtroConcluidas: action.payload.ativo
        }
    }

    return state;
};

export default rootReducer;