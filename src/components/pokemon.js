import React from 'react'
                //instead of props I could use {pokemonData} instead of props then I could get rid of the .props on everything.
const Pokemon = (props) => {
    console.log(props)
    return (
        <div className = "pokemon">
            {props.pokemonData.name}
            <img src={props.pokemonData.img} onClick={() => props.releasePokemon(props.pokemonData.id)}alt=""/>
        </div>
    )
}

export default Pokemon