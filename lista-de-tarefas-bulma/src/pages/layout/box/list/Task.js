import React, {Component} from 'React';

import TextInput from '../../../../components/TextInput';
import DoneButton from './Task/DoneButton';
import EditButton from './Task/EditButton';

class Task extends Component {
    render () {
        return (
            <div className="box">
                <div className="column is-mobile">

                    <div className="column is-1 is-centered">
                        <DoneButton />
                    </div>
                    <div className="column is-9">
                        <TextInput name={titulo} className="is-shadowless" /> 
                    </div>
                    <div  className="column is-2 is-centered">
                        <EditButton />
                    </div>

                </div>
            </div>
        );
    };
};