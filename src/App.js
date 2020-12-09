import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name : 'Anu', age:29},
      {name : 'Himanshu', age:31}
     ],
     otherstate: 'Some other state'
    //name: []
  }

  swithchHandler = () =>{
   console.log("was clicked");
   this.setState({
     persons: [
       {name: "Shubham Naik", age:this.state.persons[0].age+1},
       {name: "Himanshu", age:this.state.persons[1].age+1}
     ]
   }
   )
  }
render() {
  return (
    <div className="App">
    <h1>
    I am Shubham Naik  
    </h1>
    <button onClick={this.swithchHandler}>Click to change</button>
    <Person name="Shubh" age="24"> I love singing</Person>
    <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
    <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />    
    </div>
    
  );
}
}

export default App;