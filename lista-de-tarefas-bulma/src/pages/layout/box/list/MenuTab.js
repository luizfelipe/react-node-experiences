import React from 'react';
import { connect } from 'react-redux';

import { alterarFiltroTarefasConcluidas } from '../../../../actions/taskActions';

import Tab from './menuTab/Tab';

const mapStateToProps = (state) => {
    return { 
        tarefas: state.tarefas,
        filtroConcluidas: state.filtroConcluidas,
    };        
};

const mapDispatchToProps = (dispatch) => {
    return { 
        alterarFiltroTarefasConcluidas: (ativo) => dispatch(alterarFiltroTarefasConcluidas(ativo)) 
    };        
};

const MenuTab = ({ tarefas, filtroConcluidas, alterarFiltroTarefasConcluidas }) => {

    const numeroTarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;

    return (
        <div className="tabs is-fullwidth has-text-weight-bold">
            <ul>
                <Tab 
                    text="Abertas" 
                    quantity={tarefas.length - numeroTarefasConcluidas} 
                    className={filtroConcluidas ? '' : 'is-active'} 
                    onClick={() => alterarFiltroTarefasConcluidas(false)}
                />
                <Tab
                    text="Concluídas" 
                    quantity={numeroTarefasConcluidas} 
                    className={filtroConcluidas ? 'is-active' : ''}
                    onClick={() => alterarFiltroTarefasConcluidas(true)}
                />
            </ul>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuTab);