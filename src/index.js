import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import routesApp from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        {routesApp}
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
