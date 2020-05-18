import React from 'react';

import {HashRouter, Route, Switch } from 'react-router-dom';

import "./App.css";
import NavbarPage from './components/header';
import Home from './components/home';
import About from './components/contact';
import Store from './components/store';

// import { Container } from 'react-bootstrap';



class App extends React.Component {
    

    render(){
      
      
      return(
        <HashRouter>
        <div>
        <NavbarPage />
        
        
        
          <Switch>
          
          <Route path="/about" component={About}/>
          <Route path="/store" component={Store}/>
          <Route path="/" component={Home}/>
         
          </Switch>
           
         
        </div>
        </HashRouter>
      );
    }




}



export default App;