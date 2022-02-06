import './App.css';
import React, { Component } from 'react';
import Movies from './component/movies';
import Navbar from './component/navbar';
import Counters from './component/counters';

class App extends Component {

    state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };
  
    handleIncreament = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({ counters });
    };
  
    handleDelete = (counterId) => {
      const counters = this.state.counters.filter((c) => c.id != counterId);
      this.setState({ counters });
    };
  
    handleReset = () => {
      const counters = this.state.counters.map((c) => {
        c.value = 0;
        return c;
      });
      this.setState({ counters });
    };
    render(){
  return (
    <React.Fragment>
    <Navbar/>
    <main className='container'>
    <Counters 
    counters= {this.state.counters} 
    onReset= {this.handleReset} 
    onDelete={this.handleDelete} 
    onIncreament={this.handleIncreament}
    />    
    </main>
    </React.Fragment>
  );
  }
}

export default App;
