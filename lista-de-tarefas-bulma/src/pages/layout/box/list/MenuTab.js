import React from 'react';

import Tab from './menuTab/Tab';

const MenuTab = ({tarefas}) => {

    const numeroTarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;

    return (
        <div className="tabs is-fullwidth has-text-weight-bold">
            <ul>
                <Tab 
                    text="Abertas" 
                    quantity={tarefas.length - numeroTarefasConcluidas} 
                    className={'is-active'} 
                />
                <Tab
                    text="Concluídas" 
                    quantity={numeroTarefasConcluidas} 
                    className={''}
                />
            </ul>
        </div>
    );
};

export default MenuTab;