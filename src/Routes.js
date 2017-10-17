import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UserProfilePage from "./components/userprofile/UserProfilePage";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import Register from "./components/login/Register";


export const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/userprofile' component={UserProfilePage}/>
        <Route path='/logIn' component={LoginPage}/>
        <Route path='/register' component={LoginPage}/>

    </Switch>
);

