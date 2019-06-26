import React, {Component} from 'react';

import TextInput from '../../../../components/TextInput';
import DoneButton from './task/DoneButton';
import EditButton from './task/EditButton';

class Task extends Component {

    constructor() {
        super();

        this.state = {
            titulo: '',
        };
    }

    componentDidMount() {
        const { tarefa } = this.props;

        if (tarefa) {
            this.setState(tarefa);
        }
    }

    render () {

        const { tarefa } = this.props;

        return (
            <div className="box" key={tarefa._id}>
                <div className="columns is-mobile">

                    <div className="column is-1 is-centered">
                        <DoneButton tarefa={tarefa} />
                    </div>
                    <div className="column is-9">
                        <TextInput id={tarefa._id} name="titulo" value={tarefa.titulo} className="is-shadowless" /> 
                    </div>
                    <div  className="column is-2 is-centered">
                        <EditButton _id={tarefa._id} />
                    </div>

                </div>
            </div>
        );
    };
};

export default Task;