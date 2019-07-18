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
    this.catchPokemon = this.catchPokemon.bind(this)
    this.releasePokemon = this.releasePokemon.bind(this)
  }
  componentDidMount() {
    axios.get('/api/pokemon').then(res => {
        this.setState({
          pokemonArray: res.data
        })
    })
}
catchPokemon(body) {
  //console.log("HIT")
  axios.post("/api/pokemon", body).then(res => {
    this.setState({pokemonArray: res.data})
  })
}
releasePokemon(id) {
  console.log("HIT")
  axios.delete(`/api/pokemon/${id}`).then(res => {
    this.setState({
      pokemonArray: res.data
    })
  })
}
  render(){
  return (
    <div className="App">
      <Header />
      <Finder catchFn={this.catchPokemon}/>
      <Pokedex pokemonArray ={this.state.pokemonArray} releasePokemon={this.releasePokemon}/>
    </div>
  );
}
}

export default App;
