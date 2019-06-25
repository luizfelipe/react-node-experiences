import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { adicionarTarefa } from '../../../actions/taskActions';
import uuidv1 from 'uuid';

import Inputs from './form/Inputs';
import Buttons from './form/Buttons';

const mapDispatchToProps = dispatch => {
    return {
        adicionarTarefa: tarefa => dispatch(adicionarTarefa(tarefa))
    }
};

class Form extends Component {

    constructor() {
        super();

        this.state = this.emptyState;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    emptyState() {
        return {
            _id: '',
            titulo: '',
            detalhes: '',
            data_lembrete: '',
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.state._id = uuidv1();
        this.props.adicionarTarefa(this.state);
        this.setState(this.emptyState);
    }

    handleChange(event) {
        this.setState({
            [event.target.id] : event.target.value
        });
    }

    render() {
        return (
            <Fragment>
                <h1 className="title has-text-grey-dark">
                    Adicionar Tarefa
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <Inputs state={this.state} onChange={this.handleChange} />
                    <Buttons />
                </form>
            </Fragment>
        );
    };
};

export default connect(null, mapDispatchToProps)(Form);