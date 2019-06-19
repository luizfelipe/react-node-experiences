import React, {Fragment} from 'React';

import { FontAwesomeIcon } from '@fonteawesome/react-fontawesome'

const DoneButton = () => {
    return (
        <Fragment>
            <span className="icon is-primary">
                <a>
                    <FontAwesomeIcon icon={['far', 'circle']} />
                </a>
            </span>
        </Fragment>
    );
};

export default DoneButton;