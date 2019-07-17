import React, {Component} from 'react'
import Pokemon from './pokemon.js'


export default class Pokedex extends Component {
    render() {
        return (
            <div>
                <h2>Pokedex</h2>
                <div className="pokemon-list">
                {this.props.pokemonArray.map(pokemon => (
                    <Pokemon key={pokemon.name} pokemonData={pokemon}/>
                ))}
                </div>
            </div>
        )
    }
}