import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import './style/theme.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faSyncAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

// Components
import Layout from './pages/Layout';

import store from './store';
import { adicionarTarefa } from './actions/taskActions';

window.store = store;
window.adicionarTarefa = adicionarTarefa;

library.add(faCircle, faCheckCircle, faSyncAlt, faPlus);

render(
    <Provider store={store}>
        <Layout />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
