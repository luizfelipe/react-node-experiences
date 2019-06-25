import React, {Component} from 'react';
import { connect } from 'react-redux';

import CreateButton from './list/CreateButton';
import MenuTab from './list/MenuTab';
import Task from './list/Task';

const mapStatetoProps = (state) => {
    return{ tarefas: state.tarefas };        
};

class List extends Component {

    render () {

        const {tarefas} = this.props;

        return (
            <div>
                <CreateButton />
                <MenuTab tarefas={tarefas} />
                <div className="is-task-list">
                    <div>
                        {tarefas.map(tarefa => (
                            <Task tarefa={tarefa} />
                        ))}
                    </div>
                </div>
            </div>
        );
    };
};

export default connect(mapStatetoProps)(List);