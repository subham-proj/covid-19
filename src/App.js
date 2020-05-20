import React from 'react';

import {HashRouter, Route, Switch } from 'react-router-dom';

import "./App.css";
import NavbarPage from './components/header';
import Home from './components/home';
import Contact from './components/contact';


import About from './components/about';
// import { Container } from 'react-bootstrap';



class App extends React.Component {
    

    render(){
      
      
      return(
        <HashRouter>
        <section id="home">
        <NavbarPage />
        {/* <About /> */}
      
        
          <Switch>
          
          <Route path="/contact" component={Contact}/>
          
          <Route path="/" component={Home}/>
         
          </Switch>


           
         
        </section>
        </HashRouter>
      );
    }




}



export default App;