import React, {Component} from 'react'
import Pokemon from './pokemon.js'



export default class Pokedex extends Component {
    
    render() {
        console.log("Pokedex", this.props)
        return (
            <div>
                <h2>Pokedex</h2>
                <div className="pokemon-list">
                {this.props.pokemonArray.map(pokemon => (
                    <Pokemon key={pokemon.name}
                        pokemonData={pokemon}
                        releasePokemon={this.props.releasePokemon}/>
                ))}
                </div>
            </div>
        )
    }
}