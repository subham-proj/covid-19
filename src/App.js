import React from 'react';
import "./App.css";
import NavbarPage from './components/header';
import Disp from './components/card';
// import Store from './components/store';
// import About from './components/about';
import Tablex from './components/table';


import { fetchData} from './api/one';
import { Container } from 'react-bootstrap';



class App extends React.Component {
    state ={
      data: [],
      
    }
    async componentDidMount(){
      const fetchedData = await fetchData();

      this.setState({data:fetchedData})
     
    }
   

    render(){
      const { data } = this.state;
      
      return(
        <div>
        <NavbarPage />
        
      
        <Container className="disp"><Disp data={data} /></Container>

        <Tablex />
        

         {/* <Store /> */}
        {/* <About />  */}
        </div>
      );
    }




}



export default App;