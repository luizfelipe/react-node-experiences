import React, {Component} from 'react';

import CreateButton from './list/CreateButton';
import MenuTab from './list/MenuTab';
import Task from './list/Task';

class List extends Component {
    render () {
        return (
            <div>
                <CreateButton />
                <MenuTab />
                <div className="is-task-list">
                    <div>
                        <Task />
                    </div>
                </div>
            </div>
        );
    };
};

export default List;