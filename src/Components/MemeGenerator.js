import React, { Component } from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    // componentDidMount() {
    //     this.setState({ isLoading: true })
    //     fetch("https://swapi.dev/api/people/1/")
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({
    //                 character: data,
    //                 isLoading: false
    //             })
    //         })
    // }

    render() {
        // const text = this.state.isLoading ? "Loading..." : this.state.character.name
        return (
            <div>
                <p>MEME GENERATOR</p>
            </div>
        )
    }
}

export default MemeGenerator