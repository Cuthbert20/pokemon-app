import React, {Component} from 'react'

export default class Grass extends Component {
    constructor(){
        super()

        this.state = {
            pokemonName: '',
            pokemonImg: ""
        }
    }
    catchPokemon() {
        const body = {
            name: this.props.pokeData.name,
            img: this.props.pokeData.sprites.front_shiny}
            this.props.catchFn(body)
            this.setState({caught: true})
    }
    render() {
        
        return(
            <div className = "grass">
            {this.state.caught ? null : <h4>{this.props.pokeData.name}</h4>}
            {this.state.caught ? null : (
              <img
                onClick={() => this.catchPokemon()}
                src={this.props.pokeData.sprites.front_shiny}
                alt={this.props.pokeData.name}
              />
            )}
          </div>
        )
    }
}