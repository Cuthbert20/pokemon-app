import React, {Component} from 'react';
import './App.css';
import Header from "./components/heaader"
import Finder from './components/finder'
import Pokedex from './components/pokedex'

class App extends Component {
  constructor() {
    super()

    this.state = {
      pokemonArray: []
    } 
  }
  render(){
  return (
    <div className="App">
      <Header />
      <Finder />
      <Pokedex />
    </div>
  );
}
}

export default App;
