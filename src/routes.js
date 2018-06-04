import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './App';
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import Search from './components/Search/Search';
import About from './components/About/About';
import Share from './components/Share/Share';
import User from './components/User/User';
import RegistrationForm from './components/User/Register/RegistrationForm';
import LoginForm from './components/User/Login/NormalLoginForm';
import ImportContent from './components/Home/ImportFile/ImportFile';


const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/add" component={Add}/>
        <Route path="/search" component={Search}/>
        <Route path="/importText" component={ImportContent}/>
        <Route path="/about" component={About}/>
        <Route path="/share" component={Share}/>

        <Route path="/user" component={User} />
        <Route path="/user/register" component={RegistrationForm} />
        <Route path="/user/login" component={LoginForm} />
    </Route>
);

export default routes;