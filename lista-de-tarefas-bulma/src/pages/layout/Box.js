import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Form from './box/Form';
import List from './box/List';

const Box = () => {
    return (
        <div className="box">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={List} />
                    <Route path="/adicionar" component={Form} />
                    <Route path="/alterar:id" component={Form} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Box;