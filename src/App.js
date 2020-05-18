import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import "./App.css";
import NavbarPage from './components/header';
import Home from './components/home';
import About from './components/about';
import { Container } from 'react-bootstrap';



class App extends React.Component {
    

    render(){
      
      
      return(
        <HashRouter>
        <div>
        <NavbarPage />
        
       
        <TransitionGroup>
         <CSSTransition timeout={500} classNames="item">
          <Switch>
               
          
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
         
          </Switch>
            </CSSTransition>
            </TransitionGroup>
         
        </div>
        </HashRouter>
      );
    }




}



export default App;