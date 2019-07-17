import React from 'react'

const Pokemon = (props) => {
    console.log(props)
    return (
        <div>
            {props.pokemonData.name}
            <img src={props.pokemonData.img} alt=""/>
        </div>
    )
}

export default Pokemon