import React from 'react';
import {Container} from 'react-bootstrap';
import Disp from './card';

import Tablex from './table';


import { fetchData} from '../api/one';


class Home extends React.Component {
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
            <Container className="disp"><Disp data={data} /></Container> 
        
            <Tablex />
        </div>

    );
}
}

export default Home;