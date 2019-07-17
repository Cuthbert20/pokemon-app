import React, {Component} from 'react'
import Grass from './grass'
import axios from 'axios'

export default class Finder extends Component {
    constructor() {
        super()

        this.state = {
            grassArr: []
        }
    }
    componentDidMount(){
        axios.get('/api/grass').then(res => {
            this.setState({
                grassArr: res.data
            })
        })
    }
    render() {
        return(
            <div className="finder">
                {this.state.grassArr.map(pokemon => {
                  return  <Grass key={pokemon.name} pokeData={pokemon} />
                })}
            </div>
        )
    }
}