import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
     this.state = { results:[
     
     ]
     
     };
   }
  
 
 
    
    componentDidMount() {
      const data = new FormData();
      fetch('http://localhost:4000/try', {
    method: 'POST',
    body: data
  })
  .then((response) => {
    console.log(response);
    response.json().then((results)=>this.setState({ results:results }))
  } )
  .catch(
    error => null // Handle the error response object
  
  )
  
      
    }
    render() {
      return (
        <div className="Users">
        <h1> results of extraction </h1>
        <div> {this.state.results.first}</div>
        <div>{this.state.results.others}</div>
      </div>
      );
    }
  }
  
  export default App;
  
    
  
  
  
    
 


