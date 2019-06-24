import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Buttons = ({ _id }) => {

    let removerTarefaButton = 
        <button type="button" className="button is-danger">
            Remover Tarefa
        </button>

    return (
        <Fragment>
            <div className="field">
                <div className="level">
                    <div className="level-left">
                        {_id ? removerTarefaButton : ''}
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <Link to="/" className="control">
                                <button type="button" className="button is-text">
                                    Cancelar
                                </button>
                            </Link>
                        </div>
                        <div className="level-item">
                            <button type="submit" className="button is-link">
                                Salvar {_id ? ' Alterações' : ' Nova Tarefa'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

};

export default Buttons;