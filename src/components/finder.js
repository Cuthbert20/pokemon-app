import React, {Component} from 'react'
import Grass from './grass'

export default class Finder extends Component {
    constructor() {
        super()

        this.state = {
            grassArr: [false, false, false]
        }
    }
    render() {
        return(
            <div>
                <Grass />
                <Grass />
                <Grass />
            </div>
        )
    }
}