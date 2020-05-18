import React, { Component } from 'react';
import {Table,Container} from 'react-bootstrap';
import "../App.css";
import axios from 'axios';
import Loading from './loading';
 
const API = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewisen';
const DEFAULT_QUERY = 'redux';
 
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }
 
  componentDidMount() {
    this.setState({ isLoading: true });
 
    axios.get(API + DEFAULT_QUERY)
      .then(result => this.setState({
        hits: result.data.data.statewise,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }
 
render() {
    const { hits, isLoading, error } = this.state;
 
    if (error) {
      return <p>{error.message}</p>;
    }
 
    if (isLoading) {
      return <Loading/>;
    }
 
    return (
        
        <Container>
    
        <Table striped bordered hover className="table-main">
          
        <thead >
          <tr>
            
            <th >State</th>
            <th style={{color:"red"}}>Confirmed</th>
            <th style={{color:"green"}}>Recovered</th>
            <th style={{color:"grey"}}>Deaths</th>
          </tr>
        </thead>
        <tbody >
        {hits.map(hit =>
            <tr>
                <td>{hit.state}</td>
                <td>{hit.confirmed}</td>
                <td>{hit.recovered}</td>
                <td>{hit.deaths}</td>
            </tr>
          )}
        </tbody>
        
        
      </Table>

      </Container>
      
     
      
    );
  }
}
 
export default App;




// {hits.map(hit =>





