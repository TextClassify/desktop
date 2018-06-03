import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import './index.css';
import App from './App';
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import Search from './components/Search/Search';
import registerServiceWorker from './registerServiceWorker';
import RoutesApp from './routes';

ReactDOM.render((
    <Router history={browserHistory}>
        {RoutesApp}
    </Router>
), document.getElementById('root'));
registerServiceWorker();
