import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './App';
import Home from './components/Home/Home';
import Add from './components/Add/Add'
import Search from './components/Search/Search'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/add" component={Add}/>
        <Route path="/search" component={Search}/>
    </Route>
);

export default routes;