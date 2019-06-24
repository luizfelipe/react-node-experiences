import React, { Fragment } from 'react';

import TextInput from '../../../../components/TextInput';

const Inputs = () => {
    return (
        <Fragment>
            <div className="field">
                <label className="label">
                    Título
                        <span className="has-text-weight-light">
                            *
                        </span>
                </label>
                <div className="control is-expanded is-task-title">
                    <TextInput
                        id="titulo"
                        className="is-medium"
                        placeholder="Título da Tarefa"
                        autoFocus={true}
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">
                    Detalhes
                        <span className="has-text-weight-light">
                            - Opcional
                        </span>
                </label>
                <div className="control">
                    <textarea 
                        id="detalhes"
                        className="textarea is-shadowless"
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">
                    Lembrar-me em:
                        <span className="has-text-weight-light">
                            - Opcional
                        </span>
                </label>
                <div className="control">
                    <input 
                        type="date"
                        id="data_lembrete"
                        className="input fit-content is-shadowless"
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Inputs;