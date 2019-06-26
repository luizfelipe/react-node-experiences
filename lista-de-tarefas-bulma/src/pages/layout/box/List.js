import React, {Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { buscarTodasTarefas } from '../../../actions/taskActions';

import CreateButton from './list/CreateButton';
import MenuTab from './list/MenuTab';
import Task from './list/Task';

const mapStateToProps = (state) => {
    return { 
        tarefas: state.tarefas,
        filtroConcluidas: state.filtroConcluidas,
    };        
};

const mapDispatchToProps = (dispatch) => {
    return { 
        buscarTodasTarefas: () => dispatch(buscarTodasTarefas()) 
    };        
};

class List extends Component {

    componentDidMount() {
        this.props.buscarTodasTarefas();
    }

    render () {

        const todasTarefas = this.props.tarefas;
        let componenteListaTarefas = '';

        console.log(todasTarefas);
        console.log(this.props.filtroConcluidas);

        let tarefas = todasTarefas.filter(tarefa => tarefa.concluida === this.props.filtroConcluidas);

        console.log(tarefas);

        if (!tarefas.length) {
            componenteListaTarefas = 
                <Fragment>
                    <div className="box">
                        <h1>Nenhuma tarefa {this.props.filtroConcluidas ? 'concluída' : 'aberta'} no momento!</h1>
                    </div>
                </Fragment>
        }
        else {
            componenteListaTarefas = 
                <Fragment>
                    {tarefas.map(tarefa => (
                        <Task tarefa={tarefa} />
                    ))}
                </Fragment>
        }
        
        return (
            <div>
                <CreateButton />
                <MenuTab />
                <div className="is-task-list">
                    <div>
                        {componenteListaTarefas}
                    </div>
                </div>
            </div>
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);