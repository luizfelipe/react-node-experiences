import React, {Component, Fragment} from 'react';

import Inputs from './form/Inputs';
import Buttons from './form/Buttons';

class Form extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="title has-text-grey-dark">
                    Adicionar Tarefa
                </h1>
                <form>
                    <Inputs />
                    <Buttons />
                </form>
            </Fragment>
        );
    };
};

export default Form;