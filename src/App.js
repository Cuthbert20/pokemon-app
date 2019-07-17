import React, {Component} from 'react';
import './App.css';
import Header from "./components/heaader"
import Finder from './components/finder'
import Pokedex from './components/pokedex'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      pokemonArray: []
    } 
  }
  componentDidMount() {
    axios.get('/api/pokemon').then(res => {
        this.setState({
          pokemonArray: res.data
        })
    })
}
  render(){
  return (
    <div className="App">
      <Header />
      <Finder />
      <Pokedex pokemonArray ={this.state.pokemonArray} />
    </div>
  );
}
}

export default App;
