import React, {Component} from 'react';

class List extends Component {
    render () {
        return (
            <div className="is-task-list">
                <div className="box">
                    <h1>Não há tarefas adicionadas.</h1>
                </div>
            </div>
        );
    };
};

export default List;