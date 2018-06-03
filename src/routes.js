import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './App';
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import Search from './components/Search/Search';
import About from './components/About/About';
import NormalLoginForm from './components/Home/Login/NormalLoginForm';
import RegistrationForm from './components/Home/Register/RegistrationForm';
import ImportContent from './components/Home/ImportFile/ImportFile';


const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/add" component={Add}/>
        <Route path="/search" component={Search}/>
        <Route path="/NormalLoginForm" component={NormalLoginForm}/>
        <Route path="/RegisterForm" component={RegistrationForm} />
        <Route path="/importText" component={ImportContent}/>
        <Route path="/about" component={About}/>
    </Route>
);

export default routes;