import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreateButton = () => {
    return (
        <div className="field">
            <Link to="/adicionar">
                <button type="submit" className="button is-link is-medium is-fullwidth">
                    <span className='icon'>
                        <FontAwesomeIcon icon={['fas', 'plus']} />
                    </span>
                    <span>
                        Adicionar Nova Tarefa
                    </span>
                </button>
            </Link>
        </div>
    );
};

export default CreateButton;