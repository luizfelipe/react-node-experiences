import React, { Fragment } from 'react';

import TextInput from '../../../../components/TextInput';

const Inputs = ({state, onChange}) => {
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
                        value={state.titulo}
                        className="is-medium"
                        placeholder="Título da Tarefa"
                        autoFocus={true}
                        onChange={onChange}
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
                        value={state.detalhes}
                        className="textarea is-shadowless"
                        onChange={onChange}
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
                        value={state.data_lembrete}
                        id="data_lembrete"
                        className="input fit-content is-shadowless"
                        onChange={onChange}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Inputs;