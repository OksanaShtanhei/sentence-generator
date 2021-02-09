

import React from 'react';
import './App.css';
import {WordsData} from './WordsData';

class App extends React.Component{
 constructor(props){
   super(props)
   this.state = {
     count: 0
   }
    this.update = (e) => {
      this.setState({count: +e.target.value})
     }
  }

 render(){
  return (
    <div className="main-container">
      <h1>Sentence generator</h1>
      <form className="form-container">
        <input type="number" id="num" defaultValue={this.state.count} onChange={this.update} />
  
      </form>
          <WordsData count={this.state.count} />
    </div>
  );
 }
}

export default App;
