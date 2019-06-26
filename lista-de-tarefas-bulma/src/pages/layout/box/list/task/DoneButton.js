import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { alterarTarefa } from '../../../../../actions/taskActions';

const mapDispatchToProps = (dispatch) => {
    return {
        alterarTarefa: tarefa => dispatch(alterarTarefa(tarefa))
    }
};

const DoneButton = ({ tarefa, alterarTarefa }) => {

    const alterarAtributoConluido = (event, tarefa) => {
        event.preventDefault();
        tarefa.concluida = !tarefa.concluida;
        alterarTarefa(tarefa);
    }

    return (
        <Fragment>
            <span className="icon is-primary">
                <a onClick={(e) => alterarAtributoConluido(e, tarefa)}>
                    <FontAwesomeIcon icon={
                        ['far', tarefa.concluida ? 'check-circle' : 'circle']} 
                    />
                </a>
            </span>
        </Fragment>
    );
};

export default connect(null, mapDispatchToProps)(DoneButton);