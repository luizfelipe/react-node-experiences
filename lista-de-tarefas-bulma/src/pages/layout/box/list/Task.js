import React, {Component} from 'react';

import TextInput from '../../../../components/TextInput';
import DoneButton from './task/DoneButton';
import EditButton from './task/EditButton';

class Task extends Component {

    constructor(props) {
        super();
        this.state = {
            tarefa: props.tarefa
        }
    }

    render () {

        const tarefa = this.state.tarefa;

        return (
            <div className="box">
                <div className="columns is-mobile">

                    <div className="column is-1 is-centered">
                        <DoneButton />
                    </div>
                    <div className="column is-9">
                        <TextInput name="titulo" className="is-shadowless" value={tarefa.titulo} /> 
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